import { createBrowserRouter } from "react-router-dom";
import Login from "../../pages/Auth/Login.jsx";
import Signup from "../../pages/Auth/Signup.jsx";
import Home from "../../pages/Public/Home.jsx";

const router = createBrowserRouter([
    {
        path:"/",
        element:(<Home />),
    },
    {
        path:"/login",
        element:(<Login />),
    },
    {
        path:"/signup",
        element:(<Signup />),
    },
    {
        path:"/dashboard",
        element:(<p>hii</p>),
    },
])

export default router;