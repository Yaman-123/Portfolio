import React from 'react'
import "../../src/Main.css"
import Yaman from "../Images/Yamann.png"

import TableWrapper from './TableWrapper'

const Banner = (props) => {

  return (
    <div className=' grid place-items-center w-full  rounded-3xl bg-color z-ind-1' >
      <div className='   w-full relative  max-[1133px]:grid max-[1133px]:place-items-center   banner-width w-11/12  py-20 max-[1054px]:gap-y-4 '>
        <div className=' rounded-full bg-slate-50 overflow-hidden img-height py-4 pl-4 ml-3.5'>
          <img src={Yaman} alt=""  className='py-4 '/>
        </div>
        <div className=' relative banner-text-width flex flex-col items-start max-[1054px]:text-center py-4 '>
          <div className='max-[1127px]:text-center  w-full '><h4 className="color font-bold not-italic py-4 ">About Me</h4></div>
          <div className='py-4'>
            <p className='text-white text-3xl max-[320px]:text-2xl font-bold not-italic max-[1127px]:text-center  '>A Web Designer & Developer Based in India. </p>

          </div>
          <div className='py-4 w-full max-[1127px]:text-center   max-[354px]:text-justify '>
            <p className='text-white '>Yaman, a skilled web developer, creates websites and web applications using HTML, CSS, and JavaScript . I combine design and functionality   to deliver impressive online experiences.</p>

          </div>

          <TableWrapper />
          <div className=' w-full flex flex-wrap gap-y-8 gap-x-8 py-4 max-[1127px]:grid max-[1127px]:place-items-center  w-full '>
            <button className='text-white bg-color2 p-2 rounded font-bold'>Resume {" "}<i className="fa-sharp fa-regular fa-paper-plane icon-color "></i></button>
            <button className='text-white bg-color2 p-2 rounded font-bold p-2'>Hire Me {" "}<i className="fa-sharp fa-regular fa-paper-plane icon-color"></i></button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Banner