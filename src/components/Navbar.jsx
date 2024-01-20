import { links } from '../data';

const Navbar = () => {
  return (
    <nav className='h-1 w-screen sm: grid-cols-3 bg-pink-950 leading-5 overscroll-x-none'>
      <div className='align-element text-justify flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8'>
        <h2 className='text-3xl font-bold text-white'>
          Akul<span className='text-emerald-600'>Das</span>
        </h2>
        <div className='flex gap-x-3 text-white'>
          {links.map((link) => {
            const { id, href, text} = link;
            return (
              <a
                key={id}
                href={href}
                className='capitalize  tracking-wide hover:text-emerald-600 duration-300 font-bold text-2xl'
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
