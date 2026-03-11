import React from 'react';
import SectionHeader from './SectionHeader';
import TextBlock from './TextBlock';
import SplitSection from './SplitSection';
import MediaFrame from './MediaFrame';
import { HoverCard } from '../ui';
import komaniAerial from '../../assets/pictures/Aerial 2.JPG';
import komaniPlant from '../../assets/pictures/040.JPG';
import gqeberhaAerial from '../../assets/pictures/DJI_0602.JPG';
import gqeberhaPlant from '../../assets/pictures/SWD13722.JPG';

const defaultParagraphs = [
  'VSL Manufacturing was founded in September 2018 by a team of experienced manufacturing professionals with a shared vision to rebuild advanced manufacturing capability and contribute to the growth of South Africa\'s industrial sector.',
  'The company began its operational journey in Komani (Queenstown), Eastern Cape, where the foundation of the business was built through technical expertise, strong industry partnerships, and a commitment to manufacturing excellence.',
  'Building on this foundation, VSL expanded its capabilities with the development of a state-of-the-art manufacturing facility in Struandale, Gqeberha - a R760 million investment representing one of the most significant milestones in the company\'s history.',
  'Today, VSL combines the craftsmanship and technical foundation developed in Komani with advanced automated press line technology in Gqeberha, enabling the company to deliver high-volume precision components that meet global manufacturing standards.',
];

const defaultFacilities = [
  {
    key: 'komani',
    name: 'Komani Facility',
    images: [
      { src: komaniAerial, alt: 'Komani facility aerial view' },
      { src: komaniPlant, alt: 'Komani facility operations' },
    ],
  },
  {
    key: 'gqeberha',
    name: 'Struandale (Gqeberha) Facility',
    images: [
      { src: gqeberhaAerial, alt: 'Gqeberha facility aerial view' },
      { src: gqeberhaPlant, alt: 'Gqeberha facility operations' },
    ],
  },
];

const JourneySection = ({
  title = 'Our Journey - From Komani to Advanced Manufacturing',
  eyebrow = null,
  paragraphs = defaultParagraphs,
  facilities = defaultFacilities,
  className = '',
  children,
}) => {
  const komaniParagraphs = paragraphs.slice(0, 2);
  const gqeberhaParagraphs = paragraphs.slice(2);

  const komaniFacility = facilities.find((facility) => facility.key === 'komani') || facilities[0];
  const gqeberhaFacility = facilities.find((facility) => facility.key === 'gqeberha') || facilities[1];

  const renderFacilityCard = (facility) => {
    if (!facility) {
      return null;
    }

    return (
      <HoverCard
        key={facility.key}
        className="rounded-2xl border border-neutral-300/80 bg-white p-5 shadow-md transition-shadow duration-200 group-hover:shadow-xl dark:border-neutral-700 dark:bg-neutral-900 sm:p-6"
        hoverScale={1.02}
        transition={{ duration: 0.2 }}
      >
        <h3 className="mb-4 text-lg font-bold text-neutral-900 dark:text-neutral-100 sm:text-xl">
          {facility.name}
        </h3>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {facility.images.map((image, index) => (
            <MediaFrame
              key={`${facility.key}-image-${index}`}
              kind="image"
              src={image.src}
              alt={image.alt}
              aspectRatio="4/3"
            />
          ))}
        </div>
      </HoverCard>
    );
  };

  return (
    <section className={className}>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <SectionHeader eyebrow={eyebrow} title={title} align="left" />
        </div>

        <SplitSection
          left={renderFacilityCard(komaniFacility)}
          right={(
            <div className="h-full flex items-center">
              <TextBlock paragraphs={komaniParagraphs} />
            </div>
          )}
        />

        <SplitSection
          left={(
            <div className="h-full flex items-center">
              <TextBlock paragraphs={gqeberhaParagraphs} />
            </div>
          )}
          right={renderFacilityCard(gqeberhaFacility)}
        />

        {children}
      </div>
    </section>
  );
};

export default JourneySection;
