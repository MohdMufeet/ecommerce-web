import api from "../../api/axios.js";

export const login = async ({ email, password }) => {
  try {
    const response = await api.post("/auth/login", { email, password });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const signup = async ({ name, email, password }) => {
  try {
    const response = await api.post("/auth/register", {
      name,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
