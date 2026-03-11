import React from "react";

// Import images from High Resolution JPEGS into an array (ESM style)
import CEO1 from "../../assets/pictures/Vuyo.jpg";
import CEO2 from "../../assets/pictures/CEO2.JPG";

const heroImages = [
  CEO1,
  CEO2,
];

export { heroImages };

const getCardHeightFromBio = (bioText = "") => {
  const baseHeight = 500;
  const maxHeight = typeof window !== 'undefined' && window.innerWidth < 640 ? 99999 : 760;
  const layoutCompensation = 20;
  const extraChars = Math.max(0, bioText.length - 140);
  const extraHeight = Math.ceil(extraChars / 90) * 28;

  return Math.min(maxHeight, baseHeight + layoutCompensation + extraHeight);
};

export { getCardHeightFromBio };

const HeroBanner = ({ name, badge, bio, imageSrc, cardHeight, children }) => {
  const resolvedCardHeight = cardHeight ?? getCardHeightFromBio(bio);

  return (
    <div
      className="relative w-[320px] sm:w-[360px] rounded-[20px] overflow-hidden bg-[#1a1a1a] shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.1)_inset] isolate font-sans mx-auto transition-[height] duration-300"
      style={{ height: `${resolvedCardHeight}px` }}
    >
      <div className="absolute inset-0 z-0 bg-linear-to-br from-blue-900/60 via-zinc-800/80 to-blue-400/30 pointer-events-none" />
      <div className="absolute inset-0 z-10 opacity-60 pointer-events-none bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%270%200%20200%20200%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cfilter%20id%3D%27noiseFilter%27%3E%3CfeTurbulence%20type%3D%27fractalNoise%27%20baseFrequency%3D%270.8%27%20numOctaves%3D%273%27%20stitchTiles%3D%27stitch%27%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%27100%25%27%20height%3D%27100%25%27%20filter%3D%27url(%23noiseFilter)%27%2F%3E%3C%2Fsvg%3E')] mix-blend-overlay" />
      <div className="absolute inset-0 z-20 bg-[linear-gradient(135deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0.1)_40%,rgba(255,255,255,0)_50%,rgba(255,255,255,0.1)_60%,rgba(255,255,255,0.3)_100%)] pointer-events-none mix-blend-overlay opacity-90" />
      <div className="absolute inset-0 z-20 rounded-[20px] p-px bg-[linear-gradient(135deg,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.6)_100%)] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] mask-exclude pointer-events-none" />

      <div className="relative z-30 h-full flex flex-col justify-between p-8 text-white bg-[rgba(255,255,255,0.05)]">
        <div className="flex justify-between items-center border-b border-white/20 pb-4 mb-4">
          <div className="flex items-center gap-1.5 text-[15px] font-semibold tracking-widest px-2 py-1 bg-white/10 rounded border border-white/20">
            <span>{badge || "OWNER"}</span>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-end items-center text-center gap-4 mb-4 min-h-0 w-full relative">
          <div
            className="flex flex-col items-center w-full overflow-y-auto overflow-x-hidden px-2 relative hero-scrollbar"
            style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.2) transparent' }}
          >
            <style>{`
              .hero-scrollbar::-webkit-scrollbar {
                width: 4px;
              }
              .hero-scrollbar::-webkit-scrollbar-track {
                background: transparent;
              }
              .hero-scrollbar::-webkit-scrollbar-thumb {
                background: rgba(255, 255, 255, 0.2);
                border-radius: 2px;
              }
              .hero-scrollbar::-webkit-scrollbar-thumb:hover {
                background: rgba(255, 255, 255, 0.3);
              }
            `}</style>
            <div className="w-56 h-72 sm:w-64 sm:h-72 rounded-[20px] border-0 border-blue-400 dark:border-blue-600 shadow-lg bg-white dark:bg-zinc-900 flex items-center justify-center overflow-hidden mb-4 shrink-0">
              <img
                src={imageSrc}
                alt={name}
                className="object-cover w-full h-full rounded-lg bg-white"
              />
            </div>
            <h2 className="text-2xl font-bold tracking-[0.05em] m-0 mb-2 drop-shadow-md shrink-0">{name}</h2>
            <p className="text-sm opacity-80 m-0 pb-2 leading-relaxed text-start w-full wrap-break-word">{bio}</p>
          </div>
          {children && <div className="mt-2 w-full shrink-0">{children}</div>}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
