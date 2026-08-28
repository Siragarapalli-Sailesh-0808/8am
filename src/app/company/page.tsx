"use client";
import React from "react";
import { motion } from "framer-motion";
import ScrollingTicker from "@/components/ScrollingTicker";
import StickyHeader from "@/components/StickyHeader";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
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

      {/* 3. THE 8AM ENGINE: SCALE & PERFORMANCE */}
      <section className="py-24 bg-[#F8F7F2] overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl">
           <div className="mb-20 text-center">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center px-4 py-2 rounded-full border border-[#E8E2D3] bg-white shadow-sm mb-6"
              >
                  <Zap size={12} className="text-[#E0B100] mr-2 fill-current" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#222222]">Performance Benchmark</span>
              </motion.div>
              
              <div className="max-w-4xl mx-auto px-4">
                 <div className="mb-12 text-center">
                    <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#E0B100] mb-4">Benchmarks</h2>
                    <h2 className="text-3xl md:text-4xl font-black text-[#222222] tracking-tight">
                       Premium Performance.
                    </h2>
                 </div>
       
                  {/* SCALE VISUALIZATION - FOCUSED CARD */}
                 <div className="relative py-16">
                    {/* SHARED ATMOSPHERIC BACKGROUND */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                       {[...Array(3)].map((_, i) => (
                         <motion.div 
                           key={i}
                           animate={{ 
                             x: ['-50%', '100%'],
                             opacity: [0, 0.3, 0.3, 0]
                           }}
                           transition={{ 
                             duration: 12 + i * 4, 
                             repeat: Infinity, 
                             ease: "easeInOut",
                             delay: i * 3
                           }}
                           className="absolute h-[600px] w-24 bg-gradient-to-b from-transparent via-[#E0B100]/30 to-transparent blur-[80px]"
                           style={{ 
                             top: '-50%',
                             left: '0%',
                             rotate: '35deg'
                           }}
                         />
                       ))}
                       
                       {[...Array(15)].map((_, i) => (
                         <motion.div 
                           key={`ember-${i}`}
                           animate={{ 
                             y: [0, -40, 0],
                             opacity: [0.1, 0.4, 0.1],
                             scale: [0.7, 1.1, 0.7]
                           }}
                           transition={{ 
                             duration: 6 + (i % 4), 
                             repeat: Infinity, 
                             ease: "easeInOut",
                             delay: (i * 0.5) % 4
                           }}
                           className="absolute w-1 h-1 bg-[#E0B100] rounded-full shadow-[0_0_6px_rgba(224,177,0,0.5)]"
                           style={{ 
                             top: `${(i * 23.3) % 100}%`, 
                             left: `${(i * 37.1) % 100}%` 
                           }}
                         />
                       ))}
                    </div>
      
                    {/* UNIFIED 3-COLUMN PERFORMANCE GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative z-10 items-stretch">
                       {/* CARD 1: GLOBAL PROTECTION */}
                       <motion.div 
                         whileHover={{ y: -6, scale: 1.01 }}
                         className="bg-white border border-[#E8E2D3] p-8 rounded-[32px] shadow-sm hover:shadow-2xl transition-all group overflow-hidden relative flex flex-col justify-between"
                       >
                          <div className="w-10 h-10 bg-[#FDF7E7] rounded-xl flex items-center justify-center mb-8 relative z-10">
                             <ShieldCheck className="text-[#E0B100]" size={20} />
                          </div>
                          <div className="relative z-10">
                             <p className="text-[9px] font-black uppercase tracking-widest text-[#222222]/40 mb-2">Global Protection</p>
                             <p className="text-4xl font-black text-[#222222] mb-4">500k+</p>
                             <p className="text-[11px] font-bold text-[#666666] leading-relaxed">Students protected daily across our growing network.</p>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-br from-[#E0B100]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                       </motion.div>
      
                       {/* CARD 2: NETWORK RESILIENCE */}
                       <motion.div 
                         whileHover={{ y: -6, scale: 1.01 }}
                         className="bg-white/60 backdrop-blur-3xl border border-[#E0B100]/40 p-8 rounded-[32px] shadow-xl hover:shadow-[#E0B100]/20 transition-all group overflow-hidden relative flex flex-col justify-between"
                       >
                          <div className="w-10 h-10 bg-[#FDF7E7] rounded-xl flex items-center justify-center mb-8 relative z-10">
                             <Zap className="text-[#E0B100]" size={20} />
                          </div>
                          <div className="relative z-10">
                             <p className="text-[9px] font-black uppercase tracking-widest text-[#222222]/40 mb-2">Network Resilience</p>
                             <div className="space-y-3 mb-4">
                                <div>
                                   <p className="text-2xl font-black text-[#E0B100]">200ms</p>
                                   <p className="text-[8px] font-bold uppercase text-[#222222]/40">Avg. Latency</p>
                                </div>
                                <div>
                                   <p className="text-2xl font-black text-[#E0B100]">99.9%</p>
                                   <p className="text-[8px] font-bold uppercase text-[#222222]/40">Uptime</p>
                                </div>
                             </div>
                             <p className="text-[11px] font-bold text-[#666666] leading-relaxed">Sub-200ms edge monitoring.</p>
                          </div>
                          <motion.div 
                            animate={{ x: ['-100%', '200%'] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
                            className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-[#E0B100]/10 to-transparent skew-x-12 z-0"
                          />
                       </motion.div>
      
                       {/* CARD 3: URBAN VELOCITY */}
                       <motion.div 
                         whileHover={{ y: -6, scale: 1.01 }}
                         className="bg-[#E0B100] p-8 rounded-[32px] shadow-xl hover:shadow-[#E0B100]/30 transition-all group overflow-hidden relative flex flex-col justify-between"
                       >
                          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-8 relative z-10">
                             <Globe2 className="text-[#222222]" size={20} />
                          </div>
                          <div className="relative z-10">
                             <p className="text-[9px] font-black uppercase tracking-widest text-[#222222]/60 mb-2">Urban Velocity</p>
                             <p className="text-4xl font-black text-[#222222] mb-4">15+</p>
                             <p className="text-[11px] font-bold text-[#222222]/60 leading-relaxed">Metropolitan hubs optimized with AI protocols.</p>
                          </div>
                          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                       </motion.div>
                    </div>
                 </div>
              </div>
           </div>
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
                 className="bg-[#F8F7F2] rounded-[80px] p-1 border border-gray-100 shadow-2xl overflow-hidden relative group h-[600px]"
              >
                 <Image 
                   src="/institutional_campus.png" 
                   alt="Institutional Campus" 
                   fill
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
                 />
                 
                 {/* Antigravity Data Points */}
                 <div className="absolute inset-0 p-12 flex flex-col justify-between pointer-events-none">
                    <div className="flex justify-end">
                       <motion.div 
                         initial={{ opacity: 0, x: 20 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         transition={{ delay: 0.5 }}
                         className="bg-white/40 backdrop-blur-xl border border-white/30 px-6 py-3 rounded-2xl shadow-xl"
                       >
                          <p className="text-[10px] font-black text-[#222222] uppercase tracking-widest">Active Campuses</p>
                          <p className="text-2xl font-black text-[#222222]">500+</p>
                       </motion.div>
                    </div>

                    <div className="flex justify-start">
                       <motion.div 
                         initial={{ opacity: 0, x: -20 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         transition={{ delay: 0.7 }}
                         className="bg-[#222222]/80 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-2xl shadow-xl"
                       >
                          <p className="text-[10px] font-black text-[#E0B100] uppercase tracking-widest">System Uptime</p>
                          <p className="text-2xl font-black text-white">99.9%</p>
                       </motion.div>
                    </div>
                 </div>

                 <div className="absolute inset-0 bg-gradient-to-t from-[#E0B100]/20 to-transparent pointer-events-none" />
              </motion.div>
           </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
}
