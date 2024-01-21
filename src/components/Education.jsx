import SectionTitle from './SectionTitle';
// import { education } from '../data';
// import EducationCard from './EducationCard';

const Education = () => {
  return (
    <section className='bg-pink-950 text-white p-9 w-screen' id='education'>
      <SectionTitle text='Education' />
      {/* <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 align-element text-black gap-8'> */}
      {/* {education.map((education) => {
          return <EducationCard key={education.id} {...education} />;
        })} */}

      {/* </div> */}
      <br></br>

      <div className='p-2 border-double border-4 align-element '>
        <div className='p-5 text-center font-mono'>
          <h1 className='text-3xl font-semibold'>JAWAHARLAL COLLEGE OF ENGINEERING AND TECHNOLOGY</h1>
          <h1 className='text-3xl font-semibold'>BACHELOR OF TECHNOLOGY</h1>
          <h1 className='text-3xl font-semibold'>COMPUTER SCIENCE & ENGINEERING</h1>
          <h1 className='text-3xl font-semibold'>2019-2023</h1>
          <h1 className='text-3xl font-semibold'>CGPA : 7.68</h1>
        </div>
      </div>
<br></br>

<div className='p-2 border-double border-4 align-element '>
        <div className='p-5 text-center font-mono'>
          <h1 className='text-3xl font-semibold'>SREE NARAYANA TRUST CENTRAL SCHOOL</h1>
          <h1 className='text-3xl font-semibold'>HIGHER SECONDARY</h1>
          <h1 className='text-3xl font-semibold'>SCIENCE</h1>
          <h1 className='text-3xl font-semibold'>2017-2019</h1>
          <h1 className='text-3xl font-semibold'>79.8%</h1>
        </div>
      </div>
<br></br>

<div className='p-2 border-double border-4 align-element '>
        <div className='p-5 text-center font-mono'>
          <h1 className='text-3xl font-semibold'>CARMEL CMI SCHOOL</h1>
          <h1 className='text-3xl font-semibold'>HIGH SCHOOL</h1>
          <h1 className='text-3xl font-semibold'>2017</h1>
          <h1 className='text-3xl font-semibold'>CGPA : 8.6</h1>
        </div>
      </div>
    </section>
  );
};
export default Education;

