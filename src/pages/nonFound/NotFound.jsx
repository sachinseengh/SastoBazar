import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../assets/images/notfound.png'

const NotFound = () => {
  return (
    <>
    
    
    <div className='flex flex-col items-center justify-center h-screen font-poppins'>
        <h1 className='text-center text-3xl text-gray-700 '>
            OOPS Page not Found
        </h1>
        <img src={image} alt="not foundImg" className='h-96 max-w-full'/>
        <Link to='/' className="bg-orange-500 hover:bg-orange-500 text-white py-3 px-4 rounded-sm no-underline">
        Back to Home
        </Link>
    </div>
    
    
    
    
    </>
  )
}

export default NotFound