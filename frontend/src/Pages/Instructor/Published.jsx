//   const handleAddCourse = () => {
//     if (newCourse.trim() === '') return;
//     const newId = Date.now();
//     setCourses([...courses, { id: newId, title: newCourse, students: 0 }]);
//     setNewCourse('');
//   };
import React, { useState } from "react";
import CourseBuilder from "../../components/Modal/CourseBuilder";
import { useDispatch, useSelector } from "react-redux";
import { addCourse, removeCourse } from "../../Store/API/courseSlice";
export default function PublishedCourses() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.course);
  //   const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  // const [courses, setCourses] = useState([
  //   { id: 1, title: "React Basics", students: 120 },
  //   { id: 2, title: "Tailwind CSS Mastery", students: 85 },
  // ]);
  // const [newCourse, setNewCourse] = useState("");

  const handleAddCourse = (courseData) => {
    // You can connect this to Redux or send it to your backend here
    console.log("New Course:", courseData);
  };

  const handleRemoveCourse = (id) => {
    // setCourses(courses.filter((course) => course.id !== id));
    dispatch(removeCourse(id));
    console.log(`Course with ID ${id} removed`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <h1 className="text-3xl font-bold text-green-600 mb-6">
        Published Courses
      </h1>

      {/* Add Course Section */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
        {/* <button
          onClick={handleOpen}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-green-500"
        >
          Add Course
        </button> */}

        <CourseBuilder
          isOpen={isModalOpen}
          onClose={handleClose}
          onAddCourse={handleAddCourse}
        />
      </div>

      {/* Course List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-lg shadow-md p-4 flex h-[15rem] flex-col justify-between hover:shadow-xl transition"
          >
            <div>
              { course.image && (
                <img src={course.image} alt={course.title} className="mt-2 rounded-md" />
              )}
              <h2 className="text-xl font-semibold text-Black">
                {course.title}
              </h2>
              <p className="text-gray-600 mt-1">
                Category: {course.category}
              </p>
              <p className="text-gray-600 mt-1">
                Price: {course.price ? `$${course.price}` : "Free"}
                &nbsp;|&nbsp;
                Enrolled Students: {course.students}
              </p>
              <p className="text-gray-500 text-sm mt-2">
                {course.description || "No description available."}
              </p>
            </div>
            <button
              onClick={() => handleRemoveCourse(course.id)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
            >
              Remove Course
            </button>
          </div>
        ))}
      </div>

      <footer className="mt-10 text-center text-sm text-gray-500">
        🧜‍♀️ Every course you publish sends ripples of knowledge.
      </footer>
    </div>
  );
}
