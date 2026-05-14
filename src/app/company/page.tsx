"use client";
import React from "react";
import { motion } from "framer-motion";
import ScrollingTicker from "@/components/ScrollingTicker";
import StickyHeader from "@/components/StickyHeader";
import FinalCTA from "@/components/FinalCTA";
import { ArrowRight, Globe2, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";

export default function CompanyPage() {
  return (
    <main className="bg-[var(--card-bg)] min-h-screen text-[#E0B100] overflow-x-hidden">
      <ScrollingTicker />
      <StickyHeader />

      {/* 1. THE BLOOM HERO (QUANTUM RISE) */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
        {/* Floating 3D Elements (Conceptual) */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                y: [0, -40, 0],
                rotate: [0, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 5 + i, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: i * 0.5 
              }}
              className="absolute w-32 h-32 bg-[#E0B100]/10 rounded-full blur-2xl"
              style={{ 
                left: `${15 + i * 15}%`, 
                top: `${20 + (i % 3) * 20}%`,
                opacity: 0.3
              }}
            />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center relative z-10 max-w-4xl"
        >
          <div className="flex justify-center mb-8 text-[#E0B100]">
             <Zap size={40} fill="currentColor" />
          </div>
          <h1 className="text-6xl md:text-[120px] font-black leading-[0.85] tracking-tighter mb-12">
            The Future <br />
            <span className="italic font-serif font-normal text-[#E0B100]">is Guarded.</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#E0B100]/60 font-medium max-w-2xl mx-auto mb-16 leading-relaxed">
            8AM is the world's first AI-integrated mobility protocol designed for the next generation of urban student transit.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#E0B100] text-[var(--card-bg)] px-12 py-6 rounded-full font-black uppercase text-xs tracking-widest shadow-2xl shadow-[#E0B100]/20"
          >
            Discover the Protocol
          </motion.button>
        </motion.div>

        {/* Floating "Bloom" Globes */}
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#E0B100]/20 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-[#E0B100]/20 rounded-full blur-[100px] -z-10" />
      </section>

      {/* 2. THE PHILOSOPHY SPLIT */}
      <section className="py-40 bg-[#F8F7F2]">
        <div className="container mx-auto px-6 max-w-7xl grid lg:grid-cols-2 gap-24 items-start">
           <div>
              <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter mb-8">
                 What is <br />
                 <span className="italic font-serif font-normal text-[#E0B100]">8AM Bloom?</span>
              </h2>
              <motion.button 
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 group"
              >
                 <span className="text-xs font-black uppercase tracking-[0.3em]">Our Origin Story</span>
                 <div className="w-10 h-[2px] bg-[#E0B100] group-hover:w-16 transition-all" />
              </motion.button>
           </div>
           <div className="space-y-8">
              <p className="text-xl md:text-3xl font-black leading-tight text-[#E0B100]">
                 8AM is a yield-bearing safety protocol that ensures every second of transit is an asset, not a liability.
              </p>
              <p className="text-lg text-[#E0B100]/50 font-medium leading-relaxed">
                 We started with a simple question: Why is the most important journey of a child's day the most opaque? 8AM was built to bring transparency, accountability, and AI-driven precision to institutional transport. 
              </p>
              <p className="text-lg text-[#E0B100]/50 font-medium leading-relaxed">
                 Today, we are the standard for 500+ schools worldwide, processing millions of data points every second to ensure zero-latency safety.
              </p>
           </div>
        </div>
      </section>

      {/* 3. BENTO IDENTITY GRID */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
           {/* Card 1: Wide Image Card */}
           <motion.div 
             whileHover={{ y: -10 }}
             className="md:col-span-2 h-[500px] bg-[#E0B100]/10 rounded-[60px] relative overflow-hidden group border border-[#E0B100]/20"
           >
              <div className="absolute top-12 left-12 z-20">
                 <h3 className="text-4xl font-black mb-4">Network that <br /><span className="italic font-serif font-normal text-[#E0B100]">scales.</span></h3>
                 <p className="text-sm font-bold opacity-60">Global coverage in 15+ Smart Cities.</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent z-10" />
              {/* Background Asset Simulation */}
              <div className="absolute bottom-0 right-0 w-full h-full opacity-40 group-hover:scale-110 transition-transform duration-700">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E0B100] rounded-full blur-[150px]" />
              </div>
           </motion.div>

           {/* Card 2: Darker/Bronze Card */}
           <motion.div 
             whileHover={{ y: -10 }}
             className="bg-[#E0B100] p-12 rounded-[60px] flex flex-col justify-between text-[var(--card-bg)] border border-white/10"
           >
              <Globe2 className="text-[#E0B100]" size={48} />
              <div>
                 <h3 className="text-3xl font-black mb-6 leading-tight text-[#E0B100]">Always Liquid, Always Safe.</h3>
                 <p className="text-sm font-medium text-[var(--card-bg)]/50 leading-relaxed">
                   Real-time latency under 200ms ensures your data is always current and actionable.
                 </p>
              </div>
           </motion.div>

           {/* Card 3: Minimal White Card */}
           <motion.div 
             whileHover={{ y: -10 }}
             className="bg-[#F8F7F2] p-12 rounded-[60px] flex flex-col justify-between border border-gray-100 shadow-sm"
           >
              <ShieldCheck className="text-[#E0B100]" size={48} />
              <div>
                 <h3 className="text-3xl font-black mb-6 leading-tight">100% Hands-Free.</h3>
                 <p className="text-sm font-medium text-[#E0B100]/40 leading-relaxed">
                   Automated compliance reporting so you can focus on education, not logistics.
                 </p>
              </div>
           </motion.div>
        </div>
      </section>

      {/* 4. LOGO TICKER */}
      <section className="py-20 border-y border-gray-100 opacity-30 grayscale hover:grayscale-0 transition-all duration-500 overflow-hidden whitespace-nowrap">
         <div className="flex space-x-24 animate-marquee">
            {[1,2,3,4,5,6,7,8].map((i) => (
              <span key={i} className="text-2xl font-black uppercase tracking-[0.5em] text-[#E0B100]">PARTNER {i}</span>
            ))}
         </div>
      </section>

      {/* 5. INSTITUTIONAL SCALE SECTION */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                 <span className="text-xs font-black uppercase tracking-[0.4em] text-[#E0B100] block mb-6">Built for Enterprise</span>
                 <h2 className="text-6xl md:text-[80px] font-black leading-[0.85] tracking-tighter mb-10">
                    Institutional <br />
                    <span className="italic font-serif font-normal text-[#E0B100]">Precision.</span>
                 </h2>
                 <p className="text-xl text-[#E0B100]/60 font-medium mb-12 max-w-md">
                    From single-campus schools to nation-wide transport networks, 8AM scales with absolute consistency.
                 </p>
                 <button className="flex items-center space-x-4 text-xs font-black uppercase tracking-widest border-b-2 border-[#E0B100] pb-2">
                    <span>Explore Institutional Case Studies</span>
                    <ArrowRight size={16} />
                 </button>
              </div>
              <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 className="bg-[#F8F7F2] rounded-[80px] p-1 border border-gray-100 shadow-2xl overflow-hidden relative group"
              >
                 <Image 
                   src="/golden_institutional_campus_1778239262354.png" 
                   alt="Institutional Campus" 
                   width={800} 
                   height={800}
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#E0B100]/10 to-transparent pointer-events-none" />
              </motion.div>
           </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
