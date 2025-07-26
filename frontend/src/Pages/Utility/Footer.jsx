import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const hiddenPaths = ["/login", "/register", "/resetpassword", "/profile","/instructorprofile"];
  const isHidden = hiddenPaths.includes(location.pathname);

  const navigate = useNavigate();
  const handlePrivacy = () => navigate("/policy");
  const handleTMC = () => navigate("/tmc");

  return (
    <div className={`bg-blue-950 px-4 py-8 sm:px-6 lg:px-10 text-white ${isHidden ? "hidden" : ""}`}>
      
      {/* Branding Row */}
      <div className="flex sm:flex-row items-center justify-center gap-4 sm:gap-10 mb-6 text-center sm:text-left">
        <h3 className="font-bold text-3xl sm:text-4xl text-pink-400 text-shadow-green-500">
          InternClub
        </h3>
        {/* <img src="/Images/Line 10.png" alt="divider" className="w-10 sm:w-12 h-10" /> */}
        <p className="text-sm sm:text-base border-l-2 pl-4 sm:pl-6 border-white/30">
          Vertual Class <br className="sm:hidden" /> for Learners
        </p>
      </div>

      {/* Newsletter Section */}
      <div className="flex flex-col items-center text-center mb-6">
        <p className="text-xl sm:text-2xl font-semibold font-sans mb-3">
          Subscribe to get our Newsletter
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
          <input
            className="rounded border placeholder:text-amber-400 px-4 py-2 w-full sm:w-[65%]"
            placeholder="your mail"
            type="email"
          />
          <button className="bg-red-600 w-full sm:w-[35%] h-10 rounded-xl cursor-pointer hover:bg-red-700 transition duration-300">
            Subscribe
          </button>
        </div>
      </div>

      {/* Links Section */}
      <div className="flex flex-col items-center text-center font-mono">
        <div className="flex flex-wrap justify-center items-center gap-3 text-sm sm:text-base mb-3">
          <p className="hover:text-blue-700 hover:underline cursor-pointer">Careers</p>
          <span>|</span>
          <p className="hover:text-blue-700 hover:underline cursor-pointer" onClick={handlePrivacy}>
            Privacy Policy
          </p>
          <span>|</span>
          <p className="hover:text-blue-700 hover:underline cursor-pointer" onClick={handleTMC}>
            Terms & Conditions
          </p>
        </div>
        <p className="text-xs sm:text-sm">&copy; 2025 InternClub Pvt. Ltd.</p>
      </div>
    </div>
  );
};

export default Footer;
