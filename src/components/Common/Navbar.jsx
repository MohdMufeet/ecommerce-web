import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { isAuthenticate } = useAuth();
  // const isAuthenticate = true;
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
      path: "/signup",
      name: "Sign Up",
      isPublic: true,
      isShowAll: false,
      id: 3,
    },
    {
      path: "/cart",
      name: "Cart",
      isPublic: false,
      isShowAll: false,
      id: 4,
    },
    {
      path: "/logout",
      name: "Logout",
      isPublic: false,
      isShowAll: false,
      id: 5,
    },
  ];
  return (
    <>
      <header className="w-full px-6 py-2 bg-slate-100 flex justify-between items-center">
        <p className="text-3xl font-bold">Welcome</p>
        <ul className="bg-slate-100 flex justify-between items-center gap-4 font-medium text-xl">
          {navItems.map(
            (item, idx) =>
              (!isAuthenticate
                ? item.isPublic || item.isShowAll
                : !item.isPublic || item.isShowAll) && (
                <li key={idx} className="hover:text-blue-500">
                  <Link to={item.path}>{item.name}</Link>
                </li>
              )
          )}
        </ul>
      </header>
    </>
  );
};

export default Navbar;
