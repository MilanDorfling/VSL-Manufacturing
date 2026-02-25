
import React from "react";
import { motion } from "framer-motion";
import GridSVG from "./ui/GridSVG";
import videoTour from '../assets/videos/laser_cut.mp4';
import laser1 from '../assets/pictures/LASER1.jpg';
import laser2 from '../assets/pictures/VSL Opening 27.11.2025 007.jpeg';
import laser3 from '../assets/pictures/LASER3.jpg';
import img3 from '../assets/pictures/VSL Opening 27.11.2025 008.jpeg';


const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: "easeOut" } }
};

const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-linear-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-linear-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
  </>
  );

import { AnimatePresence } from "framer-motion";
const laserSections = [
  {
    img: laser1,
    alt: "TruLaser Cell 5030",
    title: "Features",
    info: (
      <div className="text-white">
        <h3 className="text-xl font-bold mb-2 text-center">TruLaser Cell 5030 Features</h3>
        <ul className="list-disc pl-8 mb-2 text-left w-fit mx-auto">
          <li><span className="font-semibold">2D & 3D Laser Cutting:</span> Flexible processing for flat and formed parts.</li>
          <li><span className="font-semibold">Large Working Area:</span> X: 3,000 mm, Y: 1,500 mm, Z: 400 mm.</li>
          <li><span className="font-semibold">Laser Power:</span> 2 kW – 5 kW (fiber or CO₂ options).</li>
          <li><span className="font-semibold">Fast Setup & Changeover:</span> Ideal for prototypes and small/medium series.</li>
          <li><span className="font-semibold">User-Friendly Control:</span> Intuitive interface for efficient operation.</li>
        </ul>
      </div>
    )
  },
  {
    img: laser2,
    alt: "Laser Benefits",
    title: "Benefits",
    info: (
      <div className="text-white">
        <h3 className="text-xl font-bold mb-2 text-center">Why Choose TruLaser Cell 5030?</h3>
        <ul className="list-disc pl-8 mb-2 text-left w-fit mx-auto">
          <li>Outstanding precision and repeatability</li>
          <li>Handles a wide range of materials and thicknesses</li>
          <li>Rapid turnaround for prototypes and production</li>
          <li>Expert design and programming support in-house</li>
        </ul>
      </div>
    )
  },
  {
    img: laser3,
    alt: "Laser Specs",
    title: "Technical Specs",
    info: (
      <div className="text-white">
        <h3 className="text-xl font-bold mb-2 text-center">Technical Specifications</h3>
        <ul className="list-disc pl-8 mb-2 text-left w-fit mx-auto">
          <li><span className="font-semibold">Working Area (X/Y/Z):</span> 3,000 mm × 1,500 mm × 400 mm</li>
          <li><span className="font-semibold">Laser Power:</span> 2 kW – 5 kW (fiber or CO₂)</li>
          <li><span className="font-semibold">Material Range:</span> Steel, stainless, aluminum, and more</li>
          <li><span className="font-semibold">Cutting, Welding, Drilling:</span> Versatile multi-process capability</li>
          <li><span className="font-semibold">Control:</span> Intuitive, user-friendly interface</li>
        </ul>
      </div>
    )
  },
  {
    img: img3,
    alt: "Laser Applications",
    title: "Applications",
    info: (
      <div className="text-white">
        <h3 className="text-xl font-bold mb-2 text-center">Applications</h3>
        <ul className="list-disc pl-8 mb-2 text-left w-fit mx-auto">
          <li>Flat and formed part cutting</li>
          <li>Prototyping and small/medium series</li>
          <li>Automotive and industrial components</li>
          <li>Custom fabrication and engineering</li>
          <li>Welding and drilling operations</li>
        </ul>
      </div>
    )
  },
];

function LaserExpandableSections() {
  const [openIdx, setOpenIdx] = React.useState(null);
  return (
    <div className="flex flex-col w-full gap-8 px-0 mt-10">
      {laserSections.map((section, idx) => (
        <div key={idx} className="flex flex-col items-center w-full">
          <motion.div
            className={`relative w-full rounded-none overflow-hidden shadow-lg border-0 cursor-pointer group ${openIdx === idx ? 'ring-4 ring-cyan-400' : ''}`}
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            initial={false}
            animate={{
              scale: openIdx === idx ? 1.03 : 1,
              height: openIdx === idx ? '30rem' : '15rem',
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 30 }}
            style={{ height: openIdx === idx ? '22rem' : '11rem' }}
          >
            {/* Solid bg overlay to prevent SVG bleed-through */}
            <div
              className={`absolute inset-0 z-0 transition-all duration-500 pointer-events-none ${openIdx === idx ? 'bg-transparent' : 'bg-zinc-950'}`}
              style={{ backgroundColor: openIdx === idx ? 'transparent' : 'rgba(24,24,27,1)' }}
            />
            <img
              src={section.img}
              alt={section.alt}
              className={
                `object-cover w-full h-full transition-all duration-500 relative z-10 ` +
                (openIdx === idx ? 'opacity-100 scale-105' : 'opacity-60') +
                ' group-hover:grayscale-0 grayscale group-hover:opacity-100'
              }
              style={{ width: '100vw', maxWidth: '100vw' }}
            />
            {/* Title overlay bottom left, hide when open */}
            <AnimatePresence>
              {openIdx !== idx && (
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 40, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 flex items-end z-10"
                  style={{ width: 'auto', minWidth: '0' }}
                >
                  <motion.h2
                    className="text-3xl font-extrabold text-white px-6 py-2 mb-4 ml-4 bg-black border-4 border-black rounded drop-shadow-lg tracking-tight"
                    initial={false}
                    animate={{ y: '0%' }}
                    whileHover={{ y: '-30%' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  >
                    {section.title}
                  </motion.h2>
                </motion.div>
              )}
            </AnimatePresence>
            {/* Info overlay inside image */}
            <AnimatePresence>
              {openIdx === idx && (
                <motion.div
                  key="info"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 flex items-center justify-center bg-black/80 p-6 text-white z-20"
                  style={{ pointerEvents: 'none' }}
                >
                  <div className="max-w-xl mx-auto text-center pointer-events-auto">{section.info}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      ))}
    </div>
  );
}

const Lazercutting = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* GridSVG as fixed background */}
      <GridSVG />
      <motion.div 
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {/* HERO SECTION */}
        <section className="w-full max-w-5xl mx-auto py-10 sm:pt-20 pb-10 px-4 flex flex-col items-center">
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            className="text-6xl font-extrabold text-center bg-linear-to-t from-neutral-900/95 to-gray-300 bg-clip-text text-transparent drop-shadow-lg mb-4 dark:from-white/80 dark:to-white/30"
          >
           Laser Cut Operation
          </motion.h1>
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            className="text-3xl font-bold text-center bg-linear-to-t from-neutral-900/95 to-gray-300 bg-clip-text text-transparent mb-10 dark:from-white/80 dark:to-white/30"
          >
            TruLaser Cell 5030
          </motion.h2>
        </section>

        {/* VIDEO & TEXT SIDE-BY-SIDE SECTION */}
        <div className="w-full flex flex-col md:flex-row items-center justify-center mb-16 px-20 pb-20 gap-10 md:gap-16">
          {/* Text on the left */}
          <motion.h3 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            className="text-2xl font-light max-w-2xl text-neutral-200 text-center md:text-left md:mb-0"
          >
            Our Port Elizabeth facility features the newly commissioned Trumpf TruLaser Cell 5030, a state-of-the-art system for both 2D and 3D laser cutting. This machine delivers outstanding precision, flexibility, and efficiency for a wide range of applications.<br /><br />
            Our in-house design office provides expert design and programming support, ensuring seamless project execution from concept to final cut.
          </motion.h3>
          {/* Video on the right */}
          <video
            src={videoTour}
            controls={false}
            autoPlay
            loop
            muted
            playsInline
            poster={laser1}
            className="rounded-2xl shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-cover bg-black"
            style={{ aspectRatio: '9/16', maxHeight: '80vh' }}
          />
        </div>
        
      </motion.div>

      {/* add dropdown cards here */}
      <LaserExpandableSections />

      {/* Contact button at the bottom */}
      <div className="w-full flex justify-center mt-12 mb-10">
        <a
          href="/contact"
          className="group/btn shadow-input relative flex h-10 px-6 items-center justify-center rounded-md bg-gray-50 font-medium text-black dark:bg-zinc-900 dark:text-white dark:shadow-[0px_0px_1px_1px_#262626]"
          aria-label="Contact us for more information"
        >
          Get More Information
          <BottomGradient />
        </a>
      </div>
    </div>
  );
};

export default Lazercutting;
