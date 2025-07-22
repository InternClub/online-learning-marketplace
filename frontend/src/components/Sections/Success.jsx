import React from 'react'
import Group79 from '/Images/Group 79.png'
import group81 from '/Images/Group 81.png'
import group80 from '/Images/Group 80.png'

const Success = () => {
  return (
    <div className='flex items-center justify-center h-[100] w-full flex-col mt-15'>
        
        <div className="flex w-full h-[50px] items-center justify-center text-6xl  font-bold bg-gradient-to-r from-[#000c14] to-[#49BBBD] bg-clip-text text-transparent">Our Success</div>

        <div className="flex flex-col w-full h-[15rem] justify-center items-center">
            <p className="text-lg">We are proud to have achieved significant milestones in our journey.</p>
            <p className="text-lg">Our commitment to excellence has led us to numerous successes.</p>
        </div>

        <div className="flex w-full h-[5rem] items-center justify-around mt-5 gap-10">
          <div className="flex flex-col items-center justify-center">
            <p className="text-4xl font-bold bg-gradient-to-r from-[#4fb5f9] to-[#49BBBD] bg-clip-text text-transparent">10K+</p>
            <p className="text-lg">Satisfied Students</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-4xl font-bold bg-gradient-to-r from-[#4fb5f9] to-[#49BBBD] bg-clip-text text-transparent">500+</p>
            <p className="text-lg">Courses Offered</p>
          </div>
          <div className="flex flex-col items-center justify-center  ">
            <p className="text-4xl font-bold bg-gradient-to-r from-[#4fb5f9] to-[#49BBBD] bg-clip-text text-transparent">100+</p>
            <p className="text-lg">Expert Instructors</p>
          </div>
          <div className="flex flex-col items-center justify-center  ">
            <p className="text-4xl font-bold bg-gradient-to-r from-[#4fb5f9] to-[#49BBBD] bg-clip-text text-transparent">15+</p>
            <p className="text-lg">Years of experience</p>
          </div>
          <div className="flex flex-col items-center justify-center  ">
            <p className="text-4xl font-bold bg-gradient-to-r from-[#4fb5f9] to-[#49BBBD] bg-clip-text text-transparent">90%</p>
            <p className="text-lg">Success Rate</p>
          </div>

        </div>

        <div className="flex w-full h-[50px] items-center justify-center text-6xl  font-bold mt-20 bg-gradient-to-r from-[#000c14] to-[#49BBBD] bg-clip-text text-transparent">All-In-One Cloud Software.</div>

        <div className="flex flex-col w-full h-[15rem] justify-center items-center">
            <p className="text-lg">InturnClub is one powerful online software suite that</p>
            <p className="text-lg">Combines all the tools needed to run a successful school or office.</p>
        </div>

        <div className="flex w-full h-[500px] p-[100px] gap-7 justify-center items-center">
            <div className="flex flex-col w-[450px] h-[300px] shadow-2xl rounded-2xl justify-center items-center px-5 relative">
                <div className="flex w-[70%] h-[50%] justify-center items-center text-[25px] mt-5">
                    <p>Online Billing, Invoicing & Contracts</p>
                </div>
                <div className="flex w-full h-[70%] px-5">
                    <p>Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts</p>
                </div>
                <img src={Group79} alt="img" className='h-35 w-35 absolute -top-15' />
            </div>
            <div className="flex flex-col w-[450px] h-[300px] shadow-2xl rounded-2xl justify-center items-center px-5 relative">
                 <div className="flex w-[70%] h-[50%] justify-center items-center text-[25px] mt-5">
                    <p>Easy Scheduling & Attendance Tracking</p>
                </div>
                <div className="flex w-full h-[70%] px-5">
                    <p>Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance</p>
                </div>
                <img src={group80} alt="img" className='h-35 w-35 absolute -top-15' />
            </div>
            <div className="flex flex-col w-[450px] h-[300px] shadow-2xl rounded-2xl justify-center items-center px-5 relative">
                <div className="flex w-[70%] h-[50%] justify-center items-center text-[25px] mt-5">
                    <p>Customer Tracking</p>
                </div>
                <div className="flex w-full h-[70%] px-5">
                    <p>Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization</p>
                </div>
                <img src={group81} alt="img" className='h-35 w-35 absolute -top-15' />
            </div>

        </div>

    </div>
  )
}

export default Success