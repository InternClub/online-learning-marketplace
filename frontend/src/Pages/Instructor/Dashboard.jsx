import React, { useState } from "react";
import image8 from "/Images/image8.png";
import EditProfileModal from "../../Components/Modal/EditProfileModal";
import MessagesModal from "../../components/Modal/MessagesModal";
import CourseData from './CourseData'
import PublishedCourses from "./Published";
import Analytics from "./Analytics";
import InstructorSchedule from "./Schedule";

const Dashboard = () => {
  const [selectedView, setSelectedView] = useState("instructorprofile");
  const [showModal, setShowModal] = useState(false);
  const [showMessages, setShowMessages] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-[100vh] bg-[#0a4c91] p-2 overflow-x-hidden">
      
      {/* Sidebar */}
      <div className="flex flex-col w-full lg:w-[25%] bg-white rounded-2xl py-10 px-4 gap-5 mb-5 lg:mb-0">
        <button onClick={() => setSelectedView("instructorprofile")} className="btn-sidebar">My Profile</button>
        <button onClick={() => setSelectedView("published")} className="btn-sidebar">Published Courses</button>
        <button onClick={() => setSelectedView("enrolled")} className="btn-sidebar">Enrolled Students</button>
        <button onClick={() => setSelectedView("analytics")} className="btn-sidebar">Analytics</button>
        <button onClick={() => setSelectedView("schedule")} className="btn-sidebar">Schedule</button>
        <button onClick={() => setSelectedView("settings")} className="btn-sidebar">Settings</button>
        <button
          className="w-full h-[50px] mt-auto rounded-2xl bg-red-500 text-white font-bold hover:bg-red-600"
          onClick={() => {
            localStorage.removeItem("username");
            window.location.href = "/login"; // fallback if using router
          }}
        >
          Log Out
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col w-full lg:w-[75%] h-full px-4">
        {selectedView === "instructorprofile" && (
          <div className="flex flex-col items-center gap-5">
            <p className="text-3xl sm:text-4xl font-bold text-[#d1d7fc]">Instructor Profile</p>

            <div className="flex flex-col md:flex-row w-full h-full gap-8 md:gap-20">
              <div className="flex w-full md:w-[60%] flex-col justify-start items-start gap-2 text-[#d1d7fc]">
                <p className="text-lg">Name: Jane Smith</p>
                <p className="text-lg">Email: jane.smith@example.com</p>
                <p className="text-lg">Phone: (987) 654-3210</p>
                <p className="text-lg">Specialization: Web Development</p>
                <p className="text-lg">Bio: I love helping learners grow through meaningful content.</p>
                <button onClick={() => setShowModal(true)} className="bg-teal-600 text-white px-4 py-2 rounded">Edit Profile</button>
                <EditProfileModal isOpen={showModal} onClose={() => setShowModal(false)} />
              </div>

              <div className="flex w-full md:w-[40%] justify-center md:justify-end items-center">
                <img src={image8} alt="Instructor" className="w-[180px] sm:w-[220px] h-[180px] sm:h-[220px] rounded-full object-cover" />
              </div>
            </div>
          </div>
        )}

        {selectedView === "published" && (
          <div className="rounded-3xl"><PublishedCourses /> </div>
        )}
        {selectedView === "enrolled" && (
          <div className="rounded"><CourseData /></div>
        )}
        {selectedView === "analytics" && (
          <div className=""><Analytics /></div>
        )}
        {selectedView === "schedule" && (
          <div className=""><InstructorSchedule /></div>
        )}
        {selectedView === "settings" && (
          <div className="text-white text-2xl">⚙️ Settings Page</div>
        )}

        {/* Floating Chat Icon */}
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setShowMessages(true)}
            className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-2xl flex items-center justify-center shadow-xl"
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
