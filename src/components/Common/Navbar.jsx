import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    {
      path: "/",
      name: "Home",
      id: 1,
    },
    {
      path: "/login",
      name: "Login",
      id: 2,
    },
    {
      path: "/",
      name: "Sign Up",
      id: 3,
    },
  ];
  return (
    <>
      <header className="w-full px-6 py-2 bg-slate-100 flex justify-between items-center">
        <p className="text-3xl font-bold">Welcome</p>
        <ul className="bg-slate-100 flex justify-between items-center gap-4 font-medium text-xl">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <Link to={item.path} className="hover:text-red-500">{item.name}</Link>
            </li>
          ))}
        </ul>
      </header>
    </>
  );
};

export default Navbar;
