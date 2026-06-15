import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Common/Sidebar";

const AdminLayout = () => {
  return (
    <div className="grid grid-cols-4">
      <div className="md:col-span-1">
        <Sidebar />
      </div>
      <div className="md:col-span-3 flex justify-center items-center overflow-scroll-y bg-white py-6">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
