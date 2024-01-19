import { skills } from '../data';
import SectionTitle from './SectionTitle';
import SkillsCard from './SkillsCard';
const Skills = () => {
  return (
    <section className='p-7 w-screen h-50 bg-pink-950 text-white' id='skills'>
      <SectionTitle text='TECH STACK' />
      <div className='py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-black'>
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};
export default Skills;
