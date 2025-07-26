import React from "react";

const learners = [
  {
    id: 1,
    name: "Riya Sharma",
    email: "riya.sharma@example.com",
    enrollments: 4,
    progress: "80%",
    status: "active",
  },
  {
    id: 2,
    name: "Jay Deshmukh",
    email: "jay.deshmukh@example.com",
    enrollments: 2,
    progress: "50%",
    status: "active",
  },
  {
    id: 3,
    name: "Neha Joshi",
    email: "neha.joshi@example.com",
    enrollments: 1,
    progress: "20%",
    status: "inactive",
  },
];

const LearnerPanel = () => {
  return (
    <div className="w-full bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800">🎓 Learners Panel</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-2">Name</th>
              <th className="text-left px-4 py-2">Email</th>
              <th className="text-center px-4 py-2">Enrollments</th>
              <th className="text-center px-4 py-2">Progress</th>
              <th className="text-center px-4 py-2">Status</th>
              <th className="text-center px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {learners.map((learner) => (
              <tr key={learner.id} className="border-t">
                <td className="px-4 py-2">{learner.name}</td>
                <td className="px-4 py-2">{learner.email}</td>
                <td className="text-center px-4 py-2">{learner.enrollments}</td>
                <td className="text-center px-4 py-2">{learner.progress}</td>
                <td className="text-center px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      learner.status === "active"
                        ? "bg-green-200 text-green-700"
                        : "bg-gray-300 text-gray-600"
                    }`}
                  >
                    {learner.status}
                  </span>
                </td>
                <td className="text-center px-4 py-2 space-x-2">
                  <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
                    View Progress
                  </button>
                  <button className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 text-sm">
                    Suspend
                  </button>
                  <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm">
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LearnerPanel;
