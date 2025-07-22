import React from "react";
import lovelyteenagegirlwithcurlyhairposingyellowtshirtmin from "/Images/lovelyteenagegirlwithcurlyhairposingyellowtshirtmin.png";
import calender from "/Images/Group 6.png";
import email from "/Images/email 2 1.png";
import group9 from "/Images/Group 9.png";

const Hero = () => {
  return (
    <div className="flex w-full h-[100vh] justify-center items-center shadow-lg rounded-b-[15rem] px-5 bg-[#49BBBD] ">
      <div className="flex w-1/2 h-full">
        <div className="flex flex-col w-full h-full justify-center items-start p-10 gap-5">
          <h1 className="text-6xl font-bold text-white">
            Welcome to <span className="text-[#F9C74F]">InternClub</span>
          </h1>
          <p className="text-lg text-white">
            Your journey to success starts here. Join us and explore a world of
            opportunities.
          </p>
          <button className="bg-[#F9C74F] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#f9c74f80] transition duration-300">
            Get Started
          </button>
        </div>
      </div>

      <div className="flex w-1/2 h-full relative">
        <div className="flex w-full h-full items-end">
          <img
            src={lovelyteenagegirlwithcurlyhairposingyellowtshirtmin}
            alt="Hero"
            className="w-[90%] h-[90%] object-contain"
          />
        </div>
        <div className="flex w-full h-full absolute">
          <div className=" flex absolute w-[250px] h-[100px] top-24 left-4  rounded-xl bg-white/30 backdrop-blur-md shadow-md text-black justify-center items-center gap-5">
            <div className="flex w-1/5 h-full items-center justify-start">
              <img
                src={calender}
                alt="Calender"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-lg font-semibold">200K</p>
              <p className="text-sm">Students Assisted</p>
            </div>
          </div>
        </div>
        <div className="flex w-full h-full absolute">
          <div className=" flex absolute w-[300px] h-[100px] top-68 right-10  rounded-xl bg-white/30 backdrop-blur-md shadow-md text-black justify-center items-center gap-3">
            <div className="flex w-1/5 h-full items-center justify-start">
              <img
                src={email}
                alt="Email"
                className="w-10 h-10 object-contain bg-orange-500 p-1 rounded-sm"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-lg font-semibold">Congratulation</p>
              <p className="text-sm">Your enrollment is confirmed</p>
            </div>
          </div>
        </div>
        <div className="flex w-full h-full absolute">
          <div className=" flex absolute  top-20 right-40">
            <img
              src={group9}
              alt="stats"
              className="w-30 h-30 object-contain"
            />
          </div>
        </div>
        <div className="flex w-full h-full absolute ">
          <div className=" flex absolute w-[300px] h-[110px] top-120 right-120  rounded-xl bg-white/30 backdrop-blur-md shadow-md text-black justify-center items-center gap-3">
            <div className="flex w-1/5 h-full items-center justify-start">
              <img
                src={email}
                alt="Email"
                className="w-10 h-10 object-contain bg-orange-500 p-1 rounded-sm"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-lg font-semibold">Expert's Webinar</p>
              <p className="text-sm">today at 17:00</p>
              <button
                // onMouseEnter={() => console.log('Hovered')}
                className="bg-[#D8587E] text-black px-2 py-2 rounded-3xl font-semibold hover:scale-105 transition duration-300"
              >
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
