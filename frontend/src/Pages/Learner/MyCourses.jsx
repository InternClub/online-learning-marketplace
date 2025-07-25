import React, { useState } from "react";

const initialCourses = [
  {
    id: 1,
    title: "Interactive UI with React",
    image: "https://via.placeholder.com/300x180",
    instructor: "Morgan Lopez",
    duration: "8h 30m",
    level: "Intermediate",
    status: "Enrolled",
  },
  {
    id: 2,
    title: "TailwindCSS Mastery",
    image: "https://via.placeholder.com/300x180",
    instructor: "Alex Carter",
    duration: "5h 10m",
    level: "Beginner",
    status: "Enrolled",
  },
  {
    id: 3,
    title: "Oceanic UI Animation",
    image: "https://via.placeholder.com/300x180",
    instructor: "Elena Wave",
    duration: "6h 45m",
    level: "Advanced",
    status: "Enrolled",
  },
];

const MyCourses = () => {
  const [courses, setCourses] = useState(initialCourses);

  const handleComplete = (id) => {
    const updatedCourses = courses.filter((course) => course.id !== id);
    setCourses(updatedCourses);
  };

  return (
    <section className="px-4 py-10 sm:px-6 lg:px-20 bg-white text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-8 text-cyan-700 ">
         My Courses
      </h2>
      {courses.length === 0 ? (
        <p className="text-center text-lg text-gray-900">
          You've completed all your courses! 🏆
        </p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition duration-300"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Instructor: {course.instructor}
                </p>
                <div className="flex justify-between items-center mt-4 text-sm text-gray-700 dark:text-gray-300">
                  <span>Duration: {course.duration}</span>
                  <span>Level: {course.level}</span>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="inline-block px-3 py-1 text-xs rounded-full bg-cyan-600 text-white">
                    {course.status}
                  </span>
                  <button
                    onClick={() => handleComplete(course.id)}
                    className="ml-auto px-3 py-1 bg-green-500 hover:bg-green-600 text-white text-xs font-medium rounded"
                  >
                    ✅ Mark as Completed
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default MyCourses;
