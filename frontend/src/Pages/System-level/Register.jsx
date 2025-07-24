import React, { useState } from "react";
import RegisterImg from "/Images/Rectangle 77.png";
import Button from "./Button";

const Register = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div
      className={`flex flex-col lg:flex-row items-center justify-around gap-6 p-6 lg:p-10 ${
        darkMode ? "bg-[#1f2833] text-white" : "bg-white text-black"
      }`}
    >
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="darkmode absolute top-4 right-4 px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300"
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      {/* Left Image Side */}
      <div className="w-full max-w-md lg:w-[500px] relative mb-6 lg:mb-0">
        <img
          src={RegisterImg}
          alt="register"
          className="block md:hidden rounded-full  w-[300px] sm:w-[350px] md:w-[500px] object-contain mx-auto"
        />
        <img
          src={RegisterImg}
          alt="register"
          className="hidden md:block rounded-full w-[500px] object-contain"
                />
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center px-2">
          <p>
            <b className="text-base sm:text-lg md:text-xl text-[#c5c6c7]">
              Lorem ipsum dolor sit.
            </b>
            <br />
            <i className="text-yellow-400">adipisicing elit. Ea, temporibus.</i>
          </p>
        </div>
      </div>

      {/* Right Form Side */}
      <div
        className={`flex flex-col m-0.5 p-2 rounded-2xl h-auto w-full max-w-md`}
      >
        <h3 className="text-2xl font-bold text-center">Welcome to InterClub</h3>

        <div className="flex items-center w-full justify-center">
          <div className="flex justify-center items-center gap-4 my-5 bg-[#66fcf1] rounded-2xl w-[80%] sm:w-[60%]">
            <Button />
          </div>
        </div>

        {/* Form */}
        <p>
          <span className="block text-center text-lg font-semibold mb-2 text-[#45a29e]">
            Intern Club is the best platform to upskill
          </span>
        </p>

        <div className="mt-4 space-y-4">
          <div>
            <label>Full Name:</label>
            <input
              type="text"
              placeholder="Enter your full name..."
              className="w-full p-2 rounded border placeholder:text-[#45a29e]"
            />
          </div>
          <div>
            <label>Contact Number:</label>
            <input
              type="number"
              placeholder="Enter your contact no. ..."
              className="w-full p-2 rounded border placeholder:text-[#45a29e]"
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              placeholder="Enter your email..."
              className="w-full p-2 rounded border placeholder:text-[#45a29e]"
            />
          </div>

          <div className="relative">
            <label>Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              required
              placeholder="Enter your password"
              className="w-full p-2 rounded border placeholder:text-[#45a29e]"
            />
            <span
              className="absolute right-3 top-[55%] transform -translate-y-1/2 cursor-pointer text-gray-600 text-lg"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <div className="relative">
            <label>Confirm Password:</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm your password..."
              className="w-full p-2 rounded border placeholder:text-[#45a29e]"
            />
            <span
              className="absolute right-3 top-[55%] transform -translate-y-1/2 cursor-pointer text-gray-600 text-lg"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? "🙈" : "👁️"}
            </span>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center">
          <button
            className={`px-6 py-2 rounded-xl cursor-pointer ${
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
