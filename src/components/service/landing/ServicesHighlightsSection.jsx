import React from 'react';
import { motion } from 'framer-motion';

const ServicesHighlightsSection = ({ highlights }) => {
  return (
    <section className="w-full px-4 py-12 sm:px-6 md:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-7xl rounded-3xl border border-neutral-300/60 bg-white/70 p-6 shadow-lg backdrop-blur-sm dark:border-neutral-700/60 dark:bg-zinc-900/65 sm:p-8">
        <h2 className="font-nulshock text-2xl text-neutral-900 dark:text-neutral-100 sm:text-3xl md:text-4xl">
          Why Teams Work With VSL
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {highlights.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: idx * 0.06 }}
              className="rounded-2xl border border-neutral-300/60 bg-white/85 p-4 dark:border-neutral-700/60 dark:bg-zinc-900/75"
            >
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 sm:text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesHighlightsSection;
