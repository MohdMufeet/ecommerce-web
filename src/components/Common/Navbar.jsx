import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import LogoutButton from "../Auth/LogoutButton";

const Navbar = () => {
  const location = useLocation();
  const { isAuthenticate } = useAuth();
  useEffect(() => {}, [isAuthenticate]);
  const navItems = [
    {
      path: "/",
      name: "Home",
      isPublic: true,
      isShowAll: true,
      id: 1,
    },
    {
      path: "/login",
      name: "Login",
      isPublic: true,
      isShowAll: false,
      id: 2,
    },
    {
      path: "/register",
      name: "Sign Up",
      isPublic: true,
      isShowAll: false,
      id: 3,
    },
    {
      path: "/user/cart",
      name: "Cart",
      isPublic: false,
      isShowAll: false,
      id: 4,
    },
    {
      path: "/user",
      name: "Profile",
      isPublic: false,
      isShowAll: false,
      id: 5,
    },
  ];
  return (
    <>
      <header className="w-full px-6 py-2 bg-slate-200 flex flex-col sm:flex-row justify-between items-center shadow-md">
        <p className="text-3xl font-bold">Welcome</p>
        <ul className="bg-slate-200 z-2 fixed bottom-2 rounded-full px-4 py-2 sm:rounded-none sm:p-0 sm:static flex justify-between items-center gap-4 font-medium text-xl">
          {navItems.map(
            (item, idx) =>
              (!isAuthenticate
                ? item.isPublic || item.isShowAll
                : !item.isPublic || item.isShowAll) && (
                <li
                  key={idx}
                  className={`hover:text-blue-500 ${location.pathname === item.path && "text-blue-500"}`}
                >
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ),
          )}
          {isAuthenticate && (
            <li className="hover:text-blue-500">
              <LogoutButton />
            </li>
          )}
        </ul>
      </header>
    </>
  );
};

export default Navbar;
