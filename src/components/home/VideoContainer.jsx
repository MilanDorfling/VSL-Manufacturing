import React from 'react';

const VideoContainer = ({
  src,
  poster,
  title = 'Video content',
  wrapperClassName = 'w-full flex justify-center mb-8',
  className = 'rounded-2xl shadow-lg w-full max-w-7xl object-cover bg-black',
  aspectRatio = '16/9',
  controls = true,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  preload = 'auto',
}) => {
  return (
    <div className={wrapperClassName}>
      <video
        src={src}
        poster={poster}
        title={title}
        controls={controls}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline={playsInline}
        preload={preload}
        className={className}
        style={{ aspectRatio }}
      />
    </div>
  );
};

export default VideoContainer;
