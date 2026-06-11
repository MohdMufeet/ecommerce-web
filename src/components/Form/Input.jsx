import React from "react";

const Input = ({
  labelName,
  labelClassName,
  type = "text",
  className,
  placeholder,
}) => {
  return (
    <>
      <label className={labelClassName}>{labelName}</label>
      <input type={type} className={className} placeholder={placeholder} />
    </>
  );
};

export default Input;
