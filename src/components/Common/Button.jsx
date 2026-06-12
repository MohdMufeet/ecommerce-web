import React from "react";

const Button = ({ name, className, type, isLoading, ...props }) => {
  return (
    <>
      <button className={`${className} ${isLoading ? "opacity-50 cursor-not-allowed":""}`} type={type} disabled={isLoading} {...props}>
        {isLoading ? "Loading..." : name}
      </button>
    </>
  );
};

export default Button;
