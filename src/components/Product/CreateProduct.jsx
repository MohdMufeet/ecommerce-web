import React, { useEffect, useState } from "react";
import Input from "../Form/Input";
import Button from "../Common/Button";
import useProduct from "../../hooks/useProduct";
import { createProduct } from "../../services/Product/productService";
import ProductForm from "../Form/ProductForm";

const CreateProduct = () => {
  const [data, setData] = useState(null);
  const [formData, setFormData] = React.useState({
    title: "",
    description: "",
    image: "",
    stock: "",
    price: "",
    category: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = await createProduct(formData);
    setData(product);
    setFormData({
      title: "",
      description: "",
      image: "",
      stock: "",
      price: "",
     category: "",
    });
  };
  return (
    <>
      <ProductForm
        handleSubmit={handleSubmit}
        handleInput={handleInput}
        formData={formData}
        data={data}
      />
    </>
  );
};

export default CreateProduct;
