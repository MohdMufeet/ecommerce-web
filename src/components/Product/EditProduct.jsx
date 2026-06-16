import React, { useEffect, useState } from "react";
import Input from "../Form/Input";
import Button from "../Common/Button";
import useProduct from "../../hooks/useProduct";
import { createProduct } from "../../services/Product/productService";
import { useParams, useNavigate } from "react-router-dom";
import ProductForm from "../Form/ProductForm";
import {
  getProduct,
  updateProduct,
} from "../../services/Product/productService";

const EditProduct = () => {
  const [data, setData] = useState(null);
  const [formData, setFormData] = React.useState({
    title: "",
    description: "",
    image: "",
    stock: "",
    price: "",
    category: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    loadProduct();
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    // if (
    //   formData.title.length === 27 &&
    //   formData.description.trim().length === 120
    // ) {
    //   alert(
    //     "Title must be containded 27 letters and description must be 120 letters",
    //   );
    //   return;
    // }
    const product = await updateProduct({ formData, id });
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

  const loadProduct = async () => {
    const fetchedProduct = await getProduct(id);
    const product = fetchedProduct.data;
    console.log(product);
    if (product) {
      setFormData({
        title: product.title || "",
        description: product.description || "",
        image: product.image || "",
        stock: product.stock || "",
        price: product.price || "",
        category: product.category || "",
      });
      setData(fetchedProduct);
    }
  };
 
  return (
    <>
      <ProductForm
        isUpdate={true}
        handleSubmit={handleUpdate}
        handleInput={handleInput}
        formData={formData}
        data={data}
      />
    </>
  );
};

export default EditProduct;
