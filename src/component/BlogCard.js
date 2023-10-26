import React from 'react'
import UserImg from '../assest/Image/blogImg.jpg'
import User from '../assest/Image/user.png'
import Chat from '../assest/Image/chat.png'
import Arr from '../assest/Image/right-arrow.png'



const BlogCard = () => {
  return (
    <div className=''>
        <img src={UserImg} className='d-block w-100' height={"100%"} width={"100%"}/>
        <div className='row gap-2 py-3'>
        <div className='col-5 d-flex gap-2 align-items-center text-muted text-sm fw-semibold'>
          <img src={Chat} height={"17px"} width={"17px"} className='mt-1'/>
          By Sunrays
        </div>
        <div className='col-6 d-flex gap-2 align-items-center text-muted text-sm fw-semibold'>
        <img src={User} height={"15px"} width={"15px"}/>
        0 Comments
        </div>
        </div>
        <h5 className='fw-bold text-start lh-base ' style={{color:'#1b4959'}}>Consectetur Adipiscing Elit Eiusmod Tempor Incidid</h5>
        <p className='text-start text-muted text-sm text-justify '>
        Consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliquais ipsum suspendiss
       </p>
       <div className='col-12 fw-bold d-flex gap-2 align-items-center pb-4'
       style={{color:'#36d1dc'}}
       >
          READ MORE
          <img src={Arr} height={"12px"} width={"12px"}/>
        </div>
    </div>
  )
}

export default BlogCard