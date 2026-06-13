import React from "react";

const Input = ({
  labelName,
  labelClassName,
  type = "text",
  name,
  className,
  placeholder,
  value,
  onValue,
  ...props
}) => {
  return (
    <>
      <label className={labelClassName}>{labelName}</label>
      <input type={type} name={name} value={value} onChange={onValue} className={className} placeholder={placeholder} {...props}/>
    </>
  );
};

export default Input;
