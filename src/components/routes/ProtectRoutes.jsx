import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";

const ProtectRoutes = ({ children, isUserRoute, isAdminRoute, isGuestRoute }) => {
  const { isAuthenticate, isLoading: authLoading } = useAuth();
  const { isAdmin, isLoading: adminLoading } = useAdmin();


  if (isAdminRoute) {
    if (!isAdmin) {
      return (<Navigate to="/auth/admin/login" replace />)
    }
  }


  if (isUserRoute) {
    if (!isAuthenticate) {
      return <Navigate to="/login" replace />;
    }
    if (isAdmin) {
      return <Navigate to="/admin" replace />;
    }
  }

  return children;
};

export default ProtectRoutes;