import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const NavBar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleLoggedinToggle=()=>{
           setIsLoggedIn(!isLoggedIn);
        navigate('/login')
    }
    const handleSingupToggle=()=>{
        navigate('/register');
    }
    
  return (
    <div className=' flex items-center justify-center gap-10 w-full h-15 '>

      <div>InternHub</div>
      <div className='flex items-center justify-between gap-5'>
        <input type="search" placeholder='Search Here'   />
        <button className='border-2 bg-[#C5C6C7] rounded-xl w-30 '>Search</button>
      </div>
      {!isLoggedIn ? (
        <>
         <button
         onClick={handleSingupToggle}
         >SignUp</button>
         <button 
         onClick={handleLoggedinToggle}
         >LogIn
         </button>
        </>
      ): (
        <>
        <button>
            Dashboard
        </button>
        <button
        onClick={handleLoggedinToggle}
        >
            LogOut
        </button>
        </>
      )}
    </div>
  );
};

export default NavBar
