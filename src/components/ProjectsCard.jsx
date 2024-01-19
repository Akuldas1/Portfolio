import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';

const ProjectsCard = ({ url, img, github, title, text }) => {
  return (
    <article className='bg-sky-100 align-element rounded-lg shadow-md hover:shadow-xl  duration-300'>
      <img
        src={img}
        alt={title}
        className='p-5 w-full object-cover rounded-t-lg h-64 align-element'
      />
      <div className='capitalize p-8'>
        <h2 className='text-xl tracking-wide font-medium'>{title}</h2>
        <p className='mt-4 text-slate-700 leading-loose'>{text}</p>
        
      </div>
    </article>
  );
};
export default ProjectsCard;
