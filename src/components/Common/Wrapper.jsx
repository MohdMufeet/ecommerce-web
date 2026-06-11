import React from "react";

const Wrapper = ({ children, className = "m-6" }) => {
  return <div className={className}>{children}</div>;
};

export default Wrapper;
