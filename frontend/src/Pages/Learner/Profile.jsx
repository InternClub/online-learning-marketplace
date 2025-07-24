import React from "react";
import image8 from "/Images/image8.png";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const handleLearnerCart = () => navigate("/lernercart");
  const handleClassSchedule =()=> navigate('/classSchedule')

  const certificates = [
    {
      id: 1,
      title: "Certificate of Completion",
      date: "2023-01-15",
      description: "Completed the React Basics course.",
    },
    {
      id: 2,
      title: "Certificate of Excellence",
      date: "2023-02-20",
      description: "Achieved excellence in the JavaScript Advanced course.",
    },
    {
      id: 3,
      title: "Certificate of Participation",
      date: "2023-03-10",
      description: "Participated in the Full Stack Development workshop.",
    },
    {
      id: 3,
      title: "Certificate of Participation",
      date: "2023-03-10",
      description: "Participated in the Full Stack Development workshop.",
    },
    {
      id: 3,
      title: "Certificate of Participation",
      date: "2023-03-10",
      description: "Participated in the Full Stack Development workshop.",
    },
  ];

  return (
    <div className="flex w-full h-[100%] bg-[#0756a9] p-2 overflow-hidden">
      {/* Sidebar */}
      <div className="flex flex-col h-full w-[25%] bg-[#ffffff] rounded-2xl py-10 px-2 gap-5">
        <button className="w-full h-[50px] rounded-2xl bg-[#9DCCFF] text-white font-bold hover:shadow-xl">
          My Courses
        </button>
        <button className="w-full h-[50px] rounded-2xl bg-[#9DCCFF] text-white font-bold hover:shadow-xl">
          Wishlist
        </button>
        <button
          className="w-full h-[50px] rounded-2xl bg-[#9DCCFF] text-white font-bold hover:shadow-xl"
          onClick={handleLearnerCart}
        >
          Cart
        </button>
        <button className="w-full h-[50px] rounded-2xl bg-[#9DCCFF] text-white font-bold hover:shadow-xl"
        onClick={handleClassSchedule}
        >
          Schedule
        </button>
      </div>
      {/* Main Content */}
      <div className="flex flex-col w-[75%] h-full p-2 ">
        <div className="flex flex-col w-[100%] h-full justify-top items-center gap-5 ">
          <p className="text-4xl font-bold text-[#d1d7fc]">Profile</p>
          <div className="flex  w-full h-full px-10 gap-20">
            <div className="flex w-[50%] h-full flex-col justify-start items-start gap-2">
              <p className="text-lg text-[#d1d7fc]">Name: John Doe</p>
              <p className="text-lg text-[#d1d7fc]">
                Email: john.doe@example.com
              </p>
              <p className="text-lg text-[#d1d7fc]">Phone: (123) 456-7890</p>
              <p className="text-lg text-[#d1d7fc]">
                Address: 123 Main St, City, Country
              </p>
              <p className="text-lg text-[#d1d7fc]">
                Bio: Passionate about learning and teaching.
              </p>
              <button className="w-full h-[50px] rounded-2xl bg-[#9DCCFF] text-white font-bold hover:shadow-xl mt-5">
                Edit Profile
              </button>
            </div>

            <div className="flex w-[30%] h-[200px] justify-end items-center">
              <img
                src={image8}
                alt="Profile"
                className="w-[220px] h-[220px] rounded-full"
              />
            </div>
          </div>
        </div>
        {/* certificates */}
        <p className="text-lg text-[#d1d7fc] mt-5">Certificates:</p>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-2 w-full px-5 overflow-y-scroll pt-5"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#9DCCFF transparent",
          }}
        >
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col w-full h-auto p-5 bg-white rounded-lg shadow-xl"
            >
              <h3 className="text-xl font-bold">{cert.title}</h3>
              <p className="text-sm text-gray-600">{cert.date}</p>
              <p className="text-base mt-2">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
