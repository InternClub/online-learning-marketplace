import React from "react";

// Sample dynamic data (replace with real API or Redux state)
const learnerProgress = [
  {
    id: 1,
    title: "React Fundamentals",
    instructor: "Jane Cooper",
    completion: 75, // percent
    status: "In Progress",
  },
  {
    id: 2,
    title: "Tailwind for Designers",
    instructor: "Adam Smith",
    completion: 100,
    status: "Completed",
  },
  {
    id: 3,
    title: "AWS Architecture Essentials",
    instructor: "Elon Gentry",
    completion: 45,
    status: "In Progress",
  },
];

const Progress = () => {
  return (
    <section className="px-6 py-10 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-8 text-center text-indigo-700 dark:text-white">
        📊 Learner Progress Tracker
      </h2>

      <div className="space-y-6">
        {learnerProgress.map((course) => (
          <div
            key={course.id}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <div className="flex justify-between items-center mb-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Instructor: {course.instructor}
                </p>
              </div>
              <span
                className={`text-sm px-3 py-1 rounded-full ${
                  course.status === "Completed"
                    ? "bg-green-500 text-white"
                    : "bg-yellow-400 text-white"
                }`}
              >
                {course.status}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-300 rounded-full h-4">
              <div
                className="bg-indigo-600 h-4 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${course.completion}%` }}
              ></div>
            </div>
            <div className="text-right text-sm mt-1 text-gray-700 dark:text-gray-300">
              {course.completion}% Completed
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Progress;
