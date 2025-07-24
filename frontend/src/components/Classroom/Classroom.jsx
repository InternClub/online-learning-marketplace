import React from 'react'
import video from '/Video/teachingVideo.mp4'

const Classroom = () => {
  return (
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
          <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 hover:scale-105 transition-transform duration-300">
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
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
  )
}

export default Classroom