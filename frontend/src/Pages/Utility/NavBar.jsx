import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector,useDispatch} from "react-redux";
import { toggleTheme } from "../../Store/API/themeSlice";

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const hiddenPaths = ["/login", "/register", "/resetpassword", "/profile",];
  const isHidden = hiddenPaths.includes(location.pathname);
  const mode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  const ToggleTheme = () => {
    // setDarkMode(!darkMode);
    dispatch(toggleTheme());
    // console.log("noob");

  };
  const handleLoggedinToggle = () => {
    setIsLoggedIn(!isLoggedIn);
    navigate("/login");
  };

  const handleSearchClick = () => navigate("/search");
  const handleSignupToggle = () => navigate("/register");
  const handleHomePage = () => navigate("/");
  const handleCourses = () => navigate("/courses");
  const handleCoursesDetails = () => navigate("/coursedetails");
  const handleProfile = () => navigate("/lernerprofile");
  // const handleLearnerCart = () => navigate("/lernercart");

  useEffect(()=>{
    localStorage.setItem("themeMode",mode)
  },[mode])

  return (
    <nav className="flex flex-wrap items-center justify-between p-4 bg-white shadow-md">
      {/* Brand */}
      <div
        onClick={handleHomePage}
        className="text-xl font-bold text-green-500 cursor-pointer"
      >
        <img src="/Images/logoIC.png" className="h-10 w-10" />
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-wrap gap-2 items-center mr-40 mt-4 sm:mt-0 sm:flex-nowrap">

        <button 
        className={`px-4 py-2  bg-[#66b3ff] text-white rounded hover:scale-105 transition-transform  ${isHidden ? 'hidden' : ''}`}
        onClick={handleSearchClick}

        
        >
          Find Course
        </button>
        <button
          className={`px-4 py-2  bg-green-400 text-white rounded hover:bg-green-500 ${isHidden ? 'hidden' : ''}`}
          onClick={handleCourses}
        >
          Courses
        </button>
        <button
          className={`px-4 py-2  bg-green-400 text-white rounded hover:bg-green-500 ${isHidden ? 'hidden' : ''}`}
          onClick={handleCoursesDetails}
        >
          Course Details
        </button>

        

        {!isLoggedIn ? (
          <>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={handleSignupToggle}
            >
              Sign Up
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={handleLoggedinToggle}
            >
              Log In
            </button>
          </>
        ) : (
          <>

            <button className={`px-4 py-2  bg-green-400 text-white rounded hover:bg-green-500 ${isHidden ? 'hidden' : ''}`}
             onClick={handleProfile}
            >
              Dashboard
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={handleLoggedinToggle}
            >
              Log Out
            </button>
          </>
        )}
      </div>
      <button
        onClick={ToggleTheme}
        className="darkmode absolute top-4 right-4 px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300 ease-in-out"
      >
        {mode === "dark" ? "🌞" : "🌚"}
      </button>
    </nav>
  );
};

export default NavBar;
