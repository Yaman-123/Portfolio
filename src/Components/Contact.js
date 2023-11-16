import React from 'react'
import yaman from "../Images/fomr-img.webp"
const Contact = () => {
    return (
        <>
            <div className='grid place-items-center  p-8 '>
                <div className=' header-width relative flex flex-wrap  justify-center gap-x-8 p-8 bg-color rounded-3xl max-[1015px]:gap-y-10'>
                    <div className=' w-2/5 max-[1015px]:block max-[1015px]:w-11/12 '>
                        <img src={yaman} className='w-full h-full' alt='yaman'/>
                    </div>
                    <div className='p-4 rounded-3xl w-1/2  bg-color2 max-[1015px]:block max-[1015px]:w-11/12'>    <p className='text-white font-bold text-3xl color2-contact font-bold text-4xl'>Contact Us</p>
                        <input type='text' className='w-full my-6 h-14 rounded-md  p-2' placeholder='Enter Name' /><br/>
                        <input type='mail' className='w-full my-6 h-14 rounded-md p-2' placeholder='Enter Mail' /><br />
                        <textarea className='w-full my-6 h-24 rounded-md p-2' placeholder='Message Subject' /><br />
                        <textarea className='w-full my-6 h-24 rounded-md p-2' placeholder='Drop your message here' />
                        <button className='w-full my-6 bg-color rounded-md text-white font-bold non-italic  h-14'>Send</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact