import React from 'react';
import { motion } from 'framer-motion';

const ServicesQuoteSection = ({ quote, author }) => {
  return (
    <section className="w-full px-4 py-8 sm:px-6 md:px-10 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="mx-auto w-full max-w-5xl rounded-2xl border border-neutral-300/70 bg-white/75 p-6 text-center shadow-lg backdrop-blur-sm dark:border-neutral-700/70 dark:bg-zinc-900/65 sm:p-8"
      >
        <p className="text-4xl leading-none text-cyan-600/70 dark:text-cyan-400/70">"</p>
        <p className="mt-2 text-xl font-medium leading-relaxed text-neutral-800 dark:text-neutral-100 sm:text-2xl">
          {quote}
        </p>
        <div className="mx-auto mt-5 h-px w-32 bg-linear-to-r from-transparent via-cyan-500/70 to-transparent" />
        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-600 dark:text-neutral-300">
          {author}
        </p>
      </motion.div>
    </section>
  );
};

export default ServicesQuoteSection;
