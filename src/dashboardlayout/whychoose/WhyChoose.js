import React from 'react'
import Safe from "../../assest/Image/safe.png"
import Setting from "../../assest/Image/setting.png"
import Sun from "../../assest/Image/sun.png"
import Screw from "../../assest/Image/screw.png"


const WhyChoose = () => {
  return (
    <div className='container py-5'> 
        <div className='row justify-content-center text-start  pt-4 '>
            <div className='col-6 px-5'>
              <button className='border border-0 px-4 py-2 rounded fw-bold ' style={{backgroundColor:'#e3f5fa', color:'#36d1dc'}}  >Why Choose Us</button>
              <h3 className='fs-2 pt-4 '>We Are Here To Give You The Best Solar Panel For Your Home</h3>
              <p className='text-muted pt-4 fs-6'>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
              <div className='row justify-content-center py-4 '>
                <div className='col-2'>
                <img src={Setting} height={"60px"} width={"60px"} />
                </div>
                <div className='col-10'>
                    <h5>Easy Installation</h5>
                    <p className='text-muted pt-1 fs-6'>Consectetur adipiscing elit, sed deso eiusmod incididunt ut labore et dolore magna aliqua pendisse</p>
                </div>
              </div>
              <div className='row justify-content-center'>
                <div className='col-2  '>
                <img src={Sun} height={"60px"} width={"60px"} />
                </div>
                <div className='col-10'>
                    <h5>Renewable Energy</h5>
                    <p className='text-muted pt-1 fs-6'>Consectetur adipiscing elit, sed deso eiusmod incididunt ut labore et dolore magna aliqua pendisse</p>
                </div>
              </div>
              <div className='row justify-content-center py-4 '>
                <div className='col-2 '>
                <img src={Screw} height={"60px"} width={"60px"} />
                </div>
                <div className='col-10'>
                    <h5>Solar Maintenance</h5>
                    <p className='text-muted pt-1 fs-6'>Consectetur adipiscing elit, sed deso eiusmod incididunt ut labore et dolore magna aliqua pendisse</p>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <img src={Safe} />
            </div>
        </div>
    </div>
  )
}

export default WhyChoose