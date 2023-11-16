import React from 'react'

const Footer = () => {


  return (
    <>
      <div className='border grid place-items-center bg-color' >
        <div className='border header-width text-white flex justify-between flex-wrap p-8 '>
          <div className='border font-bold max-[821px]:w-full max-[821px]:block max-[821px]:text-center'>
            Designed & Developed By Yaman <span>	&#169;</span> 2023
          </div>
          <div className='border flex justify-around w-3/12 max-[821px]:w-full max-[821px]:block relative max-[821px]:text-center '>
            <a href=''><i className="fa-brands fa-facebook"></i></a>
            <a href=''><i className="fa-brands fa-linkedin-in"></i></a>
            <a href=''><i className="fa-brands fa-square-instagram"></i></a>
            <a href=''><i className="fa-brands fa-github"></i></a>

          </div>
        </div>

      </div>
    </>
  )
}

export default Footer