import heroImg from '../assets/me.png';
import { FaArrowAltCircleDown, FaGithubSquare, FaLinkedin, } from 'react-icons/fa';

const Hero = () => {
  document.body.style.overflowX="hidden"
  return (
    <div className='p-1 h-screen w-screen  bg-pink-950'>
      <div className='align-element grid md:grid-cols-2 items-center gap-8'>
        <article className='text-white'>
          <h1 className='text-7xl font-bold tracking-wider mt-28'>P G Akuldas</h1>
          <h2 className='mt-4 text-6xl font-bold capitalize tracking-wide'>
            Fullstack Developer
          </h2>
          <p className='mt-4 text-3xl font-semibold capitalize tracking-wide'>
            My mission is to help you build projects with my versatility and my ability to adapt to different situations Together lets turn ideas into projects.
          </p>
          <br></br>
          <div className='flex gap-x-4 mt-4'>
            <a href='https://github.com/Akuldas1'>
              <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a href='https://www.linkedin.com/in/p-g-akuldas-61116b233'>
              <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
           <a href='./P G Akuldas.pdf'> <button class="py-1 px-2 bg-black-500 text-white font-semibold rounded-lg shadow-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
              Resume
</button></a>

<a href='#projects'><button class="py-1 px-2 flex items-center gap-4 bg-black-500 text-white font-semibold rounded-lg shadow-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Check Out My Projects <FaArrowAltCircleDown/> </button></a>
<a href='#contactme'><button class="py-1 px-2 flex items-center gap-4 bg-black-500 text-white font-semibold rounded-lg shadow-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Contact <FaArrowAltCircleDown/> </button></a>
          </div>
        </article>
        <article className='p-16 hidden mt-20 rounded-full md:block'>
          <img src ={heroImg} className='h-80 w-81 rounded-full aspect-square border-2 sm:2/5 lg:h-3/5' />
        </article>
      </div>
    </div>
  );
};
export default Hero;
