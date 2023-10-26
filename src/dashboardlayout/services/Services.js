import React from 'react'
import Energy from '../../assest/Image/solar-energy.png'
import Fan from '../../assest/Image/smart-farm.png'
import Tree from '../../assest/Image/wind-power.png'
import Arr from '../../assest/Image/right-arrow.png'




const Services = () => {
  return (
    <div className='py-5' style={{backgroundColor:'#f7f9fe'}}>
       <button className='border border-0 px-5 py-2 rounded fw-bold ' style={{backgroundColor:'#e3f5fa', color:'#36d1dc'}} >Our Services</button>
       <h2 className='pt-3' style={{color:'#1b4959'}}>We Are Providing Best</h2>
       <h3 className='' style={{color:'#36d1dc'}}>Energy Solutions</h3>

       <div className='container'>
        <div className='row justify-content-center gap-4 pt-5 '>
    <div className='col-3 bg-white shadow-sm py-5 px-4 '>
        <img src={Energy}/>
        <h4 className='fw-bold pt-3' style={{color:'#1b4959'}}>Solar Plants</h4>
        <p className='text-muted pt-2'>Consectietur adipiscing elit sed desdeesio eiusmod tempor incididunt ut labore et dolore.</p>
        <div className='fw-bold pt-1 d-flex gap-2 align-items-center justify-content-center ' style={{color:'#36d1dc'}}>
        READ MORE 
        <img src={Arr} height={"13px"} width={"13px"}/>
        </div>
    </div>
    <div className='col-3 bg-white shadow-sm py-5 px-4'>
    <img src={Fan}/>
    <h4 className='fw-bold pt-3' style={{color:'#1b4959'}}>Solar Water Heater</h4>
        <p className='text-muted pt-2'>Consectietur adipiscing elit sed desdeesio eiusmod tempor incididunt ut labore et dolore.</p>
        <div className='fw-bold pt-1 d-flex gap-2 align-items-center justify-content-center ' style={{color:'#36d1dc'}}>
        READ MORE 
        <img src={Arr} height={"13px"} width={"13px"}/>
        </div>
    
    </div>
    <div className='col-3 bg-white shadow-sm py-5 px-4'>
    <img src={Tree}/>
    <h4 className='fw-bold pt-3' style={{color:'#1b4959'}}>Solar Wind</h4>
        <p className='text-muted pt-2'>Consectietur adipiscing elit sed desdeesio eiusmod tempor incididunt ut labore et dolore.</p>
        <div className='fw-bold pt-1 d-flex gap-2 align-items-center justify-content-center ' style={{color:'#36d1dc'}}>
        READ MORE 
        <img src={Arr} height={"13px"} width={"13px"}/>
        </div>
    </div>
  </div>
    </div>
    <button className='border border-0 px-5 py-2 rounded-pill fw-bold mt-5 ' style={{backgroundColor:'#36d1dc', color:'#fff'}} >View All</button>
    </div>
  )
}

export default Services