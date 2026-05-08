"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import ScrollingTicker from "@/components/ScrollingTicker";
import StickyHeader from "@/components/StickyHeader";
import FinalCTA from "@/components/FinalCTA";
import EmotionalCarousel from "@/components/EmotionalCarousel";
import { Shield, LayoutDashboard, BellRing, Users2, ArrowRight, Zap, Map as MapIcon, Activity } from "lucide-react";

// LUXURY PALETTE (80L Budget Aesthetic)
const LuxuryNavy = "#050A30"; 
const PureGold = "#FFD700";
const GlassWhite = "rgba(255, 255, 255, 0.7)";

const LuxuryConsole = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full aspect-[16/10] bg-white/10 backdrop-blur-2xl rounded-[40px] border border-white/20 shadow-[0_50px_100px_-20px_rgba(5,10,48,0.3)] overflow-hidden"
    >
      {/* Glossy Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
      
      {/* UI Elements */}
      <div className="h-full w-full flex flex-col p-8">
        <div className="flex items-center justify-between mb-8">
           <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#FF4B4B]" />
              <div className="w-3 h-3 rounded-full bg-[#FFD700]" />
              <div className="w-3 h-3 rounded-full bg-[#28C76F]" />
           </div>
           <div className="text-[10px] font-black tracking-[0.3em] text-white/40 uppercase">SafeHop Enterprise v4.0</div>
        </div>

        <div className="flex-1 grid grid-cols-4 gap-6">
           {/* Sidebar */}
           <div className="col-span-1 space-y-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="h-10 bg-white/5 rounded-xl border border-white/10" />
              ))}
           </div>
           {/* Main Map View */}
           <div className="col-span-3 bg-white/5 rounded-3xl border border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                 <svg width="100%" height="100%">
                    <pattern id="luxuryGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                       <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#luxuryGrid)" />
                 </svg>
              </div>
              <motion.div 
                animate={{ 
                  x: [0, 100, 50, 0], 
                  y: [0, 50, -50, 0] 
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                 <div className="w-32 h-32 bg-[#FFD700]/20 rounded-full blur-3xl animate-pulse" />
                 <MapIcon className="text-[#FFD700] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size={32} />
              </motion.div>
           </div>
        </div>

        {/* Bottom Status Bar */}
        <div className="mt-8 flex items-center space-x-6">
           <div className="flex items-center space-x-3 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <Activity className="text-[#FFD700]" size={14} />
              <span className="text-[10px] font-bold text-white/60">SYSTEM HEALTH: OPTIMAL</span>
           </div>
           <div className="flex-1 h-[1px] bg-white/10" />
           <div className="text-[10px] font-black text-[#FFD700]">LIVE MONITORING ACTIVE</div>
        </div>
      </div>
    </motion.div>
  );
};

const SignatureBento = ({ title, value, label, icon: Icon, className, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1, delay }}
    whileHover={{ y: -10, boxShadow: "0 40px 80px -20px rgba(5,10,48,0.2)" }}
    className={`bg-white rounded-[48px] p-12 border border-gray-100 flex flex-col justify-between group transition-all duration-700 relative overflow-hidden ${className}`}
  >
    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
       <Icon size={120} />
    </div>
    
    <div>
      <div className="w-16 h-16 bg-[#FFD700]/10 rounded-[20px] flex items-center justify-center text-[#FFD700] mb-10 group-hover:bg-[#FFD700] group-hover:text-white transition-all duration-500 shadow-xl shadow-transparent group-hover:shadow-[#FFD700]/30">
        <Icon size={32} />
      </div>
      <h3 className="text-sm font-black uppercase tracking-[0.3em] text-gray-300 mb-4">{label}</h3>
      <h2 className="text-4xl font-black mb-6 leading-tight" style={{ color: LuxuryNavy }}>{title}</h2>
    </div>

    <div className="flex items-baseline space-x-2">
       <span className="text-6xl font-serif italic text-[#FFD700]">{value}</span>
       <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Global Index</span>
    </div>
  </motion.div>
);

export default function SchoolsPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <main ref={containerRef} className="bg-white min-h-screen font-sans overflow-x-hidden selection:bg-[#FFD700] selection:text-white">
      <ScrollingTicker />
      <StickyHeader />

      {/* 1. THE SIGNATURE HERO (80L Aesthetic) */}
      <section className="relative min-h-screen flex items-center pt-24 pb-32 overflow-hidden bg-[#050A30]">
        {/* Abstract Golden Mesh Background */}
        <div className="absolute inset-0 z-0">
           <motion.div 
             style={{ y: bgY }}
             className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#FFD700]/10 rounded-full blur-[150px]" 
           />
           <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#FFD700]/5 rounded-full blur-[120px]" />
           <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,215,0,0.1) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-24 grid lg:grid-cols-2 gap-24 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 px-6 py-2 rounded-full mb-10 backdrop-blur-md"
            >
               <Zap size={14} className="text-[#FFD700]" />
               <span className="text-[10px] font-black text-white/60 uppercase tracking-[0.3em]">Tier-1 Institutional Protocol</span>
            </motion.div>
            
            <h1 className="text-7xl md:text-[120px] font-black text-white leading-[0.85] tracking-tighter mb-12">
              Engineering <br />
              <span className="italic font-serif text-[#FFD700] font-normal">Absolute Trust.</span>
            </h1>
            
            <p className="text-xl text-white/50 max-w-lg mb-16 font-medium leading-relaxed">
              The world's most advanced mobility infrastructure for elite educational institutions. Precision auditing, real-time command, and biometric safety standards.
            </p>

            <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-10">
               <motion.button
                 whileHover={{ scale: 1.05, y: -5 }}
                 whileTap={{ scale: 0.95 }}
                 className="w-full sm:w-auto bg-[#FFD700] text-[#050A30] px-16 py-7 rounded-[24px] font-black text-lg shadow-[0_25px_60px_-15px_rgba(255,215,0,0.4)] hover:shadow-[0_30px_70px_-15px_rgba(255,215,0,0.5)] transition-all"
               >
                 Request Integration
               </motion.button>
               <button className="text-white/60 font-black text-sm border-b border-white/20 pb-1 hover:text-[#FFD700] hover:border-[#FFD700] transition-all">
                 Explore the Infrastructure
               </button>
            </div>
          </motion.div>

          <div className="relative">
             <LuxuryConsole />
             
             {/* Floating Data Badge */}
             <motion.div 
               animate={{ y: [0, -15, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -right-12 -top-12 bg-white p-10 rounded-[40px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] z-20 border border-gray-50"
             >
                <div className="text-5xl font-black text-[#050A30]">99.9%</div>
                <div className="text-[10px] font-black uppercase text-[#FFD700] tracking-widest mt-2">Precision Uptime</div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* 2. THE SIGNATURE BENTO GRID */}
      <section className="py-40 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-32 text-center">
             <span className="text-[#FFD700] font-black tracking-[0.5em] uppercase text-xs mb-6 block">The Tech Architecture</span>
             <h2 className="text-6xl md:text-[100px] font-black leading-[0.9] tracking-tighter" style={{ color: LuxuryNavy }}>
               Institutional <br />
               <span className="italic font-serif text-[#FFD700]">Intelligence.</span>
             </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <SignatureBento 
               label="Security Layer"
               title="Automated Multi-Point RFID Auditing"
               value="100%"
               icon={Shield}
               className="md:col-span-2"
               delay={0.1}
             />
             <SignatureBento 
               label="Command Center"
               title="Real-Time Fleet Visualization"
               value="0.2s"
               icon={LayoutDashboard}
               delay={0.2}
             />
             <SignatureBento 
               label="Communication"
               title="Predictive Emergency Broadcasts"
               value="AI"
               icon={BellRing}
               delay={0.3}
             />
             <SignatureBento 
               label="Community"
               title="Verified Parent Trust Portal"
               value="4.9/5"
               icon={Users2}
               className="md:col-span-2"
               delay={0.4}
             />
          </div>
        </div>
      </section>

      {/* 3. ULTRA-PREMIUM TESTIMONIAL WRAPPER */}
      <section className="bg-gray-50 py-40">
         <div className="container mx-auto px-6">
            <div className="bg-[#050A30] rounded-[64px] p-12 md:p-32 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFD700]/5 rounded-full blur-[100px] -z-0" />
               
               <div className="relative z-10 max-w-4xl">
                  <span className="text-[#FFD700] text-9xl font-serif italic mb-12 block">"</span>
                  <h2 className="text-4xl md:text-6xl font-medium text-white leading-tight mb-16 italic font-serif">
                    SAFEHOP has fundamentally transformed our school's safety culture. The level of <span className="text-[#FFD700]">visibility and accountability</span> is now the benchmark for our institution.
                  </h2>
                  <div className="flex items-center space-x-6">
                     <div className="w-20 h-1 bg-[#FFD700]" />
                     <p className="text-xl font-black text-white uppercase tracking-[0.3em]">Principal, Oakridge International</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <EmotionalCarousel />
      <FinalCTA />
    </main>
  );
}
