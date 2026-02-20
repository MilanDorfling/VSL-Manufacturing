import { cn } from '../../lib/utils';
import React from "react";

function GridSVG() {
  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
      <div
        className={cn(
          "absolute inset-0",
          "bg-size-[50px_50px]",
          "bg-[linear-gradient(to_right,#0891b2_1px,transparent_1px),linear-gradient(to_bottom,#0891b2_1px,transparent_1px)]",
          "dark:bg-[linear-gradient(to_right,#155e75_1px,transparent_1px),linear-gradient(to_bottom,#155e75_1px,transparent_1px)]",
          // Add a radial mask for a soft fade
          "mask-[radial-gradient(ellipse_at_center,white,transparent_80%)]"
        )}
      />
    </div>
  );
}

export default GridSVG;
