import React from "react";
import Hero from "../../components/Hero/Hero";
import Success from "../../components/Sections/Success";
import Features from "../../components/Sections/Features";
import Footer from "../Utility/Footer";
import Classroom from "../../components/Classroom/Classroom";
import Platform from "../../components/Platform/Platform";

const Homepage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-[100] w-full">
        <Hero />
        <Success />
        <Classroom/>
        <Platform/>
        <Features />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
