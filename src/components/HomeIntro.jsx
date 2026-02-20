

import React, { useState } from "react";
import { Spotlight } from "./ui/Spotlight";
import { motion, AnimatePresence } from "framer-motion";


// Custom hook to detect if screen is mobile (below md)
function useIsMobile() {
	const [isMobile, setIsMobile] = React.useState(() => window.innerWidth < 768);
	React.useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 768);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	return isMobile;
}

const HomeIntro = () => {
	const [showSpotlight, setShowSpotlight] = useState(false);
	const isMobile = useIsMobile();

	// When the text animation completes, start a 1s timer to show the spotlight
	const handleTextAnimationComplete = () => {
		setTimeout(() => setShowSpotlight(true), 100);
	};

	return (
		<section className="h-200 w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden mx-auto">
			<AnimatePresence>
				{/* Only show Spotlight on md+ screens */}
				{!isMobile && showSpotlight && <Spotlight />}
			</AnimatePresence>
			<motion.div
				className="relative z-10 p-2 sm:p-4 max-w-3xl mx-auto text-center pt-10 md:pt-0"
				initial={{ opacity: 0, y: 80 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, ease: "easeOut" }}
				onAnimationComplete={handleTextAnimationComplete}
			>
				<h1 className="text-5xl xs:text-4xl sm:text-5xl md:text-6xl font-nulshock font-bold bg-clip-text text-transparent bg-linear-to-b from-neutral-400 to-neutral-800 dark:bg-linear-to-b dark:from-neutral-50 dark:to-neutral-500 bg-opacity-50 leading-tight wrap-break-word">
					Welcome to <span className="text-cyan-500">VSL</span> Manufacturing
				</h1>
				<p className="mt-15 md:mt-4 text-lg xs:text-lg sm:text-lg md:text-xl text-neutral-800 dark:text-neutral-300 max-w-xs xs:max-w-sm sm:max-w-xl mx-auto leading-snug">
					We combine innovation, precision, and experience to deliver top-quality manufacturing solutions. Explore our services and discover how we can help bring your ideas to life.
				</p>
			</motion.div>
		</section>
	);
};

export default HomeIntro;
