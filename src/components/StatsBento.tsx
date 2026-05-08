"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function StatCounter({
  value,
  suffix = "",
  precision = 0,
  active,
}: {
  value: number;
  suffix?: string;
  precision?: number;
  active: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    const duration = 2000;
    const frameDuration = 16;
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;

    const timer = window.setInterval(() => {
      frame += 1;
      const progress = Math.min(frame / totalFrames, 1);
      const nextValue = value * progress;

      setCount(
        precision > 0 ? Number(nextValue.toFixed(precision)) : Math.floor(nextValue),
      );

      if (progress >= 1) {
        window.clearInterval(timer);
      }
    }, frameDuration);

    return () => window.clearInterval(timer);
  }, [active, precision, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

function BentoCard({
  className,
  children,
  label,
  desc,
}: {
  className: string;
  children: React.ReactNode;
  label: string;
  desc?: string;
}) {
  return (
    <motion.article
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`bg-white rounded-[32px] p-10 flex flex-col justify-between shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] border border-gray-50 transition-all duration-500 group ${className}`}
    >
      <div className="flex flex-col space-y-4">
        <p className="text-[10px] font-bold tracking-[0.2em] text-[#2D2D2D]/40 uppercase">
          {label}
        </p>
        {children}
        {desc && (
          <p className="text-[#2D2D2D]/70 text-sm font-medium leading-relaxed opacity-80">
            {desc}
          </p>
        )}
      </div>
      
      {/* Luxury Hover Line */}
      <div className="w-12 h-1 bg-gray-100 group-hover:w-full group-hover:bg-[#FFD700] transition-all duration-500 mt-8" />
    </motion.article>
  );
}

export default function StatsBento() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-120px" });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#FDFDFD] px-6 py-32 md:px-12 lg:px-24"
    >
      {/* City Grid Background */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-40">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="bentoGrid" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M 120 0 L 0 0 0 120" fill="none" stroke="#E5E7EB" strokeWidth="1" />
              <circle cx="0" cy="0" r="1" fill="#FFD700" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bentoGrid)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-[#FFD700]"
          >
            Real-Time Impact
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-[#2D2D2D] leading-tight"
          >
            SAFEHOP Mobility <br />
            <span className="italic font-serif font-normal text-[#FFD700]">Experience.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <BentoCard 
            label="Reliability Standard"
            desc="Average on-time performance across all urban routes."
            className="md:col-span-2 md:row-span-2"
          >
            <h3 className="text-8xl md:text-9xl font-serif italic text-[#FFD700] tracking-tighter leading-none">
              <StatCounter value={98} suffix="%" active={isInView} />
            </h3>
          </BentoCard>

          <BentoCard 
            label="Parent Satisfaction"
            desc="Average rating across 2M+ daily taps and real-time bus visibility."
            className="md:col-span-2"
          >
            <h3 className="text-6xl md:text-7xl font-serif italic text-[#FFD700] tracking-tighter leading-none">
              <StatCounter value={4.9} suffix="/5" precision={1} active={isInView} />
            </h3>
          </BentoCard>

          <BentoCard 
            label="Efficiency Gain"
            desc="Reduction in route time for school buses."
            className="md:col-span-1"
          >
            <h3 className="text-5xl font-serif italic text-[#FFD700] tracking-tighter leading-none">
              <StatCounter value={20} suffix="%" active={isInView} />
            </h3>
          </BentoCard>

          <BentoCard 
            label="Cost Optimization"
            desc="Average reduction in bus fleet operational expenses."
            className="md:col-span-1"
          >
            <h3 className="text-5xl font-serif italic text-[#FFD700] tracking-tighter leading-none">
              <StatCounter value={25} suffix="%" active={isInView} />
            </h3>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}