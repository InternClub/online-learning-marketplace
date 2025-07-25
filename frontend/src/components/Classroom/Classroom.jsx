import React from 'react'
import video from '/Video/teachingVideo.mp4'

const Classroom = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-4 py-8 sm:px-8 lg:px-12 max-w-7xl mx-auto bg-[#f8f9fa] rounded-xl mt-8">
      
      {/* Text Section */}
      <div className="w-full lg:max-w-xl space-y-5 text-center lg:text-left">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-snug">
          Everything you can do in a physical classroom,
          <br className="hidden lg:block" />
          you can do with{' '}
          <span className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-transparent bg-clip-text">
            InternClub
          </span>
        </h2>
        <p className="text-gray-700 text-sm sm:text-base lg:text-lg">
          TOTC’s school management software helps traditional and online schools
          manage scheduling, attendance, payments and virtual classrooms all in one
          secure cloud-based system.
        </p>
        <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 hover:scale-105 transition-transform duration-300">
          Learn more
        </button>
      </div>

      {/* Video Section */}
      <div className="w-full mt-8 lg:mt-0 lg:ml-10 relative flex justify-center">
        {/* Decorative Boxes (optional on small screens) */}
        <div className="absolute hidden lg:block -left-2.5 bottom-[54.5px] w-32 h-32 bg-blue-600 rounded-xl z-0"></div>
        <div className="absolute hidden lg:block -right-8 top-[50px] w-36 h-36 bg-yellow-600 rounded-xl z-0"></div>

        <video
          className="relative rounded-2xl w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px]"
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
