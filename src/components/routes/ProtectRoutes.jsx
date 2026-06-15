import React from "react";
import useAuth from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";

const ProtectRoutes = ({ children, isUserRoute }) => {
  const { isAuthenticate } = useAuth();
  

  if (!isUserRoute && isAuthenticate) {
    return <Navigate to="/user" replace />;
  }

  if (isUserRoute && !isAuthenticate) {
    return <Navigate to="/login" replace />;
  }
  
  

  return children;
};

export default ProtectRoutes;
