import Form from "../Form/Form.jsx";
import Wrapper from "../Common/Wrapper.jsx";

const SignupForm = () => {
  return (
    <>
      <Wrapper className="h-screen bg-blue-600 flex justify-center items-center">
        <Form signup="true" />
      </Wrapper>
    </>
  );
};

export default SignupForm;
