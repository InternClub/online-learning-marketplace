import React, { useState } from "react";
import RegisterImg from "/Images/Rectangle 77.png";
import Button from "./Button";

const Register = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`flex items-center justify-around p-10 ${
        darkMode ? "bg-[#1f2833] text-white" : "bg-white text-black"
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
          <img src={RegisterImg} />
        </div>
        <div className="flex absolute top-[65%] left-[35%]">
          <p>
            <b className="text-xl text-[#c5c6c7]">Lorem ipsum dolor sit.</b>
            <br />
            <i className="text-yellow-400">adipisicing elit. Ea, temporibus.</i>
          </p>
        </div>
      </div>

      {/* Right Form Side */}
      <div className={`flex flex-col m-0.5 p-2 rounded-2xl h-[580px]`}>
        <h3 className="text-2xl font-bold text-center">Welcome to InterClub</h3>

        <div className="flex items-center w-full justify-center">
          <div className="flex justify-center items-center gap-4 my-5 bg-[#66fcf1] rounded-2xl w-1.5/2  ">
            <Button />
          </div>
        </div>

        {/* Form */}
        <p>
          <span className="block text-center text-lg font-semibold mb-2 text-[#45a29e]">
            Intern Club is the best platform to upskill
          </span>
        </p>
        <div className="mt-4 space-y-2">
          <div>
            <label>Full Name:</label>
            <input
              type="text"
            //   {...register("text", { required: true })}
              placeholder="Enter your full name..."
              className="w-full p-2 rounded border placeholder:text-[#45a29e] "
            />
          </div>
          <div>
            <label>Contact Number:</label>
            <input
              type="number"
              placeholder="Enter your contact no. ..."
              className="w-full p-2 rounded border placeholder:text-[#45a29e] "
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
            //   {...register("email", { required: true })}
              placeholder="Enter your email..."
              className="w-full p-2 rounded border placeholder:text-[#45a29e] "
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type={showPassword? "text":"password"}
              required={true}
              className="w-full p-2 rounded border placeholder:text-[#45a29e] relative"
            />
            <span
              className="absolute right-[13%] top-[75.5%] transform-translate-y-1/2 cursor-pointer text-gray-600 text-lg"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>
          <div>
            <label>Confirm Password:</label>
            <input
              type={showConfirmPassword?"text":"password"}
            //   {...register("password", { required: true })}
              placeholder="Confirm your password..."
              className="w-full p-2 rounded border placeholder:text-[#45a29e] "
            />
            <span
              className="absolute right-[13%] top-[86%] transform-translate-y-1/2 cursor-pointer text-gray-600 text-lg"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? "🙈" : "👁️"}
            </span>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-center">
          <button
            className={`px-6 py-2 rounded-xl ${
              darkMode ? "bg-yellow-400 text-black" : "bg-blue-500 text-white"
            }`}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
