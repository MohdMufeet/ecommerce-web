import React, { useState } from "react";
import { AdminContext } from "../context/AdminContext";

const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [admin, setAdmin] = useState(null);

  const loginAdminGlobal = (data) => {
    setIsAdmin(true);
    setAdmin(data);
  };
  const logoutAdminGlobal = () => {
    setIsAdmin(false);
    setAdmin(null);
  };

  return (
    <AdminContext.Provider
      value={{
        isAdmin,
        setIsAdmin,
        admin,
        setAdmin,
        loginAdminGlobal,
        logoutAdminGlobal,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export default AdminProvider;
