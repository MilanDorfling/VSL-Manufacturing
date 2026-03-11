import React from 'react';

const ClosingBannerSection = ({
  title = 'Forged In Partnership. Built For The Future.',
  subtitle = 'The opening of the Gqeberha facility marks a new era shaped by local capability, shared ambition, and long-term industrial progress.',
  body = 'Together with our partners, VSL continues to expand capability, uplift communities, and deliver manufacturing excellence that is proudly South African and globally competitive.',
  className = '',
}) => {
  return (
    <section className={className}>
      <div className="rounded-3xl border border-neutral-300/70 bg-linear-to-br from-neutral-100/90 via-white/90 to-cyan-200/80 px-6 py-10 shadow-md dark:border-neutral-700 dark:from-neutral-900/90 dark:via-neutral-900/90 dark:to-cyan-900/30 sm:px-8 sm:py-12 md:px-10">
        <h2 className="font-nulshock text-3xl font-bold leading-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl md:text-5xl">
          {title}
        </h2>
        <p className="mt-4 max-w-4xl text-base leading-relaxed text-neutral-700 dark:text-neutral-300 sm:text-lg">
          {subtitle}
        </p>
        <p className="mt-4 max-w-4xl text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 sm:text-base">
          {body}
        </p>
      </div>
    </section>
  );
};

export default ClosingBannerSection;
