import React from "react";
import lovelyteenagegirlwithcurlyhairposingyellowtshirtmin from "/Images/lovelyteenagegirlwithcurlyhairposingyellowtshirtmin.png";
import calender from "/Images/Group 6.png";
import email from "/Images/email 2 1.png";
import group9 from "/Images/Group 9.png";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full h-[90vh] min-h-[80vh] justify-center items-center shadow-lg rounded-b-[5rem] sm:rounded-b-[10rem] lg:rounded-b-[15rem] px-4 sm:px-6 lg:px-12 bg-[#49BBBD] overflow-hidden pt-18 ">
      
      {/* Left Section */}
      <div className="flex w-full lg:w-1/2 h-auto py-12 lg:py-0">
        <div className="flex flex-col w-full justify-center items-start gap-5">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-snug">
            Welcome to <span className="text-[#F9C74F]">InternClub</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-white">
            Your journey to success starts here. Join us and explore a world of opportunities.
          </p>
          <button className="bg-[#F9C74F] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#f9c74f80] transition duration-300">
            Get Started
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex w-full lg:w-1/2 h-auto relative mt-10 lg:mt-0">
        <div className="flex w-full justify-center items-end">
          <img
            src={lovelyteenagegirlwithcurlyhairposingyellowtshirtmin}
            alt="Hero"
            className="w-[80%] sm:w-[85%] lg:w-[90%] object-contain"
          />
        </div>

        {/* Floating Cards */}
        <div className="absolute top-16 left-2 sm:left-8 w-[220px] sm:w-[250px] h-[100px] bg-white/30 backdrop-blur-md shadow-md rounded-xl flex items-center gap-4 px-4">
          <img src={calender} alt="Calender" className="w-10 h-10 object-contain" />
          <div>
            <p className="text-base font-semibold">200K</p>
            <p className="text-xs sm:text-sm">Students Assisted</p>
          </div>
        </div>

        <div className="absolute top-60 right-2 sm:right-10 w-[260px] sm:w-[300px] h-[100px] bg-white/30 backdrop-blur-md shadow-md rounded-xl flex items-center gap-3 px-4">
          <img src={email} alt="Email" className="w-10 h-10 object-contain bg-orange-500 p-1 rounded-sm" />
          <div>
            <p className="text-base font-semibold">Congratulation</p>
            <p className="text-xs sm:text-sm">Your enrollment is confirmed</p>
          </div>
        </div>

        <div className="absolute top-26 right-24 sm:right-40 hidden sm:block">
          <img src={group9} alt="Stats" className="w-20 h-20 object-contain" />
        </div>

        <div className="absolute bottom-50 sm:right-28 w-[260px] sm:w-[300px] h-[110px] bg-white/30 backdrop-blur-md shadow-md rounded-xl flex items-center gap-3 px-4">
          <img src={email} alt="Webinar" className="w-10 h-10 object-contain bg-orange-500 p-1 rounded-sm" />
          <div className="flex flex-col gap-1">
            <p className="text-base font-semibold">Expert's Webinar</p>
            <p className="text-xs sm:text-sm">today at 17:00</p>
            <button className="bg-[#D8587E] text-black px-3 py-1 rounded-3xl font-semibold hover:scale-105 transition duration-300 text-sm">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
