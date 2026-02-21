import React from "react";
import innovation from "../assets/pictures/Innovation.jpeg";
import Teamwork from "../assets/pictures/Teamwork.jpeg";
import Focus from "../assets/pictures/Focus.jpeg";
import Efficiency from "../assets/pictures/Efficiency.jpeg";
import Security from "../assets/pictures/Security.jpeg";
import Growth from "../assets/pictures/Growth.JPG";
import Progress from "../assets/pictures/Progress.jpeg";
import Support from "../assets/pictures/Support.jpeg";

import { IconBulb, IconUsers, IconLock, IconBolt, IconPlant, IconTarget, IconChartBar, IconTools } from "@tabler/icons-react";

// Single flip card
function FlipCard({ frontIcon, frontLabel, backText, backImage, flipped, onClick, isMobile }) {
	return (
		<div
			className={
				`group perspective-[1000px] w-36 h-40 sm:w-48 sm:h-48 md:w-48 md:h-48 m-1 md:m-2 ${isMobile ? 'cursor-pointer' : ''}`
			}
			onClick={isMobile ? onClick : undefined}
		>
			<div
				className={
					`relative w-full h-full transition-transform duration-500 transform-3d ` +
					(isMobile
						? (flipped ? 'transform-[rotateX(180deg)]' : '')
						: 'group-hover:transform-[rotateX(180deg)]')
				}
				style={{ willChange: 'transform', transformStyle: 'preserve-3d' }}
			>
				{/* Front */}
				<div
					className="absolute w-full h-full flex flex-col items-center justify-center bg-neutral-300 dark:bg-zinc-900 rounded-xl shadow-md border border-zinc-200 dark:border-zinc-700 backface-hidden"
					style={{ backfaceVisibility: 'hidden' }}
				>
					<div className="text-4xl mb-2">{frontIcon}</div>
					<div className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">{frontLabel}</div>
				</div>
				{/* Back */}
				<div
					className="absolute w-full h-full flex items-center justify-center bg-neutral-600 dark:bg-zinc-800 text-white rounded-xl shadow-md px-4 text-center border border-cyan-600 transform-[rotateX(180deg)] backface-hidden overflow-hidden"
					style={{ backfaceVisibility: 'hidden' }}
				>
					{/* Transparent image overlay */}
					{backImage && (
						<img
							src={backImage}
							alt="Card background"
							className="absolute w-full h-full object-cover opacity-40 z-0"
							draggable="false"
						/>
					)}
					<span className="relative z-10">{backText}</span>
				</div>
			</div>
		</div>
	);
}

// Grid of 8 flip cards
export default function FlipCardGrid() {
	const dummyCards = [
		{ frontIcon: <IconBulb className='text-yellow-300' />, frontLabel: "Innovation", backText: "We value creative solutions and forward thinking.", backImage: innovation },
		{ frontIcon: <IconUsers className='text-violet-600' />, frontLabel: "Teamwork", backText: "Collaboration is at the heart of our process.", backImage: Teamwork },
		{ frontIcon: <IconLock className='text-cyan-400' />, frontLabel: "Security", backText: "Your data and privacy are our top priority.", backImage: Security },
		{ frontIcon: <IconBolt className='text-yellow-300' />, frontLabel: "Efficiency", backText: "We deliver results quickly and reliably.", backImage: Efficiency },
		{ frontIcon: <IconPlant className='text-lime-400' />, frontLabel: "Growth", backText: "Continuous improvement drives our success.", backImage: Growth },
		{ frontIcon: <IconTarget className='text-red-500' />, frontLabel: "Focus", backText: "We stay on target to achieve your goals.", backImage: Focus },
		{ frontIcon: <IconChartBar className='text-white' />, frontLabel: "Progress", backText: "We measure and celebrate every milestone.", backImage: Progress },
		{ frontIcon: <IconTools className='text-orange-400' />, frontLabel: "Support", backText: "We’re here to help every step of the way.", backImage: Support },
	];

	// Remove JS image preloading, use DOM-based preloading below


	// Mobile detection (same as other components)
	const [isMobile, setIsMobile] = React.useState(() => window.innerWidth < 768);
	React.useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 768);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	// Track which card is flipped (mobile only)
	const [flippedIdx, setFlippedIdx] = React.useState(null);

	// Handler for mobile tap
	const handleCardClick = (idx) => {
		if (!isMobile) return;
		setFlippedIdx(flippedIdx === idx ? null : idx);
	};


	// DOM-based image preloading: render hidden images
	return (
		<div className="w-full flex flex-col items-center py-10">
			{/* Hidden images for preloading */}
			<div style={{ display: 'none' }} aria-hidden="true">
				{dummyCards.map((card, idx) => (
					card.backImage ? <img key={idx} src={card.backImage} alt="preload" /> : null
				))}
			</div>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
				{dummyCards.slice(0, 4).map((card, idx) => (
					<FlipCard
						key={idx}
						{...card}
						flipped={isMobile && flippedIdx === idx}
						onClick={() => handleCardClick(idx)}
						isMobile={isMobile}
					/>
				))}
			</div>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mt-3 md:mt-6">
				{dummyCards.slice(4, 8).map((card, idx) => (
					<FlipCard
						key={idx + 4}
						{...card}
						flipped={isMobile && flippedIdx === idx + 4}
						onClick={() => handleCardClick(idx + 4)}
						isMobile={isMobile}
					/>
				))}
			</div>
		</div>
	);
}
