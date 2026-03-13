import React, { useState } from 'react';
import { Spotlight } from '../ui/Spotlight';
import { motion, AnimatePresence } from 'framer-motion';
import pressLineImage from '../../assets/pictures/SWD13740.JPG';

// Custom hook to detect if screen is mobile (below md)
function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(() => window.innerWidth < 768);
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isMobile;
}

const HomeIntro = ({
  headline = (
    <>
      FORGED IN PURPOSE. <br /> BUILT FOR THE FUTURE.
    </>
  ),
  subheading = 'Advanced precision engineering and manufacturing solutions from our facilities in Gqeberha and Komani, South Africa.',
  supportingText = 'VSL Manufacturing combines innovation, precision engineering, and decades of industry expertise to deliver high-quality metal stamping, forming, and advanced manufacturing solutions for the automotive and industrial sectors.',
  introStatement =
    'Welcome to the future of manufacturing. Step inside our advanced production facilities where innovation meets precision and engineering expertise delivers world-class results. At VSL Manufacturing, we transform complex ideas into production-ready components using cutting-edge technology, highly skilled teams, and globally recognised quality standards.',
  ctaLabel = 'Step Inside',
  onCtaClick,
  showSpotlight: showSpotlightProp = true,
  className = '',
  children,
}) => {
  const [showSpotlight, setShowSpotlight] = useState(false);
  const isMobile = useIsMobile();

  // When the text animation completes, start a short timer to show the spotlight.
  const handleTextAnimationComplete = () => {
    if (showSpotlightProp) {
      setTimeout(() => setShowSpotlight(true), 100);
    }
  };

  const handleCta = () => {
    if (typeof onCtaClick === 'function') {
      onCtaClick();
    }
  };

  return (
    <section className={`relative w-full min-h-screen overflow-hidden ${className}`.trim()}>
      <img
        src={pressLineImage}
        alt="VSL press line manufacturing facility"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-br from-neutral-950/90 via-neutral-950/72 to-neutral-900/64" />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-neutral-950/82 via-transparent to-neutral-950/28" />

      <AnimatePresence>
        {/* Only show Spotlight on md+ screens */}
        {!isMobile && showSpotlight && showSpotlightProp ? (
          <>
            <div className="pointer-events-none absolute inset-0 z-10 blur-sm">
              <Spotlight
                width={620}
                height={1460}
                smallWidth={290}
                duration={7.5}
                xOffset={135}
                gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(0, 0%, 100%, .24) 0, hsla(208, 48%, 84%, .1) 50%, hsla(208, 48%, 84%, 0) 82%)"
                gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(0, 0%, 100%, .16) 0, hsla(208, 52%, 80%, .06) 80%, transparent 100%)"
                gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(0, 0%, 100%, .11) 0, hsla(208, 52%, 76%, .05) 80%, transparent 100%)"
              />
            </div>
            <motion.div
              className="pointer-events-none absolute inset-0 z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 1.35, ease: 'easeOut' }}
            >
              <div className="absolute left-1/4 top-[28%] h-72 w-72 rounded-full bg-sky-100/28 blur-[88px]" />
              <div className="absolute right-1/4 top-[42%] h-80 w-80 rounded-full bg-blue-100/20 blur-[96px]" />
            </motion.div>
            <motion.div
              className="pointer-events-none absolute inset-0 z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.24, 0.4, 0.24] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="absolute left-[12%] top-[18%] h-48 w-48 rounded-full bg-sky-100/20 blur-[80px]" />
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>

      <motion.div
        className="relative z-30 mx-auto flex min-h-[calc(100svh-5.5rem)] w-full max-w-7xl items-center justify-center px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12 lg:px-16"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        onAnimationComplete={handleTextAnimationComplete}
      >
        <div className="mx-auto w-full max-w-4xl p-5 text-start sm:p-6 md:p-7">
          <h1 className="text-center text-5xl xs:text-4xl sm:text-5xl md:text-6xl font-nulshock font-bold pb-5 bg-clip-text text-transparent bg-linear-to-b from-neutral-400 to-neutral-800 dark:bg-linear-to-b dark:from-neutral-50 dark:to-neutral-500 bg-opacity-50 leading-relaxed md:leading-tight wrap-break-word">
            {headline}
          </h1>

          <h3 className="mt-1 py-1 text-xl leading-snug text-neutral-100 sm:text-2xl">{subheading}</h3>

          <p className="mt-4 text-base leading-relaxed text-neutral-200 sm:text-lg">{supportingText}</p>

          <p className="mt-4 text-sm leading-relaxed text-neutral-200 sm:text-base">{introStatement}</p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={handleCta}
              className="group/btn shadow-input relative flex h-10 min-w-62 items-center justify-center rounded-md bg-gray-50 px-6 font-medium text-black transition dark:bg-zinc-900 dark:text-white dark:shadow-[0px_0px_1px_1px_#262626]"
            >
              {ctaLabel}
              <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-linear-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
              <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-linear-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
            </button>
            {children}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HomeIntro;
