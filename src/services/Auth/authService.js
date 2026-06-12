import api from "../../api/axios.js";
import axios from "axios";


export const login = async ({email, password}) => {
    try {
        const response = await api.post("/auth/login", { email, password });
        
        return response.data;
    } catch (error) {
        return error.response.data;
            // throw error.response ? error.response.data : new Error("Network error");
        
    }
}

export const signup = async ({name, email, password}) => {
    try {
        const response = await api.post("/auth/register", { name, email, password });        console.log("Highlight",response)
        // console.log("Highlight",response)
        return response.data;
    } catch (error) {
        return error.response.data;
        // throw error.response ? error.response.data : new Error("Network error");
    }
}