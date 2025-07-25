import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Success from "../../components/Sections/Success";
import Features from "../../components/Sections/Features";
import Footer from "../Utility/Footer";
import Classroom from "../../components/Classroom/Classroom";
import Platform from "../../components/Platform/Platform";
import { useSelector } from "react-redux";

const Homepage = () => {
  // const [themeMode, setThemeMode] = useState(() => localStorage.getItem("themeMode") || "light");

 const themeMode = useSelector((state) => state.theme.mode);
 const mode = useSelector((state) => state.theme.mode);

 useEffect(() => {
  document.body.className = mode;
  localStorage.setItem("themeMode", mode);
}, [mode]);

  return (
    <div>
    <div className={`flex flex-col items-center justify-center h-full w-full font-serif ${
    themeMode === "dark" ? "bg-[#1f1f1f] text-white" : "bg-white text-black"
  }`}>
        <Hero />
        <Success />
        <Classroom/>
        <Platform/>
        <Features />
      </div>
      
    </div>
  );
};

export default Homepage;
