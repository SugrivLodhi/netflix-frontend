import React from "react";
import AuthPage from "./AuthPage";
import { useSelector } from "react-redux";
import MainContainer from "./MainContainer";

const HomePage = () => {
  const {user} = useSelector((data) => data.userData);

  if (!user?.userName) {
    return <AuthPage />;
  }
  return (
    <div className="relative">
      <MainContainer />
    </div>
  );
};

export default HomePage;
