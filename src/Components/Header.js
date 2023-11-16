import React from 'react'
import "../../src/Main.css"
import { Link } from 'react-router-dom'
const Header = () => {


  return (
    <div className='relative  fixed-header	 bg-color2     grid place-items-center' >
      <ul className='flex justify-between gap     w-11/12  header-width fixed  '>
        <ul > <li className='p-4  text-white text-2xl  '>PORTFOLIO</li></ul>
        <ul className='flex justify-between  py-4 banner-text-width items-start check-width  '>
          <Link className="text-white max-[1334px]:hidden " to="/" >Home</Link>
          <Link className="text-white max-[1334px]:hidden" to="/About">About</Link>
          <Link className="text-white max-[1334px]:hidden" to="/Skills">Skills</Link>
          <Link className="text-white max-[1334px]:hidden" to="/Contact">Contact</Link>
          <li className="text-white"><i className="fa-solid fa-bars  hidden  max-[1334px]:block  "></i></li>

        </ul>
      </ul>
    </div>
  )
}

export default Header