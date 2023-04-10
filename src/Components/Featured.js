import React from 'react'
import a from '../Components/assets/a.png'
import b from '../Components/assets/b.png'
import c from '../Components/assets/c.png'
import d from '../Components/assets/d.png'
import e from '../Components/assets/e.png'
import f from '../Components/assets/f.png'

const Featured = () => {
  return (
    <div>
        <div className='text-red-400 font-bold mx-2 py-1'>FEATURED COMPANIES</div>
        <div className='bg-blue-50 flex h-20   items-center w-full'>
        <div className='flex items-center w-20 h-20 gap-5 sm:gap-[70px] m-2  '>
            <img src={a} alt=""  />
            <img src={b} alt="" />
            <img src={c} alt="" />
            <img src={d} alt="" />
            <img src={e} alt="" />
            <img src={f} alt="" />
            <img src={a} alt="" />
            <img src={b} alt="" />
            <img src={c} alt="" />
            <img src={d} alt="" />
            
        </div>
        </div>
    </div>
  )
}

export default Featured