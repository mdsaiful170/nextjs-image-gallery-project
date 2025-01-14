import Link from 'next/link';
import React from 'react';
import { ItemLinkbox } from './Item';

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center z-20 justify-end w-full border-b border-white/10 pb-8">
        <div className="mr-auto">
          <Link
            href={'/'}
            className="px-7 py-3 border border-white/10 rounded tracking-wider shadow-sm uppercase text-3xl font-bold text-transparent bg-gradient-to-r from-orange-400 via-pink-500 to-violet-400 bg-clip-text animate-gradient duration-200 transition-all   relative z-20 after:content-[''] after:w-full after:bg-white/5 after:scale-x-0 after:hover:scale-x-100 after:origin-left   after:absolute after:left-0 after:bottom-0   after:duration-200 after:transition-all   after:h-full after:-z-20"
          >
            gallery
          </Link>
        </div>

        <div>
          {linkIitems.map((link, i) => (
            <ItemLinkbox className="mx-1" key={i} {...link} />
          ))}
        </div>
      </nav>

      <br />
    </>
  );
};

export default Navbar;

const linkIitems = [
  {
    label: 'Photo',
    url: '/?catagory=photo',
  },
  {
    label: 'Vector',
    url: '/?catagory=vector',
  },
];
