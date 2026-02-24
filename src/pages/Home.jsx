import React from 'react';
import HomeIntro from '../components/HomeIntro';
import { DotBackgroundDemo } from '../components/ui/dotSVG';
import HeroBanner, { heroImages } from '../components/heroBanner';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import factoryTourVideo from '../assets/videos/VSLVID - Trim.mp4';

import { LayoutTextFlip } from '../components/LayoutTextFlip';
import FlipCardGrid from '../components/flipCard';
import LogoLoop from '../components/ui/logoLoop';


const heroData = [
  {
    name: "Vuyo Skweyiya",
    title: "Director",
    imageSrc: heroImages[0],
  },
  {
    name: "Deon van Zyl",
    title: "Managing Director",
    imageSrc: heroImages[1],
  },
];

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [current, setCurrent] = useState(0);
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <DotBackgroundDemo />
      </div>
      <HomeIntro />

      <section className="flex flex-col items-center mb-25 gap-2 md:gap-4 -mt-35 sm:-mt-30 md:mt-10 lg:mt-25">
        <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-6 text-neutral-600 dark:text-white px-10 md:px-20 -mt-6 xl:px-60 xl:mb-15">
          Welcome to the future of manufacturing.
          Step inside our brand new factory—where innovation meets precision, and your ideas become reality.
          Experience next-level craftsmanship, cutting-edge technology, and a team dedicated to building what’s next.
          Welcome to a new era.
        </h3>
        
        <div className="w-full flex justify-center mb-8 px-8 mt-5 md:px-20">
                  <video
                    src={factoryTourVideo}
                    controls
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="rounded-2xl shadow-lg w-full max-w-6xl object-cover bg-black"
                    style={{ aspectRatio: '16/9' }}
                  />
                </div>

        <div className="flex justify-end mt-10 md:mt-50 md:ml-10 w-full">
          <LayoutTextFlip staticText="Our" words={["Values", "Goals", "Mission"]} className="text-5xl" />
        </div>

        <div className="w-full flex justify-center mt-6 md:mt-10">
          <FlipCardGrid />
        </div>

        <h1 className="text-4xl md:text-5xl font-nulshock font-bold bg-clip-text text-transparent bg-linear-to-b from-neutral-400 to-neutral-800 dark:bg-linear-to-b dark:from-neutral-50 dark:to-neutral-500 bg-opacity-50 leading-tight wrap-break-word pt-10 md:pt-30 ">Company Partners</h1>
        <div className="w-full flex justify-center mt-20 mb-20">
          <LogoLoop />
        </div>

        <div className="w-full flex flex-col items-center gap-4 md:gap-6 mt-6 md:mt-10 mb-20 md:mb-30 px-4 md:px-20">
          <h2 className="text-5xl xs:text-4xl md:text-6xl font-nulshock font-bold bg-clip-text text-transparent bg-linear-to-b from-neutral-400 to-neutral-800 dark:bg-linear-to-b dark:from-neutral-50 dark:to-neutral-500 bg-opacity-50 leading-tight wrap-break-word border-b border-neutral-300 dark:border-cyan-600 pb-4">
            About us
          </h2>
          
          <p className="text-white text-base md:text-lg px-6 md:px-20 text-wrap">
            Founded in early 2018, VSL Manufacturing is a privately owned company led by two dedicated directors. 
            Our main manufacturing facility is based in Queenstown, while our advanced laser cutting operations are located in Port Elizabeth. 
            With deep roots in the Eastern Cape, our team is committed to driving growth and development within this vibrant and beautiful province.
          </p>
        </div>
        
        <h2 className='text-3xl md:text-4xl font-bold mb-3 md:mb-6 text-neutral-600 dark:text-white'>Meet Our Leaders</h2>
        <div className="w-full flex flex-col items-center justify-center mt-6 md:mt-10 mb-10 md:mb-20 px-3 md:px-5">
          {isMobile ? (
            <div className="relative flex items-center justify-center w-full" style={{ minHeight: 520 }}>
              {/* Left button (for previous) */}
              <button
                aria-label="Previous"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-zinc-400/50 text-white rounded-full shadow hover:bg-cyan-700 transition w-12 h-12 flex items-center justify-center"
                style={{ zIndex: 2 }}
                onClick={() => setCurrent((prev) => (prev - 1 + heroData.length) % heroData.length)}
              >
                <ArrowLeft size={28} />
              </button>
              <div className="flex-1 flex justify-center">
                <HeroBanner {...heroData[current]} />
              </div>
              {/* Right button (for next) */}
              <button
                aria-label="Next"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-zinc-400/50 text-white rounded-full shadow hover:bg-cyan-700 transition w-12 h-12 flex items-center justify-center"
                style={{ zIndex: 2 }}
                onClick={() => setCurrent((prev) => (prev + 1) % heroData.length)}
              >
                <ArrowRight size={28} />
              </button>
            </div>
          ) : (
            <div className="flex w-full justify-center gap-4 md:gap-8">
              <HeroBanner {...heroData[0]} />
              <HeroBanner {...heroData[1]} />
            </div>
          )}
        </div>
      </section>
      {/* Home page content */}
    </div>
  );
};

export default Home;
