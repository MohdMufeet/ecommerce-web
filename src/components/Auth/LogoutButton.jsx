import React from "react";
import Button from "../Common/Button";

const LogoutButton = ({handleLogout , className}) => {
  
  return (
    <>
      <Button name="Logout" onClick={handleLogout} className={className}/>
    </>
  );
};

export default LogoutButton;
