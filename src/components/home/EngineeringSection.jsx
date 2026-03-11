import React from 'react';
import SectionHeader from './SectionHeader';
import TextBlock from './TextBlock';
import SplitSection from './SplitSection';
import MediaFrame from './MediaFrame';

const defaultParagraphs = [
  'At VSL Manufacturing, our operations are built around precision, reliability, and continuous improvement.',
  'Our advanced press line technology, automated manufacturing processes, and skilled engineering teams allow us to deliver high-quality components for demanding industrial applications.',
  'We support leading customers across the automotive, rail, and industrial sectors, delivering components that meet exacting technical specifications and global manufacturing standards.',
];

const EngineeringSection = ({
  title = 'Engineering the Future of Manufacturing',
  paragraphs = defaultParagraphs,
  imageSrc,
  imageAlt = 'VSL Manufacturing facility',
  imagePosition = 'left',
  className = '',
  children,
}) => {
  const content = (
    <div className="flex flex-col gap-6">
      <SectionHeader title={title} align="left" />
      <TextBlock paragraphs={paragraphs} />
      {children}
    </div>
  );

  const imageBlock = imageSrc ? (
    <MediaFrame kind="image" src={imageSrc} alt={imageAlt} aspectRatio="4/3" />
  ) : (
    <MediaFrame ariaLabel="Engineering section placeholder">
      <p className="text-sm text-neutral-700 dark:text-neutral-300">
        Image placeholder for engineering/facility visual
      </p>
    </MediaFrame>
  );

  return (
    <section className={className}>
      <SplitSection
        left={imagePosition === 'left' ? imageBlock : content}
        right={imagePosition === 'left' ? content : imageBlock}
      />
    </section>
  );
};

export default EngineeringSection;
