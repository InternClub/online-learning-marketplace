import React, {useState} from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Button = () => {
    const [darkMode, setDarkMode] = useState(false);
  const [loginClick, setLoginClick] = useState(false);
  const [registerClick, setRegisterClick] = useState(false);
  const navigate  = useNavigate();

  const onRegisterClick = () => {
    setRegisterClick(true);
    setLoginClick(false);
    navigate('/register')
  };

  const onLoginClick = () => {
    setLoginClick(true);
    setRegisterClick(false);
    navigate('/login')
  };

   const toggleTheme = () => {
    setDarkMode(!darkMode);
  };


  return (
    <div className="flex items-center justify-center">
      
        <button
          className={`px-4 py-2 rounded-xl  h-full w-1/2 ${
            (darkMode ? " text-black" : " text-white",
            loginClick ? "bg-[#69c1b9]" : " bg-[#66fcf1]")
          } `}
          onClick={() => onLoginClick()}
        >
          Login
        </button>
        <button
          className={`px-4 py-2 rounded-xl ${
            (darkMode ? " text-black" : " text-white",
            registerClick ? "bg-[#69c1b9] hidden" : " bg-[#66fcf1]")
          }`}
          onClick={() => onRegisterClick()}
        >
          Register
        </button>
      </div>
    
  );
};

export default Button;
