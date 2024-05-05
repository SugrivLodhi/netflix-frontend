import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BASE_URL } from "../constant";
import { toast } from "react-toastify";
import { setUserToogle } from "../redux/userslice";

const Header = () => {
  const {user,toogle} = useSelector((state) => state?.userData);
  const dispatch = useDispatch()
  const handleLogout = async () => {
    const result = await axios.get(`${BASE_URL}/logout`);
    toast.success(result.data.message);
  };
  return (
    <div className="flex justify-between items-center bg-gradient-to-r w-full absolute top-0 left-0 z-20 from-black-500 to-white-500">
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
          {toogle ? (<Link to="/">
            <button  onClick={()=> dispatch(setUserToogle(false))} className="py-2 px-3 bg-red-500 text-white rounded-md">
              Home
            </button>
          </Link>):<Link to="/browse">
            <button onClick={()=> dispatch(setUserToogle(true))} className="py-2 px-3 bg-red-500 text-white rounded-md">
              Search
            </button>
          </Link>}
          
        </div>
      )}
    </div>
  );
};

export default Header;
