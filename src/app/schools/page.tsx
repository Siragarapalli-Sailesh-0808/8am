"use client";
import React from "react";
import { motion } from "framer-motion";
import ScrollingTicker from "@/components/ScrollingTicker";
import StickyHeader from "@/components/StickyHeader";
import FinalCTA from "@/components/FinalCTA";
import EmotionalCarousel from "@/components/EmotionalCarousel";
import { Shield, LayoutDashboard, BellRing, Users2, ArrowRight, CheckCircle2 } from "lucide-react";

const DeepBronze = "#3D2B1F";
const GoldenYellow = "#FFD700";

const SchoolFeature = ({ icon: Icon, title, desc, delay = 0 }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className="p-10 bg-white border border-gray-100 rounded-[40px] hover:border-[#FFD700] hover:shadow-2xl hover:shadow-[#FFD700]/10 transition-all duration-500 group"
  >
    <div className="w-16 h-16 bg-[#FFD700]/10 rounded-2xl flex items-center justify-center text-[#FFD700] mb-8 group-hover:scale-110 transition-transform duration-500">
      <Icon size={32} />
    </div>
    <h3 className="text-2xl font-black mb-4" style={{ color: DeepBronze }}>{title}</h3>
    <p className="text-gray-500 font-medium leading-relaxed">{desc}</p>
  </motion.div>
);

export default function SchoolsPage() {
  return (
    <main className="bg-white min-h-screen font-sans overflow-x-hidden">
      <ScrollingTicker />
      <StickyHeader />

      {/* 1. INSTITUTIONAL HERO */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-[#FFD700] font-black tracking-[0.4em] uppercase text-xs mb-8 block">Academic Excellence</span>
            <h1 className="text-6xl md:text-[110px] font-black leading-[0.85] tracking-tighter mb-10" style={{ color: DeepBronze }}>
              The Standard <br />
              of <span className="italic font-serif text-[#FFD700] font-normal">Student Safety.</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-xl mb-12 font-medium leading-relaxed">
              Empowering administrators with precision tools to monitor, manage, and master school transit. Secure your campus mobility with absolute certainty.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,215,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 bg-[#FFD700] text-white font-black rounded-full flex items-center justify-center space-x-3 transition-all"
                style={{ color: DeepBronze }}
              >
                <span>Request Partnership</span>
                <ArrowRight size={22} />
              </motion.button>
              <button className="font-black text-sm border-b-2 pb-1 transition-all" style={{ color: DeepBronze, borderColor: DeepBronze }}>
                Institutional Case Studies
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
             {/* Admin Dashboard Mockup */}
             <div className="bg-white p-4 rounded-[40px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-gray-100 relative z-10">
                <div className="bg-gray-50 rounded-[32px] overflow-hidden border border-gray-100 aspect-video flex flex-col">
                   <div className="h-10 bg-white border-b border-gray-100 flex items-center px-4 space-x-2">
                      <div className="w-2 h-2 rounded-full bg-red-400" />
                      <div className="w-2 h-2 rounded-full bg-yellow-400" />
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      <div className="flex-1" />
                      <div className="text-[10px] font-bold text-gray-300">ADMIN CONSOLE</div>
                   </div>
                   <div className="flex-1 p-6 grid grid-cols-3 gap-4">
                      <div className="col-span-2 bg-white rounded-2xl shadow-sm p-4 relative overflow-hidden">
                         <div className="absolute inset-0 opacity-5">
                            <svg width="100%" height="100%">
                               <pattern id="schoolGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke={DeepBronze} strokeWidth="1" />
                               </pattern>
                               <rect width="100%" height="100%" fill="url(#schoolGrid)" />
                            </svg>
                         </div>
                         <div className="relative z-10">
                            <div className="flex items-center justify-between mb-4">
                               <div className="text-[10px] font-black uppercase text-[#FFD700]">Live Fleet View</div>
                               <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                            </div>
                            <div className="h-24 w-full border-2 border-dashed border-[#FFD700]/20 rounded-xl flex items-center justify-center">
                               <LayoutDashboard className="text-[#FFD700]/20" size={48} />
                            </div>
                         </div>
                      </div>
                      <div className="bg-white rounded-2xl shadow-sm p-4">
                         <div className="text-[10px] font-black uppercase text-[#FFD700] mb-4">Alerts</div>
                         <div className="space-y-3">
                            {[1, 2, 3].map(i => (
                               <div key={i} className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                  <motion.div animate={{ x: ["-100%", "100%"] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }} className="h-full w-1/3 bg-[#FFD700]" />
                               </div>
                            ))}
                         </div>
                      </div>
                   </div>
                </div>
             </div>
             
             {/* Floating Trust Badge */}
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity }}
               className="absolute -right-8 -bottom-8 bg-[#FFD700] p-8 rounded-[40px] shadow-2xl z-20 text-center"
               style={{ color: DeepBronze }}
             >
                <div className="text-4xl font-black">99.9%</div>
                <div className="text-[10px] font-black uppercase tracking-widest">Uptime Precision</div>
             </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE INTELLIGENCE GRID */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#FDFDFD]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 text-center lg:text-left">
             <h2 className="text-5xl md:text-8xl font-black leading-[0.9]" style={{ color: DeepBronze }}>
               The Core <br />
               <span className="italic font-serif text-[#FFD700]">Intelligence.</span>
             </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SchoolFeature 
              icon={Shield} 
              title="Automated RFID Audits" 
              desc="Forget manual registers. Every student boarding and exit is logged with millisecond precision, creating a transparent audit trail."
              delay={0.1}
            />
            <SchoolFeature 
              icon={LayoutDashboard} 
              title="Centralized Command" 
              desc="One dashboard to rule them all. Monitor your entire fleet, student attendance, and driver behavior from a single pane of glass."
              delay={0.2}
            />
            <SchoolFeature 
              icon={BellRing} 
              title="Proactive Alerts" 
              desc="Automated emergency broadcasts and parent notifications for delays, ensuring zero-stress communication."
              delay={0.3}
            />
            <SchoolFeature 
              icon={Users2} 
              title="Parent Trust Portal" 
              desc="Build ultimate trust with parents by providing them with the real-time visibility they demand for their children's safety."
              delay={0.4}
            />
            <SchoolFeature 
              icon={CheckCircle2} 
              title="Compliance Ready" 
              desc="Maintain 100% compliance with local safety regulations through automated record-keeping and instant reporting."
              delay={0.5}
            />
            <SchoolFeature 
              icon={LayoutDashboard} 
              title="Predictive ETA" 
              desc="AI-driven arrival times that account for traffic, weather, and school gate congestion for perfect coordination."
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* 3. BIG QUOTE SECTION */}
      <section className="py-32 bg-white relative overflow-hidden">
         <div className="max-w-5xl mx-auto px-6 text-center">
            <span className="text-7xl font-serif text-[#FFD700] mb-8 block">"</span>
            <h2 className="text-4xl md:text-6xl font-medium leading-tight mb-12" style={{ color: DeepBronze }}>
              SAFEHOP isn't just software; it's the foundation of our <span className="italic font-serif text-[#FFD700]">safety culture.</span> We now operate with a level of visibility we never thought possible.
            </h2>
            <div className="w-20 h-1 bg-[#FFD700] mx-auto mb-6" />
            <p className="text-xl font-black uppercase tracking-[0.2em]" style={{ color: DeepBronze }}>Principal, Oakridge International</p>
         </div>
      </section>

      <EmotionalCarousel />
      <FinalCTA />
    </main>
  );
}
