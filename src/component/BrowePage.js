import React, { useEffect} from "react";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import MainContainer from "./MainContainer";
import Header from "./Header";
import SearchMovies from "./SearchMovies";

const BrowePage = () => {
  const { user, toogle } = useSelector((state) => state?.userData);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user?.userName) {
      navigate("/");
    }
  }, [user?.userName]);
  return (
    <div>
      <Header />
      <div>{toogle ? <SearchMovies /> : <MainContainer />}</div>
    </div>
  );
};

export default BrowePage;
