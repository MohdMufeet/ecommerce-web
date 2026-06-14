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

  // return (
  //   <>
  //     <div className="flex flex-col justify-center items-center h-screen bg-[#f2f2f2]">
  //       <div className="flex flex-col justify-center items-center text-black w-content h-content bg-[#f2f2f2] py-6  m-4 shadow-lg rounded-2xl">
  //         <p className="p-6 text-red-600 text-3xl font-bold">
  //           You Are Not Authicated for Access
  //         </p>
  //         {!isAuthenticate ? (
  //           <Link
  //             to="/login"
  //             className="bg-blue-600 hover:bg-blue-700 hover:scale-105 text-white border border-solid border-black text-xl font-medium py-4 px-6 rounded-full"
  //           >
  //             Back to login
  //           </Link>
  //         ) : (
  //           <Link
  //             to="/user"
  //             className="bg-blue-600 hover:bg-blue-700 hover:scale-105 text-white border border-solid border-black text-xl font-medium py-4 px-6 rounded-full"
  //           >
  //             Back to Dashboard
  //           </Link>
  //         )}
  //       </div>
  //     </div>
  //   </>
  // );

  return children;
};

export default ProtectRoutes;
