"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export const CrisisSectionWhite = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const gridY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const smoothGridY = useSpring(gridY, { stiffness: 100, damping: 30 });

  const stats = [
    { value: "54%", label: "TRANSPORTATION STRESS", desc: "of families feel boarding anxiety before the bus arrives." },
    { value: "39%", label: "TRANSPORTATION STRESS", desc: "of schools lack a clear live visibility workflow." },
    { value: "55 billion", label: "TRANSPORTATION STRESS", desc: "minutes are lost each year to transit uncertainty." },
    { value: "$15 billion", label: "TRANSPORTATION STRESS", desc: "in avoidable costs tied to inefficient school transport." },
  ];

  return (
    <section ref={containerRef} className="relative bg-[#F8F7F2] py-32 overflow-hidden px-6 md:px-24">
      
      {/* PREMIUM WHITE-TECH BLUEPRINT BACKGROUND */}
      <motion.div 
        style={{ y: smoothGridY }}
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.4]"
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="lightCityGrid" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M 120 0 L 0 0 0 120" fill="none" stroke="#FFFFFF" strokeWidth="1" />
              <circle cx="0" cy="0" r="1.5" fill="#E0B100" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#lightCityGrid)" />
          
          <motion.path 
            d="M-50 300 C 250 200 450 700 850 400 S 1500 600 1500 600" 
            stroke="#E0B100" 
            strokeWidth="1.5" 
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <header className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-fit border-b-2 border-[#E0B100] mb-8"
          >
            <p className="text-xs font-bold tracking-[0.4em] text-[var(--foreground)] pb-2 uppercase">The Problem</p>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black text-[var(--foreground)] leading-[1.1] mb-4"
          >
            Today's Transportation Anxiety <br />
            <span className="italic font-serif font-normal text-[#E0B100] text-6xl md:text-8xl">Crisis</span>
          </motion.h2>
        </header>

        {/* ULTRA-PREMIUM WHITE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="bg-[var(--card-bg)] rounded-[32px] p-10 min-h-[400px] flex flex-col justify-between shadow-[0_10px_40px_-15px_rgba(0,0,0,0.04)] border border-[#E8E2D3] group hover:border-[#E0B100] hover:shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500"
            >
              <p className="text-[10px] font-bold tracking-widest text-[var(--foreground)]/40 uppercase">{stat.label}</p>
              
              <div className="space-y-6">
                <h3 className="text-6xl font-serif italic text-[#E0B100] tracking-tighter leading-none group-hover:scale-105 transition-transform origin-left">
                  {stat.value}
                </h3>
                <p className="text-[var(--foreground)] text-sm font-medium leading-relaxed opacity-80">
                  {stat.desc}
                </p>
              </div>
              
              <div className="w-12 h-1 bg-gray-100 group-hover:w-full group-hover:bg-[#E0B100] transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CrisisSectionWhite;
