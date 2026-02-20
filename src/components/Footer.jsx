import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FooterSVG from './ui/FooterSVG';
import logoSvg from '../assets/vsl-favicon/favicon.svg';
import isoImg from '../assets/pictures/ISO-9001-2015.png';

const Footer = () => {
  const svgRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (svgRef.current) {
      observer.observe(svgRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="relative w-full min-h-64 md:min-h-80 bg-slate-900 text-white dark:bg-zinc-900 dark:text-white overflow-hidden">
      {/* Gradient border */}
      <div
        className="absolute top-0 left-0 w-full pointer-events-none"
        style={{
          height: '1px',
          background: 'linear-gradient(to right, rgba(6,182,212,0.2) 0%, rgba(6,182,212,1) 50%, rgba(6,182,212,0.2) 100%)',
          borderTopLeftRadius: '0px',
          borderTopRightRadius: '0px',
          zIndex: 1,
        }}
      />
      {/* SVG background text */}
      <div
        ref={svgRef}
        className={`absolute left-0 right-0 top-0 w-full h-full flex items-center justify-center pointer-events-none select-none${visible ? ' fade-in' : ''}`}
        style={{zIndex: 0, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div className="w-full max-w-7xl mx-auto flex items-center justify-center h-full">
          <FooterSVG style={{width: '100%', height: '100%'}} />
        </div>
      </div>
      {/* Footer grid content: two columns (logo/info, content) */}
      <div className="relative z-10 w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 pl-0 pr-4 pt-8 pb-6">
        {/* Logo/info column - responsive centering for mobile */}
        <div className="flex flex-col items-center md:items-start md:justify-start md:-ml-4 col-span-1 w-full">
          {/* Mobile: logo and ISO side-by-side with padding; md+: stacked and left-aligned */}
          <div className="flex flex-row md:flex-col items-center md:items-start justify-between md:justify-start w-full mb-2 px-4 md:px-0">
            <div className="flex flex-row items-center gap-2 md:mb-2">
              <img src={logoSvg} alt="Logo" className="w-12 h-12 md:w-8 md:h-8 p-1 md:p-0" style={{minWidth: 32}} />
              <span className="font-bold text-lg tracking-wide">Manufacturing</span>
            </div>
            <img src={isoImg} alt="ISO 9001:2015" className="w-24 h-auto md:w-16 rounded shadow p-1 md:p-0 md:mt-2" style={{maxWidth: 96}} />
          </div>
        </div>
        {/* Content columns wrapper - stack and center on mobile */}
        <div className="flex flex-col md:flex-row flex-wrap gap-y-4 md:gap-x-23 w-full items-center md:items-start justify-center md:justify-start mt-6 md:mt-0">
          {/* Content columns side-by-side and centered on mobile */}
          <div className="flex flex-row flex-wrap gap-x-8 gap-y-4 w-full justify-center items-start">
            {/* Pages, Legal, Integrations columns - horizontal on md+, centered side-by-side on mobile */}
            <div className="flex flex-row flex-wrap gap-x-6 gap-y-4 w-full justify-center items-start md:justify-start md:items-start">
              {/* Pages column */}
              <div className="flex flex-col text-center md:text-left min-w-[100px] justify-start text-xs sm:text-sm md:text-base">
                <div className="font-bold mb-2">Pages</div>
                <ul className="space-y-1 text-sm">
                  <li className="transition-all duration-200 ease-in-out"><Link to="/" className="transition-all duration-200 ease-in-out hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(6,182,212,1)]">Home</Link></li>
                  <li className="transition-all duration-200 ease-in-out"><Link to="/services" className="transition-all duration-200 ease-in-out hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(6,182,212,1)]">Services</Link></li>
                  <li className="transition-all duration-200 ease-in-out"><Link to="/contact" className="transition-all duration-200 ease-in-out hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(6,182,212,1)]">Contact</Link></li>
                </ul>
              </div>
              {/* Legal column */}
              <div className="flex flex-col text-center md:text-left min-w-[100px] justify-start text-xs sm:text-sm md:text-base">
                <div className="font-bold mb-2">Legal</div>
                <ul className="space-y-1 text-sm">
                  <li className="transition-all duration-200 ease-in-out"><Link to="/privacy" className="transition-all duration-200 ease-in-out hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(6,182,212,1)]">Privacy Policy</Link></li>
                  <li className="transition-all duration-200 ease-in-out"><Link to="/terms" className="transition-all duration-200 ease-in-out hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(6,182,212,1)]">Terms of Service</Link></li>
                  <li className="transition-all duration-200 ease-in-out"><Link to="/about" className="transition-all duration-200 ease-in-out hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(6,182,212,1)]">About Us</Link></li>
                </ul>
              </div>
              {/* Integrations column */}
              <div className="flex flex-col text-center md:text-left min-w-[100px] justify-start text-xs sm:text-sm md:text-base">
                <div className="font-bold mb-2">Integrations</div>
                <ul className="space-y-1 text-sm">
                  <li className="transition-all duration-200 ease-in-out"><Link to="/affiliates" className="transition-all duration-200 ease-in-out hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(6,182,212,1)]">Affiliates</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;