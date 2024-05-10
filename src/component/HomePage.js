import React, { useEffect } from "react";
import AuthPage from "./AuthPage";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const HomePage = () => {
  const {user} = useSelector((state) => state?.userData);
  console.log("user",user)
  const navigate = useNavigate()
  useEffect(() => {
    if (user?.userName) {
        navigate("/browse");
    }
}, []);
  return (
      <AuthPage />
  );
};

export default HomePage;
