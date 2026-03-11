import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ServicesSplitSection = ({ services, onSelect, sectionId = 'services-options' }) => {
  return (
    <section id={sectionId} className="w-full px-4 py-10 sm:px-6 md:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-400">
            Our Capabilities
          </p>
          <h2 className="mt-2 font-nulshock text-3xl leading-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl md:text-5xl">
            Choose Your Capability Path
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          {services.map((service, idx) => (
            <motion.article
              key={service.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: idx * 0.1 }}
              className="group relative h-[460px] cursor-pointer overflow-hidden rounded-3xl shadow-2xl sm:h-[520px]"
              onClick={() => onSelect(service.route)}
            >
              {/* full-bleed image */}
              <img
                src={service.imageSrc}
                alt={service.imageAlt}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              {/* base dark gradient from bottom */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />

              {/* accent colour tint on hover */}
              <div
                className={`absolute inset-0 bg-linear-to-tr ${service.accent} opacity-0 transition duration-500 group-hover:opacity-50`}
              />

              {/* metric badges — top right */}
              <div className="absolute top-5 right-5 flex flex-col items-end gap-2">
                {service.metrics.map((metric) => (
                  <span
                    key={metric}
                    className="rounded-full border border-white/20 bg-black/65 px-3 py-1 text-xs font-semibold text-white"
                  >
                    {metric}
                  </span>
                ))}
              </div>

              {/* bottom content */}
              <div className="absolute right-0 bottom-0 left-0 p-6">
                <h3 className="font-nulshock text-3xl leading-tight text-white sm:text-4xl">
                  {service.title}
                </h3>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-medium tracking-wide text-white/60 transition duration-300 group-hover:text-white/90">
                    {service.cta}
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/80 transition duration-300 group-hover:bg-cyan-400">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSplitSection;
