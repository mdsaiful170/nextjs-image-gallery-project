'use client';
import React, { useEffect, useState } from 'react';
import GellaryCard from './Card';
import { GellaryImges } from '@/lib/data';
import { useRouter, useSearchParams } from 'next/navigation';
import Popup from './Popup';
import { CatagoryType, ImageTyepe } from '@/type';

const Gellary = () => {
  const [galleryimages, setEmages] = useState<ImageTyepe[]>([]);

  const router = useRouter();
  const params = useSearchParams();
  const search = params.get('search');
  const catagory = params.get('catagory');
  const popup = params.get('popup') ? true : false;
  const colse = () => {
    router.push('/');
  };

  useEffect(() => {
    const filterData = GellaryImges.filter(
      (item) =>
        (search
          ? item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          : true) && (catagory ? item.catagory === catagory : true)
    );

    setEmages(filterData);
  }, [search, catagory]);

  const addNewImage = (
    name: string,
    catagory: CatagoryType,
    file: File | null,
    url: string
  ) => {
    const imagId = galleryimages.length.toString();
    if (file) {
      const render = new FileReader();
      render.onload = (e) => {
        const newImage = {
          id: imagId,
          name,
          url: e.target?.result as string,
          catagory,
          liks: 0,
          shares: 0,
        };
        setEmages((pre) => [...pre, newImage]);
      };
      render.readAsDataURL(file);
    } else if (url) {
      const newImage = {
        id: imagId,
        name,
        url,
        catagory,
        liks: 0,
        shares: 0,
      };
      setEmages((pre) => [...pre, newImage]);
    }
  };

  return (
    <>
      <section className="grid  place-content-center place-items-center gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  2xl:grid-cols-4">
        {popup && <Popup submit={addNewImage} close={colse} />}

        {galleryimages?.length > 0 ? (
          galleryimages.map((img) => <GellaryCard key={img.id} {...img} />)
        ) : (
          <p className="text-center col-span-4 mt-5  text-xl font-bold capitalize text-red-300 ">
            Data not found
          </p>
        )}
      </section>
    </>
  );
};

export default Gellary;
