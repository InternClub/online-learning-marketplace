import React, { useState } from "react";
import MetricsPanel from "./Panel/MetricsPanel";
import InstructorPanel from "./Panel/InstructorPanel";
import LearnerPanel from "./Panel/LearnerPanel";

const AdminDashboard = () => {
  const [activePanel, setActivePanel] = useState("metrics");

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
      <aside className="md:w-64 w-full bg-[#0a4c91] text-white p-4 md:p-6 space-y-2 md:space-y-4 flex md:block flex-row justify-around md:justify-start">
        <h2 className="text-xl font-bold mb-2 md:mb-6 hidden md:block">
          Admin Menu
        </h2>

        <button
          onClick={() => setActivePanel("metrics")}
          className={`px-4 py-2 rounded ${
            activePanel === "metrics"
              ? "bg-white text-[#0a4c91]"
              : "hover:bg-blue-800"
          }`}
        >
          📊 <span className="hidden md:inline">Metrics</span>
        </button>

        <button
          onClick={() => setActivePanel("instructors")}
          className={`px-4 py-2 rounded ${
            activePanel === "instructors"
              ? "bg-white text-[#0a4c91]"
              : "hover:bg-blue-800"
          }`}
        >
          👩‍🏫 <span className="hidden md:inline">Instructors</span>
        </button>

        <button
          onClick={() => setActivePanel("learners")}
          className={`px-4 py-2 rounded ${
            activePanel === "learners"
              ? "bg-white text-[#0a4c91]"
              : "hover:bg-blue-800"
          }`}
        >
          🧑‍🎓 <span className="hidden md:inline">Learners</span>
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
