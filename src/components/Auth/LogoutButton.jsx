import React from "react";
import Button from "../Common/Button";
import useAuth from "../../hooks/useAuth";

const LogoutButton = () => {
  const { logoutGlobal } = useAuth();
  const handleLogout = () => {
    logoutGlobal();
  };
  return (
    <>
      <Button name="Logout" onClick={handleLogout} />
    </>
  );
};

export default LogoutButton;
