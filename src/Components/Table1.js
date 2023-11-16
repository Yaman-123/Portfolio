import React from 'react'

const Table1 = () => {
  return (
    <div>
        <table className=' text-left  max-[568px]:w-full'>
            <thead>
                <tr className=''>
                    <td  className='color '>Name:</td>
                    <td  className='text-white'>Yaman</td>
                </tr>
                <tr className=''>
                    <td className='color '>Date of Birth:</td>
                    <td className='text-white '>26/08/2001</td>
                </tr>
                <tr className=''>
                    <td className='color '>Address:</td>
                    <td className='text-white '>Haryana,1273/5 India</td>
                </tr>
            </thead>
        </table>
    </div>
  )
}

export default Table1