import React, { useEffect } from "react";
import Input from "./Input";
import Button from "../Common/Button.jsx";
import { signup as register, login } from "../../services/Auth/authService.js";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";

const Form = ({ signup = false, formData, setFormData }) => {
  const [Loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState(null);

  const {isAuthenticate,loginGlobal} = useAuth();
  console.log("auth",isAuthenticate);
  
  const navigate = useNavigate();
  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({
      ...p,
      [name]: value,
    }));
  };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setData((p) => ({
  //       ...p,
  //       message: null,
  //     }));
  //   }, 2000);

  //   return () => clearTimeout(timer);
  // }, []);

  useEffect(()=>{
    if(isAuthenticate){
      navigate("/dashbaord");

    }else{
      navigate("/login")
    }
  },[isAuthenticate])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.email == "" && formData.password == "") {
      alert("Please fill Email or Password");
    } else {
      setLoading(true);
      // console.log("submit", formData);
      if (signup) {
        if (formData.name == "") {
          alert("Please fill Name");
          setLoading(false);
          return;
        }

        const serverData = await register(formData);
        setData(serverData);
        if (serverData.success && serverData.data.token) {
          localStorage.setItem("token", serverData.data.token);
          loginGlobal(serverData.data);
        }
      } else {
        const serverData = await login(formData);
        console.log(serverData)
        setData(serverData);
       if (serverData.success && serverData.data.token) {
          localStorage.setItem("token", serverData.data.token);
          loginGlobal(serverData.data);
        }
      }
    }
    setLoading(false);
    setFormData((p) => ({
      name: "",
      email: "",
      password: "",
    }));
  };
  return (
    <>
      <div className="max-w-sm h-content rounded-2xl mx-auto bg-[#fff] px-8 py-8 text-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">
          {signup ? "Signup" : "Login"}
        </h1>
        {data?.message && (
          <p
            className={`${data.success ? "bg-green-200" : "bg-red-200"} px-4 py-2 text-center text-md mb-4 rounded shadow-sm`}
          >
            {data.message}
          </p>
        )}
        <form className="" onSubmit={handleSubmit}>
          {signup && (
            <div className="flex flex-col mb-6">
              <Input
                labelClassName="font-medium"
                labelName="Name:"
                name="name"
                className="border rounded px-4 py-2 bg-white outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                placeholder="Name"
                value={formData.name}
                onValue={(e) => handleInputValue(e)}
              />
            </div>
          )}
          <div className="flex flex-col mb-6">
            <Input
              labelName="Email:"
              type="email"
              name="email"
              placeholder="Email"
              className="border rounded px-4 py-2 bg-white outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
              value={formData.email}
              onValue={(e) => handleInputValue(e)}
            />
          </div>
          <div className="flex flex-col my-6">
            <Input
              labelName="Password:"
              type="password"
              name="password"
              placeholder="Password"
              className="border rounded px-4 py-2 bg-white outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
              value={formData.password}
              onValue={(e) => handleInputValue(e)}
            />
          </div>

          {!signup && (
            <div className="text-center mb-4">
              <Link
                to="/forgot-password"
                className="text-center text-blue-600 cursor-pointer hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
          )}
          <div className="text-center">
            <Button
              isLoading={Loading}
              name={signup ? "Signup" : "Login"}
              className="w-full p-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
              type="submit"
            />
          </div>
          <div className="text-center mt-4">
            <Link
              to={signup ? "/login" : "/signup"}
              className="text-center mt-4 cursor-pointer hover:underline"
            >
              {signup ? "Already have Account" : "Create new account"}
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
