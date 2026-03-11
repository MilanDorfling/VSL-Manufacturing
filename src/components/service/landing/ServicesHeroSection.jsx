import React from 'react';
import { motion } from 'framer-motion';

const ServicesHeroSection = ({ content }) => {
  return (
    <section className="relative w-full px-4 pt-28 pb-16 sm:px-6 md:px-10 lg:px-16">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-stretch gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="rounded-3xl border border-cyan-300/20 bg-white/20 p-6 shadow-xl dark:border-cyan-700/20 dark:bg-zinc-900/40 sm:p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-400">
            {content.kicker}
          </p>
          <h1 className="mt-4 text-5xl sm:text-6xl font-extrabold leading-normal bg-linear-to-t from-neutral-900/95 to-gray-300 bg-clip-text text-transparent drop-shadow-lg dark:from-white/80 dark:to-white/30">
            {content.title}
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-neutral-700 dark:text-neutral-200/80 sm:text-base">
            {content.subtitle}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {content.chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-800 dark:text-cyan-200"
              >
                {chip}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut', delay: 0.05 }}
          className="relative overflow-hidden rounded-3xl border border-cyan-200/30 shadow-2xl"
        >
          <img src={content.imageSrc} alt={content.imageAlt} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-tr from-black/65 via-black/15 to-cyan-800/25" />
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHeroSection;
