import React from 'react'

const Platform = () => {
  return (
    <div className='flex w-full flex-col justify-center items-center px-4 py-10 sm:px-6 md:px-10'>
      {/* Header */}
      <div className='text-center text-3xl sm:text-[44px] font-semibold bg-gradient-to-r from-[#075e98] to-[#4bfcff] bg-clip-text text-transparent mb-4'>
        What is InturnClub
      </div>

      {/* Text Content */}
      <div className='w-full sm:w-[90%] md:w-[80%] flex flex-col justify-center items-center space-y-1 text-center text-sm sm:text-base'>
        <p>
          InturnClub is a platform that allows educators to create online classes whereby
        </p>
        <p>
          they can store the course materials online, manage assignments, quizzes and exams,
        </p>
        <p>
          monitor due dates, grade results and provide students with feedback all in one place.
        </p>
      </div>

      {/* Image Section */}
      <div className='flex flex-col sm:flex-row justify-center items-center gap-6 mt-10 w-full'>
        <div className='w-full sm:w-[45%] max-w-[600px] h-auto'>
          <img src="/Images/Rectangle19.png" alt="img" className='w-full h-full object-cover rounded-2xl' />
        </div>
        <div className='w-full sm:w-[45%] max-w-[600px] h-auto'>
          <img src="/Images/Rectangle21.png" alt="img" className='w-full h-full object-cover rounded-2xl' />
        </div>
      </div>
    </div>
  )
}

export default Platform
