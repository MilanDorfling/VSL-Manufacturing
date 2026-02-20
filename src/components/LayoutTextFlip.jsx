import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LayoutTextFlip({ staticText = "Our", words = ["Values", "Goals"], className = "" }) {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
        setIndex((i) => (i + 1) % words.length);
      }, 5700); // 5s display + 0.7s transition
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className={`flex justify-center w-full ${className}`}>
      <span className="inline-flex items-center gap-3 align-middle">
        <span className="text-zinc-600 font-bold align-middle dark:text-white">{staticText}</span>
        <span className="relative inline-block align-middle w-[8ch] h-[1em] text-left" style={{ minWidth: '6ch' }}>
          <AnimatePresence initial={false} mode="wait">
            <motion.span
              key={words[index]}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute left-0 top-0 w-full text-sky-500 font-bold align-middle mt-0.5 ml-1"
              style={{ willChange: "transform, opacity" }}
            >
              {words[index]}
            </motion.span>
          </AnimatePresence>
        </span>
      </span>
    </div>
  );
}
