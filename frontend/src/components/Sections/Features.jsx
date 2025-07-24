import React from 'react'
import group83 from'/Images/Group 83.png'
import Group122 from '/Images/Group 122.png'
import Group92 from '/Images/Group92.png'
import Group124 from '/Images/Group124.png'
import Group106 from '/Images/Group106.png'

const Features = () => {
  return (
    <div className='flex w-full h-full flex-col justify-center items-center mt-10'>
        <div className='flex w-full h-[150px] text-6xl font-bold justify-center items-center bg-gradient-to-r from-[#000c14] to-[#49BBBD] bg-clip-text text-transparent'>Our Features
        </div>
            <p>This very extraordinary feature, can make learning activities more efficient</p>
        <div className='flex w-full h-full mt-15 px-6 flex-col relative'>
            <div className='flex w-full h-[970px] justify-center items-center'>
                <div className='flex w-full opacity-50 h-[700px] items-center'/>
            <img src={group83} alt="" className='h-[900px] w-full object-scale-down absolute p-5 ' />
                
            </div>
            <div className='flex w-full h-[620px] justify-center items-center'>
                <div className='flex w-[70%] h-[620px] flex-col justify-center items-center gap-5 px-5'>
                    <div className='flex w-full h-[100px] text-4xl font-bold justify-center items-center bg-gradient-to-r from-[#075e98] to-[#4bfcff] bg-clip-text text-transparent'>Tools For Teachers And Learners</div>
                    <p className='text-lg w-130'>Class has a dynamic set of teaching tools built to be deployed and used during class. Teachers can handout assignments in real-time for students to complete and submit.</p>
                </div>
            <img src={Group122} alt="" className='h-[620px] object-contain ' />
            </div>
            <div className='flex w-full h-[800px] justify-center items-center flex-row-reverse px-[50px]'>
                <div className='flex w-[70%] h-[620px] flex-col justify-center items-center gap-5 px-5'>
                    <div className='flex w-full h-[100px] text-4xl font-bold justify-center items-center bg-gradient-to-r from-[#075e98] to-[#4bfcff] bg-clip-text text-transparent'>Assessments, Quizzes, Tests</div>
                    <p className='text-lg w-130'>Easily launch live assignments, quizzes, and tests.Student results are automatically entered in the online gradebook.</p>
                </div>
            <img src={Group92} alt="" className='h-[620px] object-contain ' />
            </div>
            <div className='flex w-full h-[800px] justify-center items-center px-[50px]'>
                <div className='flex w-[70%] h-[620px] flex-col justify-center items-center gap-5 px-5'>
                    <div className='flex w-full h-[100px] text-4xl font-bold justify-center items-center bg-gradient-to-r from-[#075e98] to-[#4bfcff] bg-clip-text text-transparent'>Class Management Tools for Educators</div>
                    <p className='text-lg w-130'>Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.</p>
                </div>
            <img src={Group124} alt="" className='h-[620px] object-contain ' />
            </div>
            <div className='flex w-full h-[800px] justify-center items-center flex-row-reverse px-[50px]'>
                <div className='flex w-[70%] h-[620px] flex-col justify-center items-center gap-5 px-5'>
                    <div className='flex w-full h-[100px] text-4xl font-bold justify-center items-center bg-gradient-to-r from-[#075e98] to-[#4bfcff] bg-clip-text text-transparent'>One-on-One Discussions</div>
                    <p className='text-lg w-130'>Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.</p>
                </div>
            <img src={Group106} alt="" className='h-[620px] object-contain ' />
            </div>
        </div>
    </div>
  )
}

export default Features