import React from "react";
import Button from "../Common/Button";
import { Link } from "react-router-dom";

const ProductCard = ({
  data,
  isAdmin = false,
  handleAddToCart,
  handleDelete,
  handleUpdate,
}) => {
  return (
    <>
      <div key={data._id} className="w-full max-w-sm shadow-lg m-8 rounded-xl overflow-hidden h-full">
        <img
          src={data.image}
          alt={ProductCard.title}
          className="w-full h-48 object-cover"
        />
        <div className="w-full  h-content p-4 shadow-lg">
          <p className="font-semibold text-2xl my-2 text-black">{data.title}</p>
          <p className="font-normal text-base my-2 line-clamp-3 text-gray-600">
            {data.description}
          </p>
          <p className="font-normal text-xl my-2 text-blue-600">
            &#8377; {data.price}
          </p>
          <p className="font-normal text-xl my-2 text-black">
            <span className="text-xl font-bold pr-2">Category:</span>
            {data.category}
          </p>
          <p className="font-bold text-2xl my-2 text-green-600">
            In Stock({data.stock})
          </p>

          {!isAdmin && (
            <Button
              name="Add To Cart"
              className="py-2 px-4 font-semibold w-full bg-orange-500 text-white rounded hover:bg-orange-600 hover:scale-95"
              onClick={handleAddToCart}
            />
          )}

          {isAdmin && (<div className="flex justify-center items-center gap-4">
      <Link to={`/admin/update-product/${data._id}`}  className="py-2 px-4 font-semibold w-full bg-blue-500 text-white text-center rounded hover:bg-blue-600 hover:scale-95">Update</Link>
      <Button name="Delete" className="py-2 px-4 font-semibold w-full bg-red-500 text-white rounded hover:bg-red-600 hover:scale-95" onClick={handleDelete}/>
    </div>)

}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
