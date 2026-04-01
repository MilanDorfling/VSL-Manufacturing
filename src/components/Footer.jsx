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
    <footer className="relative w-full min-h-[230px] overflow-hidden bg-slate-950 text-white">
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
        className={`absolute left-0 right-0 top-0 h-full w-full select-none pointer-events-none${visible ? ' fade-in' : ''}`}
        style={{ zIndex: 0, overflow: 'hidden', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: '10px' }}>
        <div className="w-full max-w-7xl mx-auto flex items-center justify-center h-full">
          <FooterSVG style={{ width: '100%', height: '100%', opacity: 0.55 }} />
        </div>
      </div>
      {/* Footer content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pt-8 pb-6 sm:px-6 md:pt-10 lg:px-8">
        <div className="rounded-2xl shadow-[0_20px_60px_rgba(2,8,23,0.45)]">
          <div className="grid grid-cols-1 gap-8 p-6 md:grid-cols-2 md:p-8">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex w-full items-center justify-between gap-5 md:w-auto md:justify-start">
                <div className="flex items-center gap-2">
                  <img src={logoSvg} alt="VSL logo" className="h-9 w-9" style={{ minWidth: 36 }} />
                  <span className="text-xl font-semibold tracking-wide">Manufacturing</span>
                </div>
                <img src={isoImg} alt="ISO 9001:2015" className="h-auto w-16 rounded-sm" />
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <div className="w-full max-w-sm">
                <div className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.16em] text-slate-300 md:text-right">
                  Pages
                </div>
                <ul className="flex flex-row flex-wrap items-center justify-center gap-2 md:justify-end">
                  <li>
                    <Link
                      to="/"
                      className="group/footlink relative inline-flex items-center rounded-full border border-cyan-300/35 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-slate-100 transition-all duration-200 hover:border-cyan-300 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.28)]"
                    >
                      Home
                      <span className="pointer-events-none absolute inset-x-3 -bottom-px h-px bg-linear-to-r from-transparent via-cyan-400 to-transparent opacity-0 transition-opacity duration-200 group-hover/footlink:opacity-100" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services"
                      className="group/footlink relative inline-flex items-center rounded-full border border-cyan-300/35 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-slate-100 transition-all duration-200 hover:border-cyan-300 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.28)]"
                    >
                      Services
                      <span className="pointer-events-none absolute inset-x-3 -bottom-px h-px bg-linear-to-r from-transparent via-cyan-400 to-transparent opacity-0 transition-opacity duration-200 group-hover/footlink:opacity-100" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="group/footlink relative inline-flex items-center rounded-full border border-cyan-300/35 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-slate-100 transition-all duration-200 hover:border-cyan-300 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.28)]"
                    >
                      Contact
                      <span className="pointer-events-none absolute inset-x-3 -bottom-px h-px bg-linear-to-r from-transparent via-cyan-400 to-transparent opacity-0 transition-opacity duration-200 group-hover/footlink:opacity-100" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Developers page link at bottom */}
      <div className="relative z-10 flex w-full justify-center pb-6 pt-2">
        <Link to="/developers" className="text-xs text-slate-400 transition-all duration-200 ease-in-out hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(6,182,212,1)] md:text-sm">
          Developers Page
        </Link>
      </div>
    </footer>
  );
};

export default Footer;