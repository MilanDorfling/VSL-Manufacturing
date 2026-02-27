import React, { useState, useEffect } from 'react';
import { BackgroundBeams } from '../components/ui/background-beams';
import { motion, useInView } from 'framer-motion';
import ReactMemo from 'react';
import { useNavigate } from 'react-router-dom';
import serviceImg  from '../assets/pictures/VSL Opening 27.11.2025 469.jpeg';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};
const fadeInUpDelayed = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.3 } }
};

const Services = () => {
  const [showImage, setShowImage] = useState(false);
  const [showCards, setShowCards] = useState(false);
  // Refs for each section
  const h1Ref = React.useRef(null);
  const pRef = React.useRef(null);
  const navigate = useNavigate();


  // InView hooks for each section
  const h1InView = useInView(h1Ref, { margin: '-100px', once: true });
  const pInView = useInView(pRef, { margin: '-100px', once: true });

  // Animation: show image after 1s, then cards after image loads
  useEffect(() => {
    const timer = setTimeout(() => setShowImage(true), 1000);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    if (showImage) {
      const timer = setTimeout(() => setShowCards(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [showImage]);

  // Memoized Service Card to prevent unnecessary re-renders
  const ServiceCard = React.useMemo(() => ({ title, desc, onClick }) => (
    <div className="bg-white/90 dark:bg-zinc-900/70 rounded-xl shadow-lg p-8 flex flex-col min-h-[220px] max-w-md mx-auto border border-gray-200 dark:border-zinc-800 transition-transform hover:scale-105 hover:shadow-2xl">
      <h2 className="text-2xl font-bold mb-2 text-neutral-900 dark:text-white">{title}</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6 text-base">{desc}</p>
      <button
        onClick={onClick}
        className="mt-auto px-5 py-2 bg-cyan-500 text-white rounded-lg font-semibold shadow hover:bg-cyan-600 transition focus:outline-none focus:ring-2 focus:ring-cyan-400"
      >
        Learn More
      </button>
    </div>
  ), []);

  // Reduce motion/animation on xl screens for performance
  const isXL = typeof window !== 'undefined' && window.innerWidth >= 1280;

  return (
    <div className="min-h-screen bg-white text-neutral-800 dark:bg-zinc-900 dark:text-neutral-200 flex flex-col items-center justify-center relative overflow-hidden px-3 sm:px-4 md:px-0">
      {/* Top Section: Title & Intro */}
      <div className="w-full flex flex-col items-center justify-center pt-34 pb-8 z-20 px-2 sm:px-4 md:px-0 mt-12">
        <motion.h1
          ref={h1Ref}
          variants={fadeInUp}
          initial="hidden"
          animate={h1InView ? "visible" : "hidden"}
          className="text-6xl font-extrabold text-center bg-linear-to-t from-neutral-900/95 to-gray-300 bg-clip-text text-transparent drop-shadow-lg mb-4 dark:from-white/80 dark:to-white/30"
        >
          Choose a Service
        </motion.h1>
        <motion.p
          ref={pRef}
          variants={fadeInUpDelayed}
          initial="hidden"
          animate={pInView ? "visible" : "hidden"}
          className="text-neutral-800 dark:text-neutral-300 text-center max-w-xl mx-auto text-base font-normal"
        >
          Welcome to VSL Manufacturing. Select a service below to learn more or get started.
        </motion.p>
      </div>

      {/* SVG-Beams Section */}
      <div className="absolute 
        -left-5 -top-20 translate-x-4 -translate-y-2 w-xl h-[520px]
        md:left-0 md:top-0 md:translate-x-0 md:translate-y-0 md:w-full md:h-[400px]
        lg:-left-1 lg:-top-24 lg:w-full lg:h-[480px]
        xl:left-0 xl:-top-22 xl:w-full xl:h-[640px]
        pointer-events-none z-0">
        <BackgroundBeams className="h-full z-0" />
        <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-b from-transparent to-white dark:to-zinc-900" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-40">
        <motion.h2 
        ref={pRef}
        variants={fadeInUpDelayed}
        initial="hidden"
        animate={pInView ? "visible" : "hidden"}
        className='text-2xl font-semibold'>
          "You don't start from the top. <br />The best view is actually from the bottom looking up."
        </motion.h2>
        <motion.p
          ref={pRef}
          variants={fadeInUpDelayed}
          initial="hidden"
          animate={pInView ? "visible" : "hidden"}
          className='text-gray-600 dark:text-gray-400 mt-4 text-lg'
        >
          - Vuyo Skweyiya
        </motion.p>
      </div>

      {/* Service Image Section - moved below h1/p */}
      <div className="flex justify-center items-center mt-8 mb-8 xl:mt-2">
        <div className="relative mx-auto w-full h-80 sm:h-[400px] md:h-[480px] lg:h-[640px] xl:w-[1020px] 2xl:w-[1440px] px-4 sm:px-8 md:px-12 lg:px-20 xl:mt-12 2xl:mt-20">
          {/* Use plain img for xl+ to reduce animation cost */}
          {isXL ? (
            <img
              src={serviceImg}
              alt="Service"
              className="object-cover w-full h-full rounded-2xl shadow-lg select-none"
              loading="lazy"
            />
          ) : (
            <motion.img
              src={serviceImg}
              alt="Service"
              className="object-cover w-full h-full rounded-2xl shadow-lg select-none"
              initial={{ opacity: 0, y: 500 }}
              animate={showImage ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: 'easeOut' }}
            />
          )}
          {/* Overlay: only on non-xl for performance */}
          {!isXL && (
            <motion.div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-zinc-900/40 pointer-events-none"
              initial={{ opacity: 0, y: 500 }}
              animate={showImage ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: 'easeOut' }} />
          )}
          {/* Service Cards Overlay for desktop */}
          <div
            className="hidden md:flex absolute inset-0 flex-col justify-end items-center z-10 pb-8 md:pb-12 lg:pb-20"
            style={isXL ? { pointerEvents: 'auto' } : {}}
          >
            <div className="grid grid-cols-2 gap-10 w-full max-w-5xl mx-auto px-2 md:px-0">
              <ServiceCard
                title="Power Press"
                desc="High-precision power pressing for all your manufacturing needs."
                onClick={() => navigate('/powerpress')}
              />
              <ServiceCard
                title="Laser Cutting"
                desc="Advanced laser cutting for metals and custom parts."
                onClick={() => navigate('/lazercutting')}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Service Cards for mobile */}
      <motion.div
        className="flex md:hidden flex-col items-center w-full max-w-md mx-auto gap-6 mt-8 mb-12 px-2"
        initial={false}
        animate={showCards ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0 }}
      >
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={showCards ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
        >
          <div className="bg-white/90 dark:bg-zinc-900/70 rounded-xl shadow-lg p-6 flex flex-col min-h-[180px] border border-gray-200 dark:border-zinc-800">
            <h2 className="text-2xl font-bold mb-2 text-neutral-900 dark:text-white">Power Press</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-base">High-precision power pressing for all your manufacturing needs.</p>
            <button
              onClick={() => navigate('/powerpress')}
              className="mt-auto px-5 py-2 bg-cyan-500 text-white rounded-lg font-semibold shadow hover:bg-cyan-600 transition focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              Learn More
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={showCards ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="bg-white/90 dark:bg-zinc-900/70 rounded-xl shadow-lg p-6 flex flex-col min-h-[180px] border border-gray-200 dark:border-zinc-800">
            <h2 className="text-2xl font-bold mb-2 text-neutral-900 dark:text-white">Laser Cutting</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-base">Advanced laser cutting for metals and custom parts.</p>
            <button
              onClick={() => navigate('/lazercutting')}
              className="mt-auto px-5 py-2 bg-cyan-500 text-white rounded-lg font-semibold shadow hover:bg-cyan-600 transition focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              Learn More
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
