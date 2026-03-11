import React from 'react';
import { HoverCard } from '../ui';

const Timeline = ({ items = [], className = '' }) => {
  return (
    <ol className={`space-y-4 ${className}`.trim()}>
      {items.map((item, index) => (
        <HoverCard
          key={`${item.label || 'timeline'}-${index}`}
          className="rounded-xl border border-neutral-300/80 bg-white/80 p-4 dark:border-neutral-700 dark:bg-neutral-900/70"
          overlayClassName={item.accent || 'bg-linear-to-br from-cyan-300/45 to-cyan-600/40'}
          hoverScale={1.02}
          transition={{ duration: 0.2 }}
        >
          {item.label ? (
            <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-400">
              {item.label}
            </p>
          ) : null}
          {item.title ? (
            <h3 className="mt-1 text-base font-semibold text-neutral-900 dark:text-neutral-100">
              {item.title}
            </h3>
          ) : null}
          {item.description ? (
            <p className="mt-2 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
              {item.description}
            </p>
          ) : null}
        </HoverCard>
      ))}
    </ol>
  );
};

export default Timeline;
