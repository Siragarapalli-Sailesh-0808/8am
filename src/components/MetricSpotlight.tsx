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
        className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center"
      >
        <div className="w-[1200px] h-[1200px] border-[1px] border-[#6D28D9] rounded-full flex items-center justify-center">
            <div className="w-[800px] h-[800px] border-[1px] border-[#6D28D9] rounded-full flex items-center justify-center">
                <div className="text-[300px] font-black text-[#6D28D9]">8:00</div>
            </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Typography-First Headline */}
        <div className="mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-7xl md:text-[110px] font-black tracking-tighter leading-[0.85] text-[#222222]"
          >
            The Morning <br />
            <span className="italic font-serif font-normal text-[#6D28D9]">Coordination Crisis.</span>
          </motion.h2>
        </div>

        {/* Floating Statistics Grid */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-0 items-start">
          {metrics.map((item, i) => (
            <React.Fragment key={i}>
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex flex-col items-center md:items-start text-center md:text-left px-8"
              >
                {/* Icon */}
                <div className="mb-8 text-[#6D28D9]">
                  <item.icon size={32} strokeWidth={1.5} />
                </div>

                {/* Number */}
                <div className="text-8xl font-black text-[#6D28D9] mb-4 tracking-tighter">
                  <Counter value={item.number} prefix={item.prefix} suffix={item.suffix} />
                </div>

                {/* Narrative */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.2 + 0.5 }}
                >
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-[#222222] mb-4">{item.label}</p>
                  <p className="text-lg text-gray-500 font-medium leading-relaxed mb-8 max-w-[280px]">
                    {item.desc}
                  </p>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-gray-300">
                    {item.source}
                  </p>
                </motion.div>
              </motion.div>

              {/* Vertical Divider */}
              {i < metrics.length - 1 && (
                <div className="hidden md:block w-[1px] h-64 bg-gray-200/60 self-center" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Glassmorphism Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent backdrop-blur-sm pointer-events-none" />
    </section>
  );
};

export default MetricSpotlight;
