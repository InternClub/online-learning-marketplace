import React from "react";
import Course1 from "/Images/Group40.png";
import Course2 from "/Images/Group41.png";
import Course3 from "/Images/Group42.png";
import Footer from "../Utility/Footer";
import { Navigate, useNavigate } from "react-router-dom";

const categories = [
  { title: "Design", icon: "🎨" },
  { title: "Development", icon: "💻" },
  { title: "Business", icon: "📈" },
  { title: "Marketing", icon: "📣" },
  { title: "Photography", icon: "📷" },
  { title: "Acting", icon: "🎭" },
  { title: "Finance", icon: "💰" },
  { title: "Music", icon: "🎵" },
];

const courses = [
  {
    title: "AWS Certified Solutions Architect",
    category: "Design",
    duration: "3 Month",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    instructor: "Lina",
    price: "$80",
    originalPrice: "$100",
    image: "/Images/Group40.png", 
    instructorImg:
      "/Images/lovelyteenagegirlwithcurlyhairposingyellowtshirtmin.png", 
    reviews: [
      {
        reviewer: "John Doe",
        rating: 4,
        comment: "Great course, very informative!"
      },
      {
        reviewer: "Jane Smith",
        rating: 5,
        comment: "Loved it! Highly recommend."
      },
      {
        reviewer: "Jane Smith",
        rating: 2,
        comment: "talks too much, not enough examples."
      }
    ]
  },
  {
    title: "AWS Certified Solutions Architect",
    category: "Design",
    duration: "3 Month",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    instructor: "Lina",
    price: "$80",
    originalPrice: "$100",
    image: "/Images/Group40.png", 
    instructorImg:
      "/Images/lovelyteenagegirlwithcurlyhairposingyellowtshirtmin.png",
    reviews: [
      {
        reviewer: "Alice Johnson",
        rating: 5,
        comment: "Excellent content and delivery!"
      },
      {
        reviewer: "Bob Brown",
        rating: 3,
        comment: "Good course, but could use more examples."
      }
    ]
  },
  {
    title: "AWS Certified Solutions Architect",
    category: "Design",
    duration: "3 Month",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    instructor: "Lina",
    price: "$80",
    originalPrice: "$100",
    image: "/Images/Group40.png", 
    instructorImg:
      "/Images/lovelyteenagegirlwithcurlyhairposingyellowtshirtmin.png", 
    reviews: [
      {
        reviewer: "Charlie Green",
        rating: 4,
        comment: "Very useful course, learned a lot!"
      },
      {
        reviewer: "Diana White",
        rating: 5,
        comment: "Fantastic! Will take more courses from this instructor."
      }
    ]
  },
  {
    title: "AWS Certified Solutions Architect",
    category: "Design",
    duration: "3 Month",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    instructor: "Lina",
    price: "$80",
    originalPrice: "$100",
    image: "/Images/Group40.png", 
    instructorImg:
      "/Images/lovelyteenagegirlwithcurlyhairposingyellowtshirtmin.png",
    reviews: [
      {
        reviewer: "Eve Black",
        rating: 4,
        comment: "Great course, very informative!"
      },
      {
        reviewer: "Frank Blue",
        rating: 5,
        comment: "Loved it! Highly recommend."
      }
    ]
  },
];

const Courses = () => {
  const navigate = useNavigate();
  const handleCourseTap = (title) => {
    navigate("/coursecatlog", { state: title });
  };
  const handleCourseCatlog = () => navigate("/coursecatlog");

  return (
    <div className="bg-white text-black ">
      {/* History */}

      <div className="p-4 sm:p-6 lg:p-10">
        <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-2 mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700">
            Welcome back, ready for your next lesson?
          </h2>
          <button className="text-sm sm:text-base text-blue-600 hover:underline">
            View History
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Course Cards */}
          {[Course1, Course2, Course3].map((img, i) => (
            <div
              key={i}
              className="hover:scale-105 transition duration-200 cursor-pointer space-y-2"
            >
              <img
                src={img}
                alt={`Course ${i}`}
                className="w-full h-40 object-cover rounded-md"
              />
              <p className="font-semibold">Course Title</p>
              <div className="flex w-full h-1.5 rounded overflow-hidden">
                <div
                  style={{ width: `${(i + 1) * 30}%` }}
                  className="bg-green-500"
                ></div>
                <div
                  style={{ width: `${70 - (i + 1) * 20}%` }}
                  className="bg-green-500"
                ></div>
                <div
                  style={{ width: `${70 - (i + 1) * 0}%` }}
                  className="bg-green-500"
                ></div>
                <div
                  style={{ width: `${70 - (i + 1) * 0}%` }}
                  className="bg-gray-400"
                ></div>
                <div
                  style={{ width: `${100 - (i + 1) * 30}%` }}
                  className="bg-gray-400"
                ></div>
              </div>

              <div className="text-right text-sm text-gray-500">
                By Instructor
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* my courses */}

      <div className="p-4 sm:p-6 lg:p-10">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">
          Choose your favourite course from top categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="p-6 rounded-xl shadow backdrop-blur-md bg-white hover:scale-105 transition"
              onClick={() => handleCourseTap(cat.title)}
            >
              <div className="text-3xl mb-3">{cat.icon}</div>
              <h3 className="text-lg font-semibold">{cat.title}</h3>
              <p className="text-sm text-gray-700 mt-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* my recomendation  */}
      <div className="px-4 sm:px-6 lg:px-10 py-6 bg-white">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            Recommended for you
          </h2>
          <a
            href="#"
            className="text-sm sm:text-base text-blue-600 hover:underline"
          >
            See all
          </a>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              onClick={() => navigate('/coursedetails', { state: course })}
            >
              {/* Thumbnail */}
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover"
              />

              {/* Content */}
              <div className="p-4 space-y-2">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{course.category}</span>
                  <span>{course.duration}</span>
                </div>

                <h3 className="text-base sm:text-lg font-semibold">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600">{course.description}</p>

                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-2">
                    <img
                      src={course.instructorImg}
                      alt={course.instructor}
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="text-sm">{course.instructor}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-green-600 font-bold">
                      {course.price}
                    </span>
                    <span className="text-xs line-through text-gray-400 ml-1">
                      {course.originalPrice}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Arrows */}
        <div className="flex justify-end mt-6 gap-2">
          <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 text-xl">
            ←
          </button>
          <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 text-xl">
            →
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="p-10 m-10">
        <div className="bg-blue-950 p-10 rounded-2xl flex items-center justify-center flex-col">
          <h2 className="text-4xl font-bold font-serif bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-transparent bg-clip-text inline-block">
            Online coaching lessons for remote learning.
          </h2>
          <p className="text-gray-300 font-mono ">
            lorem ipsum dolor ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempos Lorem ipsum dolor
          </p>
          <p className="text-gray-300 font-mono">
            sitamet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>
          <button
            className="bg-[#49BBBD] m-2 p-2 rounded hover:bg-green-500 cursor-pointer"
            onClick={handleCourseCatlog}
          >
            Start Learning Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
