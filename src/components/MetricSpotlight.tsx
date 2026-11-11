"use client";
import React from "react";
import { m } from "framer-motion";
import { Eye, Phone, TrendingUp } from "lucide-react";

// The problem 8AM solves, stated plainly (no unverifiable statistics).
const problems = [
  {
    icon: Eye,
    label: "Anxious mornings",
    title: "Where is the bus?",
    desc: "Parents watch the gate and refresh their phones, unsure whether the bus has even left.",
  },
  {
    icon: Phone,
    label: "Endless calls",
    title: "Ring, ring, ring.",
    desc: "Drivers and school offices field call after call when they should be focused on the road and the students.",
  },
  {
    icon: TrendingUp,
    label: "Hidden costs",
    title: "Quiet waste.",
    desc: "Overlapping routes and idle time burn fuel and money every month without anyone noticing.",
  },
];

const MetricSpotlight = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-[#F8F7F2]">
      <div className="mx-auto max-w-6xl px-5 md:px-8 relative z-10">
        <m.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="display-lg mb-14 md:mb-20 font-black tracking-tighter leading-[0.95] text-[#222222]"
        >
          The Morning <br />
          <span className="headline-italic text-[#E0B100]">Coordination Crisis.</span>
        </m.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
          {problems.map((item, i) => (
            <m.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className={`flex flex-col text-left md:px-8 ${i > 0 ? "md:border-l md:border-[#E0B100]/25" : "md:pl-0"}`}
            >
              <div className="mb-6 text-[#B08A00]">
                <item.icon size={32} strokeWidth={2} />
              </div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#B08A00] mb-3">{item.label}</p>
              <p className="text-3xl md:text-4xl font-black text-[#222222] tracking-tight mb-4">{item.title}</p>
              <p className="text-lg text-[#222222]/70 font-medium leading-relaxed max-w-sm">{item.desc}</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricSpotlight;
