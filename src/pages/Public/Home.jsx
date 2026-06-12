import React from "react";
import { Navbar } from "../../components";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen font-medium text-2xl flex justify-center items-center">
        <p className="text-center">Want to Login here</p>
      </div>
    </>
  );
};

export default Home;
