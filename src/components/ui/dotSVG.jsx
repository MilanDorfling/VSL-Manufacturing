import React from "react";

export function DotBackgroundDemo() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <div
        className="absolute inset-0 w-full h-full bg-[radial-gradient(#52525b_1px,transparent_1px)] dark:bg-[radial-gradient(#404040_1px,transparent_1px)] bg-size-[20px_20px]"
      />
      {/* Smooth edge fade using linear gradients */}
      <div className="pointer-events-none absolute inset-0 w-full h-full bg-linear-to-b from-white/60 via-transparent to-white/60 dark:from-zinc-900/60 dark:via-transparent dark:to-zinc-900/60"></div>
      <div className="pointer-events-none absolute inset-0 w-full h-full bg-linear-to-r from-white/60 via-transparent to-white/60 dark:from-zinc-900/60 dark:via-transparent dark:to-zinc-900/60"></div>
    </div>
  );
}