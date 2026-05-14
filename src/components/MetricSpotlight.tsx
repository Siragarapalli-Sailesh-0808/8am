"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Eye, Phone, TrendingUp } from "lucide-react";
import Counter from "./Counter";

const MetricSpotlight = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0.6, 0.9], [0, -100]);

  const metrics = [
    {
      icon: Eye,
      number: 67,
      suffix: "%",
      label: "Coordination Anxiety",
      desc: "of Indian parents report extreme stress during morning transit hours.",
      source: "DATA: 2024 URBAN MOBILITY REPORT"
    },
    {
      icon: Phone,
      number: 40,
      suffix: "+",
      label: "Communication Latency",
      desc: "unanswered calls between parents and drivers per week on average.",
      source: "SURVEY: SMART CITY LOGISTICS"
    },
    {
      icon: TrendingUp,
      number: 15,
      prefix: "₹",
      suffix: "L",
      label: "Inefficiency Cost",
      desc: "Annual loss per institution due to unoptimized fuel and route overlaps.",
      source: "REF: INSTITUTIONAL ECONOMICS"
    }
  ];

  return (
    <section className="relative py-40 overflow-hidden bg-[#F8F7F2]">
      {/* Parallax Background Watermark */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 opacity-[0.04] pointer-events-none flex items-center justify-center"
      >
        <div className="w-[1200px] h-[1200px] border-[1px] border-[#E0B100] rounded-full flex items-center justify-center">
            <div className="w-[800px] h-[800px] border-[1px] border-[#E0B100] rounded-full flex items-center justify-center">
                <div className="text-[300px] font-black text-[#E0B100]">8:00</div>
            </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Typography-First Headline */}
        <div className="mb-20 md:mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-[110px] font-black tracking-tighter leading-[0.85] text-[#222222]"
          >
            The Morning <br />
            <span className="italic font-serif font-normal text-[#E0B100]">Coordination Crisis.</span>
          </motion.h2>
        </div>

        {/* Floating Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-0 items-start">
          {metrics.map((item, i) => (
            <React.Fragment key={i}>
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="flex flex-col items-center md:items-start text-center md:text-left px-4 md:px-8 group"
              >
                {/* Icon */}
                <div className="mb-6 md:mb-8 text-[#E0B100]">
                  <item.icon size={32} strokeWidth={2} />
                </div>

                {/* Number */}
                <div className="relative">
                  <div className="text-8xl md:text-9xl font-black text-[#222222] mb-4 tracking-tighter relative z-10">
                    <Counter value={item.number} prefix={item.prefix} suffix={item.suffix} />
                  </div>
                  {/* Yellow Pulse Effect */}
                  <motion.div 
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1.5, opacity: 0.15 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 + 1, duration: 1 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#E0B100] rounded-full blur-2xl -z-10"
                  />
                </div>

                {/* Narrative */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.2 + 0.5 }}
                >
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-[#222222] mb-4">{item.label}</p>
                  <p className="text-lg text-[#222222]/60 font-medium leading-relaxed mb-8 max-w-[280px]">
                    {item.desc}
                  </p>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-[#222222]/30">
                    {item.source}
                  </p>
                </motion.div>
              </motion.div>

              {/* Vertical Divider (Hidden on Mobile) */}
              {i < metrics.length - 1 && (
                <div className="hidden md:block w-[1px] h-64 bg-[#E0B100]/20 self-center" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Glassmorphism Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F8F7F2] to-transparent backdrop-blur-sm pointer-events-none" />
    </section>
  );
};

export default MetricSpotlight;
