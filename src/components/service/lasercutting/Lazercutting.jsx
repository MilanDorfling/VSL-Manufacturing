import React from "react";
import { motion } from "framer-motion";
import GridSVG from "../../ui/GridSVG";
import {
  ServiceShell,
  ServiceSection,
  ServiceHeader,
  ServiceCopy,
  ServiceMediaSlot,
  ExpandableImageSections,
  ServiceContactButton,
} from "..";
import { laserHero, laserImageSections } from "./index";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: "easeOut" } },
};

const Lazercutting = () => {
  return (
    <ServiceShell className="relative overflow-hidden">
      <GridSVG />
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <ServiceSection className="max-w-5xl py-10 sm:pt-20 pb-10 flex flex-col items-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            className="w-full"
          >
            <ServiceHeader title={laserHero.title} titleClassName="mb-4" />
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            className="text-3xl font-bold text-center bg-linear-to-t from-neutral-900/95 to-gray-300 bg-clip-text text-transparent mb-10 dark:from-white/80 dark:to-white/30"
          >
            {laserHero.machineTitle}
          </motion.h2>
        </ServiceSection>

        <div className="w-full flex flex-col md:flex-row items-center justify-center mb-16 px-6 sm:px-10 md:px-16 lg:px-20 pb-20 gap-10 md:gap-16">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
          >
            <ServiceCopy className="text-2xl font-light max-w-2xl text-neutral-200 text-start md:text-left md:mb-0">
              {laserHero.introCopy}
            </ServiceCopy>
          </motion.div>

          <ServiceMediaSlot className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            <video
              src={laserHero.videoSrc}
              controls={false}
              autoPlay
              loop
              muted
              playsInline
              poster={laserHero.videoPoster}
              className="w-full object-cover bg-black"
              style={{ aspectRatio: "9/16", maxHeight: "80vh" }}
            />
          </ServiceMediaSlot>
        </div>
      </motion.div>

      <ExpandableImageSections
        sections={laserImageSections}
        className="mt-10"
        outlineColor="rgb(34, 211, 238)"
      />

      <ServiceContactButton className="mt-12 mb-10" />
    </ServiceShell>
  );
};

export default Lazercutting;