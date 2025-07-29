import React from "react";

const instructors = [
  {
    id: 1,
    name: "Devansh Kumar",
    email: "devansh@example.com",
    courses: 8,
    students: 240,
    status: "active",
  },
  {
    id: 2,
    name: "Emily Stone",
    email: "emily@example.com",
    courses: 5,
    students: 140,
    status: "active",
  },
  {
    id: 3,
    name: "Amit Patel",
    email: "amit@example.com",
    courses: 3,
    students: 80,
    status: "suspended",
  },
];

const InstructorPanel = () => {
  return (
    <div className="w-[72.5vw]  bg-white rounded-xl shadow-lg p-4 sm:p-6">
      <h2 className="text-lg sm:text-xl font-bold mb-4 text-gray-800">🧑‍🏫 Instructors Panel</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm sm:text-base border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-2 sm:px-4 py-2">Name</th>
              <th className="text-left px-2 sm:px-4 py-2">Email</th>
              <th className="text-center px-2 sm:px-4 py-2">Courses</th>
              <th className="text-center px-2 sm:px-4 py-2">Students</th>
              <th className="text-center px-2 sm:px-4 py-2">Status</th>
              <th className="text-center px-2 sm:px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {instructors.map((inst) => (
              <tr key={inst.id} className="border-t">
                <td className="px-2 sm:px-4 py-2">{inst.name}</td>
                <td className="px-2 sm:px-4 py-2">{inst.email}</td>
                <td className="text-center px-2 sm:px-4 py-2">{inst.courses}</td>
                <td className="text-center px-2 sm:px-4 py-2">{inst.students}</td>
                <td className="text-center px-2 sm:px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      inst.status === "active"
                        ? "bg-green-200 text-green-700"
                        : "bg-red-200 text-red-700"
                    }`}
                  >
                    {inst.status}
                  </span>
                </td>
                <td className="px-2 sm:px-4 py-2 flex flex-wrap justify-center gap-2">
                  <button className="px-2 sm:px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-xs sm:text-sm">
                    View
                  </button>
                  <button className="px-2 sm:px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 text-xs sm:text-sm">
                    Suspend
                  </button>
                  <button className="px-2 sm:px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-xs sm:text-sm">
                    Delete
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

export default InstructorPanel;
