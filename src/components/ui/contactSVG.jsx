'use client';
import * as React from 'react';
import { cn } from '../../lib/utils';

function getHexPointsArr(size) {
  const points = [];
  for (let i = 0; i < 6; i++) {
    const angle = Math.PI / 3 * i - Math.PI / 6;
    points.push([
      size * Math.cos(angle),
      size * Math.sin(angle)
    ]);
  }
  return points;
}

function getHexPointsStr(size) {
  return getHexPointsArr(size).map(([x, y]) => `${x},${y}`).join(' ');
}

function HexagonBackground({
  className,
  children,
  hexagonSize = 40,
  hexagonMargin = 0,
  // mouse prop removed
  ...props
}) {
  const hexHeight = hexagonSize * 2;
  const hexWidth = Math.sqrt(3) * hexagonSize;
  const rowSpacing = hexHeight * 0.75;
  const colSpacing = hexWidth;
  const [windowSize, setWindowSize] = React.useState({ width: typeof window !== 'undefined' ? window.innerWidth : 1920, height: typeof window !== 'undefined' ? window.innerHeight : 1080 });
  const [gridDimensions, setGridDimensions] = React.useState({ rows: 0, columns: 0 });
  // Ripple effect removed

  const updateGridDimensions = React.useCallback(() => {
    if (typeof window === 'undefined') return;
    const width = window.innerWidth;
    const height = window.innerHeight;
    setWindowSize({ width, height });
    const rows = Math.ceil(height / rowSpacing) + 4;
    const columns = Math.ceil(width / colSpacing) + 4;
    setGridDimensions({ rows, columns });
  }, [rowSpacing, colSpacing]);

  React.useEffect(() => {
    updateGridDimensions();
    window.addEventListener('resize', updateGridDimensions);
    return () => window.removeEventListener('resize', updateGridDimensions);
  }, [updateGridDimensions]);

  // Ripple animation effect
  // Ripple effect removed

  // Guard: Only render SVG if window and grid dimensions are valid
  const validWindow = windowSize.width > 0 && windowSize.height > 0;
  const validGrid = gridDimensions.rows > 0 && gridDimensions.columns > 0;
  return (
    <div
      data-slot="hexagon-background"
      className={cn('fixed top-0 left-0 w-full h-full z-0 bg-white dark:bg-zinc-900', className)}
      style={{ pointerEvents: 'auto', width: '100%', height: '100%' }}
      {...props}
    >
      {validWindow && validGrid && (
        <svg
          width="100%"
          height="100%"
          viewBox={`0 0 ${windowSize.width} ${windowSize.height}`}
          style={{
            width: '100%',
            height: '100%',
            display: 'block'
          }}
        >
          {Array.from({ length: gridDimensions.rows }).map((_, row) =>
            Array.from({ length: gridDimensions.columns }).map((_, col) => {
              const x = col * colSpacing + (row % 2 ? colSpacing / 2 : 0) + hexWidth / 2;
              const y = row * rowSpacing + hexHeight / 2;
              return (
                <g key={`hex-${row}-${col}`}>
                  <polygon
                    points={getHexPointsStr(hexagonSize)}
                    transform={`translate(${x},${y})`}
                    fill="#fff"
                    stroke="#9ca3af"
                    strokeWidth={1}
                    className="dark:fill-[#18181b] dark:stroke-[#27272a]"
                  />
                </g>
              );
            })
          )}
        </svg>
      )}
      {children}
    </div>
  );
}

export { HexagonBackground };