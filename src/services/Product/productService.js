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
export const updateProduct = async ({ productData, id }) => {
  try {
    const response = await api.post(`product/update/${id}`, productData);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const deleteProduct = async ({ productData, id }) => {
  try {
    const response = await api.post(`product/delete/${id}`, productData);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
