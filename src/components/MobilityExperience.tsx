"use client";
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Zap, Smartphone, LayoutDashboard } from "lucide-react";

const features = [
  {
    title: "Automatic Nodal Points",
    desc: "AI-generated pickup points calculated for maximum safety and minimum walking distance for every student.",
    icon: MapPin,
    delay: 0.1
  },
  {
    title: "Fuel-Aware Routes",
    desc: "Dynamic path optimization that prioritizes fuel efficiency while ensuring zero-delay arrivals.",
    icon: Zap,
    delay: 0.2
  },
  {
    title: "Live Driver App",
    desc: "A simplified, distraction-free interface that keeps road captains focused and perfectly synced with ops.",
    icon: Smartphone,
    delay: 0.3
  },
  {
    title: "Parent & Ops Apps",
    desc: "Seamless, high-performance interfaces that bridge the gap between school administration and family peace of mind.",
    icon: LayoutDashboard,
    delay: 0.4
  }
];

export default function MobilityExperience() {
  return (
    <section className="py-32 md:py-48 bg-[#F8F7F2]">
      <div className="max-w-7xl mx-auto px-6">
        <header className="max-w-4xl mx-auto text-center mb-24 md:mb-32">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#E0B100] font-black uppercase tracking-[0.4em] text-[10px] mb-8"
          >
            The Intelligence Hub
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black text-[#222222] tracking-tighter leading-[0.9] mb-10"
          >
            The Mobility <br />
            <span className="italic font-serif font-normal text-[#E0B100]">Experience.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-[#222222]/60 font-medium leading-relaxed"
          >
            8AM is a routing-intelligence platform for Indian school transport — automatic nodal points, fuel-aware routes, and live driver, parent and ops apps in one calm system.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: feature.delay }}
              whileHover={{ y: -10 }}
              className="group p-8 rounded-[40px] border border-[#E8E2D3] bg-white shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#FDF7E7] flex items-center justify-center text-[#E0B100] mb-8 group-hover:bg-[#E0B100] group-hover:text-white transition-colors duration-500">
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-[#222222] mb-4 tracking-tight leading-tight">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-[#222222]/50 font-medium leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
