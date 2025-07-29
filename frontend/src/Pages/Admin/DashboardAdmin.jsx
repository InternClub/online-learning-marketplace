import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import MetricsPanel from "./Panel/MetricsPanel";
import InstructorPanel from "./Panel/InstructorPanel";
import LearnerPanel from "./Panel/LearnerPanel";

const AdminDashboard = () => {
  const [activePanel, setActivePanel] = useState("metrics");
  const navigate = useNavigate();

  const renderPanel = () => {
    switch (activePanel) {
      case "metrics":
        return <MetricsPanel />;
      case "instructors":
        return <InstructorPanel />;
      case "learners":
        return <LearnerPanel />;
      default:
        return <MetricsPanel />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* Sidebar */}
      <aside className="flex flex-col w-full lg:w-[25%] bg-[#ffffff] rounded-2xl py-10 px-4 gap-5 mb-5 lg:mb-0">
        <button
          onClick={() => setActivePanel("metrics")}
          className={`btn-sidebar flex item-center justify-center w-full py-3 px-4 text-left rounded-xl bg-gray-100 text-gray-800 font-semibold hover:bg-blue-100 hover:text-blue-600 transition duration-200 shadow-sm `}
        >
          📊 <span className="hidden md:inline">Metrics</span>
        </button>

        <button
          onClick={() => setActivePanel("instructors")}
          className={`btn-sidebar flex item-center justify-center w-full py-3 px-4 text-left rounded-xl bg-gray-100 text-gray-800 font-semibold hover:bg-blue-100 hover:text-blue-600 transition duration-200 shadow-sm `}
        >
          👩‍🏫 <span className="hidden md:inline">Instructors</span>
        </button>

        <button
          onClick={() => setActivePanel("learners")}
          className={`btn-sidebar flex item-center justify-center w-full py-3 px-4 text-left rounded-xl bg-gray-100 text-gray-800 font-semibold hover:bg-blue-100 hover:text-blue-600 transition duration-200 shadow-sm `}
        >
          🧑‍🎓 <span className="hidden md:inline">Learners</span>
        </button>
        <button
          className="w-full h-[50px] mt-auto rounded-2xl bg-red-500 text-white font-bold hover:bg-red-600"
          onClick={() => {
            localStorage.removeItem("username"); // Or any auth key
            navigate("/login"); // Redirect after logout
          }}
        >
          Log Out
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-[#0a4c91]">
          🛡️ Admin Dashboard
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {renderPanel()}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
