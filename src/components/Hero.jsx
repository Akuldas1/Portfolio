import React from "react";
import heroImg from '../assets/me.png';
import { FaInstagram, FaGithubSquare, FaLinkedin, } from 'react-icons/fa';

const Hero = () => {
  document.body.style.overflowX="none"
  return (
    <section className="bg-pink-950 px-36 py-20 h-full text-white">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-evenly md:justify-between">
        <div className="hero-info">
          <h1 className='text-7xl font-bold tracking-wider '>P G Akuldas</h1>
          <h2 className=' text-6xl font-bold capitalize tracking-wide'>
            Fullstack Developer
          </h2>
          <p className='mt-4 text-3xl font-semibold capitalize tracking-wide'>
            My mission is to help you build projects with my versatility and my ability to adapt to different situations Together lets turn ideas into projects.
          </p>

          <div className="flex py-5 gap-3">
            <a href='https://github.com/Akuldas1'>
              <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a href='https://www.linkedin.com/in/p-g-akuldas-61116b233'>
              <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a href='https://www.instagram.com/akul_das?igsh=bmdtMDFzd20zbmxz'>
              <FaInstagram className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
          </div>
        </div>

        <div className="hero-img grid mx-12 mb-16 m:auto">
          <img
            src={heroImg}
            alt="coding illustration"
            className="lgw-[80%]  h-80 w-81 rounded-full aspect-square border-2"
          />
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <hr className="my-6 border-t-2 border-gray-300"></hr>
    </section>
   
  );
};

export default Hero;

