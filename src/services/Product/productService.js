import api from "../../api/axios";

export const createProduct = async (productData) => {
  try {
    const response = await api.post("product/add", productData);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getProduct = async (id) => {
  try {
    const response = await api.get(`product/get/${id}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
export const getAllProducts = async () => {
  try {
    const response = await api.get("product/getAll");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
export const updateProduct = async ({ formData, id }) => {
  try {
    const response = await api.put(`product/update/${id}`, formData);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await api.delete(`product/delete/${id}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
