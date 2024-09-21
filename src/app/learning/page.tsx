import React from 'react'
import Link from 'next/link'

const Learning = () => {
  return (
    <div className='learning'>
      <div className="learning-cont w-[70%] m-auto p-5">
        <h1 className='text-[#002db3] text-[3vw] m-3 text-center font-bold'>"Start Your E-commerce Journey with Us"</h1>
        <h3 className='text-[1.9vw] text-center m-1 font-semibold text-[#0000ff]'>"At eCommerce by Askian LLC, we don't just launch brands—we empower individuals to start and grow their own e-commerce businesses."</h3>
        <p className='text-left text-[1.5vw] m-2 p-3'>"Whether you're a budding entrepreneur or looking to scale your existing business, our hands-on learning programs are designed to give you the tools and knowledge to succeed. We offer a variety of resources, from e-commerce tutorials to mentorship programs, ensuring that you have the guidance you need at every step of your journey."</p>
        <p className='text-left text-[1.5vw] m-2 p-3'>"We also offer exclusive opportunities to partner with us and launch your own brand under our mentorship. With our global reach and e-commerce expertise, you'll be positioned for success."</p>
      <button className='border-solid border-[#002db3] border-[1px] block m-auto rounded-xl capitalize p-2 hover:bg-[#0000ff] hover:text-[white] text-[1.7vw] font-black'><Link href='#' >join our program</Link></button>
      </div>
    </div>
  )
}

export default Learning