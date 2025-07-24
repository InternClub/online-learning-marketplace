
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom'
const Footer = () => {
  const location = useLocation();
  const hiddenPaths = ["/login", "/register", "/resetpassword", "/profile",];
  const isHidden = hiddenPaths.includes(location.pathname);






    const navigate  = useNavigate();
   const handlePrivacy = ()=> navigate('/policy');
   const handleTMC = ()=> navigate('/tmc');

  return (
    <div className={`bg-blue-950 p-10 text-white ${isHidden ? 'hidden' : ''}`}>
        <div className='flex items-center justify-center gap-10 mb-5 ' >
            <h3 className='h-5 gap-4 font-bold text-4xl text-shadow-2xs text-shadow-green-500 text-pink-400 ' >InternHub</h3>
            <img src="/Images/Line 10.png" alt="" />
            <p className=''>Vertual Class <br /> for  Learners</p>
        </div>
        <div className='flex items-center justify-center flex-col'> 
            <p className='text-2xl font-semibold font-sans mb-2'>Subscribe to get our Newsletter</p>
            <div>
                <input 
                className='rounded border placeholder:text-amber-400 mr-5'
                placeholder='your mail'
                type="email" 
                />
                <button className='bg-red-600 w-20 h-8 rounded-xl  cursor-pointer '>Subscribe</button>
            </div>
        </div>
        <div className='lfex items-center justify-center font-mono mt-5'>
            <div className='flex items-center justify-center flex-row gap-4 mb-3 '>
                <p className='hover:text-blue-700 hover:underline cursor-pointer'>Careers</p>
                <p className='hover:text-blue-700 hover:underline cursor-pointer'>|</p>
                <p className='hover:text-blue-700 hover:underline cursor-pointer'
                onClick={handlePrivacy}
                >Privacy Policy</p>
                <p className='hover:text-blue-700 hover:underline cursor-pointer'>|</p>
                <p className='hover:text-blue-700 hover:underline cursor-pointer'
                onClick={handleTMC}
                >Terms & Conditions</p>
            </div>
            <p className='flex items-center justify-center'>&copy; 2025 InternHub Pvt. Ltd.</p>
        </div>
      
    </div>
  )
}

export default Footer
