import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "../Auth/LogoutButton";
import useAdmin from "../../hooks/useAdmin";

const Sidbar = () => {
  const { logoutAdminGlobal } = useAdmin();

  const handleLogout = async() => {
    await logoutAdminGlobal();
  };

  return (
    <aside className="w-full md:w-xs bg-slate-50 h-screen fixed top-0 left-0">
      <div className="items-center flex flex-col bg-blue-500 text-white shadow">
        <p className="text-xl font-medium text-center my-8">Admin Dashbord</p>
      </div>
      <div className=" flex flex-col items-center justify-center shadow">
        <Link
          to="/admin/All-products"
          className="text-xl font-medium text-gray-600 text-center my-8 hover:text-blue-600"
        >
          All Products
        </Link>
      </div>
      <div className=" flex flex-col items-center justify-center shadow">
        <Link
          to="/admin/create-product"
          className="text-xl font-medium text-gray-600 text-center my-8 hover:text-blue-600"
        >
          Create Product
        </Link>
      </div>
      <div className=" flex flex-col items-center justify-center shadow">
        <Link
          to="/admin/all-orders"
          className="text-xl font-medium text-gray-600 text-center my-8 hover:text-blue-600"
        >
          All Orders
        </Link>
      </div>
      <div className=" flex flex-col items-center justify-center shadow">
        <Link
          to="/admin/profile"
          className="text-xl font-medium text-gray-600 text-center my-8 hover:text-blue-600"
        >
          Profile
        </Link>
      </div>
        <LogoutButton
          handleLogout={handleLogout}
          className="w-full px-4  py-3 rounded text-white font-bold bg-red-600 hover:bg-red-700 shadow hover:scale-95"
        />
    </aside>
  );
};

export default Sidbar;
