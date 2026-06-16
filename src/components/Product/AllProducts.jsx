import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import useProduct from "../../hooks/useProduct";
import { getAllProducts } from "../../services/Product/productService";

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
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 overflow-scroll-y my-8">
      {(products?.length > 0) ? products.map((product)=>(<ProductCard isAdmin={true} data={product}/>)) : <p>No products</p>}
    </div>
  );
};

export default AllProducts;
