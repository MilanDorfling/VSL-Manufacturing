import React from 'react';
import { BackgroundBeams } from '../components/ui/background-beams';
import { useNavigate } from 'react-router-dom';
import {
  servicesHeroContent,
  servicesQuoteContent,
  servicesSplitCards,
  ServicesHeroSection,
  ServicesQuoteSection,
  ServicesSplitSection,
  ServicesFinalCtaSection,
} from '../components/service/landing';

const Services = () => {
  const navigate = useNavigate();
  const optionsSectionId = 'services-options';

  const handleContact = React.useCallback(() => {
    navigate('/contact');
  }, [navigate]);

  const handleExplore = React.useCallback(() => {
    const target = document.getElementById(optionsSectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [optionsSectionId]);

  const handleServiceSelect = React.useCallback(
    (route) => {
      navigate(route);
    },
    [navigate],
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-white dark:bg-zinc-900">
      <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[420px] sm:h-[500px] md:h-[580px]">
        <BackgroundBeams className="h-full" />
      </div>

      <div className="relative z-10">
        <ServicesHeroSection content={servicesHeroContent} />
        <ServicesQuoteSection quote={servicesQuoteContent.quote} author={servicesQuoteContent.author} />
        <ServicesSplitSection
          services={servicesSplitCards}
          onSelect={handleServiceSelect}
          sectionId={optionsSectionId}
        />
        <ServicesFinalCtaSection onPrimary={handleContact} onSecondary={handleExplore} />
      </div>
    </div>
  );
};

export default Services;
