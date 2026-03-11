import React from 'react';
import { Shield } from 'lucide-react';
import SectionHeader from './SectionHeader';
import TextBlock from './TextBlock';
import SplitSection from './SplitSection';
import { HoverCard } from '../ui';
import img1 from '../../assets/pictures/ISO-9001-2015.png';
import img2 from '../../assets/pictures/IATF-16949.2016.png';

const QualitySection = ({
  eyebrow = null,
  title = 'Certified Excellence',
  subtitle = 'ISO 9001:2015 and IATF 16949:2016 certified manufacturing delivering precision, compliance, and continuous improvement.',
  imagePosition = 'right',
  className = '',
}) => {
  const certifications = [
    {
      name: 'ISO 9001:2015',
      image: img1,
      description: 'Quality Management System',
    },
    {
      name: 'IATF 16949:2016',
      image: img2,
      description: 'Automotive Quality Management System',
    },
  ];

  const qualityNarrative = [
    'At VSL Manufacturing, quality is not just a standard — it is a commitment forged into every component we produce. Our ISO 9001:2015 and IATF 16949:2016 certifications reflect our dedication to precision, consistency, and excellence.',
    'Through rigorous quality control processes, advanced inspection systems, and continuous improvement practices, we ensure that every stamped component meets the highest automotive and industrial standards.',
    'Our quality framework integrates seamlessly with our production workflows, enabling us to deliver components that exceed customer expectations while maintaining full traceability and compliance throughout the manufacturing lifecycle.',
  ];

  const certificationCards = (
    <div className="flex flex-col gap-6">
      {certifications.map((cert, idx) => (
        <HoverCard
          key={idx}
          className="rounded-xl border-2 border-neutral-200/80 bg-white p-6 shadow-md dark:border-neutral-700 dark:bg-neutral-900/80"
          contentClassName="flex flex-col items-center text-center"
          showOverlay={false}
          hoverScale={1.02}
          transition={{ duration: 0.2 }}
        >
          {cert.image ? (
            <img
              src={cert.image}
              alt={cert.name}
              className="h-40 w-40 object-contain"
            />
          ) : (
            <div className="flex h-40 w-40 items-center justify-center rounded-full bg-linear-to-br from-cyan-500/20 to-blue-500/20">
              <Shield className="h-20 w-20 text-cyan-600 dark:text-cyan-400" />
            </div>
          )}
          <h3 className="mt-4 text-xl font-bold text-neutral-800 dark:text-neutral-100">
            {cert.name}
          </h3>
          <p className="text-center text-sm text-neutral-600 dark:text-neutral-400">
            {cert.description}
          </p>
        </HoverCard>
      ))}
    </div>
  );

  const content = (
    <div className="flex flex-col gap-6">
      <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} align="left" />
      <TextBlock paragraphs={qualityNarrative} />
    </div>
  );

  return (
    <section className={className}>
      <SplitSection
        left={imagePosition === 'left' ? certificationCards : content}
        right={imagePosition === 'left' ? content : certificationCards}
      />
    </section>
  );
};

export default QualitySection;
