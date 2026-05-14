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

      {/* 3. THE 8AM ENGINE: SCALE & PERFORMANCE */}
      <section className="py-32 bg-[#F8F7F2] overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
           <div className="mb-20 text-center">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center px-4 py-2 rounded-full border border-[#E8E2D3] bg-white shadow-sm mb-6"
              >
                  <Zap size={12} className="text-[#E0B100] mr-2 fill-current" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#222222]">Performance Benchmark</span>
              </motion.div>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-6 text-[#222222]">
                Engineered for <br />
                <span className="italic font-serif font-normal text-[#E0B100]">Absolute Performance.</span>
              </h2>
           </div>

           {/* SCALE VISUALIZATION */}
           <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px] w-full rounded-[60px] bg-[#222222] overflow-hidden shadow-2xl group mb-12"
           >
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                 <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#E0B100 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }} />
              </div>
              
              {/* Pulsing Network Map Concept */}
              <div className="absolute inset-0 flex items-center justify-center p-20">
                 <div className="relative w-full h-full max-w-4xl opacity-40">
                    {[
                      { t: '15%', l: '20%' }, { t: '35%', l: '65%' }, { t: '75%', l: '25%' }, 
                      { t: '55%', l: '85%' }, { t: '20%', l: '80%' }, { t: '80%', l: '60%' }
                    ].map((pos, i) => (
                      <motion.div 
                        key={i}
                        animate={{ scale: [1, 2, 1], opacity: [0.2, 0.5, 0.2] }}
                        transition={{ duration: 4, repeat: Infinity, delay: i * 0.7 }}
                        className="absolute w-6 h-6 bg-[#E0B100] rounded-full blur-md"
                        style={{ top: pos.t, left: pos.l }}
                      />
                    ))}
                    
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                       <motion.path 
                         d="M 100 150 Q 400 300 700 100 T 900 400" 
                         stroke="#E0B100" strokeWidth="1" fill="none" opacity="0.2"
                         initial={{ pathLength: 0 }}
                         whileInView={{ pathLength: 1 }}
                         transition={{ duration: 3, ease: "easeInOut" }}
                       />
                       <motion.path 
                         d="M 50 400 Q 300 100 600 500" 
                         stroke="#E0B100" strokeWidth="1" fill="none" opacity="0.2"
                         initial={{ pathLength: 0 }}
                         whileInView={{ pathLength: 1 }}
                         transition={{ duration: 4, ease: "easeInOut" }}
                       />
                    </svg>
                 </div>
              </div>

              {/* Central Value Card */}
              <div className="absolute bottom-8 left-8 right-8 md:left-auto md:right-12 md:bottom-12 md:w-[400px] bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-[48px] text-white">
                 <h3 className="text-3xl font-black mb-4">Network Resilience</h3>
                 <p className="text-white/50 text-sm leading-relaxed mb-8">
                    Our edge-computing infrastructure ensures that every school bus is monitored with sub-200ms latency, ensuring your data is always current and actionable.
                 </p>
                 <div className="flex items-center space-x-8">
                    <div>
                       <p className="text-3xl font-black text-[#E0B100]">200ms</p>
                       <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 mt-1">Avg. Latency</p>
                    </div>
                    <div className="w-[1px] h-12 bg-white/10" />
                    <div>
                       <p className="text-3xl font-black text-[#E0B100]">99.9%</p>
                       <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 mt-1">Uptime</p>
                    </div>
                 </div>
              </div>
           </motion.div>

           {/* CAPACITY & REACH METRICS */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white border border-[#E8E2D3] p-12 rounded-[50px] shadow-sm hover:shadow-2xl transition-all group"
              >
                 <div className="w-12 h-12 bg-[#FDF7E7] rounded-2xl flex items-center justify-center mb-8">
                    <ShieldCheck className="text-[#E0B100]" size={24} />
                 </div>
                 <div className="flex items-end justify-between">
                    <div>
                       <p className="text-[10px] font-black uppercase tracking-widest text-[#222222]/40 mb-2">Global Protection</p>
                       <p className="text-6xl font-black text-[#222222]">500k+</p>
                    </div>
                    <div className="hidden lg:block text-right">
                       <p className="text-xs font-bold text-[#666666] max-w-[150px]">Students protected daily across our growing global network.</p>
                    </div>
                 </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-[#E0B100] p-12 rounded-[50px] shadow-xl hover:shadow-[#E0B100]/30 transition-all"
              >
                 <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-8">
                    <Globe2 className="text-[#222222]" size={24} />
                 </div>
                 <div className="flex items-end justify-between">
                    <div>
                       <p className="text-[10px] font-black uppercase tracking-widest text-[#222222]/40 mb-2">Urban Velocity</p>
                       <p className="text-6xl font-black text-[#222222]">15+</p>
                    </div>
                    <div className="hidden lg:block text-right">
                       <p className="text-xs font-bold text-[#222222]/60 max-w-[150px]">Metropolitan hubs optimized with AI-driven route protocols.</p>
                    </div>
                 </div>
              </motion.div>
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
    </main>
  );
}
