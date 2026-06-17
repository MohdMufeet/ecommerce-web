import React, { useEffect } from "react";
import AdminForm from "../../Form/AdminForm";
import { adminRegister } from "../../../services/Admin/adminServices";
import { useNavigate } from "react-router-dom";
import useAdmin from "../../../hooks/useAdmin";

const AdminSignupForm = () => {
  const [serverData, setServerData] = React.useState(null);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { loginAdminGlobal, isAdmin } = useAdmin();

  useEffect(() => {
    if (localStorage.getItem("token") || isAdmin) {
      navigate("/admin");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const admin = await adminRegister(formData);
    setServerData(admin);
    if(admin.success && admin.data.token){
      await loginAdminGlobal(admin.data);
      // localStorage.setItem("token", admin.data.token);
      setFormData({
        name: "",
        email: "",
        password: "",
      });
    }
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <>
    <Wrapper className="flex justify-center items-center my-8">
      <AdminForm
        isSignup={true}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        formData={formData}
        data={serverData}
      />
    </Wrapper>
    </>
  );
};

export default AdminSignupForm;
