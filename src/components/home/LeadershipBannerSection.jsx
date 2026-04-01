import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeader from './SectionHeader';
import HeroBanner, { getCardHeightFromBio, heroImages } from './heroBanner';

const defaultLeaders = [
  {
    name: 'Vuyo Skweyiya',
    badge: 'CEO | Co-Founder',
    bio: 'Vuyo Skweyiya is the Co-Founder and CEO of VSL Manufacturing, responsible for the company\'s strategic direction, stakeholder partnerships, and organisational development. Since founding VSL in 2018, she has played a key role in guiding the company\'s growth and expansion into advanced manufacturing operations in Komani and Gqeberha.',
    imageSrc: heroImages[0],
  },
  {
    name: 'Deon van Zyl',
    badge: 'Managing Director | Co-Founder',
    bio: 'Deon van Zyl is the Co-Founder and Managing Director of VSL Manufacturing, leading the company\'s manufacturing operations and engineering development. With extensive experience in metal forming and advanced manufacturing, he oversees the technical capability and production excellence of VSL\'s operations.',
    imageSrc: heroImages[1],
  },
];

const LeadershipBannerSection = ({
  title = 'Built By People Who Believe',
  eyebrow = null,
  subtitle = 'The partnerships behind VSL are led by individuals committed to progress, capability, and shared long-term impact.',
  leaders = defaultLeaders,
  className = '',
}) => {
  const [currentLeaderIndex, setCurrentLeaderIndex] = useState(0);
  const sharedCardHeight = Math.max(...leaders.map((leader) => getCardHeightFromBio(leader.bio)));

  const handleNextLeader = () => {
    setCurrentLeaderIndex((prev) => (prev + 1) % leaders.length);
  };

  const handlePreviousLeader = () => {
    setCurrentLeaderIndex((prev) => (prev - 1 + leaders.length) % leaders.length);
  };

  return (
    <section className={className}>
      <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} align="center" className="mb-8" />

      <div className="sm:hidden">
        <div className="relative flex justify-center">
          <div className="relative z-10">
            <HeroBanner
              key={`${leaders[currentLeaderIndex].name}-${currentLeaderIndex}`}
              name={leaders[currentLeaderIndex].name}
              badge={leaders[currentLeaderIndex].badge}
              bio={leaders[currentLeaderIndex].bio}
              imageSrc={leaders[currentLeaderIndex].imageSrc}
              cardHeight={sharedCardHeight}
            />
          </div>

          <button
            type="button"
            aria-label="Previous leader"
            onClick={handlePreviousLeader}
            className="absolute left-2 top-1/2 z-30 -translate-y-1/2 rounded-full border border-cyan-500/70 bg-cyan-500/20 p-2.5 text-cyan-700 backdrop-blur-sm transition hover:bg-cyan-500/30 dark:text-cyan-300"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            aria-label="Next leader"
            onClick={handleNextLeader}
            className="absolute right-2 top-1/2 z-30 -translate-y-1/2 rounded-full border border-cyan-500/70 bg-cyan-500/20 p-2.5 text-cyan-700 backdrop-blur-sm transition hover:bg-cyan-500/30 dark:text-cyan-300"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="hidden grid-cols-1 items-start gap-8 sm:grid lg:grid-cols-2">
        {leaders.map((leader, index) => (
          <HeroBanner
            key={`${leader.name}-${index}`}
            name={leader.name}
            badge={leader.badge}
            bio={leader.bio}
            imageSrc={leader.imageSrc}
            cardHeight={sharedCardHeight}
          />
        ))}
      </div>
    </section>
  );
};

export default LeadershipBannerSection;
