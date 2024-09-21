'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import 'bootstrap-icons/font/bootstrap-icons.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className='about w-[100%]'>
      <div className="tabs w-[90%] m-auto p-5">
        <ul className='flex justify-center gap-10 text-[1.4vw] items-center'>
          <li 
            className={`text-[1.3vw] text-[#002db3] capitalize p-2 border-solid border-[1px] rounded-xl border-[#002db3] hover:bg-[#0000ff] hover:text-[white] font-semibold`} 
            onClick={() => setActiveTab('about')}
          >
            About us
          </li>
          <li 
            className={`text-[1.3vw] text-[#002db3] capitalize p-2 border-solid border-[1px] rounded-xl border-[#002db3] hover:bg-[#0000ff] hover:text-[white] font-semibold`} 
            onClick={() => setActiveTab('mission')}
          >
            Our Mission
          </li>
          <li 
            className={`text-[1.3vw] text-[#002db3] capitalize p-2 border-solid border-[1px] rounded-xl border-[#002db3] hover:bg-[#0000ff] hover:text-[white] font-semibold`} 
            onClick={() => setActiveTab('brands')}
          >
            Our Brands
          </li>
        </ul>
      </div>

      {activeTab === 'about' && (
        <div className="about-us w-[90%] m-auto p-5" id='about'>
          <div className="about-cont capitalize w-[50%]">
            <h2 className='text-center text-[2.8vw] font-bold text-[#0000ff]'>who we are?</h2>
            <p className='text-[1.2vw]'>E-Commerce by Askian LLC, founded by Hamza Siddiqui, is a leader in global e-commerce. We have successfully
              launched six brands in different Amazon marketplaces, each tailored to meet specific market needs. Our expertise
              lies in launching and scaling brands through innovative private label and wholesale models. With a focus on
              client satisfaction, we customize our services according to individual budgets and goals, ensuring long-term
              growth and profitability.</p>
            <h4>why choose us?</h4>
            <div className="why-choose-us flex justify-center items-center gap-20 text-center">
              <div className="reason r-one w-[15vw] h-[11vw] transform hover:scale-110 transition duration-300 ease-in-out  text-[#0000ff] border-solid border-[#0000ff] border-[1px] mt-4 rounded-2xl p-2">
                <i className="bi bi-globe text-[2.5vw] font-bold"></i>
                <h4 className='text-[1.3vw] font-normal'>global experience</h4>
              </div>
              <div className="reason r-two w-[15vw] h-[11vw] transform hover:scale-110 transition duration-300 ease-in-out text-[#0000ff] border-solid border-[#0000ff] border-[1px] mt-4 rounded-2xl p-2">
                <i className="bi bi-bag text-[2.5vw] font-bold"></i>
                <h4 className='text-[1.3vw] font-normal'>end-to-end e-commerce solutions</h4>
              </div>
              <div className="reason r-three w-[15vw] h-[11vw] transform hover:scale-110 transition duration-300 ease-in-out text-[#0000ff] border-solid border-[#0000ff] border-[1px] mt-4 rounded-2xl p-2">
                <i className="bi bi-people text-[2.5vw] font-bold"></i>
                <h4 className='text-[1.3vw] font-normal'>Client-Centric Approach</h4>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'mission' && (
        <div className="mission w-[90%] m-auto p-5 flex justify-end" id='mission'>
          <div className="mission-cont capitalize w-[50%] grid justify-end p-[3%]">
            <h2 className='text-center text-[2.8vw] font-bold text-[#0000ff]'>our mission</h2>
            <p className='text-[1.2vw]'>&quot;To help businesses achieve e-commerce success through customized solutions, ensuring they thrive in both
              domestic and international markets.&quot;</p>
          </div>
        </div>
      )}

      {activeTab === 'brands' && (
        <div className="brands w-[90%] m-auto p-5 capitalize ">
          <h2 className='text-center text-[2.8vw] font-bold text-[#0000ff]'>our brands</h2>
          <div className="brands-cont flex justify-center flex-wrap items-center">
            <div className="brand b-one"><Image src='/images/brand icon.png' width={250} height={250} alt='brand1'></Image></div>
            <div className="brand b-two"><Image src='/images/brand icon.png' width={250} height={250} alt='brand2'></Image></div>
            <div className="brand b-three"><Image src='/images/brand icon.png' width={250} height={250} alt='brand3'></Image></div>
            <div className="brand b-four"><Image src='/images/brand icon.png' width={250} height={250} alt='brand4'></Image></div>
            <div className="brand b-five"><Image src='/images/brand icon.png' width={250} height={250} alt='brand5'></Image></div>
            <div className="brand b-six"><Image src='/images/brand icon.png' width={250} height={250} alt='brand6'></Image></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;

