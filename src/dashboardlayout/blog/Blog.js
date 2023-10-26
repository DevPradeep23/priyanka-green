import React from 'react'
import BlogCard from '../../component/BlogCard'

const Blog = () => {
  return (
    <div className='py-5'
    style={{backgroundColor:'#f7f9fe'}}
    >
       <button className='border border-0 px-5 py-2 rounded fw-bold' style={{backgroundColor:'#e3f5fa', color:'#36d1dc'}} >Recent Post</button>
       <h2 className='pt-3 fw-bold' style={{color:'#1b4959'}}>Read The Our Latest</h2>
       <h3 className='' style={{color:'#36d1dc'}}>Blog Posts</h3>
         <div className='container'>
           <div className='row justify-content-center gap-4 pt-4'>
            <div className='col-3 bg-white shadow rounded-4'>
            <BlogCard/>
            </div>
            <div className='col-3 bg-white shadow rounded-4'>
            <BlogCard/>
            </div>
            <div className='col-3 bg-white shadow rounded-4'>
            <BlogCard/>
            </div>
           </div>
      </div>
    </div>
  )
}

export default Blog