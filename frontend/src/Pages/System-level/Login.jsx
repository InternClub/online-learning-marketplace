import React, { useState } from "react";
import LoginImg from "/Images/Rectangle 78.png";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../Store/API/authSlice";
import ResetPasswordModal from "./ResetPassword";

const Login = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const toggleTheme = () => setDarkMode(!darkMode);
  // const handleResetClick = () => navigate("/resetpassword");
  // const handleHome = () => navigate('/profile');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      dispatch(login({ email: username, password }));
    }
    navigate("/profile");
    setUsername("");
    setPassword("");
  };

  return (
    <div
      className={`flex flex-wrap flex-col sm:flex-row items-center justify-around p-10  h-full  ${
        darkMode ? "bg-[#1f1f1f] text-white" : "bg-white text-black"
      }`}
    >
      {/* Theme Toggle Button */}
      {/* <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300"
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button> */}

      {/* Left Image Side */}
      <div className="h-auto sm:h-[550px] w-full sm:w-[30%] mb-8 sm:mb-0 relative flex justify-center items-center">
        <img
          src={LoginImg}
          alt="login"
          className="block md:hidden rounded-full w-[300px] sm:w-[350px] md:w-[500px] object-contain mx-auto"
        />
        <img
          src={LoginImg}
          alt="login"
          className="hidden md:block rounded-full w-[500px] object-contain"
        />
        <div className="hidden lg:flex flex-col items-center justify-center mt-4 text-center px-3 absolute">
          <p className="">
            <i className="text-yellow-400 text-xl text-shadow-black text-shadow-lg">This is where Learning begins</i>
          </p>
        </div>
      </div>

      {/* Right Form Side */}
      <div className={`flex flex-col m-0.5 p-2 rounded-2xl h-auto sm:h-[580px] w-full sm:w-[382px]`}>
        <h3 className="text-2xl font-bold text-center">Welcome to InternClub</h3>

        <p>
          <span className="block text-center text-lg font-semibold mt-5 text-[#45a29e]">
            Intern Club is the best platform to purchase course
          </span>
        </p>
        <div className="flex items-center w-full justify-center">
          <div className="flex justify-center gap-4 my-5 h-12 font-bold text-xl rounded-4xl w-1.5/2">
            Login
          </div>
        </div>

        <div className=" space-y-2">
          <div>
            <label>Email:</label>
            <input
              type="email"
              placeholder="Enter your email..."
              className="w-full p-2 rounded border placeholder:text-[#45a29e]"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <label>Password:</label>
          <div className="flex w-full items-center gap-2">
            <input
              type={showPassword ? "text" : "password"}
              maxLength={16}
              placeholder="Enter your password..."
              className="w-full p-2 rounded border placeholder:text-[#45a29e]"
              value={password}
              // autoComplete="off"
              // onfocus="this.removeAttribute('readonly');"
              onChange={(e) => setPassword(e.target.value)}
            />
            
          </div>
        </div>

        <div className="mt-4 flex flex-col sm:flex-col items-center justify-center gap-3 w-full">
          <button
            className={`px-6 py-2 rounded-xl cursor-pointer w-full ${
              darkMode ? "bg-yellow-400 text-black" : "bg-blue-500 text-white"
            }`}
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </button>
          <p onClick={()=>{navigate('/register')}} >Don't have an account? <span className="text-blue-500 cursor-pointer hover:underline">Sign Up</span></p>
          <p><span className="text-blue-500 cursor-pointer hover:underline" onClick={() => setModalOpen(true)}>Forgot Password?</span></p>
           {/* <button
        
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Forgot Password?
      </button>
      */
     <ResetPasswordModal isOpen={modalOpen} onClose={() => setModalOpen(false)} /> 
    }
  
        </div>
      </div>
    </div>
  );
};

export default Login;
