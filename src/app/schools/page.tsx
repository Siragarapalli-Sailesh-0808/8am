"use client";
import React from "react";
import ScrollingTicker from "@/components/ScrollingTicker";
import StickyHeader from "@/components/StickyHeader";
import StatsBento from "@/components/StatsBento";
import FinalCTA from "@/components/FinalCTA";
import { motion } from "framer-motion";
import { Shield, BarChart3, Users, Clock } from "lucide-react";

export default function SchoolsPage() {
  return (
    <main className="w-full bg-[#FDFDFD]">
      <ScrollingTicker />
      <StickyHeader />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 md:px-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.4] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="schoolGrid" width="120" height="120" patternUnits="userSpaceOnUse">
                <path d="M 120 0 L 0 0 0 120" fill="none" stroke="#E5E7EB" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#schoolGrid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <span className="text-[#FFD700] font-bold tracking-[0.4em] uppercase text-xs mb-6 block">For Administrators</span>
            <h1 className="text-5xl md:text-8xl font-black text-[#2D2D2D] leading-[1] mb-8">
              Complete Fleet <br />
              <span className="italic font-serif text-[#FFD700]">Intelligence.</span>
            </h1>
            <p className="text-xl text-[#2D2D2D]/70 max-w-2xl leading-relaxed font-medium">
              Transform your school's transportation from a logistical hurdle into a precision-engineered safety standard. Real-time dashboards for the modern principal.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-[48px] p-12 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-gray-50"
            >
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-[#FFD700]/10 rounded-2xl flex items-center justify-center text-[#FFD700]">
                    <BarChart3 size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#2D2D2D]">Live Analytics</h3>
                  <p className="text-sm text-[#2D2D2D]/60 font-medium">Monitor every bus, route, and student tap in real-time.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-[#FFD700]/10 rounded-2xl flex items-center justify-center text-[#FFD700]">
                    <Shield size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#2D2D2D]">Safety Audits</h3>
                  <p className="text-sm text-[#2D2D2D]/60 font-medium">Automated logs for every boarding and departure.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-[#FFD700]/10 rounded-2xl flex items-center justify-center text-[#FFD700]">
                    <Clock size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#2D2D2D]">Route Optimization</h3>
                  <p className="text-sm text-[#2D2D2D]/60 font-medium">Reduce fuel costs by up to 25% with AI routing.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-[#FFD700]/10 rounded-2xl flex items-center justify-center text-[#FFD700]">
                    <Users size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#2D2D2D]">Parent Trust</h3>
                  *   Integrated dashboards for seamless parent communication.
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-[#FFD700]/20 rounded-[64px] rotate-6" />
              <div className="absolute inset-0 bg-white rounded-[64px] shadow-2xl overflow-hidden border border-gray-100 p-8 flex flex-col justify-center items-center text-center">
                 <h2 className="text-9xl font-serif italic text-[#FFD700] mb-4">99%</h2>
                 <p className="text-2xl font-bold text-[#2D2D2D]">On-Time Accuracy</p>
                 <p className="text-[#2D2D2D]/40 uppercase tracking-widest text-xs mt-4">Verified by 500+ Schools</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <StatsBento />
      <FinalCTA />
    </main>
  );
}
