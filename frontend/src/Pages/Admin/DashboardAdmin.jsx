import React from "react";
import InstructorsPanel from "./InstructorsPanel";
import LearnersPanel from "./LearnersPanel";
import MetricsPanel from "./Panel/MetricsPanel";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-[#0a4c91]">🛡️ Admin Dashboard</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <MetricsPanel />
        <InstructorsPanel />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LearnersPanel />
        {/* Optional: CategoryManager or AlertsPanel */}
      </div>
    </div>
  );
};

export default AdminDashboard;
