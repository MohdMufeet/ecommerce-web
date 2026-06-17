import { createBrowserRouter } from "react-router-dom";
import Login from "../../pages/Auth/Login.jsx";
import Signup from "../../pages/Auth/Signup.jsx";
import Home from "../../pages/Public/Home.jsx";
import MainLayout from "../Layouts/MainLayout.jsx";
import UserLayout from "../Layouts/UserLayout.jsx";
import UserDashboard from "../../pages/User/UserDashboard.jsx";
import Cart from "../../pages/User/Cart.jsx";
import ProtectRoutes from "./ProtectRoutes.jsx";
import EditProduct from "../Product/EditProduct.jsx";
import CreateProduct from "../Product/CreateProduct.jsx";
import AllProducts from "../Product/AllProducts.jsx";
import AdminLoginFom from "../Auth/Admin/AdminLoginFom.jsx";
import AdminProfile from "../Auth/Admin/AdminProfile.jsx";
import AuthLayout from "../Layouts/AuthLayout.jsx";
import AdminLayout from "../Layouts/AdminLayout.jsx";
import ForgotPassword from "../Auth/ForgotPassword.jsx";
import AllOrders from "../Auth/Admin/AllOrders.jsx";
import NotFound from "../../pages/Error/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
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
    // errorElement: <NotFound />,
  },
  {
    path: "/forgot-password",
    element: (
      <ProtectRoutes isUserRoute={false}>
        <ForgotPassword />
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
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "admin/login",
        element: <AdminLoginFom />,
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
        path: "profile",
        element: <AdminProfile />,
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
      {
        path: "all-orders",
        element: <AllOrders />,
      },
    ],
  },
]);

export default router;
