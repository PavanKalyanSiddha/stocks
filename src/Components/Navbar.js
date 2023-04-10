import React from 'react'
import logo from '../Components/assets/logo.jpg'
import { FiSearch } from 'react-icons/fi';
import profilelogo from '../Components/assets/profilelogo.png'
const Navbar = () => {
  return (
    <div className='flex justify-between items-center '>
        <div>
            <img src={logo} alt='' className='w-[50px] h-[50px] mx-4  ' />
        </div>
        <div className="flex relative ">
          <input
            type="text"
           
            className=" bg-gray-300 rounded-md w-80 md:w-[400px] lg:w-[600px] h-8"
          />
          <FiSearch className="absolute m-2  right-0 " />
        </div>
       <div>
       <div className='hidden sm:flex items-center gap-2 m-2 p-2 text-[10px] font-semibold'>
            <div className='font-semibold text-[14px]'>Contact Us</div>
            <button className=' border border-black text-[14px]  px-2 py-1 font-sm'>SIGN UP</button>
            <button className=' border border-black text-[14px] px-2 py-1 font-sm'>SIGN IN</button>
        </div>
        <div>
            <img src={profilelogo} alt="" className=' sm:hidden flex rounded-full bg-red-400 w-6 h-6 m-4'/>
        </div>
       </div>
    </div>
  )
}

export default Navbar