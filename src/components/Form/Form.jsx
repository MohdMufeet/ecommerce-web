import React from "react";
import Input from "./Input";
import Button from "../Common/Button.jsx";
// import { Link } from "react-router-dom";

const Form = ({ signup = false }) => {
  return (
    <>
      <div className="max-w-sm h-content rounded-2xl mx-auto bg-[#fff] px-8 py-8 text-xl">
        <h1 className="text-3xl font-bold text-center mb-6">
          {signup ? "Signup" : "Login"}
        </h1>
        <form className="">
          {signup && (
            <div className="flex flex-col mb-6">
              <Input
                labelClassName="font-medium"
                labelName="Name:"
                className="border rounded px-4 py-2 bg-white"
                placeholder="Name"
              />
            </div>
          )}
          <div className="flex flex-col mb-6">
            <Input
              labelName="Email:"
              type="email"
              placeholder="Email"
              className="border rounded px-4 py-2 bg-white"
            />
          </div>
          <div className="flex flex-col my-6">
            <Input
              labelName="Password:"
              type="password"
              placeholder="Password"
              className="border rounded px-4 py-2 bg-white"
            />
          </div>
          {/* {!signup && (
            <Link
              to="/"
              className="mb-4 text-center text-blue-600 cursor-pointer hover:underline"
            >
              Forgot Password?
            </Link>
          )} */}
          {!signup && (
            <p
              className="mb-4 text-center text-blue-600 cursor-pointer hover:underline"
            >
              Forgot Password?
            </p>
          )}
          <div className="text-center">
            <Button name={signup ? "Signup" : "Login"} className="w-full p-2 bg-blue-600 hover:bg-blue-700 text-white rounded" type="submit"/>
          </div>
          <p className="text-center mt-4 cursor-pointer hover:underline">
            {signup ? "Already have Account" : ("Create new account")}
          </p>
        </form>
      </div>
    </>
  );
};

export default Form;
