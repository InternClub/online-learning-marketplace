import React, { useState } from "react";

const courseData = [
  {
    id: 1,
    title: "Tailwind CSS",
    students: [
      { name: "Aarav Mehta", email: "aarav@example.com", progress: "75%" },
      { name: "Isha Verma", email: "isha@example.com", progress: "90%" },
    ],
  },
  {
    id: 2,
    title: "React Basics",
    students: [
      { name: "Rohan Singh", email: "rohan@example.com", progress: "60%" },
    ],
  },
];

export default function EnrolledStudents() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <h1 className="text-3xl font-bold text-indigo-800 mb-6">
        Enrolled Students
      </h1>

      {/* Course List */}
      <div className="flex flex-wrap gap-4 mb-8">
        {courseData.map((course) => (
          <button
            key={course.id}
            onClick={() => handleCourseClick(course)}
            className={`px-4 py-2 rounded-md shadow-md ${
              selectedCourse?.id === course.id
                ? "bg-indigo-600 text-white"
                : "bg-white text-indigo-700"
            } hover:bg-indigo-500 hover:text-white transition`}
          >
            {course.title}
          </button>
        ))}
      </div>

      {/* Student Details */}
      {selectedCourse && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-indigo-700 mb-4">
            Students Enrolled in {selectedCourse.title}
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-indigo-50 border rounded-md">
              <thead>
                <tr className="bg-indigo-200 text-indigo-800">
                  <th className="text-left px-4 py-2">Name</th>
                  <th className="text-left px-4 py-2">Email</th>
                  <th className="text-left px-4 py-2">Progress</th>
                  <th className="text-left px-4 py-2">Profile</th>
                </tr>
              </thead>
              <tbody>
                {selectedCourse.students.map((student, index) => (
                  <tr key={index} className="hover:bg-indigo-100 transition">
                    <td className="px-4 py-2 font-medium text-indigo-700">
                      {student.name}
                    </td>
                    <td className="px-4 py-2 text-gray-700">{student.email}</td>
                    <td className="px-4 py-2 text-gray-700">
                      {student.progress}
                    </td>
                    <td className="px-4 py-2">
                      <a
                        href={`/profile/${student.name
                          .toLowerCase()
                          .replace(/\s/g, "-")}`}
                        className="text-indigo-600 hover:text-indigo-900"
                        title="View Profile"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-5 h-5 inline-block"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5.121 17.804A9 9 0 1117.804 5.121 9 9 0 015.121 17.804zM15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <footer className="mt-10 text-center text-sm text-gray-500">
        🧜‍♂️ Every student is a ripple in your ocean of impact.
      </footer>
    </div>
  );
}
