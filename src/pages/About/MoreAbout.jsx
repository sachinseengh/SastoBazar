import React, { useState } from 'react'
import Image from '../../assets/images/aboutus.png'
import DetailedInfo from '../DetailedInfo/DetailedInfo'

const MoreAbout = () => {
    const [current,next] = useState(false)

    const handleShow = ()=>{
   next(true)
    }
  return (
   
    <>
    
    <div className={`container font-poppins px-4 py-0 mix-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl
            md:px-24 lg:px-8 lg:py-20
            `}>
    

        <div className='grid gap-8 lg:grid-cols-2'>

        <div className='flex justify-center'>
                <img src={Image} alt="sastoBazar" className='w-full h-72 max-w-md object-contain animate-moveUpDown' />
            </div>
            <div>
                <h2 className='mb-4 text-3xl font-bold leading-none sm:text-4xl'>
                    <span className='mr-2'>Our Story</span>
                    <span className='text-orange-500'>Know Us</span>
                </h2>
                <p className='mb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dicta, molestias aspernatur voluptatibus doloribus consequatur nostrum sapiente quidem odio, hic id necessitatibus ipsam excepturi in, quia fugiat? Temporibus, eligendi incidunt repellat ad odit saepe possimus assumenda corrupti accusamus dicta neque.
                <hr />

                </p>
                
                   
             
                
                <button className='inline-block py-2 px-4 text-white bg-orange-500 hover:bg-orange-600 rounded-lg no-underline' onClick={handleShow}>
                Learn more
               </button>
            </div>
          
          
    </div>
    {current ? <DetailedInfo/>: ""} 
    </div>
    </>
  )
}

export default MoreAbout