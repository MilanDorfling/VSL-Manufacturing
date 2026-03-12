import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
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
// Video file is now served from public directory
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

const Home = ({ introUnlocked, setIntroUnlocked }) => {
  const location = useLocation();
  const firstSectionId = 'home-main-content';

  // Remove body overflow lock. We'll handle scroll lock via wrapper divs.

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

  React.useEffect(() => {
    if (!introUnlocked || !location.hash) {
      return;
    }

    const sectionId = decodeURIComponent(location.hash.slice(1));
    let attempts = 0;
    let timer;

    const scrollToHashSection = () => {
      const target = document.getElementById(sectionId);
      if (target) {
        const headerOffset = 220;
        const targetTop = target.getBoundingClientRect().top + window.scrollY;
        const scrollTop = Math.max(0, targetTop - headerOffset);
        window.scrollTo({ top: scrollTop, behavior: 'smooth' });
        return;
      }

      attempts += 1;
      if (attempts < 15) {
        timer = window.setTimeout(scrollToHashSection, 120);
      }
    };

    timer = window.setTimeout(scrollToHashSection, 120);
    return () => window.clearTimeout(timer);
  }, [introUnlocked, location.hash]);

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
            {/* Scrollable HomeIntro wrapper for all desktop sizes */}
            <div
              className="w-full min-h-screen overflow-y-auto"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              <HomeIntro onCtaClick={handleIntroCta} />
            </div>
            {/* Footer is hidden while HomeIntro is visible */}
          </motion.div>
        ) : (
          <>
            <motion.div
              key="home-content"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
            >
              {/* Main content is only rendered when introUnlocked is true */}
              <SectionShell id={firstSectionId} className="pb-12 sm:pb-16 md:pb-24">
                <section id="capability" className="scroll-mt-56">
                  <Capability className="mb-12 md:mb-16 mt-24" />
                </section>

                <section id="facility-tour" className="scroll-mt-56">
                  <VideoContainer
                    src="/assets/videos/Home-video-trim.mp4"
                    title="VSL facility tour"
                    wrapperClassName="w-full flex justify-center mb-14 md:mb-28"
                  />
                </section>

                <section id="engineering" className="scroll-mt-56">
                  <EngineeringSection className="mb-14 md:mb-28" />
                </section>

                <section id="journey" className="scroll-mt-56">
                  <JourneySection className="mb-14 md:mb-28" />
                </section>

                <section id="facilities" className="scroll-mt-56">
                  <FacilitiesSection className="mb-14 md:mb-28" />
                </section>

                <section id="industries" className="scroll-mt-56">
                  <IndustriesSection className="mb-14 md:mb-28" />
                </section>

                <section id="capabilities-grid" className="scroll-mt-56">
                  <CapabilitiesSection className="mb-14 md:mb-28" />
                </section>

                <section id="quality" className="scroll-mt-56">
                  <QualitySection className="mb-14 md:mb-28 pb-16" />
                </section>

                <section id="partners" className="scroll-mt-56">
                  <PartnersSection className="mb-12 md:mb-16" />
                </section>
              </SectionShell>

              <div className="w-full -mt-6 md:-mt-24 mb-12 md:mb-24">
                <LogoLoop />
              </div>

              <SectionShell className="pb-12 sm:pb-16 md:pb-24">
                <section id="impact" className="scroll-mt-56">
                  <ImpactSection className="mb-14 md:mb-28" />
                </section>

                <section id="milestones" className="scroll-mt-56">
                  <JourneyMilestoneCards className="mb-14 md:mb-28" />
                </section>

                <section id="press-line" className="scroll-mt-56">
                  <PressLineSummarySection className="mb-14 md:mb-28" />
                </section>

                <section id="precision" className="scroll-mt-56">
                  <PrecisionSection className="mb-14 md:mb-28" />
                </section>

                <section id="leadership" className="scroll-mt-56">
                  <LeadershipBannerSection className="mb-14 md:mb-28" />
                </section>

                <section id="closing" className="scroll-mt-56">
                  <ClosingBannerSection className="mb-14 md:mb-14" />
                </section>

                <section id="closing-video" className="scroll-mt-56">
                  <VideoContainer
                    src={closingVideo}
                    title="VSL closing showcase"
                    wrapperClassName="w-full flex justify-center mb-14 md:mb-14"
                  />
                </section>
              </SectionShell>
            </motion.div>
            {/* Render footer here if you have one, only when introUnlocked is true */}
            {/* Example: {introUnlocked && <Footer />} */}
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
