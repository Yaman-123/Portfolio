import React from 'react'
import Table1 from './Table1'
import Table2 from './Table2'

const TableWrapper = () => {
  return (
    <div className='  relative flex flex-wrap py-4 w-full gap-x-6   max-[1133px]:justify-center   w-full
    max-[354px]:grid max-[354px]:place-items-start  '>
        <Table1/>
        <Table2/>
    </div>
  )
}

export default TableWrapper