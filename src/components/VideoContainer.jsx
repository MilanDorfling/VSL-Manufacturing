import React, { useRef, useState, useEffect } from "react";


const VideoContainer = ({ src }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isLandscape, setIsLandscape] = useState(true);

    // Responsive sizing logic
    useEffect(() => {
      function updateSize() {
        if (containerRef.current) {
          const parent = containerRef.current.parentElement;
          if (parent) {
            const w = parent.offsetWidth;
            const h = parent.offsetHeight;
            const isLandscape = w >= h;
            let width, height;
            if (isLandscape) {
              // Responsive landscape: maintain 16:9 aspect ratio, max width if needed
              width = Math.min(w, 1200); // or w for full width
              height = Math.round(width * 9 / 16);
            } else {
              // Portrait or square: use parent size
              width = w;
              height = h;
            }
            setDimensions({ width, height });
          }
        }
      }
      updateSize();
      window.addEventListener('resize', updateSize);
      return () => window.removeEventListener('resize', updateSize);
    }, []);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showIcon, setShowIcon] = useState(false);
  const iconTimeout = useRef(null);

  const handleContainerClick = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
    setShowIcon(true);
    if (iconTimeout.current) clearTimeout(iconTimeout.current);
    iconTimeout.current = setTimeout(() => setShowIcon(false), 700);
  };

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center mx-auto rounded-2xl overflow-hidden dark:shadow-neutral-800 cursor-pointer px-10 py-6 sm:px-8 sm:py-10 bg-transparent"
      style={{ width: dimensions.width, height: dimensions.height, minWidth: 250 }}
      onClick={handleContainerClick}
      title={isPlaying ? 'Pause video' : 'Play video'}
    >
      {src ? (
        <>
          <video
            ref={videoRef}
            src={src}
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: 'absolute',
              top: 24,
              left: 24,
              width: dimensions.width ? dimensions.width - 48 : 'calc(100% - 48px)',
              height: dimensions.height ? dimensions.height - 48 : 'calc(100% - 48px)',
              objectFit: 'cover',
              borderRadius: '1rem',
            }}
            tabIndex={-1}
            aria-hidden="true"
          />
          {/* Overlay for blending effect */}
          <div className="absolute inset-0 bg-transparent pointer-events-none transition-opacity duration-300" />
          {/* Play/Pause icon overlay */}
          <div
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none select-none transition-opacity duration-500 ${showIcon ? 'opacity-100' : 'opacity-0'}`}
          >
            {isPlaying ? (
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="32" fill="rgba(0,0,0,0.5)" />
                <rect x="20" y="18" width="8" height="28" rx="2" fill="white" />
                <rect x="36" y="18" width="8" height="28" rx="2" fill="white" />
              </svg>
            ) : (
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="32" fill="rgba(0,0,0,0.5)" />
                <polygon points="26,18 26,46 48,32" fill="white" />
              </svg>
            )}
          </div>
        </>
      ) : (
        <span className="text-black dark:text-white text-3xl font-semibold z-10 select-none">Video</span>
      )}
    </div>
  );
};

export default VideoContainer;
