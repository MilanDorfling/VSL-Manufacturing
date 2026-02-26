import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const Boxes = React.memo(({ className, ...rest }) => {
  // Much smaller grid - only animate what's visible
  const rows = new Array(15).fill(1);
  const cols = new Array(20).fill(1);
  
  let colors = [
    "#3b82f6", // blue-500
    "#1d4ed8", // blue-700
    "#60a5fa", // blue-400
    "#2563eb", // blue-600
    "#1e40af", // blue-800
    "#06b6d4", // cyan-500
    "#0891b2", // cyan-600
  ];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      className={cn(
        "absolute inset-0 w-full h-full z-10 overflow-hidden bg-white dark:bg-zinc-900",
        className
      )}
      {...rest}
    >
      {/* Extended CSS Grid Background with fade edges */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `skewX(-48deg) skewY(14deg) scale(1.275) translateZ(0)`,
          width: '300%',
          height: '300%',
          left: '-100%',
          top: '-100%',
          willChange: 'transform',
        }}
      >
        {/* Extended grid starting from the exact position of animated boxes */}
        <div
          style={{
            position: 'absolute',
            left: '35%',
            top: '30%',
            width: '1088px', // 20 columns × 54.4px
            height: '408px',  // 15 rows × 27.2px
            backgroundImage: `
              linear-gradient(to right, rgba(71, 85, 105, 0.8) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(71, 85, 105, 0.8) 1px, transparent 1px)
            `,
            backgroundSize: '54.4px 27.2px',
          }}
        />
        {/* Extended grid to cover full area - aligned with the boxes */}
        <div
          className="light:mask-white dark:mask-black"
          style={{
            position: 'absolute',
            left: 'calc(35% - 2176px)', // Extend left: 40 more columns (40 × 54.4px = 2176px)
            top: 'calc(30% - 816px)',   // Extend up: 30 more rows (30 × 27.2px = 816px)
            width: '5440px',  // 100 columns × 54.4px
            height: '1632px', // 60 rows × 27.2px
            backgroundImage: `
              linear-gradient(to right, rgba(71, 85, 105, 0.8) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(71, 85, 105, 0.8) 1px, transparent 1px)
            `,
            backgroundSize: '54.4px 27.2px',
            }}
        />
        <div
          className="dark:block hidden"
          style={{
            position: 'absolute',
            left: 'calc(35% - 2176px)',
            top: 'calc(30% - 816px)',
            width: '5440px',
            height: '1632px',
            backgroundImage: `
              linear-gradient(to right, rgba(71, 85, 105, 0.8) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(71, 85, 105, 0.8) 1px, transparent 1px)
            `,
            backgroundSize: '54.4px 27.2px',
          }}
        />
      </div>

      {/* Interactive animated boxes - 15% smaller */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `skewX(-48deg) skewY(14deg) scale(1.275) translateZ(0)`, // 1.5 * 0.85 = 1.275
          width: '300%',
          height: '300%',
          left: '-100%',
          top: '-100%',
          willChange: 'transform',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: '35%',
            top: '30%',
            display: 'grid',
            gridTemplateColumns: 'repeat(20, 54.4px)', // 64px * 0.85 = 54.4px
            gridTemplateRows: 'repeat(15, 27.2px)',     // 32px * 0.85 = 27.2px
            gap: 0,
          }}
        >
          {rows.map((_, i) => (
            cols.map((_, j) => (
              <motion.div
                key={`${i}-${j}`}
                className="relative cursor-pointer"
                style={{ 
                  width: '54.4px',  // 64px * 0.85 = 54.4px
                  height: '27.2px', // 32px * 0.85 = 27.2px
                  willChange: 'transform',
                }}
                onMouseEnter={() => {
                  // This ensures the hover effect works
                }}
              >
                <motion.div
                  className="absolute inset-0 w-full h-full"
                  initial={{ 
                    backgroundColor: "transparent",
                    opacity: 0
                  }}
                  whileHover={{
                    backgroundColor: getRandomColor(),
                    opacity: 0.8,
                    transition: { duration: 0.1 },
                  }}
                  animate={{
                    opacity: 0,
                    transition: { duration: 2 },
                  }}
                  style={{ willChange: 'opacity, background-color' }}
                />
                {j % 3 === 0 && i % 3 === 0 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="absolute h-4 w-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-600/60 stroke-[1px] pointer-events-none z-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m6-6H6"
                    />
                  </svg>
                ) : null}
              </motion.div>
            ))
          ))}
        </div>
      </div>
    </div>
  );
});