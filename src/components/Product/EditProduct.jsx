import React, { useEffect, useState } from "react";
import Input from "../Form/Input";
import Button from "../Common/Button";
import useProduct from "../../hooks/useProduct";
import { createProduct } from "../../services/Product/productService";
import { useParams, useNavigate } from "react-router-dom";
import ProductForm from "../Form/ProductForm";

const EditProduct = () => {
  const [data, setData] = useState(null);
  const [formData, setFormData] = React.useState({
    title: "",
    description: "",
    image: "",
    stoke: "",
    price: "",
    category: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    const loadProduct = async () =>{
      await fetchProduct(id);

    }
    loadProduct()
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    if(formData.title.length === 27 && formData.description.trim().length === 120){
      alert("Title must be containded 27 letters and description must be 120 letters");
      return;
    }
    const product = await updateProduct({ formData, id });
    setData(product);
    setFormData({
      title: "",
      description: "",
      image: "",
      stoke: "",
      price: "",
      category: ""
    });
  };

  const allowedKeys = ["title", "description", "image", "stoke", "price","category"];
  allowedKeys.map((key) => setData(formData[key]));
  return (
    <>
      <ProductForm
        handleSubmit={handleUpdate}
        handleInput={handleInput}
        formData={formData}
        data={data}
      />
    </>
  );
};

export default EditProduct;
