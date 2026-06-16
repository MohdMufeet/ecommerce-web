import React from "react";
import AuthProvider from "./AuthProvider";
import ProductProvider from "./ProductProvider";
import AdminProvider from "./AdminProvider";

const AppProvider = ({ children }) => {
  return (
    <AdminProvider>
      <AuthProvider>
        <ProductProvider>{children}</ProductProvider>
      </AuthProvider>
    </AdminProvider>
  );
};

export default AppProvider;
