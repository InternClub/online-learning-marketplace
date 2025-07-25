import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const CourseCatalog = () => {
  const title = useLocation().state;
  const [searchTerm, setSearchTerm] = useState(title || "");

  useEffect(() => {
    console.log("Search term updated:", title);
  }, []);

  const courses = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      description:
        "Master AWS architecture and deploy scalable cloud solutions.",
      instructor: "Jane Cooper",
      duration: "3 Month",
      category: "Cloud & DevOps",
      originalPrice: "$100",
      discountedPrice: "$80",
      image: "/Images/Rectangle69.png", // Update with real image path
    },
    {
      id: 2,
      title: "Responsive UI with Tailwind",
      description: "Craft beautiful, adaptive layouts using utility-first CSS.",
      instructor: "Adam Smith",
      duration: "2 Month",
      category: "Frontend",
      originalPrice: "$90",
      discountedPrice: "$70",
      image: "/Images/Group40.png",
    },
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      description:
        "Master AWS architecture and deploy scalable cloud solutions.",
      instructor: "Jane Cooper",
      duration: "3 Month",
      category: "Cloud & DevOps",
      originalPrice: "$100",
      discountedPrice: "$80",
      image: "/Images/Rectangle69.png", // Update with real image path
    },
    {
      id: 2,
      title: "Responsive UI with Tailwind",
      description: "Craft beautiful, adaptive layouts using utility-first CSS.",
      instructor: "Adam Smith",
      duration: "2 Month",
      category: "Frontend",
      originalPrice: "$90",
      discountedPrice: "$70",
      image: "/Images/Group40.png",
    },
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      description:
        "Master AWS architecture and deploy scalable cloud solutions.",
      instructor: "Jane Cooper",
      duration: "3 Month",
      category: "Cloud & DevOps",
      originalPrice: "$100",
      discountedPrice: "$80",
      image: "/Images/Rectangle69.png", // Update with real image path
    },
    {
      id: 2,
      title: "Responsive UI with Tailwind",
      description: "Craft beautiful, adaptive layouts using utility-first CSS.",
      instructor: "Adam Smith",
      duration: "2 Month",
      category: "Frontend",
      originalPrice: "$90",
      discountedPrice: "$70",
      image: "/Images/Group40.png",
    },
    {
      id: 1,
      title: "AWS Certified Solutions Architect design",
      description:
        "Master AWS architecture and deploy scalable cloud solutions.",
      instructor: "Jane Cooper",
      duration: "3 Month",
      category: "Cloud & DevOps",
      originalPrice: "$100",
      discountedPrice: "$80",
      image: "/Images/Rectangle69.png", // Update with real image path
    },
    {
      id: 2,
      title: "Responsive UI with Tailwind",
      description: "Craft beautiful, adaptive layouts using utility-first CSS.",
      instructor: "Adam Smith",
      duration: "2 Month",
      category: "Frontend",
      originalPrice: "$90",
      discountedPrice: "$70",
      image: "/Images/Group40.png",
    },
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      description:
        "Master AWS architecture and deploy scalable cloud solutions.",
      instructor: "Jane Cooper",
      duration: "3 Month",
      category: "Cloud & DevOps",
      originalPrice: "$100",
      discountedPrice: "$80",
      image: "/Images/Rectangle69.png", // Update with real image path
    },
    {
      id: 2,
      title: "Responsive UI with Tailwind",
      description: "Craft beautiful, adaptive layouts using utility-first CSS.",
      instructor: "Adam Smith",
      duration: "2 Month",
      category: "Frontend",
      originalPrice: "$90",
      discountedPrice: "$70",
      image: "/Images/Group40.png",
    },
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      description:
        "Master AWS architecture and deploy scalable cloud solutions.",
      instructor: "Jane Cooper",
      duration: "3 Month",
      category: "Cloud & DevOps",
      originalPrice: "$100",
      discountedPrice: "$80",
      image: "/Images/Rectangle69.png", // Update with real image path
    },
    {
      id: 2,
      title: "Responsive UI with Tailwind",
      description: "Craft beautiful, adaptive layouts using utility-first CSS.",
      instructor: "Adam Smith",
      duration: "2 Month",
      category: "Frontend",
      originalPrice: "$90",
      discountedPrice: "$70",
      image: "/Images/Group40.png",
    },
  ];

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="px-6 py-10 bg-white">
      <h2 className="text-3xl font-bold mb-8 text-center">🎓 Course Catalog</h2>

      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="Search courses by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
        />
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.length ? (
          filteredCourses.map((course, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition duration-300 overflow-hidden"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold">{course.title}</h3>
                <p className="text-sm text-gray-600">{course.description}</p>
                <p className="text-sm text-blue-500">
                  Instructor: {course.instructor}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="line-through text-gray-500">
                    {course.originalPrice}
                  </span>
                  <span className="text-green-600 font-semibold">
                    {course.discountedPrice}
                  </span>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>{course.duration}</span>
                  <span>{course.category}</span>
                </div>
                <div className="pt-3">
                  <button
                    onClick={() =>
                      console.log(`Added to wishlist: ${course.title}`)
                    }
                    className="w-full bg-white text-black py-2 rounded hover:shadow-lg text-sm"
                  >
                    ❤️ Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No courses found matching "{searchTerm}"
          </p>
        )}
      </div>
    </section>
  );
};

export default CourseCatalog;
