import React from 'react'
import Link from 'next/link'


const Navbar = () => {
    return (
        <nav className='w-[100%] flex justify-between items-center p-[1%] text-[#002db3] bg-[white] border-b-2 shadow-2xl'>
            <div className="logo text-[2vw] font-black ">
                <h2><Link href='/'>Askian LLC</Link></h2>
            </div>

            <div className="nav-links w-[60%] capitalize text-[#809fff]">
                <ul className='flex justify-between items-center p-[1%]' >
                    <li><Link href='/about' className='link font-bold text-[1.5vw] '>About</Link></li>
                    <li><Link href='/services' className='link font-bold text-[1.5vw]'>our services</Link></li>
                    <li><Link href='/brand' className='link font-bold text-[1.5vw]'>our brands</Link></li>
                    <li><Link href='/learning' className='link font-bold text-[1.5vw]'>Learning & Opportunities</Link></li>
                    <li><Link href='/contact' className='link font-bold text-[1.5vw]'>Contact Us</Link></li>
                </ul>
            </div>
            <div className="buttons ">
                <button className='border-solid border-[#002db3] border-[1px]  rounded-xl capitalize p-2 hover:bg-[#0000ff] hover:text-[white] text-[1.2vw] font-black '>dark mode</button>
                <button className='border-solid border-[#002db3] border-[1px] ml-5 mr-5 rounded-xl capitalize p-2 hover:bg-[#0000ff] hover:text-[white] text-[1.2vw] font-black'>sign in</button>
            </div>
        </nav>
    )
}
// color palette 1.#0000ff 2.#002db3 3.#bfcfff 4.#809fff 5.#ffffff

export default Navbar