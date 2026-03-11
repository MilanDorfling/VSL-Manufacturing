import React from 'react';
import { Users, Heart, BookOpen, Leaf, TrendingUp } from 'lucide-react';
import SectionHeader from './SectionHeader';
import TextBlock from './TextBlock';
import SplitSection from './SplitSection';
import { HoverCard } from '../ui';

const ImpactSection = ({
  title = 'Economic & Community Impact',
  subtitle = 'Strength Forged in Growth',
  className = '',
}) => {
  const impactStats = [
    {
      icon: Heart,
      value: '51%',
      label: 'Black Woman Ownership',
      accent: 'bg-linear-to-br from-cyan-300/45 to-cyan-600/40',
    },
    {
      icon: Users,
      value: '120',
      label: 'Jobs Created',
      accent: 'bg-linear-to-br from-cyan-300/45 to-cyan-600/40',
    },
    {
      icon: TrendingUp,
      value: 'Growth',
      label: 'Economic Development - Eastern Cape',
      accent: 'bg-linear-to-br from-cyan-300/45 to-cyan-600/40',
    },
    {
      icon: BookOpen,
      value: 'Ongoing',
      label: 'Technical & Engineering Skills Training',
      accent: 'bg-linear-to-br from-cyan-300/45 to-cyan-600/40',
    },
    {
      icon: Leaf,
      value: 'Reduced',
      label: 'Energy & Waste Footprint',
      accent: 'bg-linear-to-br from-cyan-300/45 to-cyan-600/40',
    },
  ];

  const impactNarrative = [
    'The ripple effect of this R750 million investment reaches far beyond the factory floor.',
    "VSL's expansion is proof that empowerment and economic growth are not parallel paths — they are forged together, building industries that are sustainable, inclusive, and proudly South African.",
  ];

  const statsCards = (
    <div className="flex flex-col gap-4">
      {impactStats.map((stat, idx) => {
        const IconComponent = stat.icon;
        return (
          <HoverCard
            key={idx}
            className="rounded-lg border border-neutral-200/80 bg-white p-5 shadow-sm dark:border-neutral-700 dark:bg-neutral-900/80"
            contentClassName="flex items-start gap-4"
            overlayClassName={stat.accent}
            hoverScale={1.02}
            transition={{ duration: 0.2 }}
          >
            <div className="shrink-0 rounded-lg bg-linear-to-br from-cyan-600/20 to-cyan-600/20 p-3">
              <IconComponent className="h-6 w-6 text-cyan-700 dark:text-cyan-500" />
            </div>
            <div className="flex-1">
              <p className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                {stat.value}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {stat.label}
              </p>
            </div>
          </HoverCard>
        );
      })}
    </div>
  );

  const content = (
    <div className="flex flex-col gap-6">
      <SectionHeader title={title} subtitle={subtitle} align="left" />
      <TextBlock paragraphs={impactNarrative} />
    </div>
  );

  return (
    <section className={className}>
      <SplitSection
        left={statsCards}
        right={content}
      />
    </section>
  );
};

export default ImpactSection;
