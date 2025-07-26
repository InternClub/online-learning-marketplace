import React from "react";

const statData = [
  { label: "Total Users", value: 1248, icon: "👥", bg: "bg-blue-100" },
  { label: "Courses Published", value: 83, icon: "📚", bg: "bg-green-100" },
  { label: "Active Instructors", value: 27, icon: "🧑‍🏫", bg: "bg-yellow-100" },
  { label: "Engagement Rate", value: "78%", icon: "🧠", bg: "bg-purple-100" },
  { label: "Completion Rate", value: "62%", icon: "🏁", bg: "bg-red-100" },
];

const MetricsPanel = () => {
  return (
    <div className="w-full bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800">📈 Platform Metrics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {statData.map((stat) => (
          <div key={stat.label} className={`flex items-center gap-4 p-4 rounded-lg ${stat.bg} shadow-md`}>
            <span className="text-3xl">{stat.icon}</span>
            <div>
              <p className="text-sm text-gray-600">{stat.label}</p>
              <p className="text-lg font-bold text-gray-800">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetricsPanel;
