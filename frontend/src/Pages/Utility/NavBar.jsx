import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();


   const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  const handleLoggedinToggle = () => {
    setIsLoggedIn(!isLoggedIn);
    navigate('/login');
  };
  const handleSignupToggle = () => navigate('/register');
  const handleHomePage = () => navigate('/');
  const handleCourses = () => navigate('/courses');
  const handleCoursesDetails = () => navigate('/coursedetails');

  return (
    <nav className="flex flex-wrap items-center justify-between p-4 bg-white shadow-md">
      {/* Brand */}
      <div
        onClick={handleHomePage}
        className="text-xl font-bold text-green-500 cursor-pointer"
      >
        InternHub
      </div>

      {/* Search */}
      <div className="flex flex-1 items-center gap-2 max-w-md mx-4 mt-2 sm:mt-0">
        <input
          type="search"
          placeholder="Search Here"
          className="w-full px-3 py-2 border rounded-md text-sm"
        />
        <button className="px-4 py-2 bg-[#C5C6C7] text-black rounded hover:bg-gray-300">
          Search
        </button>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-wrap gap-2 items-center mr-40 mt-4 sm:mt-0 sm:flex-nowrap">
        <button
          className="px-4 py-2 bg-green-400 text-white rounded hover:bg-green-500"
          onClick={handleCourses}
        >
          Courses
        </button>
        <button
          className="px-4 py-2 bg-green-400 text-white rounded hover:bg-green-500"
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
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
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
        onClick={toggleTheme}
        className="darkmode absolute top-4 right-4 px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300"
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </nav>
  );
};

export default NavBar;
