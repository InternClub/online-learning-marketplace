import React, { useState } from "react";
import LoginImg from "/Images/Rectangle 78.png";
import Button from "./Button";
import { Navigate, useNavigate } from "react-router-dom";


const Login = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
 const navigate  = useNavigate();

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  const handleResetClick =()=>{
    navigate('/resetpassword')
  }
  

  return (
    <div
      className={`flex items-center justify-around p-10 ${
        darkMode ? "bg-[#1f1f1f] text-white" : "bg-white text-black"
      }`}
    >
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300"
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      {/* Left Image Side */}
      <div className="flex h-[550px] w-[500px] left-20 relative ">
        <div className="flex">
          <img src={LoginImg} />
        </div>
        <div className="flex absolute top-[8%] left-[11%]">
          <p>
            <b className="text-xl text-[#c5c6c7]">Lorem ipsum dolor sit.</b>
            <br />
            <i className="text-yellow-400">adipisicing elit. Ea, temporibus.</i>
          </p>
        </div>
      </div>

      {/* Right Form Side */}
      <div className={`flex flex-col m-0.5 p-2 rounded-2xl h-[580px] w-[382px]`}>
        <h3 className="text-2xl font-bold text-center">Welcome to InterClub</h3>

        <div className="flex items-center w-full justify-center">
          <div className="flex justify-center gap-4 my-5 bg-[#66fcf1] rounded-4xl w-1.5/2  ">
            <Button />
          </div>
        </div>

        {/* Form */}
        <p>
          <span className="block text-center text-lg font-semibold mb-2 text-[#45a29e]">
            Intern Club is the best platform to purchase course
          </span>
        </p>
        <div className="mt-4 space-y-2">
          <div>
            <label>Email:</label>
            <input
              type="email"
              placeholder="Enter your email..."
              className="w-full p-2 rounded border placeholder:text-[#45a29e] "
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              maxLength={16}
              placeholder="Enter your password..."
              className="w-full p-2 rounded border placeholder:text-[#45a29e] "
            />
            <span
              className="absolute right-[13%] top-[58%] transform-translate-y-1/2 cursor-pointer text-gray-600 text-lg"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-center gap-3">
          <button
            className={`px-6 py-2 rounded-xl ${
              darkMode ? "bg-yellow-400 text-black" : "bg-blue-500 text-white"
            }`}
          >
            Login
          </button>
           <button
            className={`px-6 py-2 rounded-xl ${
              darkMode ? "bg-yellow-400 text-black" : "bg-blue-500 text-white"
            }`}
            onClick={handleResetClick}
          >
            Reset Pasword
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
