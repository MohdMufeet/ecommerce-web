import React from "react";
import Form from "../Form/Form.jsx";
import Wrapper from "../Common/Wrapper.jsx";

const SignupForm = () => {
  const [formData, setFormData] = React.useState({
    name:"",
    email:"",
    password:""
  });

  return (
    <>
      <Wrapper className="h-screen bg-blue-600 flex justify-center items-center">
        <Form signup={true} formData={formData} setFormData={setFormData}/>
      </Wrapper>
    </>
  );
};

export default SignupForm;
