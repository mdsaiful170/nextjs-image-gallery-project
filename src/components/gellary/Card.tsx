import Image from 'next/image';

import { LikeIcon, ShareIcon, SveIcon } from '../Icons';
import { FC, useState } from 'react';
import { ImageTyepe } from '@/type';
import PopupImg from './Popupimg';

const GellaryCard: FC<ImageTyepe> = (props) => {
  const { name, url, liks, shares } = props || {};
  const [totalLike, setTotallike] = useState(liks);
  const [save, setSave] = useState<boolean>(false);
  const [toggle, settoggle] = useState<boolean>(false);

  const handleLike = (savearguments: boolean) => {
    setSave(savearguments);
    setTotallike((pre) => (savearguments ? pre + 1 : pre - 1));
  };

  const toggleHandler = () => {
    settoggle(function (pre) {
      return !pre;
    });
  };

  return (
    <>
      {toggle && <PopupImg toggle={toggleHandler} props={props} />}
      <figure
        onClick={toggleHandler}
        className="relative group overflow-hidden rounded border border-white/10 w-full max-w-full"
      >
        {/* Image container with controlled width */}
        <div className="relative w-[100%] md:w-[400px] lg:w-[500px] h-[250px] md:h-[300px]">
          <Image
            src={url}
            fill
            className="object-cover w-full h-auto max-w-full ease-linear duration-150 transition-all cursor-pointer hover:scale-105"
            alt="gellary_img"
          />
        </div>

        {/* Caption */}
        <figcaption className="p-4 absolute -bottom-20 group-hover:bottom-0 invisible group-hover:visible duration-150 transition-all ease-in  bg-white/5 backdrop-blur-sm  w-full flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-white pb-2">{name}</h3>
            <p className=" flex text-slate-300 flex-wrap items-center gap-x-3 gap-y-2   text-sm font-bold">
              <span className=" w-full sm:w-auto"> IMAGE POST</span>
              <span className="flex justify-center  items-center gap-x-1">
                <LikeIcon w={18} h={18} color="#0ea5e9" />
                <span className="mt-1">{totalLike}</span>
              </span>
              |
              <span className="flex justify-center  items-center gap-x-1">
                <ShareIcon w={18} h={18} color="#0ea5e9" />{' '}
                <span className="mt-1">{shares}</span>
              </span>
            </p>
          </div>
          <button
            onClick={() => handleLike(!save)}
            className="p-2 z-50 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full"
          >
            {save ? '👍' : <SveIcon w={28} h={28} color="#ffff" />}
          </button>
        </figcaption>
      </figure>
    </>
  );
};

export default GellaryCard;
