import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { items } from './BannerData';




const BannerPage = () => {

  
  return (
    <>
    <div className='mx-36 w-3/4 my-4  '>
    <Carousel indicators={false}>
      {items.map((value,index)=>{

        //if we use curly braces then we have to use return 
        // if we use ( ) call back then we donot need return
        return(
            <Carousel.Item key={value.id}>
            <img src={value.image} alt={value.title} className='h-96 '/>
        </Carousel.Item>
        
        )
})}
    </Carousel>
    </div>
    
    
    
    </>
  )
}

export default BannerPage