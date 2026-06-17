import React from "react";
import Input from "./Input";
import Button from "../Common/Button";

const AdminForm = ({ handleInput, handleSubmit,formData , data, loadingState}) => {
  return (
    
      <form className="max-w-sm w-full h-content p-8 gap-4 shadow-lg" onSubmit={handleSubmit}>
        {data?.message && <p className={`${!data.success? "bg-red-200":"bg-green-200"} text-medium text-black text-center`}>{data.message}</p>}
        <div className="flex flex-col my-4 gap-2">
          <Input
            className="px-4 py-2 ring-2 ring-blue-200 focus:ring-blue-500 outline-none"
            type="email"
            placeholder="Enter Email"
            labelName="Email:"
            name="email"
            onChange={(e) => handleInput(e)}
            value={formData.email}
          />
        </div>
        <div className="flex flex-col my-4 gap-2">
          <Input
            className="px-4 py-2 ring-2 ring-blue-200 focus:ring-blue-500 outline-none"
            type="password"
            placeholder="Enter Password"
            labelName="Password:"
            name="password"
            onChange={(e) => handleInput(e)}
            value={formData.password}
          />
        </div>
        <Button
          name={loadingState ? "Loading...":"Login"}
          isLoading={loadingState}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white font-medium"
        />
      </form>
    
  );
};

export default AdminForm;
