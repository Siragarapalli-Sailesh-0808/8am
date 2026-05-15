"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  MapPin,
  Radio,
  LayoutDashboard,
  BellRing,
  Route,
} from "lucide-react";

const features = [
  {
    title: "Smart RFID Tracking",
    icon: <Radio className="h-8 w-8 text-[#E0B100]" />,
  },
  {
    title: "Live GPS Monitoring",
    icon: <MapPin className="h-8 w-8 text-[#E0B100]" />,
  },
  {
    title: "Safety First",
    icon: <ShieldCheck className="h-8 w-8 text-[#E0B100]" />,
  },
  {
    title: "School Management Dashboard",
    icon: <LayoutDashboard className="h-8 w-8 text-[#E0B100]" />,
  },
  {
    title: "Smart Notifications",
    icon: <BellRing className="h-8 w-8 text-[#E0B100]" />,
  },
  {
    title: "Route & Pickup Optimization",
    icon: <Route className="h-8 w-8 text-[#E0B100]" />,
  },
];

export default function FeatureSlider() {
  const doubleFeatures = [...features, ...features];

  return (
    <section className="overflow-hidden bg-[var(--card-bg)] py-20">
      <div className="px-6 text-center md:px-12 flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-4 text-xs font-black uppercase tracking-[0.4em] text-[#666666] opacity-60"
        >
          Our Top Features
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="text-4xl font-black text-[#222222] md:text-6xl tracking-[-0.05em] leading-[0.9] max-w-3xl"
        >
          Deliver students on time and <span className="headline-italic text-[#E0B100] tracking-normal font-normal">ready to learn.</span>
        </motion.p>
      </div>

      <div className="group relative mx-auto mt-12 max-w-7xl overflow-hidden px-0">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent md:w-32" />

        <motion.div
          className="flex w-max items-center gap-6 px-4 will-change-transform group-hover:[animation-play-state:paused]"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        >
          {doubleFeatures.map((feature, index) => (
            <motion.article
              key={`${feature.title}-${index}`}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="flex min-w-max items-center justify-center gap-4 rounded-full border border-gray-100 bg-[var(--card-bg)] px-8 py-5 shadow-sm md:px-10 md:py-6"
            >
              <div className="inline-flex rounded-full bg-[#E0B100]/10 p-3">
                {feature.icon}
              </div>
              <h3 className="whitespace-nowrap text-lg font-bold text-[#222222] md:text-xl">
                {feature.title}
              </h3>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
