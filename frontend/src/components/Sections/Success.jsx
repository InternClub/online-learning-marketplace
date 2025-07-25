import React from "react";
import Group79 from "/Images/Group 79.png";
import group81 from "/Images/Group 81.png";
import group80 from "/Images/Group 80.png";

const Success = () => {
  return (
    <div className="flex items-center justify-center w-full flex-col mt-10 px-4 sm:px-8">
      {/* Heading */}
      <div className="w-full text-center text-3xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#000c14] to-[#49BBBD] bg-clip-text text-transparent mb-6">
        Our Success
      </div>

      {/* Intro Text */}
      <div className="flex flex-col w-full max-w-4xl text-center mb-10">
        <p className="text-base sm:text-lg">
          We are proud to have achieved significant milestones in our journey.
        </p>
        <p className="text-base sm:text-lg">
          Our commitment to excellence has led us to numerous successes.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 w-full max-w-6xl text-center">
        {[
          { value: "10K+", label: "Satisfied Students" },
          { value: "500+", label: "Courses Offered" },
          { value: "100+", label: "Expert Instructors" },
          { value: "15+", label: "Years of experience" },
          { value: "90%", label: "Success Rate" },
        ].map((stat, index) => (
          <div key={index} className="flex flex-col items-center justify-center">
            <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#4fb5f9] to-[#49BBBD] bg-clip-text text-transparent">
              {stat.value}
            </p>
            <p className="text-sm sm:text-lg">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Software Suite Heading */}
      <div className="w-full text-center text-3xl sm:text-5xl lg:text-6xl font-bold mt-16 bg-gradient-to-r from-[#000c14] to-[#49BBBD] bg-clip-text text-transparent">
        All-In-One Cloud Software.
      </div>

      {/* Software Intro */}
      <div className="flex flex-col w-full max-w-4xl text-center mt-6 mb-10">
        <p className="text-base sm:text-lg">
          InternClub is one powerful online software suite that
        </p>
        <p className="text-base sm:text-lg">
          Combines all the tools needed to run a successful school or office.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {[
          {
            title: "Online Billing, Invoicing & Contracts",
            description:
              "Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts",
            image: Group79,
          },
          {
            title: "Easy Scheduling & Attendance Tracking",
            description:
              "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance",
            image: group80,
          },
          {
            title: "Customer Tracking",
            description:
              "Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization",
            image: group81,
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="flex flex-col w-full h-auto shadow-2xl rounded-2xl justify-start items-center px-5 pt-14 pb-6 relative "
          >
            <img
              src={feature.image}
              alt="img"
              className="h-16 w-16 absolute -top-8"
            />
            <div className="text-center text-lg font-semibold mb-4">
              {feature.title}
            </div>
            <div className="text-sm text-center">{feature.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Success;
