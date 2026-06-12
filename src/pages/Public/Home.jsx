import React from "react";
import { Navbar } from "../../components";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="h-[70%] font-medium text-2xl flex justify-center items-center">
        <p className="text-center">Login and Explore Our Products</p>
      </div>
    </>
  );
};

export default Home;
