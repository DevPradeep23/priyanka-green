import React from 'react'
import Line from '../assest/Image/line.png'

const FooterOption = ({Link}) => {
  return (
    <div className='d-flex align-items-center gap-3 text-white py-2'>
        <img src={Line} className='mt-1' height={"18px"} width={"18px"}/>
        {Link}
    </div>
  )
}

export default FooterOption