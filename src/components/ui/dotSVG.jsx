import React from "react";

export function DotBackgroundDemo() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <div
        className="absolute inset-0 w-full h-full bg-[radial-gradient(#52525b_1px,transparent_1px)] dark:bg-[radial-gradient(#404040_1px,transparent_1px)] bg-size-[20px_20px]"
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 w-full h-full bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-zinc-900"></div>
    </div>
  );
}