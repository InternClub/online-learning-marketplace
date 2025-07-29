import React from "react";

const coursesData = [
  {
    title: "React Essentials",
    enrolled: 120,
    sold: true,
    earnings: 24000,
  },
  {
    title: "Tailwind Deep Dive",
    enrolled: 45,
    sold: true,
    earnings: 9000,
  },
  {
    title: "Recharts Masterclass",
    enrolled: 0,
    sold: false,
    earnings: 0,
  },
];

const InstructorEarning = () => {
  const totalEarnings = coursesData.reduce((sum, c) => sum + c.earnings, 0);
  const totalStudents = coursesData.reduce((sum, c) => sum + c.enrolled, 0);

  return (
    <div className="p-6 bg-gray-100 min-h-screen rounded-2xl">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">Instructor Dashboard</h1>

      {/* Summary Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <div className="bg-white shadow p-4 rounded-lg text-center">
          <h2 className="text-lg font-semibold">Total Earnings</h2>
          <p className="text-2xl font-bold text-green-600">₹{totalEarnings}</p>
        </div>
        <div className="bg-white shadow p-4 rounded-lg text-center">
          <h2 className="text-lg font-semibold">Total Students</h2>
          <p className="text-2xl font-bold text-purple-600">{totalStudents}</p>
        </div>
        <div className="bg-white shadow p-4 rounded-lg text-center">
          <h2 className="text-lg font-semibold">Courses Sold</h2>
          <p className="text-2xl font-bold text-blue-600">
            {coursesData.filter((c) => c.sold).length} / {coursesData.length}
          </p>
        </div>
      </div>

      {/* Course Table */}
      <div className="bg-white shadow rounded-lg p-4 overflow-auto">
        <table className="w-full table-auto text-left">
          <thead className="bg-blue-100">
            <tr>
              <th className="p-2">Course Title</th>
              <th className="p-2">Students Enrolled</th>
              <th className="p-2">Sold</th>
              <th className="p-2">Earnings (₹)</th>
            </tr>
          </thead>
          <tbody>
            {coursesData.map((course, idx) => (
              <tr key={idx} className="border-t hover:bg-gray-50">
                <td className="p-2">{course.title}</td>
                <td className="p-2">{course.enrolled}</td>
                <td className="p-2">
                  {course.sold ? (
                    <span className="text-green-600 font-medium">Yes</span>
                  ) : (
                    <span className="text-red-600 font-medium">No</span>
                  )}
                </td>
                <td className="p-2">₹{course.earnings}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InstructorEarning;
