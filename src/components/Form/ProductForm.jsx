import React from "react";
import Input from "./Input";
import Button from "../Common/Button";

const ProductForm = ({ isUpdate,handleSubmit, handleInput, formData, data }) => {
  return (
    <>
      <form
        className="flex flex-col justify-center max-w-sm w-full mx-auto p-8 bg-slate-50 shadow-lg rounded-lg"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col justify-center items-left  w-full my-2">
          <Input
            labelName="Title:"
            labelClassName="text-left font-medium"
            name="title"
            type="text"
            placeholder="Enter Title"
            className="bg-white px-4 py-2 focus:ring-blue-500 outline-none ring-1 ring-gray-300 rounded focus:ring-2 my-1"
            value={formData.title}
            onChange={(e) => handleInput(e)}
          />
        </div>

        <div className="flex flex-col justify-center items-left  w-full my-2">
          <label className="text-left font-medium">Description:</label>
          <textarea
            name="description"
            type="text"
            placeholder="Enter Description"
            className="px-4 py-2 focus:ring-blue-500 outline-none ring-1 ring-gray-300 rounded focus:ring-2 mt-1"
            value={formData.description}
            onChange={(e) => handleInput(e)}
          ></textarea>
        </div>

        <div className="flex flex-col justify-center items-left w-full my-2">
          <Input
            labelName="Price:"
            labelClassName="text-left font-medium"
            name="price"
            type="number"
            placeholder="Enter Price"
            className="px-4 py-2 focus:ring-blue-500 outline-none ring-1 ring-gray-300 rounded focus:ring-2 my-1"
            value={formData.price}
            onChange={(e) => handleInput(e)}
          />
        </div>

        <div className="flex flex-col justify-center items-left  w-full my-2">
          <Input
            labelName="Stock:"
            labelClassName="text-left font-medium"
            name="stock"
            type="number"
            placeholder="Enter Title"
            className="bg-white px-4 py-2 focus:ring-blue-500 outline-none ring-1 ring-gray-300 rounded focus:ring-2 my-1"
            value={formData.stock}
            onChange={(e) => handleInput(e)}
          />
        </div>

        <div className="flex flex-col justify-center items-left  w-full my-2">
          <Input
            labelName="Image:"
            labelClassName="text-left font-medium"
            name="image"
            type="text"
            placeholder="Enter Image Url"
            className="bg-white px-4 py-2 focus:ring-blue-500 outline-none ring-1 ring-gray-300 rounded focus:ring-2 my-1"
            value={formData.image}
            onChange={(e) => handleInput(e)}
          />
        </div>

        <div className="flex flex-col justify-center items-left w-full my-2">
          <Input
            labelName="Category:"
            labelClassName="text-left font-medium"
            name="category"
            type="text"
            placeholder="Enter Category"
            className="bg-white px-4 py-2 focus:ring-blue-500 outline-none ring-1 ring-gray-300 rounded focus:ring-2 my-1"
            value={formData.category}
            onChange={(e) => handleInput(e)}
          />
        </div>
        {data && (
          <div className="flex flex-col justify-center items-left  w-full my-2">
            <p
              className={`${data?.success ? "bg-green-200" : "bg-red-200"} px-4 py-2 text-center text-md mb-4 rounded shadow-sm`}
            >
              {data?.message}
            </p>
          </div>
        )}
        <Button
          name={isUpdate ? "Update Product":"Create Product"}
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 hover:scale-95 hover:text-md"
        />
      </form>
    </>
  );
};

export default ProductForm;
