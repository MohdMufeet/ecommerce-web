import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import useProduct from "../../hooks/useProduct";
import { getAllProducts, deleteProduct} from "../../services/Product/productService";

const AllProducts = () => {
    const {products,fetchAllProducts} = useProduct();
  useEffect(() => {
    if(products.length == 0){
        loadProducts();
    }
  }, []);

  const loadProducts = async() => {
    const data = await getAllProducts();
    console.log(data)
    await fetchAllProducts(data.data);
  }

  const handleDelete = async (id) => {
    const data = await deleteProduct(id);
    alert(`${data.data.title} Deleted Successfully`)
  }
  
  return (
    <div className="overflow-scroll-y my-8">
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 overflow-scroll-y my">
      {(products?.length > 0) ? products?.map((product,idx)=>(
        <li key={product._id}>
          <ProductCard isAdmin={true} data={product} handleDelete={() =>handleDelete(product._id)}/>
        </li>
      )
        ) : <p>No products</p>}
      </ul>
    </div>
  );
};

export default AllProducts;
