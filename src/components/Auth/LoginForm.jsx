import React from "react";
import Form from "../Form/Form.jsx";
import Input from "../Form/Input.jsx";
import Wrapper from "../Common/Wrapper.jsx";
const LoginForm = () => {
  const [formData, setFormData] = React.useState({
    email:"",
    password:""
  });

  return (
    <>
      <Wrapper className="h-screen bg-blue-500 flex justify-center items-center">
        <Form signup={false} formData={formData} setFormData={setFormData}/>
      </Wrapper>
    </>
  );
};

export default LoginForm;
