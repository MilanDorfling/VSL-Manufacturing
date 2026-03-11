import React from 'react';

export const ServiceShell = ({ className = '', children }) => {
  return <div className={`w-full min-h-screen flex flex-col ${className}`.trim()}>{children}</div>;
};

export const ServiceSection = ({ className = '', children }) => {
  return <section className={`w-full max-w-6xl mx-auto px-4 ${className}`.trim()}>{children}</section>;
};

export const ServiceHeader = ({
  title,
  subtitle,
  titleClassName = '',
  subtitleClassName = '',
  className = '',
}) => {
  return (
    <header className={`flex flex-col items-center text-center ${className}`.trim()}>
      {title ? (
        <h1
          className={`text-5xl sm:text-6xl font-extrabold bg-linear-to-t from-neutral-900/95 to-gray-300 bg-clip-text text-transparent drop-shadow-lg dark:from-white/80 dark:to-white/30 leading-normal ${titleClassName}`.trim()}
        >
          {title}
        </h1>
      ) : null}
      {subtitle ? (
        <p className={`text-lg sm:text-xl text-white/80 font-medium max-w-4xl mx-auto ${subtitleClassName}`.trim()}>
          {subtitle}
        </p>
      ) : null}
    </header>
  );
};

export const ServiceCopy = ({ className = '', children }) => {
  return (
    <div className={`text-base sm:text-lg leading-relaxed text-neutral-200 ${className}`.trim()}>
      {children}
    </div>
  );
};

export const ServiceMediaSlot = ({ className = '', children }) => {
  return (
    <div className={`rounded-2xl shadow-lg overflow-hidden bg-black ${className}`.trim()}>{children}</div>
  );
};
