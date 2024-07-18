import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import AuthForm from "../../components/auth/AuthForm";

const Register = () => {
  const navigate = useNavigate();
  const [newEmail, setNewEmail] = useState("");

  //function to register user
  const handleRegister = (e) => {
    e.preventDefault();
    if (localStorage.getItem(newEmail)) {
      toast.error("User already registered");
    } else {
      localStorage.setItem(newEmail, JSON.stringify({}));
      toast.success("Successfully registered");
      navigate("/");
    }
  };

  return (
    <>
      <AuthForm
        email={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
        authType={"Register"}
        handleSubmit={handleRegister}
      />
    </>
  );
};

export default Register;
