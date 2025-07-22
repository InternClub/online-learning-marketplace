import React from 'react'
import group83 from'/Images/Group 83.png'
import Group122 from '/Images/Group 122.png'

const Features = () => {
  return (
    <div className='flex w-full h-full flex-col justify-center items-center mt-10'>
        <div className='flex w-full h-[150px] text-6xl font-bold justify-center items-center bg-gradient-to-r from-[#000c14] to-[#49BBBD] bg-clip-text text-transparent'>Our Features
        </div>
            <p>This very extraordinary feature, can make learning activities more efficient</p>
        <div className='flex w-full h-full mt-15 px-6 flex-col relative'>
            <div className='flex w-full h-[970px] justify-center items-center'>
                <div className='flex w-full bg-black opacity-50 h-[700px]'/>
            <img src={group83} alt="" className='h-[1200px] w-full object-cover absolute p-5 ' />
                <p>This is a description of the feature.</p>
            </div>
            <img src={Group122} alt="" className='h-[620px] object-cover ' />
        </div>
    </div>
  )
}

export default Features