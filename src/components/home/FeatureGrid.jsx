import React from 'react';
import { HoverCard } from '../ui';

const FeatureGrid = ({ items = [], className = '', hoverCards = false }) => {
  return (
    <div className={`grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ${className}`.trim()}>
      {items.map((item, index) => (
        <HoverCard
          key={`${item.title || 'item'}-${index}`}
          className="rounded-2xl border border-neutral-300/80 bg-white/80 p-5 shadow-sm dark:border-neutral-700 dark:bg-neutral-900/70"
          showOverlay={false}
          enableHover={hoverCards}
          hoverScale={1.02}
          transition={{ duration: 0.2 }}
        >
          <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 sm:text-lg">
            {item.title}
          </h3>
          {item.description ? (
            <p className="mt-2 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
              {item.description}
            </p>
          ) : null}
        </HoverCard>
      ))}
    </div>
  );
};

export default FeatureGrid;
