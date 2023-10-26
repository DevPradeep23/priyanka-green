import React from 'react'
import Logo from '../../assest/Image/sunlogo.png'
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaGooglePlus } from 'react-icons/fa';
import { SiYoutubemusic } from 'react-icons/si';
import FooterOption from '../../component/FooterOption';
import TeleG from '../../assest/Image/telegram (1).png'

const ContactFooter = () => {
  return (
    <div 
    className='py-5'
    style={{backgroundColor:'#03060a'}}

    >
    <div className='container'>
        <div className='row justify-content-center'>
        <div className='col-3 text-start'>
         <img src={Logo} height={"75px"} width={"75px"}/>
         <p className='text-white fs-6 pt-3'>It to make a type specimen book. It has survived not only five centuries, but also the leap.</p>
        <h6 className='text-white pt-2'>Social Profiles</h6>
        <div className='col-12 d-flex gap-3 py-1 align-items-center' >

            <BsFacebook style={{height:"35px",width:'35px', color:'white' }}/>
            <AiFillTwitterCircle style={{height:"40px",width:'40px', color:'white' }}/>
            <FaGooglePlus style={{height:"35px",width:'35px', color:'white' }}/>
            <SiYoutubemusic style={{height:"35px",width:'35px', color:'white' }}/>
        </div>
        </div>
        <div className='col-3 text-start'>
        <h5 className='text-white fw-semibold fs-5'>Our Products</h5>
        <div style={{width:"100px", height:'3px', backgroundColor:'#36d1dc', margin:'1rem 0rem'}}></div>
         <FooterOption Link={'Solar Panel'}/>
         <FooterOption Link={'Solar Plates'}/>
         <FooterOption Link={'Productivity'}/>
         <FooterOption Link={'Integration'}/>
         <FooterOption Link={'Life Time'}/>
         <FooterOption Link={'Solar Energy'}/>

        </div>
        <div className='col-3 text-start'>
        <h5 className='text-white fw-semibold fs-5'>Quick Links</h5>
        <div style={{width:"80px", height:'3px', backgroundColor:'#36d1dc', margin:'1rem 0rem'}}></div>
        <FooterOption Link={'Shop'}/>
         <FooterOption Link={'Company History'}/>
         <FooterOption Link={'Contact With Us'}/>
         <FooterOption Link={'Latest News & Blog'}/>
         <FooterOption Link={'Global Services'}/>
         <FooterOption Link={'Meet Team Member'}/>

        </div>

        <div className='col-3 text-start'>
        <h5 className='text-white fw-semibold fs-5'>Newsletter</h5>
        <div style={{width:"80px", height:'3px', backgroundColor:'#36d1dc', margin:'1rem 0rem'}}></div>
        <p className='text-white fs-6 pt-2'>Subscribe to our newsletter to receive latest news on our services.</p>
        <div className='container'>
            <div className='row justify-content-center bg-white mt-4'>
        <div className='col-10  d-flex align-item-center'>
            <input type='email' placeholder='Enter Your Email Here' className='w-100 border border-0 outline-none '/>
        </div>
        <div className='col-2 py-2 justify-content-center d-flex align-item-center cursor-pointer'
        style={{backgroundColor:'#36d1dc'}}
        >
            <img src={TeleG} height={'25px'} width={'25px'}/>
        </div>
        </div>

        </div>
        </div>


        </div>
    </div>
    </div>
  )
}

export default ContactFooter