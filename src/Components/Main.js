import React from 'react'
import { BsCaretRight } from 'react-icons/bs';
import { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { BsBell } from 'react-icons/bs';
import { AiOutlineMessage } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { GiSelfLove } from 'react-icons/gi';
import { AiFillEye } from 'react-icons/ai';
import { FiMessageSquare } from 'react-icons/fi';
import { GrShareOption } from 'react-icons/gr';
import { IoIosAddCircle } from 'react-icons/io';

import stocks1 from '../Components/assets/stocks1.jpg'

import infibeam from '../Components/assets/infibeam.png'
import profilelogo from '../Components/assets/profilelogo.png'




const Main = () => {


  const [open , setOpen] = useState(false);
  

  return (
  
    <div className='flex gap-4 '>
      <div className={` flex   relative ${open ? "w-50 bg-blue-900 h-screen "  : "w-5"}`}>
      <div className={`h-10 w-4 text-white py-3 rounded-sm bg-blue-900 cursor-pointer duration-300  absolute right-1 top-1 ${!open && "rotate-180"}`}  onClick={()=>setOpen(!open)}><BsCaretRight /></div>
      <div className={`flex justify-center gap-2 p-4  ${!open && "scale-0"}`}>
        <div className=''>
          <div className=' flex gap-2'>
          <div className='text-white p-2 text-[26px]'><CgProfile /></div>
        <div className='text-white my-2'>Hello,User</div> 
        <div className='text-white p-2 text-[26px]'><BsBell /></div>
          </div>
          <div className='border m-2 border-gray-400  w-full '></div>
    <div className='flex'>       <div className='text-white p-2 text-[20px]'>< AiOutlineMessage/></div>
<select className='bg-blue-400'>

<option className=' '>Disscussion Fourm</option>
<option className=' '>Market Stories</option>
<option className=' '>sentiment</option>
<option className=' '>Market</option>
<option className=' '>Sector</option>
<option className=' '>Watchlist</option>
<option className=' '>Events</option>
<option className=' '>News/interview</option>

</select></div>
        </div>
        
      </div>
      </div>
    
      <div className='flex gap-2 '>
      <div><div className='text-[red] font-bold p-2'>DISSCUSSION FOURM</div>
      <div className='px-8 py-1 font-semibold'>
        Filters
        <div className='h-[70px] w-[400px] my-3  bg-gray-200 rounded-md sm:w-[600px]'>
          <div className='flex gap-3 p-4 text-[12px]'>
          <button className='bg-red-600 text-white px-5 m-2  rounded-full '>Sector1 </button>
          <button className='bg-blue-600 text-white  px-5 m-2  rounded-full'>Sector2 </button>
          <button className='bg-yellow-600 text-white  px-5 m-2  rounded-full'>Sector3 </button>
          <div className="flex relative ">
          <input
            type="text"
           
            className=" bg-gray-300 rounded-full w-[120px] p-2 sm:w-[200px] placeholder:text-gray-500 text-[16px] mx-2 px-8 sm:px-8 " placeholder='Search here' 
          />
          <FiSearch className="absolute m-3 text-[20px] " />
        </div>
          </div>
          <div className='w-[400px] h-[310px] rounded-md p-2 bg-gray-200 my-3 sm:w-[600px]'>
            <div className='text-blue-400 text-[13px] flex justify-end'>2 min ago</div>
            <img src={infibeam} alt='' className='p-2 mx-12 w-[350px]'/>
            <div className='flex gap-2'>
              <img src={profilelogo} alt='' className='rounded-full bg-red-400 w-9 h-9 '/>
              <div>Lorem ipsum</div>
              <button className='bg-red-600 text-white rounded-full mx-4 text-[13px]  px-4 m-2'>Sector1 </button>


            </div>
            <p className='m-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              </p>
              <div className='flex gap-4 m-4'>
                <GiSelfLove className='my-1 text-red-500' /> 2k
                <AiFillEye className='my-1'/> 2k
                <FiMessageSquare className='my-1'/> 2k Comments
                <GrShareOption className='my-1'/> share

              </div>


          </div>
          <div className='w-[400px] h-[175px] rounded-md p-2 bg-gray-200 my-3 sm:w-[600px]'>
            <div className='text-blue-400 text-[13px] flex justify-end'>2 min ago</div>
            <div className='flex gap-2'>
              <img src={profilelogo} alt='' className='rounded-full bg-red-400 w-9 h-9 '/>
              <div>Lorem ipsum</div>
              <button className='bg-blue-600 text-white rounded-full mx-4 text-[13px]  px-4 m-2'>Sector2 </button>


            </div>
            <p className='m-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              </p>
              <div className='flex gap-4 m-4'>
                <GiSelfLove className='my-1 ' /> 2k
                <AiFillEye className='my-1'/> 2k
                <FiMessageSquare className='my-1'/> 2k Comments
                <GrShareOption className='my-1'/> share

              </div>


          </div>
          <div className='w-[400px] h-[130px] rounded-md p-2 bg-gray-200 my-3 sm:w-[600px]'>
            <div className='text-blue-400 text-[13px] flex justify-end'>2 min ago</div>
            <div className='flex gap-2'>
              <img src={profilelogo} alt='' className='rounded-full bg-red-400 w-9 h-9 '/>
              <div>Lorem ipsum</div>
              <button className='bg-yellow-400 text-white rounded-full mx-4 text-[13px]  px-4 m-2'>Sector3 </button>


            </div>
            <p className='m-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              </p>


          </div>

      </div>
      </div>
      
      </div >
      <div><div className='text-[red] font-bold py-4 hide sm:flex  relative'>MARKET STORIES</div>
     <div className='flex relative '> <img src={stocks1} alt=''className='w-[500px] h-[200px] rounded-md my-4' /><span className='absolute text-white m-2 p-2 bottom-0 font-[50px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</span></div>
     <div className='flex relative '> <img src={stocks1} alt=''className='w-[500px] h-[200px] rounded-md my-4' /><span className='absolute text-white m-2 p-2 bottom-0 font-[50px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</span></div>
     <div className='flex relative '> <img src={stocks1} alt=''className='w-[500px] h-[200px] rounded-md my-4' /><span className='absolute text-white m-2 p-2 bottom-0 font-[50px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</span><IoIosAddCircle className='text-blue-900 w-[80px] h-[80px] absolute right-[-20px] bottom-[-30px] ' /></div>

      
      </div>
    </div>
      </div>
  )
}

export default Main