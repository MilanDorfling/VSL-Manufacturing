import React, { useEffect, useState } from "react";
import PowerPress from "../components/Powerpress";
import GridSVG from "../components/ui/GridSVG";
import { motion, useInView } from 'framer-motion';


const PowerPressPage = () => {
  const [scrollHeight, setScrollHeight] = useState(window.innerHeight);

  return (
    <div className="min-h-screen flex flex-col bg-zinc-900 relative overflow-hidden">
      {/* GridSVG as fixed background, always behind */}
      <GridSVG className="fixed inset-0 w-full h-full z-0" />
      <motion.div 
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <PowerPress scrollHeight={scrollHeight} />
      </motion.div>
    </div>
  );
};

export default PowerPressPage;
