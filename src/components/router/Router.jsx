import { createBrowserRouter } from "react-router-dom";
import Login from "../../pages/Auth/Login.jsx";
import Signup from "../../pages/Auth/Signup.jsx";

const router = createBrowserRouter([
    {
        path:"/login",
        element:(<Login />),
    },
    {
        path:"/signup",
        element:(<Signup />),
    },
])

export default router;