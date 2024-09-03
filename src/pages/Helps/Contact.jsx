import React from 'react'
import logo from '../../assets/images/favicon.png'

const Contact = () => {
  return (
    <>
    <div className='container d-flex  text-black justify-start pl-24 mt-20 pt-2 pb-2  bg-[#F8F8FA]'>

      <div className=''>
        <img src={logo} alt=""  className='pt-1' height="100%" width="100%" />
      </div>
       <div className='font-poppins text-start  justify-center pl- pt-10'>
        <ul>
            <li>For order status inquiry, please click here .</li>

            <li> To cancel and return ordered items, please log-in with your account here . </li>

           <li> For other concerns, feel free to visit our Help Center Page here </li>

            <li>Can't find the answer you are looking for?</li>
            Daz, your automated virtual assistant is available 24 hours a day. 
            LIVE CHAT services are available from 8 am to 11 pm, 7 Days a Week. 

           <li> Still need help? Click here  </li>
            </ul>
      </div> 
    </div>
    </>
  )
}

export default Contact