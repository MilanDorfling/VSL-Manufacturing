

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PinContainer } from "./ui/3d-pin";
import { ArrowLeft, ArrowRight } from "lucide-react";


export function AnimatedPin() {
  // Pin data
  const pins = [
    {
      title: "Coega IDZ, Lwandle street",
      href: "https://www.google.com/maps/place/Coega+IDZ+Lwandle+street/@-33.5724556,25.4052012,10.25z/data=!4m6!3m5!1s0x1e64d55b83d55b4f:0xc3f9afc64ccdea63!8m2!3d-33.7962085!4d25.6802141!16s%2Fg%2F11b7ljfxmn?hl=en-US&entry=ttu&g_ep=EgoyMDI1MTEwOS4wIKXMDSoASAFQAw%3D%3D",
      mapSrc: "https://www.google.com/maps?q=-33.7962085,25.6802141&z=13&output=embed",
      mapTitle: "Coega IDZ, Lwandle street Map"
    },
    {
      title: "VSL Manufacturing (Head Factory)",
      href: "https://www.google.com/maps/place/VSL+Manufacturing/@-33.9002462,25.5624987,14.46z/data=!4m6!3m5!1s0x1e7ad50035892b83:0xb076f66de4f41abf!8m2!3d-33.8965788!4d25.573197!16s%2Fg%2F11m79bksh_?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D",
      mapSrc: "https://www.google.com/maps?q=-33.8965788,25.573197&z=13&output=embed",
      mapTitle: "VSL Manufacturing Head Factory Map"
    },
    {
      title: "36 Stephenson Rd, Komani",
      href: "https://www.google.com/maps/place/36+Stephenson+Rd,+Komani,+5320,+South+Africa/@-31.9142708,26.9280327,15z/data=!4m6!3m5!1s0x1e6b1b7e2e2e2e2e:0x1234567890abcdef!8m2!3d-31.9142708!4d26.9280327!16s%2Fg%2F11b7ljfxmn?hl=en-US",
      mapSrc: "https://www.google.com/maps?q=-31.9142708,26.9280327&z=13&output=embed",
      mapTitle: "36 Stephenson Rd, Komani Map"
    }
  ];

  // Responsive state
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.innerWidth < 768 : true);
  // Carousel state for mobile
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  // Desktop (md+) layout: flex row with drag-to-scroll
  const desktopScrollRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile && desktopScrollRef.current) {
      const container = desktopScrollRef.current;
      let isDown = false;
      let startX;
      let scrollLeft;
      const handleMouseDown = (e) => {
        isDown = true;
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
        container.classList.add('cursor-grabbing');
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
      };
      const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX);
        container.scrollLeft = scrollLeft - walk;
      };
      const handleMouseUp = () => {
        isDown = false;
        container.classList.remove('cursor-grabbing');
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
      const handleTouchStart = (e) => {
        isDown = true;
        startX = e.touches[0].pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
      };
      const handleTouchMove = (e) => {
        if (!isDown) return;
        const x = e.touches[0].pageX - container.offsetLeft;
        const walk = (x - startX);
        container.scrollLeft = scrollLeft - walk;
      };
      const handleTouchEnd = () => {
        isDown = false;
      };
      container.addEventListener('mousedown', handleMouseDown);
      container.addEventListener('touchstart', handleTouchStart);
      container.addEventListener('touchmove', handleTouchMove);
      container.addEventListener('touchend', handleTouchEnd);
      return () => {
        container.removeEventListener('mousedown', handleMouseDown);
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchmove', handleTouchMove);
        container.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [isMobile]);

  // Animation variants for sliding effect (no absolute positioning)
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.35, ease: 'easeInOut' },
    },
    exit: (dir) => ({
      x: dir < 0 ? 200 : -200,
      opacity: 0,
      transition: { duration: 0.35, ease: 'easeInOut' },
    }),
  };

  if (isMobile) {
    return (
      <div className="w-full flex flex-col items-center mt-12 px-4 select-none">
        <div className="w-full flex justify-center items-center relative min-h-[370px]" style={{ minHeight: 370 }}>
          {/* Left button (for previous) */}
          <button
            aria-label="Previous"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-zinc-400/50 text-white rounded-full shadow hover:bg-cyan-700 transition w-12 h-12 flex items-center justify-center"
            style={{ zIndex: 2 }}
            onClick={() => { setDirection(-1); setCurrent(current - 1); }}
            disabled={current === 0}
          >
            <ArrowLeft size={28} />
          </button>
          <div className="relative w-full max-w-xs min-h-80 flex items-center justify-center">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="w-full"
            >
              <PinContainer
                title={pins[current].title}
                href={pins[current].href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex flex-col p-4 tracking-tight text-slate-100/50 min-w-[320px] max-w-xs w-80 h-80 ">
                  <h3 className="max-w-xs pb-2! m-0! font-bold text-base text-blue-500">
                    {pins[current].title}
                  </h3>
                  <div className="text-base m-0! p-0! font-normal">
                    <span className="text-slate-500 ">
                      Find us on the map! Click the pin for directions and details.
                    </span>
                  </div>
                  <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden border border-slate-300 shadow bg-white items-center justify-center">
                    <iframe
                      src={pins[current].mapSrc}
                      width="320"
                      height="180"
                      style={{ border: 0, pointerEvents: 'none' }}
                      title={pins[current].mapTitle}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </PinContainer>
            </motion.div>
          </div>
          {/* Right button (for next) */}
          <button
            aria-label="Next"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-zinc-400/50 text-white rounded-full shadow hover:bg-cyan-700 transition w-12 h-12 flex items-center justify-center"
            style={{ zIndex: 2 }}
            onClick={() => { setDirection(1); setCurrent(current + 1); }}
            disabled={current === pins.length - 1}
          >
            <ArrowRight size={28} />
          </button>
        </div>
        {/* Carousel dots */}
        <div className="flex justify-center gap-4 mt-4 mb-5">
          <div className="flex gap-1">
            {pins.map((_, idx) => (
              <span
                key={idx}
                className={`inline-block w-2 h-2 rounded-full ${idx === current ? 'bg-cyan-400' : 'bg-zinc-400'}`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={desktopScrollRef}
      className="h-160 w-full flex flex-row gap-6 mt-12 px-4 items-center justify-start overflow-x-auto cursor-grab select-none scrollbar-hide pl-4 lg:justify-center lg:overflow-visible lg:cursor-default lg:pl-0"
      style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      {pins.map((pin, idx) => (
        <motion.div
          key={pin.title}
          initial={{ opacity: 0, x: idx === 0 ? -100 : idx === 2 ? 100 : 0, y: idx === 1 ? -100 : 0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <PinContainer
            title={pin.title}
            href={pin.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-col p-4 tracking-tight text-slate-100/50 min-w-[320px] max-w-xs w-80 h-80 ">
              <h3 className="max-w-xs pb-2! m-0! font-bold text-base text-blue-500">
                {pin.title}
              </h3>
              <div className="text-base m-0! p-0! font-normal">
                <span className="text-slate-500 ">
                  Find us on the map! Click the pin for directions and details.
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden border border-slate-300 shadow bg-white items-center justify-center">
                <iframe
                  src={pin.mapSrc}
                  width="320"
                  height="180"
                  style={{ border: 0, pointerEvents: 'none' }}
                  title={pin.mapTitle}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </PinContainer>
        </motion.div>
      ))}
    </div>
  );
}
