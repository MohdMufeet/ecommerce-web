// import React from "react";
// import useAuth from "../../hooks/useAuth";
// import { Navigate } from "react-router-dom";
// import useAdmin from "../../hooks/useAdmin";

// const ProtectRoutes = ({ children, isUserRoute,isAdminRoute }) => {
//   const { isAuthenticate } = useAuth();
//   const {isAdmin} = useAdmin();
//   console.log(isAdmin);

//   if (!isUserRoute && isAuthenticate) {
//     return <Navigate to="/user" replace />;
//   }

//   if (isUserRoute && !isAuthenticate) {
//     return <Navigate to="/login" replace />;
//   }

//   if(isAdminRoute && !isAdmin){
//     return <Navigate to="/auth/admin/login" replace/>;
//   }
//   if(isAdminRoute && isAuthenticate){
//     return <Navigate to="/user" replace />;
//   }
//   if(isUserRoute && isAdmin){
//     return <Navigate to="/admin" replace />;
//   }

//   return children;
// };

// export default ProtectRoutes;

import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";

const ProtectRoutes = ({ children, isUserRoute, isAdminRoute, isGuestRoute }) => {
  const { isAuthenticate, isLoading: authLoading } = useAuth();
  const { isAdmin, isLoading: adminLoading } = useAdmin();


  if (isAdminRoute) {
    if (!isAdmin) {
      return <Navigate to="/auth/admin/login" replace />;
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