import axios from "axios";

// const api = axios.create({
//     baseURL: process.env.REACT_APP_API_URL,
//     withCredentials: true
// })

// TODO
const api = axios.create({
    baseURL: "http://localhost:8000/api",
    // withCredentials: true
})

export default api;