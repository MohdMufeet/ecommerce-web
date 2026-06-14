import { createBrowserRouter } from "react-router-dom";
import Login from "../../pages/Auth/Login.jsx";
import Signup from "../../pages/Auth/Signup.jsx";
import Home from "../../pages/Public/Home.jsx";
import MainLayout from "../Layouts/MainLayout.jsx";
import UserLayout from "../Layouts/UserLayout.jsx";
import UserDashboard from "../../pages/User/UserDashboard.jsx";
import Cart from "../../pages/User/Cart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Signup />,
  },

  {
    path: "/user",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <UserDashboard />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

export default router;
