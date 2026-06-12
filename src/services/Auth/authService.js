// import api from "../../api/axios.js";
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000/api",
    // withCredentials: true
})


export const login = async ({email, password}) => {
    try {
        // console.log("Highlight",response)

        const response = await api.post("/auth/login", { email, password });
        console.log("Highlight",response)
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error("Network error");
    }
}

export const signup = async ({name, email, password}) => {
    try {
                // console.log("Highlight",response)

        const response = await api.post("/auth/register", { name, email, password });        console.log("Highlight",response)
        console.log("Highlight",response)

        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error("Network error");
    }
}