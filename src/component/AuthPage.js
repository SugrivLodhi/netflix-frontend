import React, { useState } from "react";
import Input from "./common/Input";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../constant";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userslice";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
const AuthPage = () => {
  const dipatch = useDispatch()
 const navigate = useNavigate()
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
      navigate('/browse')
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
    <div>
     <Header/>
      <div className='absolute'>
           <img className='w-[100vw] h-[100vh] bg-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="banner" />
          </div>
        <form onSubmit={onSubmit} className='flex gap-3 flex-col w-3/12 p-12 my-36 left-0 right-0  mx-auto items-center justify-center absolute rounded-md bg-black opacity-80'>
        <h1 className='text-3xl text-white mb-5 font-bold'>{isUserCreated ? "Login" : "Signup"}</h1>
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
            className="bg-red-700 text-white py-2 px-4 text-lg rounded transition duration-300"
          >
            {!isUserCreated ? "Sign Up" : "SignIn"}
          </button>
        </form>
      </div>
  );
};

export default AuthPage;
