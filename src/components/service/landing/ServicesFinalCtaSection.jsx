import React from 'react';
import { motion } from 'framer-motion';

const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-linear-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-linear-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
  </>
);

const ServicesFinalCtaSection = ({ onPrimary, onSecondary }) => {
  return (
    <section className="w-full px-4 pt-4 pb-16 sm:px-6 md:px-10 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="mx-auto w-full max-w-6xl overflow-hidden rounded-3xl border border-cyan-300/30 bg-linear-to-br from-cyan-100/70 via-white/85 to-blue-100/70 p-6 shadow-2xl dark:border-cyan-700/30 dark:from-cyan-950/25 dark:via-zinc-900/80 dark:to-indigo-950/25 sm:p-8"
      >
        <h2 className="font-nulshock text-3xl leading-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
          Need Help Choosing The Right Process?
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 sm:text-base">
          Share your part requirements with our team and we will help map the best route across
          press operations, laser capability, and project support.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={onPrimary}
            className="group/btn shadow-input relative flex h-10 items-center justify-center rounded-md bg-gray-50 px-6 font-medium text-black transition dark:bg-zinc-900 dark:text-white dark:shadow-[0px_0px_1px_1px_#262626]"
          >
            Talk To Our Team
            <BottomGradient />
          </button>
          <button
            type="button"
            onClick={onSecondary}
            className="group/btn shadow-input relative flex h-10 items-center justify-center rounded-md bg-gray-50 px-6 font-medium text-black transition dark:bg-zinc-900 dark:text-white dark:shadow-[0px_0px_1px_1px_#262626]"
          >
            Revisit Service Options
            <BottomGradient />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesFinalCtaSection;
