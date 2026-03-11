import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = React.useState(() =>
    typeof window !== 'undefined' ? window.innerWidth >= 640 : false,
  );

  React.useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isDesktop;
};

const ExpandableImageSections = ({
  sections = [],
  className = '',
  showPlateHeaders = false,
  outlineColor = 'rgb(34, 211, 238)',
  collapsedHeight = '12rem',
  expandedHeight = 'min(70vh, 36rem)',
}) => {
  const [openIdx, setOpenIdx] = React.useState(null);
  const isDesktop = useIsDesktop();

  let lastPlate = null;

  return (
    <div className={`flex flex-col w-full gap-8 px-2 md:px-0 ${className}`.trim()}>
      {sections.map((section, idx) => {
        const showPlateTitle = showPlateHeaders && section.plate && section.plate !== lastPlate;
        lastPlate = section.plate;

        return (
          <React.Fragment key={`${section.title || 'section'}-${idx}`}>
            {showPlateTitle ? (
              <div className="w-full max-w-6xl md:max-w-none flex flex-col items-start mb-2 px-1 md:px-4 mt-12 sm:mt-15">
                <motion.h2
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white px-4 sm:px-6 py-2 mb-3 sm:mb-4 ml-2 sm:ml-4 bg-black border-4 border-black rounded drop-shadow-lg tracking-tight uppercase"
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  whileHover={{ y: '-30%' }}
                  exit={{ y: 40, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {section.plate}
                </motion.h2>
              </div>
            ) : null}

            <div className="flex flex-col items-center w-full">
              <motion.div
                className="relative w-full max-w-6xl md:max-w-none rounded-none overflow-hidden shadow-lg border-0 cursor-pointer group"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                initial={false}
                animate={{
                  scale: openIdx === idx ? 1.03 : 1,
                  height: openIdx === idx ? expandedHeight : collapsedHeight,
                }}
                transition={
                  openIdx === idx ? { duration: 0 } : { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
                }
                style={{
                  height: openIdx === idx ? expandedHeight : collapsedHeight,
                  outline: openIdx === idx && isDesktop ? `4px solid ${outlineColor}` : 'none',
                  willChange: 'scale, height, transform',
                }}
              >
                <motion.div
                  className="absolute inset-0 z-0 pointer-events-none"
                  initial={false}
                  animate={{
                    backgroundColor: openIdx === idx ? 'rgba(24,24,27,0)' : 'rgba(24,24,27,1)',
                  }}
                  transition={
                    openIdx === idx ? { duration: 0 } : { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
                  }
                  style={{ willChange: 'background-color' }}
                />

                <motion.img
                  src={section.img}
                  alt={section.alt}
                  className="object-cover w-full h-full relative z-10 cursor-pointer"
                  initial={false}
                  animate={{
                    opacity: openIdx === idx ? 1 : 0.6,
                    scale: openIdx === idx ? 1.05 : 1,
                    filter: openIdx === idx ? 'grayscale(0%)' : 'grayscale(100%)',
                  }}
                  whileHover={{
                    opacity: 1,
                    filter: 'grayscale(0%)',
                  }}
                  transition={
                    openIdx === idx ? { duration: 0 } : { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
                  }
                  style={{ willChange: 'opacity, transform, filter' }}
                />

                <AnimatePresence>
                  {openIdx !== idx ? (
                    <motion.div
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 40, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-0 left-0 flex items-end z-10"
                      style={{ width: 'auto', minWidth: '0' }}
                    >
                      <motion.h2
                        className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white px-4 sm:px-6 py-2 mb-3 sm:mb-4 ml-2 sm:ml-4 bg-black border-4 border-black rounded drop-shadow-lg tracking-tight"
                        initial={false}
                        animate={{ y: '0%' }}
                        whileHover={{ y: '-30%' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      >
                        {section.title}
                      </motion.h2>
                    </motion.div>
                  ) : null}
                </AnimatePresence>

                <AnimatePresence>
                  {openIdx === idx ? (
                    <motion.div
                      key="info"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                      className="absolute inset-0 flex items-center justify-center bg-black/80 p-4 sm:p-6 text-white z-20"
                      style={{ pointerEvents: 'none' }}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.05, ease: [0.4, 0, 0.2, 1] }}
                        className="w-full max-w-full md:max-w-6xl max-h-[calc(100%-0.5rem)] sm:max-h-[calc(100%-1rem)] mx-auto overflow-y-auto overflow-x-auto px-1 sm:px-3 md:px-4 py-2 text-center pointer-events-auto"
                      >
                        {section.info}
                      </motion.div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ExpandableImageSections;
