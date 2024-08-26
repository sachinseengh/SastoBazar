import React from 'react'
import { FaViber } from 'react-icons/fa6'

const TopHeader = () => {
  return (
    <>
    <div className='font-poppins pt-1 border-b p-2 px-4 flex justify-between items-center'>
<div className='flex items-center space-x-2'>
    <FaViber className="text-blue-500">

    </FaViber>
    <span className="text-sm text-gray-700">Customer Support</span>

</div>
<div className="flex items-center space-x-2">
    <a href="#" className='text-sm text-gray-700 hover:text-blue-500'>
        Login
    </a>
    <span className='text-sm tet-gray-700'>/</span>
    <a href="#" className='text-sm text-gray-700 hover:text-blue-500'> Register</a>
</div>

    </div>
    </>
  )
}

export default TopHeader