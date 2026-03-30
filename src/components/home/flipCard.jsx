
import React from "react";
import { motion } from "framer-motion";
import { Weight, Workflow, Layers, Car, RulerDimensionLine, Zap, ShieldCheck, Repeat } from 'lucide-react';

// Basic data for the 8 capabilities
const capabilities = [
  {
    title: "High-Tonnage Pressing",
    description: "High-volume metal stamping using mechanical and automated press systems.",
    Icon: Weight,
  },
  {
    title: "Automated Press Lines",
    description: "Robotic and automated production lines delivering consistent, high-speed output.",
    Icon: Workflow,
  },
  {
    title: "Deep Draw Forming",
    description: "Advanced forming capability for complex geometries and structural components.",
    Icon: Layers,
  },
  {
    title: "Automotive Skin Panels",
    description: "Precision manufacturing of exterior vehicle components for OEM programmes.",
    Icon: Car,
  },
  {
    title: "Tooling & Die Support",
    description: "In-house and partner-supported tooling development and maintenance.",
    Icon: RulerDimensionLine ,
  },
  {
    title: "Laser Cutting & Prototyping",
    description: "Flexible prototyping and pre-production support for new programmes.",
    Icon: Zap,
  },
  {
    title: "Quality Control Systems",
    description: "Robust inspection processes aligned to ISO and automotive standards",
    Icon: ShieldCheck,
  },
  {
    title: "Flexible Production Runs",
    description: "Capability to support both large-scale OEM production and short-run or aftermarket requirements.",
    Icon: Repeat ,
  },
];



function CapabilityRow({ title, description, Icon }) {
  return (
    <motion.div
      className={`py-6 px-5 cursor-pointer duration-300 rounded-lg bg-neutral-100/80 dark:bg-neutral-800 flex items-center gap-4`}
      whileHover={{ scale: 1.10 }}
      transition={{ duration: 0.01 }}
      tabIndex={0}
    >
      {Icon && <Icon className="w-8 h-8 shrink-0 text-cyan-600 dark:text-cyan-300" aria-hidden="true" />}
      <div>
        <h3 className="text-xl font-semibold text-cyan-800 dark:text-cyan-300">{title}</h3>
        <p className="mt-2 text-neutral-700 dark:text-neutral-200">{description}</p>
      </div>
    </motion.div>
  );
}

export default function CapabilitiesGrid() {
  return (
    <div className="w-full flex flex-col items-center py-10">
      <div className="w-full max-w-4xl flex flex-col gap-y-4">
        {capabilities.map(({ title, description, Icon }) => (
          <CapabilityRow key={title} title={title} description={description} Icon={Icon} />
        ))}
      </div>
    </div>
  );
}
