import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../Store/API/themeSlice";

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const hiddenPaths = ["/login", "/register", "/resetpassword", "/profile","/instructorprofile"];
  const isHidden = hiddenPaths.includes(location.pathname);
  const mode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  const ToggleTheme = () => {
    dispatch(toggleTheme());
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleLoggedinToggle = () => {
    // setIsLoggedIn(!isLoggedIn);
    navigate("/login");
    setMenuOpen(false);
  };

  const handleSearchClick = () => {
    navigate("/search");
    setMenuOpen(false);
  };
  const handleSignupToggle = () => {
    navigate("/register");
    setMenuOpen(false);
  };
  const handleHomePage = () => {
    navigate("/");
    setMenuOpen(false);
  };
  const handleCourses = () => {
    navigate("/courses");
    setMenuOpen(false);
  };
  const handleCoursesDetails = () => {
    navigate("/coursedetails");
    setMenuOpen(false);
  };
  const handleProfile = () => {
    navigate("/lernerprofile");
    setMenuOpen(false);
  };

  useEffect(() => {
    localStorage.setItem("themeMode", mode);
    const storedUsername = localStorage.getItem("username"); // Adjust key as needed
    setIsLoggedIn(!!storedUsername);
  }, [mode]);

  return (
    <nav className={`sticky top-0 left-0 right-0 z-50 bg-white shadow-md p-4 flex items-center justify-between flex-wrap ${isHidden ? "hidden" : "block"}`}>
      {/* Brand */}
      <div className="flex w-[100%]  justify-between items-center">

      <div onClick={handleHomePage} className="cursor-pointer flex items-center">
        <img src="/Images/logoIC.png" className="h-10 w-10 mr-2" alt="Logo" />
        {/* <span className="text-xl font-bold text-green-500">IC</span> */}
      </div>

      {/* Hamburger Toggle (mobile only) */}
      <button
        onClick={toggleMenu}
        className="sm:hidden text-2xl text-gray-600 focus:outline-none"
      >
        {menuOpen ? "✖️" : "☰"}
      </button>

      {/* Nav Buttons */}
      <div
          className={`${
    menuOpen ? "block" : "hidden"
  } w-full sm:flex sm:items-center sm:w-full sm:justify-end mt-4 sm:mt-0`}
>
  
        <div className="flex flex-col sm:flex-row gap-2">
          {!isHidden && (
            <>
              <button
                className="px-4 py-2  bg-blue-600 text-white rounded hover:scale-105 transition-transform"
                onClick={handleSearchClick}
              >
                Find Course
              </button>
              <button
                className="px-4 py-2  bg-blue-600 text-white rounded hover:bg-green-500"
                onClick={handleCourses}
              >
                Courses
              </button>
              <button
                className="px-4 py-2  bg-blue-600 text-white rounded hover:bg-green-500"
                onClick={handleCoursesDetails}
              >
                Course Details
              </button>
            </>
          )}

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
              {!isHidden && (
                <button
                  className="px-4 py-2 bg-green-400 text-white rounded hover:bg-green-500"
                  onClick={handleProfile}
                >
                  Dashboard
                </button>
              )}
              {/* <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={handleLoggedinToggle}
              >
                Log Out
              </button> */}
            </>
          )}
      <button
  onClick={ToggleTheme}
  className="mt-4 sm:mt-0 sm:ml-auto px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300 ease-in-out"
>
  {mode === "dark" ? "🌞" : "🌚"}
</button>
        </div>
      </div>
      </div>
      {/* Theme Toggle */}
    </nav>
  );
};

export default NavBar;
