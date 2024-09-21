import React from 'react'
import Link from 'next/link'
import 'bootstrap-icons/font/bootstrap-icons.css';


const Contact = () => {
  return (
    <div className='contact w-[100%] mt-[5%]'>
      <div className="contact-cont w-[90%] m-auto flex justify-between items-center ">
        <div className="contact-info w-[45%] p-5 ">
          <h1 className='text-[#002db3] text-[2.2vw]  font-bold'>&quot;Ready to Elevate Your Brand?&quot;</h1>
          <h3 className='text-[#0000ff] text-[1.8w]  font-semibold'>&quot;Let's discuss how eCommerce by Askian LLC can help you succeed in the global e-commerce market."</h3>
          <ul className='mt-4 ml-2 font-semibold text-[1.5vw]'>
            <h3 className='capitalize text-[1.7vw] text-[#0000ff]'>contact info:</h3>

            <li><i className="bi bi-envelope"></i> <Link href=''>info@ecommercebyaskianllc.com</Link></li>
            <li><i className="bi bi-telephone"></i> <Link href=''>(123) 456-7890</Link></li>
            <li><i className="bi bi-geo-alt"></i> Florida, USA</li>
          </ul>
          <h3 className='capitalize text-[1.7vw] text-[#0000ff] mt-4 ml-2 font-semibold'>social links</h3>
          <ul className="social-links flex justify-left gap-6 text-[2.5vw] ml-2 items-center">
            <li><Link href=''><i className='bi bi-facebook text-[#002db3] hover:text-[#0000ff]'></i></Link></li>
            <li><Link href=''><i className='bi bi-tiktok  text-[#002db3] hover:text-[#0000ff]'></i></Link></li>
            <li><Link href=''><i className='bi bi-linkedin  text-[#002db3] hover:text-[#0000ff]'></i></Link></li>
            <li><Link href=''><i className='bi bi-youtube  text-[#002db3] hover:text-[#0000ff]'></i></Link></li>

          </ul>
        </div>
        <div className="contact-form w-[50%]  p-7">
          <h2 className='text-[#002db3] text-[2.4vw]  font-bold capitalize text-center '>contact us</h2>
          <form action="post">
            <label htmlFor="name">
              <input type="text" placeholder='Full Name' id='email' name='name' className='text-[1.6vw] m-5 font-semibold focus:border-b-2 focus:outline-none text-[#002db3] border-b-2 border-black w-[100%]'/>
            </label> <br />
            <label htmlFor="email">
              <input type="email" name="email" id="email" placeholder='Email' className='text-[1.6vw] m-5 font-semibold focus:border-b-2 focus:outline-none text-[#002db3] border-b-2 border-black w-[100%]' />
            </label> <br />
            <label htmlFor="message">
              <textarea name="message" id="message" placeholder='Type your query here..' className='text-[1.6vw] m-5 font-semibold focus:border-b-2 focus:outline-none text-[#002db3] border-b-2 border-black w-[100%]'></textarea>
            </label>
            <button className='border-solid border-[#002db3] border-[1px] block m-auto rounded-xl capitalize p-2 hover:bg-[#0000ff] hover:text-[white] text-[1.5vw] font-bold'>Send Inquiry</button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Contact