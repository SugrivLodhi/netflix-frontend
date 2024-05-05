import React, { useState } from "react";
import Input from "./common/Input";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../constant";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userslice";
const AuthPage = () => {
  const dipatch = useDispatch()
 //const navigate = useNavigate()
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isUserCreated, setIsUserCreated] = useState(false);
  const handleSignup = async (body) => {
    try {
     const result =await axios.post(`${BASE_URL}/register`, body,{
      headers:{
        'Content-Type':'Application/json'
      },
      withCredentials:true
     });
      setIsUserCreated(true);
      toast.success(result.data.message)
    } catch (err) {
      console.log("first error", err);
    }
  };
  const handleSignIn = async (body) => {
    try {
     const result = await axios.post(`${BASE_URL}/login`, body,{
      headers:{
        'Content-Type':'Application/json'
      },
      withCredentials:true
     });
      toast.success(result.data.message)
      dipatch(setUser(result.data.data))
      //navigate('/browse')
    } catch (err) {
      console.log("err", err);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (!isUserCreated) {
      const body = {
        fullName,
        email,
        password,
      };
      handleSignup(body);
    } else {
      const body = {
        email,
        password,
      };
      handleSignIn(body);
    }
  };
  return (
    <div className="flex items-center justify-center rounded  m-auto max-w-[450px] bg-black opacity-75">
      <div className="max-w-md w-full  p-8 rounded shadow-lg m-4 flex flex-col">
        <h2 className="text-3xl mb-5  font-semibold text-white">{!isUserCreated? "Sign Up" :"SignIn"}</h2>
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          {!isUserCreated && (
            <Input
              placeholder="Enter Full Name"
              onChange={(e) => setFullName(e.target.value)}
            />
          )}
          <Input
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Enter the password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-red-700 text-white py-4 text-lg rounded transition duration-300"
          >
            {!isUserCreated ? "Sign Up" : "SignIn"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
