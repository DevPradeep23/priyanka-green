import React from 'react'
import Solor from '../../assest/Image/Sun-energy.png'
import Check from '../../assest/Image/check.png'


const AboutUs = () => {
  return (
    <div className=" container d-flex justify-content-evenly py-4 gap-5 ">
    <div className=" col-4 ">
        <img src={Solor} height={"100%"} width={"140%"} />
    </div>
    <div className=" col-4 text-start py-5 ">
    <button className='border border-0 px-4 py-2 mt-3 fw-bold rounded text-white' style={{backgroundColor:'#1b4959'}}>About Us</button>
   <h3 className='py-3 fs-2'>We Are The Best-In-Class Products & Solutions</h3>
   <p className='text-muted'>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
   <div className='row'>
    <div className='col-lg-6 gap-2 d-flex align-items-center py-2 text-muted fs-6'>
    <img src={Check} height={"16px"} width={"16px"} className='mt-1'/>
     Fast Services
    </div>
    <div className='col-lg-6 gap-2 d-flex align-items-center py-2 text-muted fs-6'>
    <img src={Check} height={"16px"} width={"16px"} className='mt-1'/>
    Wind Turbines
    </div>
    <div className='col-lg-6 gap-2 d-flex align-items-center py-2 text-muted fs-6'>
    <img src={Check} height={"16px"} width={"16px"} className='mt-1'/>
    Hybrid Energy
    </div>
    <div className='col-lg-6 gap-2 d-flex align-items-center py-2 text-muted fs-6'>
    <img src={Check} height={"16px"} width={"16px"} className='mt-1'/>
    Fast Services
    </div>
    <div className='col-lg-6 gap-2 d-flex align-items-center py-2 text-muted fs-6'>
    <img src={Check} height={"16px"} width={"16px"} className='mt-1'/>
    Solar Panels
    </div>
    <div className='col-lg-6 gap-2 d-flex align-items-center py-2 text-muted fs-6'>
    <img src={Check} height={"16px"} width={"16px"} className='mt-1'/>
    Fast Solar Panels
    </div>
    
    

   </div>
   
   <button className='border border-0 px-5 py-2 mt-3 fs-5 fw-bold rounded-pill text-white' style={{backgroundColor:'#1b4959'}}>Read More</button>
    </div>
  </div>
  )
}

export default AboutUs