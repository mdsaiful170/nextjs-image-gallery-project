import Containerbox from '@/components/Containerbox';
import Gellary from '@/components/gellary/gellary';
import Header from '@/components/header/Header';
import Navbar from '@/components/nav/Navbar';
import React from 'react';

const Homepage = () => {
  return (
    <>
      <main className="bg-stone-950 flex items-center justify-center min-h-screen py-20 px-10  ">
        <Containerbox className="bg-black border border-white/10">
          <Navbar />
          <Header />
          <h1 className="text-4xl bg-clip-text  text-left text-white/70 pt-10 pb-4 font-bold ">
            Best Image Gallery
          </h1>
          <Gellary />
        </Containerbox>
      </main>
    </>
  );
};

export default Homepage;
