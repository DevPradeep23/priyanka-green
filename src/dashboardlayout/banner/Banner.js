import React from 'react'
import bg from "../../assest/Image/environment.jpg"

const Banner = () => {
  return (
    <div
    className='d-flex align-items-center'
    style={{
        backgroundImage: `url(${"https://europe.arcelormittal.com/content/images/europe/industry.png"})`,
        height:'85vh',
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat'
    }}
    >

    <div className='text-start text-red px-5' style={{color:'#1b4959'}}>
        <h1 className='fw-bold' style={{fontSize:"3rem"}}>Light Up With Your</h1>
        <h1 className='fw-bold ' style={{fontSize:"3rem"}}>Solor & Save Natural</h1>
        <h1 className='fw-bold ' style={{fontSize:"3rem"}}>Resorce</h1>
        <button className='border border-0 px-5 py-2 mt-3 fw-bold rounded-pill text-white' style={{backgroundColor:'#1b4959'}}>Learn More</button>
    </div>
    </div>
  )
}

export default Banner