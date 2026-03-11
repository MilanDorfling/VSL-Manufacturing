import React from 'react';
import SectionHeader from './SectionHeader';
import MediaFrame from './MediaFrame';
import { HoverCard } from '../ui';
import aerial3 from '../../assets/pictures/Aerial 3.JPG';
import aerial2 from '../../assets/pictures/DJI_0612.JPG';

const defaultFacilities = [
  {
    key: 'komani',
    name: 'Komani Facility',
    summary:
      'The Komani facility represents the origins of VSL Manufacturing\'s technical expertise and operational capability.',
    points: [
      'Supports specialized production activities and technical development',
      'Provides engineering support that strengthens overall manufacturing capability',
      'Skilled workforce with a strong culture of precision engineering',
    ],
    imageAlt: 'Komani facility',
    imageSrc: aerial3,
  },
  {
    key: 'gqeberha',
    name: 'Struandale (Gqeberha) Facility',
    summary:
      'Our flagship Gqeberha manufacturing facility represents the next generation of industrial production.',
    points: [
      'Equipped with advanced automated press line technology',
      'Built with robotics and modern manufacturing systems',
      'Enables high-volume precision components for global industries',
    ],
    imageAlt: 'Struandale Gqeberha facility',
    imageSrc: aerial2,
  },
];

const FacilitiesSection = ({
  title = 'Our Facilities',
  eyebrow = null,
  subtitle = 'From the technical roots in Komani to advanced production in Gqeberha, our facilities operate as one connected manufacturing ecosystem.',
  facilities = defaultFacilities,
  className = '',
}) => {
  return (
    <section className={className}>
      <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} className="mb-8" />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {facilities.map((facility) => (
          <HoverCard
            key={facility.key}
            className="rounded-2xl border border-neutral-300/80 bg-white p-5 shadow-md dark:border-neutral-700 dark:bg-neutral-900 sm:p-6"
            showOverlay={false}
            hoverScale={1.02}
            transition={{ duration: 0.2 }}
          >
            <MediaFrame
              kind={facility.imageSrc ? 'image' : 'custom'}
              src={facility.imageSrc}
              alt={facility.imageAlt}
              ariaLabel={`${facility.name} image placeholder`}
              aspectRatio="16/10"
              className="mb-5"
            >
              {!facility.imageSrc ? (
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  Image placeholder for {facility.name}
                </p>
              ) : null}
            </MediaFrame>

            <h3 className="mb-3 text-xl font-bold text-neutral-900 dark:text-neutral-100">{facility.name}</h3>
            <p className="mb-4 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 sm:text-base">
              {facility.summary}
            </p>

            <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300 sm:text-base">
              {facility.points.map((point, index) => (
                <li key={`${facility.key}-point-${index}`} className="flex items-start gap-2">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-600 dark:bg-cyan-400" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </HoverCard>
        ))}
      </div>
    </section>
  );
};

export default FacilitiesSection;
