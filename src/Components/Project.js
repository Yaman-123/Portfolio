import React from 'react'
import "../../src/Main.css"
const Project = () => {
    return (
        <>
            <div className='p-2 text-center text-white font-bold text-3xl bg-color'>
                <p>Project</p>

            </div>
            <div className='grid place-items-center  bg-color p-4'>
                <div className=' header-width flex max-[698px]:gap-x-36 max-[698px]:gap-y-8 flex-wrap justify-center gap-x-8 p-4'>
                    <div className='  h-80 w-5/12 rounded bg-img relative max-[698px]:w-72 rounded-3xl'>
                        <div className=' rounded-full w-max h-max border absolute right-2 top-2'>
                            Yamna
                        </div>  
                    </div>

                    <div className='  h-80 w-5/12 rounded bg-img1 relative  max-[698px]:w-72 rounded-3xl'>
                        <div className=' rounded-full w-max h-max border absolute right-2 top-2'>
                            yaman
                        </div>
                    </div>


                </div>
                <div className=' header-width flex flex-wrap justify-center gap-x-8 max-[698px]:my-4'>
                    <div className='  h-80 w-10/12 rounded bg-img2 relative max-[698px]:w-72 rounded-3xl'>
                        <div className=' rounded-full w-max h-max absolute border right-2 top-2 '>
                            yaman
                        </div>
                    </div>



                </div>
            </div>
        </>
    )
}

export default Project