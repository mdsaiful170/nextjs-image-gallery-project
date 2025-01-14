import Image from 'next/image';
import React, { FC } from 'react';
import { ImageTyepe } from '@/type';

interface PopupImgProps {
  props: ImageTyepe;
  toggle: () => void;
}

const PopupImg: FC<PopupImgProps> = ({ props, toggle }) => {
  const { url, name } = props || {};
  return (
    <>
      <div className="flex fixed items-center min-h-screen top-0 left-0 z-50 justify-center w-full bg-white/5 backdrop-blur-md">
        <div className="max-w-2xl md:max-w-md w-full h-[400px] border border-white/5 p-4 relative overflow-hidden rounded-md bg-stone-900">
          {/* Header with Name and Close Button */}
          <div className="flex items-center justify-between gap-2.5 pb-2 border-b border-white/5">
            <h1 className="text-stone-300 text-lg font-semibold capitalize truncate max-w-xs">
              {name}
            </h1>
            <button
              onClick={toggle}
              className="text-white p-2 bg-transparent hover:bg-white/10 rounded-full"
            >
              ❌
            </button>
          </div>

          {/* Image container with proper styling */}
          <div className="w-full mt-5 h-auto ">
            <Image
              src={url}
              alt={name || 'Image'}
              layout="responsive" // This will make sure the image maintains its aspect ratio
              width={500}
              height={300}
              className="rounded-md h-full max-w-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PopupImg;
