import React from 'react';

const MediaFrame = ({
  kind = 'custom',
  src,
  alt = '',
  aspectRatio = '16/9',
  children,
  className = '',
  ariaLabel,
}) => {
  return (
    <div
      aria-label={ariaLabel}
      className={`overflow-hidden rounded-2xl border border-neutral-300/70 shadow-lg dark:border-neutral-700 ${className}`.trim()}
    >
      <div className="w-full overflow-hidden rounded-2xl" style={{ aspectRatio }}>
        {kind === 'image' && src ? (
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
            style={{ imageRendering: 'auto' }}
          />
        ) : null}

        {kind === 'video' && src ? (
          <video
            src={src}
            controls
            muted
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
          />
        ) : null}

        {kind === 'custom' ? (
          <div className="flex h-full w-full items-center justify-center p-5">{children}</div>
        ) : null}
      </div>
    </div>
  );
};

export default MediaFrame;
