import React from 'react';
import SectionHeader from './SectionHeader';

const PartnersSection = ({
  eyebrow = null,
  title = 'Forged Together',
  subtitle = 'Our commitment to excellence is built through collaboration with industry leaders who share our vision.',
  className = '',
}) => {
  return (
    <section className={className}>
      <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} align="center" className="mb-10 md:mb-14" />
    </section>
  );
};

export default PartnersSection;
