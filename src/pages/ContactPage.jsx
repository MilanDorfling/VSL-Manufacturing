import React, { useState } from 'react';
import Contact from '../components/Contact';
import { AnimatedPin} from '../components/AnimatedPin';
import { HexagonBackground } from '../components/ui/contactSVG';
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
    <div className="relative min-h-screen w-full flex flex-col" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      {/* SVG Hexagon background at lowest layer */}
      <div className="absolute inset-0 z-0">
        <HexagonBackground mouse={mouse} />
      </div>
      {/* Contact form above background */}
      <div className="relative z-10 mt-12">
        <Contact />
      </div>
      {/* Animated pin cards for location */}
      <section className="pt-0 pb-0 mt-0 relative z-10">
        <div className="container mx-auto mt-0! pt-0!">
          <AnimatedPin />
        </div>
      </section>
        {/* Footer removed to use global footer in App.jsx */}
    </div>
  );
};

export default ContactPage;
