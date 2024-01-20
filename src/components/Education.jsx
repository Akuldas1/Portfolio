import SectionTitle from './SectionTitle';
import { education } from '../data';
import EducationCard from './EducationCard';

const Education = () => {
  return (
    <section className='py-20 bg-pink-950 text-white p-9 w-screen' id='education'>
      <SectionTitle text='Education' />
      <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 align-element text-black gap-8'>
        {education.map((education) => {
          return <EducationCard key={education.id} {...education} />;
        })}
      </div>
    </section>
  );
};
export default Education;
