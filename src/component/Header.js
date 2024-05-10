import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BASE_URL } from "../constant";
import { toast } from "react-toastify";
import { setUser, setUserToogle } from "../redux/userslice";

const Header = () => {
  const {user,toogle} = useSelector((state) => state?.userData);
  const dispatch = useDispatch()
  const handleLogout = async () => {
    const result = await axios.get(`${BASE_URL}/logout`);
    toast.success(result.data.message);
    dispatch(setUser({}))
  };
  return (
    <div className="absolute z-10 flex w-full items-center justify-between px-6 bg-gradient-to-b from-black">
      <Link to="/">
        <img
          className="h-28"
          src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png"
          alt="netflix log"
        />
      </Link>
      {user?.userName && (
        <div className="flex items-center gap-4 mr-4">
          <h4 className="font-medium text-xl text-white">{user?.userName}</h4>
          <button
            className="py-2 px-3 bg-red-500 text-white rounded-md"
            onClick={handleLogout}
          >
            Logout
          </button>
          <Link to="/browse">
            <button onClick={()=> dispatch(setUserToogle(!toogle))} className="py-2 px-3 bg-red-500 text-white rounded-md">
              {toogle? "Home":"Search"}
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
