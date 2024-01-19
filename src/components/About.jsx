import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section className='py-20 bg-pink-950 text-white w-screen' id='about'>
      <div className=' align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='code and coffee' />
          <p className='mt-8 leading-loose w-full text-xl' >
            My journey has encompassed a diverse range of projects and roles, allowing me to hone my skills across the entire software development lifecycle. I bring a solid foundation in computer science and a thirst for staying at the forefront of technology trends. My journey has encompassed a diverse range of projects and roles, allowing me to hone my skills across the entire software development lifecycle.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
