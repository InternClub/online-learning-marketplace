import React from "react";
import Footer from "../Utility/Footer";

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
    image: "/Images/Group40.png", // Replace with actual image path
    instructorImg:
      "/Images/lovelyteenagegirlwithcurlyhairposingyellowtshirtmin.png", // Replace with actual image path
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
    image: "/Images/Group40.png", // Replace with actual image path
    instructorImg:
      "/Images/lovelyteenagegirlwithcurlyhairposingyellowtshirtmin.png", // Replace with actual image path
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
    image: "/Images/Group40.png", // Replace with actual image path
    instructorImg:
      "/Images/lovelyteenagegirlwithcurlyhairposingyellowtshirtmin.png", // Replace with actual image path
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
    image: "/Images/Group40.png", // Replace with actual image path
    instructorImg:
      "/Images/lovelyteenagegirlwithcurlyhairposingyellowtshirtmin.png", // Replace with actual image path
  },
];

const offers = [
  {
    title: "FOR INSTRUCTORS",
    discount: "50%",
    description:
    "TOTC's school management software helps traditional and online schools manage scheduling.",
    image: "/Images/Rectangle 19.png",
  },
  {
    title: "FOR INSTRUCTORS",
    discount: "50%",
    description:
    "TOTC's school management software helps traditional and online schools manage scheduling.",
    image: "/Images/Rectangle 19.png",
  },
  {
    title: "FOR INSTRUCTORS",
    discount: "50%",
    description:
    "TOTC's school management software helps traditional and online schools manage scheduling.",
    image: "/Images/Rectangle 19.png",
  },
];

const CourseDetails = () => {
  return (
    <div className="bg-white">
      <div className="p-6 bg-white text-gray-800 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Course Overview</h2>
          <nav className="space-x-4 text-sm text-gray-600">
            <a className="hover:text-blue-600 hover:underline" href="#">Overview</a>
            <a className="hover:text-blue-600 hover:underline" href="#">Curriculum</a>
            <a className="hover:text-blue-600 hover:underline" href="#">Instructor</a>
            <a className="hover:text-blue-600 hover:underline" href="#">Reviews</a>
          </nav>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Course Image */}
          <div className="lg:col-span-2">
            <img
              src="/Images/Rectangle69.png"
              alt="Course Preview"
              className="w-full h-130  object-cover rounded-xl"
            />
          </div>

          {/* Right: Pricing & Details */}
          <div className="bg-gray-100 p-6 rounded-xl space-y-4">
            <h3 className="text-xl font-bold text-green-600">
              $49.65{" "}
              <span className="line-through text-gray-500 ml-2">$99.99</span>
            </h3>
            <p className="text-sm text-red-500">11 hours left at this price</p>
            <button className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Buy Now
            </button>

            <div>
              <h4 className="font-semibold mb-2">This Course Includes:</h4>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Money-back guarantee</li>
                <li>Access on all devices</li>
                <li>Certificate of completion</li>
                <li>12 Modules</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Training 5 or more people?</h4>
              <p className="text-sm text-gray-600">
                Class, launched less than a year ago by Blackboard co-founder
                Michael Chasen, integrates exclusively...
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Share this course:</h4>
              <div className="flex gap-3 text-xl text-gray-600">
                <button>🔗</button>
                <button>📘</button>
                <button>🐦</button>
                <button>📸</button>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-10">
          <h3 className="text-xl font-bold mb-4">Reviews</h3>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-yellow-400 text-xl">★★★★☆</span>
            <span className="text-sm text-gray-600">4 out of 5</span>
          </div>

          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="border-b pb-4">
                <p className="font-semibold">Lina</p>
                <p className="text-sm text-gray-600">
                  Class, launched less than a year ago by Blackboard co-founder
                  Michael Chasen, integrates exclusively...
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-10 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-black">Marketing Articles</h2>
          <a href="#" className="text-blue-600 hover:underline">
            See all
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover"
              />

              <div className="p-4 space-y-2">
                {/* Category & Duration */}
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{course.category}</span>
                  <span>{course.duration}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold">{course.title}</h3>

                {/* Description */}
                <p className="text-sm text-gray-600">{course.description}</p>

                {/* Instructor & Price */}
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

        {/* Navigation Arrows */}
        <div className="flex justify-end mt-6 gap-2">
          <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
            ←
          </button>
          <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
            →
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between p-10 max-w-7xl mx-auto bg-[#f8f9fa] lg:p-12 rounded-xl">
        {/* Text Section */}
        <div className=" max-w-xl space-y-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Everything you can do in a physical classroom,
            <br className="hidden lg:block" /> you can do with{" "}
            <span className="text-4xl font-bold font-serif bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-transparent bg-clip-text inline-block">
              InternClub
            </span>
          </h2>
          <p className="text-gray-700 text-base lg:text-lg">
            TOTC’s school management software helps traditional and online
            schools manage scheduling, attendance, payments and virtual
            classrooms all in one secure cloud-based system.
          </p>
          <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Learn more
          </button>
        </div>

        {/* Image Section */}
        <div className="mt-6 lg:mt-0 lg:ml-10 relative">
          {/* 🟥 Bottom Left Box */}
          <div className="absolute -left-2.5 bottom-54.5 w-32 h-32 bg-blue-600 rounded-xl z-0"></div>

          {/* 🟨 Top Right Box */}
          <div className="absolute -right-8 top-50 w-36 h-36 bg-yellow-600 rounded-xl z-0"></div>

          <video
            className="mt-4  lg:mt-0 lg:ml-3 relative rounded-2xl w-[600px]"
            autoPlay
            loop
          >
            <source src="/Video/teachingVideo.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      

        {/* Offer Cards */}
        <div className="px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto  p-10 bg-white text-gray-800">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">
              Top Education offers and deals are listed here
            </h2>
            <a href="#" className="text-blue-600 hover:underline text-sm">
              See all
            </a>
          </div>

          {/* Offer Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offers.map((offer, index) => (
              <div
                key={index}
                className="relative bg-gray-100 rounded-xl shadow hover:shadow-md transition text-white overflow-hidden h-[200px] flex flex-col justify-between"
                style={{
                  backgroundImage: `url(${offers.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 z-0"></div>

                <div className="relative z-10 p-6 flex flex-col justify-between h-full">
                  <div className="text-right">
                    <span className="inline-block bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {offer.discount} OFF
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{offer.title}</h3>
                    <p className="text-sm">{offer.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    <Footer />
    </div>
  );
};

export default CourseDetails;
