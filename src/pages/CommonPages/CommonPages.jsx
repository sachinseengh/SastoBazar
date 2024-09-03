import React from 'react'
import Image from '../../assets/images/aboutus.png'
import { Link } from 'react-router-dom'
import MoreAbout from '../About/MoreAbout'

const commonpages = (props) => {
  return (
   <>
   
   <div className={` text-black container font-poppins px-4 py-16 mix-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl
    md:px-24 lg:px-8 lg:py-20
    `}>
        <div className='grid gap-8 lg:grid-cols-2'>
            <div>
                <h2 className='mb-4 text-3xl font-bold leading-none sm:text-4xl'>
                    <span className='mr-2'>{props.title}</span>
                    <span className='text-orange-500'>{props.subTitle}</span>
                </h2>
                <p className='mb-4'>
                    {props.desc1}
                </p>
                <>
                <p className='mb-4 '>{props.desc2}</p>
                
                </>
                <Link to={`/${props.visit}`} className='inline-block py-2 px-4 text-white bg-orange-500 hover:bg-orange-600 rounded-lg no-underline'>
               {props.btnAbout}</Link>
            </div>
            <div className='flex justify-center'>
                <img src={props.image} alt="sastoBazar" className='w-full h-96 max-w-md object-contain animate-moveUpDown' />
            </div>
        </div>
    </div>
    <MoreAbout></MoreAbout>
   </>
  )
}

export default commonpages