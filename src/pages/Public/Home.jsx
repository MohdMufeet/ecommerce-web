import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../services/Product/productService";
import useProduct from "../../hooks/useProduct";
import ProductCard from "../../components/Product/ProductCard";

const Home = () => {
  const { fetchAllProducts, products } = useProduct();

  useEffect(() => {
    if(products.length == 0){
      loadingData();
    }
  }, []);

  const loadingData = async () => {
    const data = await getAllProducts();
    await fetchAllProducts(data.data);
  };
  return (
    <>
      <div className="h-[70%] font-medium text-2xl flex justify-center items-center">
        {products?.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {products?.map((product) => (
              <li
                key={product._id}
                className="flex flex-col justify-center items-center gap-6"
              >
                <ProductCard data={product} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center m-8">No Products Currently</p>
        )}
      </div>
    </>
  );
};

export default Home;
