const SkillsCard = ({ icon, title, text }) => {
  return (
    <article className="align-element bg-sky-100 w-96 p-4 rounded-lg hover:shadow-xl duration-300">
      <span>{icon}</span>
      <h2 className='mt-6 font-bold'>{title}</h2>
      <p className='mt-2 text-slate-500'>{text}</p>
    </article>
  );

};
export default SkillsCard;
