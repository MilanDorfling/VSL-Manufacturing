import React from 'react';
import { Cog, Zap, ShieldCheck, Wrench } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { HoverCard } from '../ui';

const defaultItems = [
  { title: 'Metal Stamping', Icon: Wrench, bgColor: 'bg-linear-to-br from-cyan-300/45 to-cyan-600/40' },
  { title: 'Automated Press Line', Icon: Cog, bgColor: 'bg-linear-to-br from-cyan-300/45 to-cyan-600/40' },
  { title: 'Laser Cutting', Icon: Zap, bgColor: 'bg-linear-to-br from-cyan-300/45 to-cyan-600/40' },
  { title: 'IATF 16949 Quality', Icon: ShieldCheck, bgColor: 'bg-linear-to-br from-cyan-300/45 to-cyan-600/40' },
];

const Capability = ({
  title = 'Manufacturing Capability',
  eyebrow = null,
  description = 'High-precision metal stamping and advanced automated manufacturing solutions delivered from our facilities in Komani and Gqeberha.',
  items = defaultItems,
  className = '',
  children,
}) => {
  return (
    <section
      className={`rounded-2xl border border-neutral-300/80 bg-white/80 p-6 shadow-md dark:border-neutral-700 dark:bg-neutral-900/70 sm:p-7 md:p-9 ${className}`.trim()}
    >
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        subtitle={description}
        align="center"
        className="mb-8"
      />

      <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
        {items.map(({ title: itemTitle, Icon, bgColor }, index) => (
          <HoverCard
            key={`${itemTitle}-${index}`}
            className="flex flex-col items-center justify-center rounded-xl border border-neutral-300/70 bg-neutral-100/70 px-4 py-6 text-center shadow-sm dark:border-neutral-700 dark:bg-neutral-800/70"
            overlayClassName={bgColor}
            hoverScale={1.03}
            transition={{ duration: 0.2 }}
          >
            <span className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full border border-cyan-500/40 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300">
              <Icon className="h-7 w-7" aria-hidden="true" />
            </span>
            <p className="text-base font-semibold text-neutral-800 dark:text-neutral-100 sm:text-lg">
              {itemTitle}
            </p>
          </HoverCard>
        ))}
      </div>

      {children ? <div className="mt-6">{children}</div> : null}
    </section>
  );
};

export default Capability;
