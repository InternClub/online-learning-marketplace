import React from 'react'

const Platform = () => {
  return (
    <div className='flex w-full h-[800px] flex-col justify-center items-center'>
        <div className='flex w-full h-[80px] text-[44px] font-semibold justify-center items-center bg-gradient-to-r from-[#075e98] to-[#4bfcff] bg-clip-text text-transparent'>What is InturnClub</div>
        <div className='flex w-[70%] flex-col justify-center items-center mt-5'>
            <p>InturnClub is a platform that allows educators to create online classes whereby  </p>
            <p>they can store the course materials online manage assignments, quizzes and exams</p>
            <p>monitor due dates; grade results and provide students with feedback all in one place.</p>
        </div>
        <div className='flex w-full h-[600px] p-[] gap-7 justify-center items-center'>
            <div className='w-[600px] h-[400px]'>
                <img src="/Images/Rectangle19.png" alt="img" className='w-full h-full object-cover rounded-2xl' />
            </div>
            <div className='w-[600px] h-[400px]'>
                <img src="/Images/Rectangle21.png" alt="img" className='h-full w-[600px] object-fit  rounded-2xl' />
            </div>
        </div>

    </div>
  )
}

export default Platform