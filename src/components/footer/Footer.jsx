import React from 'react';
import playstore from '../../assets/images/googleplay.png'
import appstore from '../../assets/images/appstore.png'


const Footer = () => {
  return (
    <div className="bg-orange-500 text-white text-center fixed p-4 pb-0 pt-8 bottom-0 left-0 w-full  font-poppins text-sm">
         <div className='d-flex justify-around container '>
        <div>
          <h4 className='text-left pl-0'>Customer Care</h4>
          <ol className='text-left pl-0 font-light'>
          <li >Help Center</li>
          <li>How to Buy</li>
          <li>Returns & Refunds</li>
          <li>Contact Us</li>
          </ol>
        </div>
      <div>
        <h4 className='text-left pl-0'>Daraz</h4>
        <ol className='text-left pl-0 font-light'>
        <li>Help Center</li>
        <li>How to Buy</li>
        <li>Returns & Refunds</li>
        <li>Contact Us</li>
        </ol>
      </div>
      <div >
        
      <h4 >Happy Shopping</h4>
      <h6 className='font-light text-left ' ><a href='' className=' text-gray-500'>Download App</a></h6>  
      </div>

      <div className='d-flex justify-normal'>
        
      
        <img src={playstore} alt=""  className='h-12 w-full pr-2'  />
       
    
        <img src={appstore} alt=""   className='h-12 w-full pr-2' />
      
      </div>
      </div>
    </div>
  );
};

export default Footer;
