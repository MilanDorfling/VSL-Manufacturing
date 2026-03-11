import React from 'react';
import SectionHeader from './SectionHeader';
import TextBlock from './TextBlock';
import SplitSection from './SplitSection';
import MediaFrame from './MediaFrame';
import laserImage from '../../assets/pictures/SWD13764.JPG';

const defaultParagraphs = [
  'Inside VSL\'s Gqeberha press shop, precision is engineered into every stage of production. People, tooling, and automation operate as one system to deliver consistent, high-quality stamped components.',
  'From press force and transfer robotics to alignment controls and safety enclosures, each process is tuned for repeatability, reliability, and long-term performance.',
  'This is manufacturing with purpose: technical excellence that supports customer confidence, local capability growth, and future-ready mobility programs.',
];

const PrecisionSection = ({
  title = 'Where Vision Becomes Reality',
  eyebrow = null,
  subtitle = 'Advanced processes, disciplined quality controls, and engineering focus across every press cycle.',
  paragraphs = defaultParagraphs,
  imageSrc = laserImage,
  imageAlt = 'VSL precision manufacturing line',
  imagePosition = 'left',
  className = '',
}) => {
  const content = (
    <div className="flex flex-col gap-6">
      <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} align="left" />
      <TextBlock paragraphs={paragraphs} />
    </div>
  );

  const visual = (
    <MediaFrame kind="image" src={imageSrc} alt={imageAlt} aspectRatio="4/3" />
  );

  return (
    <section className={className}>
      <SplitSection
        left={imagePosition === 'left' ? visual : content}
        right={imagePosition === 'left' ? content : visual}
      />
    </section>
  );
};

export default PrecisionSection;
