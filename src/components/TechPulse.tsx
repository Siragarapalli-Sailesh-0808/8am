"use client";
import React from "react";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, Cpu } from "lucide-react";

const TechPulse = () => {
  return (
    <section className="py-32 bg-[var(--card-bg)] relative overflow-hidden px-6">
      {/* 1. BACKGROUND TEXTURE (White-on-White Grid) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="whiteGrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#E0B100" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#whiteGrid)" />
        </svg>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-32">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#E0B100] font-black tracking-[0.4em] uppercase text-xs mb-4 block"
          >
            Zero-Latency Architecture
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black text-[#E0B100] leading-none"
          >
            Real-time is <br />
            <span className="italic font-serif font-normal text-[#E0B100]">not enough.</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* CENTRAL CORE (PULSING HEXAGON) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-[500px] h-[500px] bg-[#E0B100] rounded-full blur-[120px]"
            />
          </div>

          {/* RADIATING FEATURES */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {[
              {
                icon: Zap,
                title: "Quantum Sync",
                desc: "Our proprietary protocol ensures updates reach your phone in under 200ms."
              },
              {
                icon: ShieldCheck,
                title: "AES-256 Mesh",
                desc: "Every student data packet is encrypted with bank-grade security protocols."
              },
              {
                icon: Cpu,
                title: "Edge Compute",
                desc: "High-speed alerts are processed locally on the bus for zero-delay response."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                whileHover={{ y: -15 }}
                className="bg-[var(--card-bg)]/80 backdrop-blur-xl p-12 rounded-[48px] border border-[#E0B100]/20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.04)] group hover:border-[#E0B100] transition-all duration-500"
              >
                <div className="w-20 h-20 bg-[#E0B100]/10 rounded-3xl flex items-center justify-center text-[#E0B100] mb-8 group-hover:bg-[#E0B100] group-hover:text-[var(--card-bg)] transition-all duration-500 shadow-inner">
                  <item.icon size={36} strokeWidth={2.5} />
                </div>
                <h3 className="text-3xl font-black text-[#E0B100] mb-6 tracking-tight">{item.title}</h3>
                <p className="text-[#E0B100]/60 font-medium leading-relaxed">
                  {item.desc}
                </p>

                {/* Visual Connector Line (Conceptual) */}
                <div className="mt-10 h-[2px] w-0 bg-[#E0B100] group-hover:w-full transition-all duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FLOATING LIGHT LEAKS */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#E0B100]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#E0B100]/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
};

export default TechPulse;
