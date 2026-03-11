import React from 'react';
import SectionHeader from './SectionHeader';
import FeatureGrid from './FeatureGrid';

const defaultItems = [
  {
    title: '2,000-Ton Press Force',
    description: 'High-tonnage forming capacity for demanding automotive and industrial applications.',
  },
  {
    title: '12 Strokes Per Minute',
    description: 'Balanced throughput and consistency across large-volume production runs.',
  },
  {
    title: '0.5 mm Alignment Tolerance',
    description: 'Precision setup and repeatability for quality-driven component manufacturing.',
  },
  {
    title: '6 KUKA Transfer Robots',
    description: 'Automated part transfer supporting speed, safety, and process stability.',
  },
  {
    title: 'Enclosed Press Line',
    description: 'Designed for operator safety, precision control, and noise reduction.',
  },
  {
    title: 'Laser + In-House Programming',
    description: 'Complementary laser cutting and programming workflows for complete delivery.',
  },
];

const PressLineSummarySection = ({
  title = 'Press Line Technical Summary',
  eyebrow = null,
  subtitle = 'MODEL LYS4L-5000-500-250: a fully automated line built for precision, reliability, and scale.',
  items = defaultItems,
  className = '',
}) => {
  return (
    <section className={className}>
      <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} className="mb-6" />
      <FeatureGrid items={items} hoverCards />
    </section>
  );
};

export default PressLineSummarySection;
