import React from 'react';
import { Car, Train, Factory } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { HoverCard } from '../ui';

const defaultIndustries = [
  { key: 'automotive', 
    title: 'Automotive Manufacturing', 
    description: 'Precision components manufactured to meet global automotive quality standards.', 
    Icon: Car, 
    accent: 'bg-linear-to-br from-cyan-300/45 to-cyan-600/40' 
  },
  { key: 'rail', 
    title: 'Rail & Transport', 
    description: 'Durable metal components supporting rail infrastructure and rolling stock.', 
    Icon: Train, 
    accent: 'bg-linear-to-br from-cyan-300/45 to-cyan-600/40' 
  },
  { key: 'industrial', 
    title: 'Industrial Manufacturing', 
    description: 'Specialized metal forming and fabrication solutions for applications requiring precision and reliability.', 
    Icon: Factory, 
    accent: 'bg-linear-to-br from-cyan-300/45 to-cyan-600/40' 
  },
];

const IndustriesSection = ({
  title = 'Industries We Serve',
  eyebrow = null,
  subtitle = 'Supporting leading customers across automotive, rail, and industrial sectors with precision-engineered components.',
  industries = defaultIndustries,
  className = '',
}) => {
  return (
    <section className={className}>
      <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} className="mb-8" />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {industries.map((industry) => (
          <HoverCard
            key={industry.key}
            className="rounded-2xl border border-neutral-300/80 bg-white/80 p-5 shadow-md dark:border-neutral-700/80 dark:bg-neutral-900/80"
            overlayClassName={industry.accent}
            hoverScale={1.02}
            transition={{ duration: 0.2 }}
          >
            <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-cyan-500/40 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300">
              <industry.Icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="mb-3 text-xl font-bold text-neutral-900 dark:text-neutral-100">{industry.title}</h3>
            <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 sm:text-base">
              {industry.description}
            </p>
          </HoverCard>
        ))}
      </div>
    </section>
  );
};

export default IndustriesSection;
