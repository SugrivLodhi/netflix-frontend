import React, { useState } from "react";
import Input from "./common/Input";
import axios from 'axios'
import { BASE_URL } from "../constant";
const AuthPage = () => {
 const [fullName,setFullName] = useState("")
 const [email,setEmail] = useState("")
 const [password,setPassword] = useState("")

  const handleSignup = async(body)=>{
      try{
        await axios.post(`${BASE_URL}/register`,body)
      }
      catch(err){
        console.log("first error",err)
      } 
  }
   const onSubmit = (e)=>{
    e.preventDefault()
    const body ={
       fullName,
       email,
       password
    }
   handleSignup(body)

  }
  return (
    <div className="flex items-center justify-center rounded  m-auto max-w-[450px] bg-black opacity-75">
      <div className="max-w-md w-full  p-8 rounded shadow-lg m-4 flex flex-col">
        <h2 className="text-3xl mb-5  font-semibold text-white">Sign Up</h2>
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <Input placeholder="Enter Full Name" onChange={(e)=>setFullName(e.target.value)} />
          <Input type="email" placeholder="Enter Email" onChange={(e)=> setEmail(e.target.value)} />
          <Input type="password" placeholder="Enter the password" onChange={(e)=>setPassword(e.target.value) } />
          <button
            type="submit"
            className="bg-red-700 text-white py-4 text-lg rounded transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
