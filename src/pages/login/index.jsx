import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setActiveUserEmail } from "../../store/slices/auth";
import AuthForm from "../../components/auth/AuthForm";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  //function to login
  const handleLogin = (e) => {
    e.preventDefault();
    if (localStorage.getItem(email)) {
      sessionStorage.setItem("activeUser", email);
      dispatch(setActiveUserEmail(email));
      navigate("/dashboard");
      toast.success("Login successful");
    } else {
      toast.error("User not registered");
    }
  };

  return (
    <>
      <AuthForm
        email={email}
        onChange={(e) => setEmail(e.target.value)}
        authType={"Login"}
        handleSubmit={handleLogin}
      />
    </>
  );
};

export default Login;
