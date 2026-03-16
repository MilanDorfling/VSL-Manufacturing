import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HoverCard } from '../ui';
import SectionHeader from './SectionHeader';

const defaultMilestones = [
  {
    year: '2018-2020',
    title: 'VSL Manufacturing Founded',
    description: 'Operations established in Komani, Eastern Cape.',
    keyInterests: [
      'Founded by experienced manufacturing professionals',
      'Focus on rebuilding advanced manufacturing capability',
      'Commitment to South African industrial growth',
    ],
    bgColor: 'bg-linear-to-br from-cyan-300/45 to-cyan-600/40',
  },
  {
    year: '2021-2023',
    title: 'Operational Growth',
    description: 'Expansion of workforce, technical expertise, and production capability.',
    keyInterests: [
      'Built strong industry partnerships',
      'Developed technical expertise and skills',
      'Established manufacturing excellence culture',
    ],
    bgColor: 'bg-linear-to-br from-cyan-300/45 to-cyan-600/40',
  },
  {
    year: '2024-2025',
    title: 'Advanced Manufacturing Expansion',
    description: 'Development of the Struandale manufacturing facility in Gqeberha.',
    keyInterests: [
      'R750 million investment',
      '9,800 m² state-of-the-art facility',
      'Advanced automated press line technology',
      'Level 3 BBBEE, 51% black woman ownership',
    ],
    bgColor: 'bg-linear-to-br from-cyan-300/45 to-cyan-600/40',
  },
  {
    year: 'Today',
    title: 'Next Generation Manufacturing',
    description: 'Advanced press line manufacturing supporting global industrial supply chains.',
    keyInterests: [
      '120 new jobs created',
      '3 million components per year capacity',
      'Supporting Isuzu 7th Gen D-MAX production',
      'Global collaboration across 12 countries',
    ],
    bgColor: 'bg-linear-to-br from-cyan-300/45 to-cyan-600/40',
  },
];

function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(() => window.innerWidth < 768);
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isMobile;
}

const JourneyMilestoneCards = ({
  milestones = defaultMilestones,
  title = 'Our Journey',
  eyebrow = null,
  subtitle = 'Key milestones that shaped VSL Manufacturing into a world-class operation.',
  className = '',
}) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const isMobile = useIsMobile();

  const handleCardClick = (index) => {
    if (isMobile) {
      setActiveIndex(activeIndex === index ? null : index);
    }
  };

  return (
    <div className={`w-full ${className}`.trim()}>
      <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} className="mb-6" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {milestones.map((milestone, index) => (
          <HoverCard
            key={`${milestone.year}-${index}`}
            className={`rounded-2xl border border-neutral-300/70 bg-white/80 p-5 shadow-md dark:border-neutral-700 dark:bg-neutral-900/70 ${isMobile ? 'cursor-pointer' : ''}`}
            onClick={isMobile ? () => handleCardClick(index) : undefined}
            enableHover={!isMobile}
            hoverScale={1.02}
            transition={{ duration: 0.2 }}
            overlayClassName={milestone.bgColor}
          >
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-400">
                {milestone.year}
              </p>
              <h3 className="mb-2 text-lg font-bold text-neutral-900 dark:text-neutral-100">
                {milestone.title}
              </h3>
              <p className="text-sm text-neutral-700 dark:text-neutral-300">
                {milestone.description}
              </p>

              {/* Key Interests - Desktop hover / Mobile tap */}
              <AnimatePresence>
                {((!isMobile && activeIndex === null) || (isMobile && activeIndex === index)) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="rounded-lg border border-neutral-300/50 bg-white/90 p-3 dark:border-neutral-600/50 dark:bg-neutral-800/90">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
                        Key Highlights
                      </p>
                      <ul className="space-y-1 text-xs text-neutral-700 dark:text-neutral-300">
                        {milestone.keyInterests.map((interest, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-2 mt-1 inline-block h-1 w-1 shrink-0 rounded-full bg-cyan-600 dark:bg-cyan-400" />
                            <span>{interest}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </HoverCard>
        ))}
      </div>
    </div>
  );
};

export default JourneyMilestoneCards;
