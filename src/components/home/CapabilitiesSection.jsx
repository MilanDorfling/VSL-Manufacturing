import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FlipCardGrid from './flipCard';
import SectionHeader from './SectionHeader';

const CapabilitiesSection = ({
  subtitle = 'High-tonnage metal stamping, automated press lines, laser cutting, tooling support, prototyping, and quality-driven production workflows.',
  staticText = 'Our',
  words = ['Capabilities', 'Solutions', 'Expertise'],
  className = '',
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 5700); // 5s display + 0.7s transition
    return () => clearInterval(interval);
  }, [words.length]);

  const TextFlip = () => (
    <div className="flex w-full justify-start text-4xl sm:text-5xl md:text-6xl font-nulshock font-bold pb-8">
      <span className="inline-flex items-center gap-3 align-middle">
        <span className="text-zinc-600 font-bold align-middle dark:text-white">{staticText}</span>
        <span className="relative inline-block align-middle w-[8ch] h-[1em] text-left" style={{ minWidth: '6ch' }}>
          <AnimatePresence initial={true} mode="wait">
            <motion.span
              key={words[index]}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute left-0 top-0 w-full text-sky-500 font-bold align-middle mt-0.5 ml-1"
              style={{ willChange: "transform, opacity" }}
            >
              {words[index]}
            </motion.span>
          </AnimatePresence>
        </span>
      </span>
    </div>
  );

  return (
    <section className={className}>
      <SectionHeader eyebrow={<TextFlip />} subtitle={subtitle} className="mb-8" />

      <div className="rounded-2xl border border-neutral-300/80 bg-white/70 px-2 py-2 shadow-sm dark:border-neutral-700 dark:bg-neutral-900/60 sm:px-4 sm:py-3">
        <FlipCardGrid />
      </div>
    </section>
  );
};

export default CapabilitiesSection;
