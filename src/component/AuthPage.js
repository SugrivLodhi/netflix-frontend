import React from "react";
import Input from "./common/Input";

const AuthPage = () => {
   const onSubmit = (e)=>{
    e.preventDefault()
  }
  return (
    <div className="flex items-center justify-center rounded  m-auto max-w-[450px] bg-black opacity-75">
      <div className="max-w-md w-full  p-8 rounded shadow-lg m-4 flex flex-col">
        <h2 className="text-3xl mb-5  font-semibold text-white">Sign Up</h2>
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <Input placeholder="Enter Full Name" />
          <Input type="email" placeholder="Enter Email" />
          <Input type="tel" placeholder="Enter Phone Number" />
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
