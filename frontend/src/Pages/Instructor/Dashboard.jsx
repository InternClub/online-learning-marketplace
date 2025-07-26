import React, { useState } from "react";
import image8 from "/Images/image8.png";
import { useNavigate } from "react-router-dom";
import EditProfileModal from "../../Components/Modal/EditProfileModal";
import MessagesModal from "../../components/Modal/MessagesModal";

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [showMessages, setShowMessages] = useState(false);

  const handlePublishedCourses = () => navigate("/published");
  const handleEnrolledStats = () => navigate("/enrolledstudents");
  const handleAnalytics = () => navigate("/instructor/analytics");
  const handleMessages = () => navigate("/instructor/messages");
  const handleInstructorSchedule = () => navigate("/instructorschedule");
  const handleInstructorSettings = () => navigate("/instructorsettings");

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-[100vh] bg-[#0a4c91] p-2 overflow-x-hidden">
      {/* Sidebar */}
      <div className="flex flex-col w-full lg:w-[25%] bg-white rounded-2xl py-10 px-4 gap-5 mb-5 lg:mb-0">
        <button onClick={handlePublishedCourses} className="w-full h-[50px] rounded-2xl bg-[#7AB8F5] text-white font-bold hover:shadow-xl"
        
        >
          Published Courses
        </button>
        <button onClick={handleEnrolledStats} className="w-full h-[50px] rounded-2xl bg-[#7AB8F5] text-white font-bold hover:shadow-xl">
          Enrolled Students
        </button>
        <button onClick={handleAnalytics} className="w-full h-[50px] rounded-2xl bg-[#7AB8F5] text-white font-bold hover:shadow-xl">
          Analytics
        </button>
        
      <MessagesModal isOpen={showMessages} onClose={() => setShowMessages(false)} />

        <button onClick={handleInstructorSchedule} className="w-full h-[50px] rounded-2xl bg-[#7AB8F5] text-white font-bold hover:shadow-xl">
          Schedule
        </button>
        <button onClick={handleInstructorSettings} className="w-full h-[50px] rounded-2xl bg-[#7AB8F5] text-white font-bold hover:shadow-xl">
          Settings
        </button>
        <button
          className="w-full h-[50px] mt-auto rounded-2xl bg-red-500 text-white font-bold hover:bg-red-600"
          onClick={() => {
            localStorage.removeItem("username");
            navigate("/login");
          }}
        >
          Log Out
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col w-full lg:w-[75%] h-full px-4">
        <div className="flex flex-col items-center gap-5">
          <p className="text-3xl sm:text-4xl font-bold text-[#d1d7fc]">Instructor Profile</p>

          <div className="flex flex-col md:flex-row w-full h-full gap-8 md:gap-20">
            <div className="flex w-full md:w-[60%] flex-col justify-start items-start gap-2">
              <p className="text-lg text-[#d1d7fc]">Name: Jane Smith</p>
              <p className="text-lg text-[#d1d7fc]">Email: jane.smith@example.com</p>
              <p className="text-lg text-[#d1d7fc]">Phone: (987) 654-3210</p>
              <p className="text-lg text-[#d1d7fc]">Specialization: Web Development</p>
              <p className="text-lg text-[#d1d7fc]">Bio: I love helping learners grow through meaningful content.</p>

              <div>
                <button onClick={() => setShowModal(true)} className="bg-teal-600 text-white px-4 py-2 rounded">Edit Profile</button>
                <EditProfileModal isOpen={showModal} onClose={() => setShowModal(false)} />
              </div>
            </div>

            <div className="flex w-full md:w-[40%] justify-center md:justify-end items-center">
              <img
                src={image8}
                alt="Instructor"
                className="w-[180px] sm:w-[220px] h-[180px] sm:h-[220px] rounded-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="fixed bottom-6 right-6 z-50">
  <button
    onClick={() => setShowMessages(true)}
    className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-2xl flex items-center justify-center shadow-xl transition"
    title="View Messages"
  >
    💬
  </button>
  <MessagesModal isOpen={showMessages} onClose={() => setShowMessages(false)} />
</div>
      </div>
    </div>
  );
};

export default Dashboard;
