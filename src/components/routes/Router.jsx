import { createBrowserRouter } from "react-router-dom";
import Login from "../../pages/Auth/Login.jsx";
import Signup from "../../pages/Auth/Signup.jsx";
import Home from "../../pages/Public/Home.jsx";
import MainLayout from "../Layouts/MainLayout.jsx";
import UserLayout from "../Layouts/UserLayout.jsx";
import UserDashboard from "../../pages/User/UserDashboard.jsx";
import Cart from "../../pages/User/Cart.jsx";
import ProtectRoutes from "./ProtectRoutes.jsx";
import AdminLayout from "../Layouts/AdminLayout.jsx";
import AdminDashboard from "../Admin/AdminDashboard.jsx";
import EditProduct from "../Product/EditProduct.jsx";
import CreateProduct from "../Product/CreateProduct.jsx";
import AllProducts from "../Product/AllProducts.jsx";

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
    element: (
      <ProtectRoutes isUserRoute={false}>
        <Login />
      </ProtectRoutes>
    ),
  },
  {
    path: "/register",
    element: (
      <ProtectRoutes isUserRoute={false}>
        <Signup />
      </ProtectRoutes>
    ),
  },

  {
    path: "/user",
    element: (
      <ProtectRoutes isUserRoute={true}>
        <UserLayout />
      </ProtectRoutes>
    ),
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
  {
    path: "/admin",
    element: (
      <ProtectRoutes isAdminRoute={true}>
        <AdminLayout />
      </ProtectRoutes>
    ),
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
      {
        path: "create-product",
        element: <CreateProduct />,
      },
      {
        path: "update-product/:id",
        element: <EditProduct />,
      },
      {
        path: "all-products",
        element: <AllProducts />,
      },
    ],
  },
]);

export default router;
