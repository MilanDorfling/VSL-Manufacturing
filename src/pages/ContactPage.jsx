import React, { useState } from 'react';
import Contact from '../components/Contact';
import { AnimatedPin} from '../components/AnimatedPin';
import { DotBackgroundDemo } from '../components/ui/dotSVG';
import Footer from '../components/Footer';


const ContactPage = () => {
  const [mouse, setMouse] = useState({ x: -1000, y: -1000 });

  const handleMouseMove = (e) => {
    setMouse({ x: e.clientX, y: e.clientY });
  };
  const handleMouseLeave = () => {
    setMouse({ x: -1000, y: -1000 });
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-hidden" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      {/* SVG Dot background at lowest layer */}
      <div className="absolute inset-0 z-0">
        <DotBackgroundDemo mouse={mouse} />
      </div>
      {/* Contact form above background */}
      <div className="relative z-10 mt-12 px-4">
        <Contact />
      </div>
      {/* Animated pin cards for location */}
      <section className="pt-0 pb-0 mt-0 relative z-10 w-full overflow-hidden">
        <div className="w-full mt-0! pt-0!">
          <AnimatedPin />
        </div>
      </section>
        {/* Footer removed to use global footer in App.jsx */}
    </div>
  );
};

export default ContactPage;
