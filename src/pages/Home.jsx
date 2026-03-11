import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { DotBackgroundDemo } from '../components/ui/dotSVG';
import {
  HomeIntro,
  Capability,
  EngineeringSection,
  JourneySection,
  JourneyMilestoneCards,
  FacilitiesSection,
  IndustriesSection,
  CapabilitiesSection,
  QualitySection,
  PartnersSection,
  ImpactSection,
  PressLineSummarySection,
  PrecisionSection,
  LeadershipBannerSection,
  ClosingBannerSection,
  SectionShell,
  VideoContainer,
} from '../components/home';
import LogoLoop from '../components/ui/logoLoop';
import factoryTourVideo from '../assets/videos/Home-video-trim.mp4';
import closingVideo from '../assets/videos/VSL-Journey-Video.mp4';

const HOME_INTRO_SEEN_KEY = 'vsl_home_intro_seen';
let hasProcessedIntroNavigation = false;

const isReloadNavigation = () => {
  if (typeof window === 'undefined') {
    return false;
  }

  const navigationEntry = window.performance.getEntriesByType('navigation')[0];
  if (navigationEntry && navigationEntry.type) {
    return navigationEntry.type === 'reload';
  }

  // Fallback for older browser navigation API.
  return window.performance.navigation && window.performance.navigation.type === 1;
};

const Home = () => {
  const [introUnlocked, setIntroUnlocked] = React.useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    if (!hasProcessedIntroNavigation) {
      hasProcessedIntroNavigation = true;

      if (isReloadNavigation()) {
        window.sessionStorage.removeItem(HOME_INTRO_SEEN_KEY);
        return false;
      }
    }

    return window.sessionStorage.getItem(HOME_INTRO_SEEN_KEY) === 'true';
  });
  const firstSectionId = 'home-main-content';

  React.useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const shouldLockIntro = !introUnlocked && window.innerWidth >= 768;

    if (shouldLockIntro) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [introUnlocked]);

  React.useEffect(() => {
    if (!introUnlocked || window.innerWidth >= 768) {
      return;
    }

    let attempts = 0;
    const maxAttempts = 12;
    let scrollTimer;

    const scrollToFirstSection = () => {
      const target = document.getElementById(firstSectionId);
      if (target) {
        const targetTop = target.getBoundingClientRect().top + window.scrollY;
        const mobileHeaderOffset = 220;
        const scrollTop = Math.max(0, targetTop - mobileHeaderOffset);
        window.scrollTo({ top: scrollTop, behavior: 'smooth' });
        return;
      }

      attempts += 1;
      if (attempts < maxAttempts) {
        scrollTimer = window.setTimeout(scrollToFirstSection, 120);
      }
    };

    // Wait for intro exit animation before first attempt.
    scrollTimer = window.setTimeout(scrollToFirstSection, 520);

    return () => window.clearTimeout(scrollTimer);
  }, [introUnlocked]);

  const handleIntroCta = () => {
    window.sessionStorage.setItem(HOME_INTRO_SEEN_KEY, 'true');
    setIntroUnlocked(true);
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <DotBackgroundDemo />
      </div>

      <AnimatePresence mode="wait">
        {!introUnlocked ? (
          <motion.div
            key="home-intro"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18, filter: 'blur(4px)' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <HomeIntro onCtaClick={handleIntroCta} />
          </motion.div>
        ) : (
          <motion.div
            key="home-content"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
          <SectionShell id={firstSectionId} className="pb-12 sm:pb-16 md:pb-24">
            <Capability className="mb-12 md:mb-16 mt-24" />

            <VideoContainer
              src={factoryTourVideo}
              title="VSL facility tour"
              wrapperClassName="w-full flex justify-center mb-14 md:mb-28"
            />

            <EngineeringSection className="mb-14 md:mb-28" />

            <JourneySection className="mb-14 md:mb-28" />

            <FacilitiesSection className="mb-14 md:mb-28" />

            <IndustriesSection className="mb-14 md:mb-28" />

            <CapabilitiesSection className="mb-14 md:mb-28" />

            <QualitySection className="mb-14 md:mb-28 pb-16" />

            <PartnersSection className="mb-12 md:mb-16" />
          </SectionShell>

          <div className="w-full -mt-6 md:-mt-24 mb-12 md:mb-24">
            <LogoLoop />
          </div>

          <SectionShell className="pb-12 sm:pb-16 md:pb-24">
            <ImpactSection className="mb-14 md:mb-28" />

            <JourneyMilestoneCards className="mb-14 md:mb-28" />

            <PressLineSummarySection className="mb-14 md:mb-28" />

            <PrecisionSection className="mb-14 md:mb-28" />

            <LeadershipBannerSection className="mb-14 md:mb-28" />

            <ClosingBannerSection className="mb-14 md:mb-14" />

            <VideoContainer
              src={closingVideo}
              title="VSL closing showcase"
              wrapperClassName="w-full flex justify-center mb-14 md:mb-14"
            />
          </SectionShell>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
