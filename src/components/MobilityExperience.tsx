"use client";
import React from "react";
import { m } from "framer-motion";
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
    <section className="py-24 md:py-32 bg-[#F8F7F2]">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <header className="max-w-3xl mx-auto text-center mb-20 md:mb-24">
          <m.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#B08A00] font-black uppercase tracking-[0.4em] text-[10px] mb-6"
          >
            The Intelligence Hub
          </m.p>
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="display-lg font-black text-[#222222] tracking-tighter leading-[0.95] mb-8"
          >
            The Mobility <br />
            <span className="italic font-serif font-normal text-[#E0B100]">Experience.</span>
          </m.h2>
          <m.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-xl text-[#222222]/70 font-medium leading-relaxed"
          >
            Four connected tools that take the guesswork out of every school run, for the school office, the driver and the family.
          </m.p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {features.map((feature, idx) => (
            <m.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: feature.delay }}
              className="group p-7 md:p-8 rounded-[32px] border border-[#E8E2D3] bg-white shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-[transform,box-shadow] duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#FDF7E7] flex items-center justify-center text-[#E0B100] mb-8 group-hover:bg-[#E0B100] group-hover:text-white transition-colors duration-500">
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-[#222222] mb-4 tracking-tight leading-tight">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-[#222222]/70 font-medium leading-relaxed">
                {feature.desc}
              </p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
