import React, { useEffect } from "react";
import AdminForm from "../../Form/AdminForm";
import { adminLogin } from "../../../services/Admin/adminServices";
import useAdmin from "../../../hooks/useAdmin";
import Wrapper from "../../Common/Wrapper";
import { useNavigate } from "react-router-dom";

const AdminLoginFom = () => {
  const [loading, setLoaing] = React.useState(false);
  const [serverData, setServerData] = React.useState(null);
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { loginAdminGlobal, isAdmin, setAdmin } = useAdmin();


  useEffect(() => {
    if (isAdmin) {
      navigate("/admin/profile");
    }
  }, [isAdmin]);


  const handleSubmit = async (e) => {

    e.preventDefault();
    setLoading(true);
    const admin = await adminLogin(formData);

    setServerData(admin);

    if (admin.success && admin.data.token) {
      // localStorage.setItem("token", admin.data.token);
      await loginAdminGlobal(admin.data);

      setFormData({
        email: "",
        password: "",
      });
    }
    setLoaing(false);
  };


  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Wrapper className="flex justify-center items-center my-8">
        <AdminForm
          handleInput={handleInput}
          handleSubmit={handleSubmit}
          formData={formData}
          data={serverData}
        />
      </Wrapper>
    </>
  );
};

export default AdminLoginFom;
