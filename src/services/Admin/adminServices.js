import api from "../../api/axios"

export const adminLogin = async(formData) => {
    try {
        const response = await api.post("/admin/login",formData);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

export const adminLogout = async() => {
    try {
        const response = await api.get("/admin/logout");
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

export const adminRegister = async(formData) => {
    try {
        const response = await api.post("/admin/register",formData);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}