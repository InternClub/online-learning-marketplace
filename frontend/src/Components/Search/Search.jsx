import React, { useState } from "react";
import Footer from "../../Pages/Utility/Footer";

const courses = [
  {
    title: "AWS Certified Solutions Architect",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    instructor: "Lina",
    originalPrice: "$100",
    discountedPrice: "$80",
    duration: "3 Month",
    category: "Design",
    image: "/Images/Group40.png",
  },
  {
    title: "AWS Certified Solutions Architect",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    instructor: "Lina",
    originalPrice: "$100",
    discountedPrice: "$80",
    duration: "3 Month",
    category: "Design",
    image: "/Images/Group41.png",
  },
  {
    title: "AWS Certified Solutions Architect",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    instructor: "Lina",
    originalPrice: "$100",
    discountedPrice: "$80",
    duration: "3 Month",
    category: "Design",
    image: "/Images/Group42.png",
  },
  {
    title: "AWS Certified Solutions Architect",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    instructor: "Lina",
    originalPrice: "$100",
    discountedPrice: "$80",
    duration: "3 Month",
    category: "Design",
    image: "/Images/Group40.png",
  },
  {
    title: "AWS Certified Solutions Architect",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    instructor: "Lina",
    originalPrice: "$100",
    discountedPrice: "$80",
    duration: "3 Month",
    category: "Design",
    image: "/Images/Group41.png",
  },
  {
    title: "AWS Certified Solutions Architect",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    instructor: "Lina",
    originalPrice: "$100",
    discountedPrice: "$80",
    duration: "3 Month",
    category: "Design",
    image: "/Images/Group42.png",
  },
  {
    title: "AWS Certified design Architect",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    instructor: "Lina",
    originalPrice: "$100",
    discountedPrice: "$80",
    duration: "3 Month",
    category: "Design",
    image: "/Images/Group40.png",
  },
  {
    title: "AWS Certified Solutions Architect",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    instructor: "Lina",
    originalPrice: "$100",
    discountedPrice: "$80",
    duration: "3 Month",
    category: "Design",
    image: "/Images/Group41.png",
  },
];

const instructors = [
  {
    name: "Jane Cooper",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    image: "/Images/I1.png",
  },
  {
    name: "Adam",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    image: "/Images/I2.png",
  },
  {
    name: "Tomara",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    image: "/Images/I3.png",
  },
  {
    name: "Jane Cooper",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    image: "/Images/I3.png",
  },
  {
    name: "Jane Cooper",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    image: "/Images/I2.png",
  },
  {
    name: "Jane Cooper",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    image: "/Images/I1.png",
  },
];

const offers = [
  {
    discount: "50%",
    title: "Lorem ipsum dolor",
    desc1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    desc2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    image: "/Images/I3.png",
  },
  {
    discount: "10%",
    title: "Lorem i",
    desc1: "Lorem ips",
    desc2: "consectetur adipiscing elit, sed do eiusmod tempor",
    image: "/Images/I3.png",
  },
  {
    discount: "50%",
    title: "Lorem ipsum dolor",
    desc1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    desc2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    image: "/Images/I3.png",
  },
  {
    discount: "50%",
    title: "Lorem ipsum dolor",
    desc1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    desc2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    image: "/Images/I3.png",
  },
];

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = courses.filter((course) =>
  course.title.toLowerCase().includes(searchQuery.toLowerCase())
);

  return (
    <section className="w-full  bg-white">
      {/* hero section */}

      <div
        className="h-50 w-full  "
        style={{
          backgroundImage: "url('/Images/Rectangle180.png')",
        }}
      >
        <div className="max-w-4xl pt-10  mx-auto">
          {/* Search Bar */}
          <div className="flex items-center gap-3 mb-6">
            <input
              type="search"
              placeholder="Search your favourite course"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow px-4 py-2  bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-5 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-all cursor-pointer ">
              Search
            </button>
          </div>

          {/* Filter Dropdowns */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "Subject",
              "Partner",
              "Program",
              "Language",
              "Availability",
              "Learning Type",
            ].map((label) => (
              <select
                key={label}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
              >
                <option value="">{label}</option>
                {/* Future: map dynamic options here */}
              </select>
            ))}
          </div>
        </div>
      </div>

      {/* course section */}
      <div className="mt-10 ml-15 mr-15 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  ">
          {filteredCourses.map((course, idx) => (
            <div
              key={idx}
              className="bg-gray-100 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold">{course.title}</h3>
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
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Meeting */}

      <div className="bg-[#9DCCFF] backdrop-blur-3xl flex items-center justify-center h-[500px] gap-10 rounded-2xl mx-13.5 my-5">
        {/* left */}
        <div className="ml-5">
          <h2 className="text-3xl font-semibold text-[#075e98]  ">
            Know about learning learning platform
          </h2>
          <ul className="list-disc pl-5 custom-marker text-base space-y-2">
            <li>Free E-book, video & consolation</li>
            <li>Top instructors from around world</li>
            <li>Top courses from your team</li>
          </ul>
          <button className="bg-[#49BBBD] w-50 h-12 rounded-xl cursor-pointer hover:bg-blue-400 mt-4">
            Start learning now
          </button>
        </div>
        {/* right */}
        <div className="backdrop-blur-3xl m-10 ">
          <img
            src="/Images/meeting.jpg"
            className="h-[400px] w-[650px] rounded-2xl"
          />
        </div>
      </div>

      {/* Instructor Section */}
      <div className=" mx-13.5 my-5 backdrop-blur-3xl">
        <div className="flex items-center justify-between my-10">
          <h2 className="text-2xl font-bold">
            Classes taught by real Instructor
          </h2>
          <a href="#" className="text-blue-600 hover:underline font-medium">
            See all
          </a>
        </div>

        {/* Grid of Cards */}
        <div className=" flex flex-wrap items-center justify-center gap-25 mt-30  ">
          {instructors.map((creator, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg h-[200px] w-[300px]  items-center justify-center hover:scale-105 cursor-pointer shadow hover:shadow-2xl transition duration-300"
            >
              <div className="flex items-center justify-center relative">
                <img
                  src={creator.image}
                  className="w-40 h- object-contain absolute   -top-20 "
                />
              </div>
              <div className="p-4 space-y-2 mt-20 flex flex-col  text-start  ">
                <h3 className="text-lg font-semibold">{creator.name}</h3>
                <p className="text-sm text-gray-600">{creator.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Student Review */}

      <div className="bg-[#9DCCFF] h-[750px] ">
        <div className="flex items-center justify-between mx-15">
          <h2 className="text-2xl font-bold mt-10">
            What our students have to say
          </h2>
          <a
            href="#"
            className="text-blue-600 hover:underline font-medium mt-10"
          >
            See all
          </a>
        </div>
        <div className=" bg-white hover:shadow-2xl transition duration-200 backdrop-blur-3xl h-[500px] mx-20 mt-15 mb-5 rounded-2xl">
          <div className="flex justify-baseline items-center p-15 gap-30">
            <img
              src="/Images/Group368.png"
              className="h-[400px] flex items-center justify-center "
            />
            <div className=" text-start ">
              <p className="font-bold text-4xl font-stretch-105% ">
                Arya Stark{" "}
              </p>
              <p className="font-semibold font-mono text-xl">
                noone@mercedene.com
              </p>
              <p className="font-serif text-violet-900">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                error!
              </p>
              <p className="font-serif text-violet-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore, illum.
              </p>
              <p className="font-serif text-fuchsia-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                nostrum!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* top educators cards */}

      <div className="px-6 py-10 mb-8">
        <div className="flex items-center justify-between ">
          <h2 className="text-2xl font-bold">
            Top Education offers and deals are listed here
          </h2>
          <a href="#" className="text-blue-600 hover:underline font-medium">
            See all
          </a>
        </div>

        {/* Cards */}
        <div className="flex items-center justify-between flex-wrap flex-row mx-20 text-white mt-7 ">
          {offers.map((offer, idx) => (
            <div
              key={idx}
              className="bg-white  shadow hover:shadow-lg transition duration-300 h-[212px] w-[220px] rounded-3xl "
              style={{
                backgroundImage: `url(${offer.image})`,
              }}
            >
              <span className="text-sm font-bold text-white  bg-blue-600 ml-5   ">
                {offer.discount}
              </span>
              <h3 className="text-lg text-white  font-semibold">
                {offer.title}
              </h3>
              <p className="text-sm  text-white ">{offer.desc1}</p>
              <p className="text-sm  text-pink-800 ">{offer.desc2}</p>
            </div>
          ))}
        </div>
      </div>

      
    </section>
  );
};

export default Search;