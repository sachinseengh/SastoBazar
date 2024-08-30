import React from 'react'
import { FaViber, FaWhatsapp } from 'react-icons/fa6'
import { Link, NavLink } from 'react-router-dom'

const TopHeader = (props) => {
  return (
    <>
    <div className={`font-poppins pt-3 border-b p-2 px-4  text-${props.mode === "light" ? "black":"white"} flex justify-between items-center`}>
<div className='flex items-center space-x-2'>
    <FaViber className="text-blue-500">

    </FaViber>
    <FaWhatsapp className="text-green-500 "/>


    <span className="text-sm">Customer Support /</span>
    <span className="text-sm">+977 980000000</span>

</div>
<div className="flex items-center space-x-2">
    <NavLink to="/sastobazar-login" className='text-sm  hover:text-blue-500'>
        Login
    </NavLink>
    <span className='text-sm tet-gray-700'>/</span>
    <a href="#" className='text-sm hover:text-blue-500'> Register</a>


    <input type="checkbox" class="peer sr-only opacity-0" id="toggle" onClick={props.toggleMode}/>
    <label for="toggle" class="relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-gray-400 px-0.5 outline-gray-400 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow before:transition-transform before:duration-300 peer-checked:bg-orange-500 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-orange-500">
  <span class="sr-only">Enable</span>
</label> 
</div>




    </div>
    </>
  )
}

export default TopHeader