import React, { useState } from "react";
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
  });
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    fetchProduct(id);
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    const product = await updateProduct({ formData, id });
    setData(product);
    setFormData({
      title: "",
      description: "",
      image: "",
      stoke: "",
      price: "",
    });
  };

  const allowedKeys = ["title", "description", "image", "stoke", "price"];
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
