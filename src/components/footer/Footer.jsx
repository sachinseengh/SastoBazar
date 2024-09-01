import React from 'react';
import playstore from '../../assets/images/googleplay.png'
import appstore from '../../assets/images/appstore.png'
import { Link } from 'react-router-dom';


const Footer = (props) => {


  //  background = (props.mode === "light" ? "orange":"black");

  return (
    <>
 

 

    <div className={`bg-${props.mode === "light" ?"orange":"black"}-400  text-${props.mode === "light" ? "white":"white"}   text-center mt-5  p-4 pb-3 pt-4 bottom-0 left-0 w-full  font-poppins text-sm`}>
    
    <hr />
         <div className='d-flex justify-around container '>
          <hr />
        <div>
          <h4 className='text-left pl-0'>Customer Care</h4>
          <ol className='text-left pl-0 font-light'>
          <li className='my-2' >Help Center</li>
          <li className='my-2'>How to Buy</li>
          <li className='my-2'>Returns & Refunds</li>
          <li className='my-2 '>
            <a href="/contact" target='_blank' className=' hover:text-orange-500 no-underline'>Contact us</a>
            {/* <Link to="/contact" className=''>Contact Us</Link> */}
            </li>
          </ol>
        </div>
      <div>
        <h4 className='text-left pl-0'>Sasto Bazar</h4>
        <ol className='text-left pl-0 font-light '>
        <li className='my-2'>
          <Link to ="/aboutus">About us</Link></li>
        
        <li className='my-2'>How to Buy</li>
        <li className='my-2'>Returns & Refunds</li>
        <li className='my-2'>Contact Us</li>
        </ol>
      </div>
      <div >
        
      <h4 >Happy Shopping</h4>
      <h6 className='font-light text-left ' ><a href='' className=' text-black-500'>Download App</a></h6>  
      </div>

      <div className='d-flex justify-normal'>
        
      
        <img src={playstore} alt=""  className='h-12 w-full pr-2'  />
       
    
        <img src={appstore} alt=""   className='h-12 w-full pr-2' />
      
      </div>
      </div>
      <hr />

      <span >@ 2024 SastoBazar. All rights Reserved </span>
      
    </div>
    </>
  );
};

export default Footer;
