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
    name: "Neha Sharma",
    email: "neha.sharma@example.com",
    enrollments: 1,
    progress: "20%",
    status: "dokhebaaz",
  },
];

const LearnerPanel = () => {
  return (
    <div className="w-[80vw] bg-white rounded-xl shadow-lg p-4 sm:p-6">
      <h2 className="text-lg sm:text-xl font-bold mb-4 text-gray-800">🎓 Learners Panel</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm sm:text-base border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-2 sm:px-4 py-2">Name</th>
              <th className="text-left px-2 sm:px-4 py-2">Email</th>
              <th className="text-center px-2 sm:px-4 py-2">Enrollments</th>
              <th className="text-center px-2 sm:px-4 py-2">Progress</th>
              <th className="text-center px-2 sm:px-4 py-2">Status</th>
              <th className="text-center px-2 sm:px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {learners.map((learner) => (
              <tr key={learner.id} className="border-t">
                <td className="px-2 sm:px-4 py-2">{learner.name}</td>
                <td className="px-2 sm:px-4 py-2">{learner.email}</td>
                <td className="text-center px-2 sm:px-4 py-2">{learner.enrollments}</td>
                <td className="text-center px-2 sm:px-4 py-2">{learner.progress}</td>
                <td className="text-center px-2 sm:px-4 py-2">
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
                <td className="px-2 sm:px-4 py-2 flex flex-wrap justify-center gap-2">
                  <button className="px-2 sm:px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-xs sm:text-sm">
                    View Progress
                  </button>
                  <button className="px-2 sm:px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 text-xs sm:text-sm">
                    Suspend
                  </button>
                  <button className="px-2 sm:px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-xs sm:text-sm">
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
