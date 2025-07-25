import React from 'react'
import meeting from '/Images/meeting.jpg'
import Group122 from '/Images/Group 122.png'
import Group92 from '/Images/Group92.png'
import Group124 from '/Images/Group124.png'
import Group106 from '/Images/Group106.png'
import Group72 from '/Images/Group 72.png'
import Group73 from '/Images/Group 73.png'
import users2 from '/Images/users 2.png'

const Features = () => {
  return (
    <div className='flex w-full flex-col justify-center items-center mt-10 px-4 sm:px-6'>
      <div className='flex w-full h-auto min-h-[100px] text-3xl sm:text-5xl font-bold justify-center items-center bg-gradient-to-r from-[#000c14] to-[#49BBBD] bg-clip-text text-transparent text-center'>
        Our Features
      </div>
      <p className='text-sm sm:text-base text-center mt-4'>
        This very extraordinary feature can make learning activities more efficient
      </p>

      <div className='flex w-full mt-10 flex-col gap-20'>

        {/* Block 1 */}
        <div className='flex flex-col-reverse lg:flex-row justify-center items-center gap-6 px-4 sm:px-[50px]'>
          <div className='flex flex-col gap-5 w-full lg:w-[70%] justify-center items-center lg:items-start px-2'>
            <div className='text-2xl sm:text-4xl font-bold bg-gradient-to-r from-[#075e98] to-[#4bfcff] bg-clip-text text-transparent text-center lg:text-left'>
              A user interface designed for the classroom
            </div>
            <div className='flex gap-3 items-start'>
              <img src={Group72} alt="img" className='h-6 w-6' />
              <p className='text-sm sm:text-lg'>Teachers don’t get lost in the grid view and have a dedicated Podium space.</p>
            </div>
            <div className='flex gap-3 items-start'>
              <img src={Group73} alt="img" className='h-6 w-6' />
              <p className='text-sm sm:text-lg'>TA’s and presenters can be moved to the front of the class.</p>
            </div>
            <div className='flex gap-3 items-start'>
              <img src={users2} alt="img" className='h-6 w-6' />
              <p className='text-sm sm:text-lg'>Teachers can easily see all students and class data at one time.</p>
            </div>
          </div>
          <img src={meeting} alt="meeting" className='w-full max-w-md h-auto object-contain' />
        </div>

        {/* Block 2 */}
        <div className='flex flex-col lg:flex-row justify-center items-center gap-6 px-4 sm:px-[50px]'>
          <div className='flex flex-col gap-5 w-full lg:w-[70%] justify-center items-center lg:items-start px-2'>
            <div className='text-2xl sm:text-4xl font-bold bg-gradient-to-r from-[#075e98] to-[#4bfcff] bg-clip-text text-transparent text-center lg:text-left'>
              Tools For Teachers And Learners
            </div>
            <p className='text-sm sm:text-lg text-center lg:text-left'>
              Class has a dynamic set of teaching tools built to be deployed and used during class. Teachers can handout assignments in real-time for students to complete and submit.
            </p>
          </div>
          <img src={Group122} alt="feature" className='w-full max-w-md h-auto object-contain' />
        </div>

        {/* Repeat the same layout structure for the rest of the blocks */}
        {/* Block 3 */}
        <div className='flex flex-col-reverse lg:flex-row justify-center items-center gap-6 px-4 sm:px-[50px]'>
          <div className='flex flex-col gap-5 w-full lg:w-[70%] justify-center items-center lg:items-start px-2'>
            <div className='text-2xl sm:text-4xl font-bold bg-gradient-to-r from-[#075e98] to-[#4bfcff] bg-clip-text text-transparent text-center lg:text-left'>
              Assessments, Quizzes, Tests
            </div>
            <p className='text-sm sm:text-lg text-center lg:text-left'>
              Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the online gradebook.
            </p>
          </div>
          <img src={Group92} alt="feature" className='w-full max-w-md h-auto object-contain' />
        </div>

        {/* Block 4 */}
        <div className='flex flex-col lg:flex-row justify-center items-center gap-6 px-4 sm:px-[50px]'>
          <div className='flex flex-col gap-5 w-full lg:w-[70%] justify-center items-center lg:items-start px-2'>
            <div className='text-2xl sm:text-4xl font-bold bg-gradient-to-r from-[#075e98] to-[#4bfcff] bg-clip-text text-transparent text-center lg:text-left'>
              Class Management Tools for Educators
            </div>
            <p className='text-sm sm:text-lg text-center lg:text-left'>
              Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.
            </p>
          </div>
          <img src={Group124} alt="feature" className='w-full max-w-md h-auto object-contain' />
        </div>

        {/* Block 5 */}
        <div className='flex flex-col-reverse lg:flex-row justify-center items-center gap-6 px-4 sm:px-[50px]'>
          <div className='flex flex-col gap-5 w-full lg:w-[70%] justify-center items-center lg:items-start px-2'>
            <div className='text-2xl sm:text-4xl font-bold bg-gradient-to-r from-[#075e98] to-[#4bfcff] bg-clip-text text-transparent text-center lg:text-left'>
              One-on-One Discussions
            </div>
            <p className='text-sm sm:text-lg text-center lg:text-left'>
              Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.
            </p>
          </div>
          <img src={Group106} alt="feature" className='w-full max-w-md h-auto object-contain' />
        </div>

      </div>
    </div>
  )
}

export default Features
