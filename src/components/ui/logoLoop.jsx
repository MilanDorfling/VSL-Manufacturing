import React, { useRef, useEffect, useState } from "react";
import isuzu from "../../assets/vsl-favicon/isuzu-2.svg";
import gibela from "../../assets/vsl-favicon/gibela.svg";
import faurecia from "../../assets/vsl-favicon/faurecia.svg";
import defy from "../../assets/vsl-favicon/defy.svg";

// Add imported SVGs/images to the logos array
const logos = [
  isuzu,
  gibela,
  faurecia,
  defy
]

export default function LogoLoop() {
  const containerRef = useRef(null);
  const [ setContainerWidth ] = useState(0);

  // Estimate the width of a single logo card (adjust if needed)

  useEffect(() => {
    function updateWidth() {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [setContainerWidth]);

  // Duplicate the logos array once for seamless looping
  const loopLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos];
  // Calculate the width of a single logo card (matches w-36 + mx-8)
  const logoCardWidth = 200; // 9rem (w-36) + 2rem (mx-8) * 2 sides
  const rowWidth = loopLogos.length * logoCardWidth;

  return (
    <div className="relative w-full h-28 overflow-hidden flex items-center justify-center">
      <div
        className="absolute top-0 left-0 flex flex-row animate-logo-loop-horizontal"
        style={{ width: rowWidth, height: '100%' }}
      >
        {loopLogos.map((logo, idx) => (
          <div key={idx} className="flex items-center justify-center h-24 w-36 mx-8">
            <img src={logo} alt="logo" className="h-16 w-auto object-contain opacity-80" />
          </div>
        ))}
      </div>
      {/* seemless loop animation */}
      <style>
        {`
          @keyframes logo-loop-horizontal { 
          0% { transform: translateX(0); } 
          100% { transform: translateX(-${rowWidth / 2}px); } } 
          .animate-logo-loop-horizontal { animation: logo-loop-horizontal 20s linear infinite; } `}
      </style>
    </div>
  );
}
