'use client';

import { useEffect, useState } from 'react';
import { SearchIcon, UploadIcon } from '../Icons';
import { useRouter } from 'next/navigation';

const Header = () => {
  const [Search, setSearch] = useState('');
  const router = useRouter();
  const open = () => router.push('/?popup=true');

  useEffect(() => {
    router.push(Search ? `/?search=${Search}` : '/');
  }, [Search, router]);
  return (
    <>
      <section>
        <div className="flex w-full items-center flex-wrap justify-between gap-2.5">
          <div className=" max-w-full md:max-w-lg  w-full h-14 md:h-11 border bg-white/5 border-white/10 flex items-center  relative rounded-md overflow-hidden">
            <input
              type="search"
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-full py-2  outline-none border-none  bg-transparent   text-base font-medium text-stone-400 ps-2 "
            />
            <button className="pe-2 ps-1">
              <SearchIcon w={18} h={18} color="#cccc" />
            </button>
          </div>

          <button
            onClick={open}
            type="button"
            className="border max-w-full w-full md:w-auto px-5 tracking-wider text-stone-300 font-medium capitalize  py-3 md:py-2 rounded-md border-white/10 active:bg-white/5 flex items-center gap-2 justify-center active:translate-y-0.5 transition-all duration-100 hover:bg-white/5"
          >
            <UploadIcon w={18} h={18} color="#cccc" /> upload
          </button>
        </div>
      </section>
    </>
  );
};

export default Header;
