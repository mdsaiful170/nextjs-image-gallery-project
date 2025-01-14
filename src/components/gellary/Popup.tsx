'use client';

import { CatagoryType } from '@/type';
import React, { FC, useState } from 'react';

interface popUp {
  submit: (
    name: string,
    catagory: CatagoryType,
    file: File | null,
    url: string
  ) => void;
  close: () => void;
}
const Popup: FC<popUp> = ({ submit, close }) => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [catagory, setcatagory] = useState<CatagoryType>('photo');

  const handelSubmit = () => {
    if (name && catagory && (file || url)) {
      if (file) {
        submit(name, catagory, file, '');
      } else if (url) {
        submit(name, catagory, null, url);
      }
      setFile(null);
      setName('');
      setcatagory('photo');
      setUrl('');
      close();
    }
  };
  

  return (
    <>
      <div className="flex fixed items-center min-h-screen bottom-0 !overflow-hidden  top-0 left-0 z-50 justify-center w-full bg-white/5 backdrop-blur-md">
        <div className="max-w-2xl md:max-w-md w-full border border-white/5 p-4  rounded-md bg-stone-900">
          <div className="flex items-center justify-between gap-2.5 pb-2 border-b border-white/5">
            <h1 className="text-stone-300 text-lg font-semibold capitalize">
              Add New Image
            </h1>
            <button onClick={close}>❌</button>
          </div>
          <br />
          <div className="space-y-3">
            <input
              type="text"
              className="w-full h-10 px-2 bg-transparent text-base font-semibold text-stone-300 rounded  border outline-none border-white/10 outline placeholder:text-sm placeholder:font-normal "
              placeholder="Image Name"
              onChange={(e) => setName(e.target.value)}
            />
            <select
              onChange={(e) => setcatagory(e.target.value as CatagoryType)}
              className="w-full h-10 px-2 bg-transparent text-base font-semibold text-stone-300 rounded  border outline-none border-white/10 outline "
            >
              <option value="photo">Photo</option>
              <option value="vactor">Vactor</option>
            </select>
            <input
              type="text"
              className="w-full h-10 px-2 bg-transparent text-base font-semibold text-stone-300 rounded  border outline-none border-white/10 outline placeholder:text-sm placeholder:font-normal "
              placeholder="Image Url"
              onChange={(e) => setUrl(e.target.value)}
            />
            <p className="flex  items-center gap-x-2">
              <span className="h-[1px] block bg-white/5 w-full"></span>
              <span>Or</span>
              <span className="h-[1px] block bg-white/5 w-full"></span>
            </p>
            <input
              type="file"
              className="w-full h-10 py-1 px-2 bg-transparent text-base font-semibold text-stone-300 rounded  border outline-none border-white/10 outline placeholder:text-sm placeholder:font-normal"
              placeholder="Image Description"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
            <button
              onClick={handelSubmit}
              className="w-full h-10 px-2 mt-2 duration-150  transition-all text-white border  border-white/10 rounded-md hover:bg-black active:translate-y-0.5"
            >
              Add Image
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
