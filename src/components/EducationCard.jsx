

const EducationCard = ({ img, title, text, branch, year, cgpa }) => {
  return (
    <article className='align-element bg-white rounded-lg shadow-md hover:shadow-xl duration-300'>
      <img
        src={img }
        alt={title}
        className='p-5 w-full object-contain align-element rounded-t-lg h-64'
      />
      <div className='capitalize p-8'>
        <h2 className='text-xl font-bold tracking-wide text-center'>{title}</h2>
        <h2 className='mt-4 text-lg leading-loose font-semibold text-center uppercase'>{text}</h2>
        <h2 className='mt-4 text-lg leading-loose font-semibold text-center uppercase'>{branch}</h2>
        <h2 className='mt-4 text-lg leading-loose font-semibold text-center'>{year}</h2>
        <h2 className='mt-4 text-lg leading-loose font-semibold text-center'>{cgpa}</h2>
      </div>
    </article>
  );
};
export default EducationCard;
