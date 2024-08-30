import React from 'react'

const Login = () => {
  return (
    <>
    <div className=' w-full '>
    <h6 className=' font-poppins text-2xl text-center pt-4'>Welcome to Sasto Bazar login page</h6>


    <div className='login-page  text-left  mx-96 pt-4 pl-36 pb-16  pb-4 bg-gray-200  '>
        <div>
    <h6 className='pb-3'>Login with Email and password</h6>
<form action="#">
    <div className='Email pb-4'>
        <div className='mb-2'>
        <span >Email/Phone:</span>
        </div>
        <div>
    <input 
    type="text"
    placeholder="Enter Email or phone" 
    className='text-grey border border-gray-300 w-3/4 py-2 px-2 pr-8 focus:outline-none'
    />
    
    </div>
    </div>

    <div className='password'>
        <div className='mb-2'> 
        <span>Password:</span>
        </div>
        <div>
    <input 
    type="password"
    placeholder="Enter password" 
    className='text-grey border border-gray-300 w-3/4 py-2 px-2 pr-8 focus:outline-none'
    />
    </div>
    </div>


    <button type="button" class=" my-6 w-3/4 focus:outline-none text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Login</button>

    
  <div className='font-poppins pl-12 pt-2'>
    <span>Don't have an accout ? Click here</span>
    
    </div>
    </form>
   
    </div>
</div>
</div>
   
    </>
  )
}

export default Login