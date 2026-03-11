import React from 'react';

const alignClasses = {
  left: 'text-left items-start',
  center: 'text-center items-center',
};

const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className = '',
}) => {
  const alignment = alignClasses[align] || alignClasses.left;

  return (
    <header className={`flex flex-col gap-3 ${alignment} ${className}`.trim()}>
      {eyebrow ? (
        <div>
          {typeof eyebrow === 'string' ? (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-400">
              {eyebrow}
            </p>
          ) : (
            eyebrow
          )}
        </div>
      ) : null}
      {title ? (
        <h2 className="font-nulshock text-4xl font-bold leading-relaxed wrap-break-word bg-clip-text text-transparent bg-linear-to-b from-neutral-400 to-neutral-800 dark:bg-linear-to-b dark:from-neutral-50 dark:to-neutral-500 bg-opacity-50 sm:text-5xl md:text-6xl md:leading-tight">
          {title}
        </h2>
      ) : null}
      {subtitle ? (
        <p className="max-w-3xl text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </header>
  );
};

export default SectionHeader;
