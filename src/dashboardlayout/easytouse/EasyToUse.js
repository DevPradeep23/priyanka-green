import React from 'react'
import Solor from '../../assest/Image/feature-img.png'
import House from '../../assest/Image/house.png'
import SolEnergy from '../../assest/Image/05.png'
import SolSystem from '../../assest/Image/06.png'
import Plates from '../../assest/Image/07.png'
import Water from '../../assest/Image/08.png'
import Wind from '../../assest/Image/09.png'




const EasyToUse = () => {
  return (
    <div className='py-5' style={{backgroundColor:'#f7f9fe'}}> 
    <button className='border border-0 px-5 py-2 rounded fw-bold ' style={{backgroundColor:'#e3f5fa', color:'#36d1dc'}} >Easy To Use</button>
       <h2 className='pt-3  fw-bold' style={{color:'#1b4959'}}>It's Safe Compared To Electricity</h2>
       <div className='container pt-5'>
       <div className='row justify-content-center gap-2'>
         {/* first section */}
         <div className='col-3'>
       <div className='row justify-content-center gap-2'>
        {/* card 1 */}
        <div className='bg-white col-12 shadow-sm rounded-4 mb-4'>
            <div className='row py-2 px-4 '>
          <div className='col-3 d-flex align-items-center justify-content-center '>
            <img src={Plates} height={"70px"} width={"70px"}/>
          </div>
            <div className='col-9 text-start pt-4'>
             <h5>Solar Plates</h5>
             <p className='text-muted fs-6 '>Consectetur adipising elitd incididunt ut labore.</p>
          </div>
          </div>
        </div>
       {/* card 2 */}
       <div className='bg-white col-12 shadow-sm rounded-4 mb-4'>
            <div className='row py-2 px-4 '>
          <div className='col-3 d-flex align-items-center justify-content-center '>
            <img src={Water} height={"70px"} width={"70px"}/>
          </div>
            <div className='col-9 text-start pt-4'>
             <h5>Solar Water Heater</h5>
             <p className='text-muted fs-6 '>Consectetur adipising elitd incididunt ut labore.</p>
          </div>
          </div>
        </div>
        {/* card 3 */}
        <div className='bg-white col-12 shadow-sm rounded-4 mb-4'>
            <div className='row py-2 px-4 '>
          <div className='col-3 d-flex align-items-center justify-content-center '>
            <img src={Wind} height={"70px"} width={"70px"}/>
          </div>
            <div className='col-9 text-start pt-4'>
             <h5>Solar Wind</h5>
             <p className='text-muted fs-6 '>Consectetur adipising elitd incididunt ut labore.</p>
          </div>
          </div>
        </div>
         </div>
        </div>
        <div className='col-4 mx-4 d-flex align-items-center justify-content-center  '>
            <img src={Solor}/> 
        </div>

        {/* third section */}
        <div className='col-3'>
       <div className='row justify-content-center gap-2'>
        {/* card 1 */}
        <div className='bg-white col-12 shadow-sm rounded-4 mb-4'>
            <div className='row py-2 px-4 '>
          <div className='col-3 d-flex align-items-center justify-content-center '>
            <img src={House} height={"70px"} width={"70px"}/>
          </div>
            <div className='col-9 text-start pt-4'>
             <h5>Pv Solar Panel</h5>
             <p className='text-muted fs-6 '>Consectetur adipising elitd incididunt ut labore.</p>
          </div>
          </div>
        </div>
       {/* card 2 */}
       <div className='bg-white col-12 shadow-sm rounded-4 mb-4'>
            <div className='row py-2 px-4 '>
          <div className='col-3 d-flex align-items-center justify-content-center '>
            <img src={SolEnergy} height={"70px"} width={"70px"}/>
          </div>
            <div className='col-9 text-start pt-4'>
             <h5>Solar Energy</h5>
             <p className='text-muted fs-6 '>Consectetur adipising elitd incididunt ut labore.</p>
          </div>
          </div>
        </div>
        {/* card 3 */}
        <div className='bg-white col-12 shadow-sm rounded-4 mb-4'>
            <div className='row py-2 px-4 '>
          <div className='col-3 d-flex align-items-center justify-content-center '>
            <img src={SolSystem} height={"70px"} width={"70px"}/>
          </div>
            <div className='col-9 text-start pt-4'>
             <h5>Solar System</h5>
             <p className='text-muted fs-6 '>Consectetur adipising elitd incididunt ut labore.</p>
          </div>
          </div>
        </div>
         </div>
        </div>

        </div>
        </div>
       </div>
       
  )
}

export default EasyToUse