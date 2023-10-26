import React from 'react'
import Clock from '../../assest/Image/clock.png'
import Phone from '../../assest/Image/phone-call.png'
import Tele from '../../assest/Image/telegram.png'


const Footer = () => {
  return (
    <div 
    className=''
    style={{backgroundColor:'#03060a'}}

    >
        <div className='container border-bottom py-5 '>
    <div className='row justify-content-center gap-4 ' 
    >
        <div className='col-3'>
          <img src={Clock} height={"70px"} width={"70px"}/>
          <h5 className='text-white fw-semibold fs-5 pt-3'>Opening Hours</h5>
          <p className='text-white fw-semibold fs-6 pt-1'>Monday - Friday 09.00 - 18.00</p>
          <p className='text-white fw-semibold fs-6'>Saturday 09.00 - 14.00</p>
        </div>
        <div className='col-3'>
          <img src={Phone} height={"60px"} width={"60px"}/>
          <h5 className='text-white fw-semibold fs-5 pt-3'>Call Us Anytime</h5>
          <p className='text-white fw-semibold fs-6 pt-1'>(+91) 1800-214-122</p>
          <p className='text-white fw-semibold fs-6'>(+91) 1800-214-123</p>
        </div>
        <div className='col-3'>
          <img src={Tele} height={"60px"} width={"60px"}/>
          <h5 className='text-white fw-semibold fs-5 pt-3'>Email Us</h5>
          <p className='text-white fw-semibold fs-6 pt-1'>sunrays@example.com</p>
          <p className='text-white fw-semibold fs-6'>solarsupport@example.com</p>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Footer