
import React from 'react'
import logo from '../../assets/images/logo.png'
import logo_wh  from '../../assets/images/logo-white.png'

import {FiHeart,FiSearch,FiShoppingCart} from 'react-icons/fi'
import { Link } from 'react-router-dom'



const Header = (props) => {
  return (
   <>
   <header className={`font-poppins flex items-center justify-evenly p-4 bg-${props.mode}-200 text-${props.mode === "light" ? "black":"white"} `}>
    <div className='flex items-center'>
    <Link to="/">  <img src={props.mode === "light" ? logo:logo_wh} alt="sastoBazar logo"
      className='h-12 w-full pr-2' /></Link>
    </div>
    <div className='flex items-center justify-center w-2/5 relative'>

    <input 
    type="text"
    placeholder="I'm searching for" 
    className={`text-grey border bg-${props.mode === "light" ? "":"black"} border-gray-300 w-full py-2 px-2 pr-8 focus:outline-none`}
    />
    <button className='absolute top-0 right-0 flex items-center justify-center h-full w-20 bg-orange-500'>
      <FiSearch className="h-4 w-4 text-white"/>
    </button>
    </div>

    <div className='flex items-center ml-2'>
      <div className='flex items-center'>
        <FiHeart className="h-6 w-6 "/>
        <span className="ml-1 ">Wishlist</span>
      </div>
      <div className='ml-4'>
        <button className='relative'>
          <FiShoppingCart className="h-6 w-6 "/>
          <span className='absolute top-0 right-0 inline-flex items-center justify-center
          px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2
          bg-orange-500 rounded-fill'></span>
        </button>
      </div>
    </div>
   </header>
  
   </>

  )
}

export default Header