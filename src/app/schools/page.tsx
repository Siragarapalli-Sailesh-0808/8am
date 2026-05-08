"use client";
import React from "react";
import ScrollingTicker from "@/components/ScrollingTicker";
import StickyHeader from "@/components/StickyHeader";
import StatsBento from "@/components/StatsBento";
import FinalCTA from "@/components/FinalCTA";
import AdminDashboardMockup from "@/components/AdminDashboardMockup";
import { motion } from "framer-motion";
import { Shield, BarChart3, Users, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

export default function SchoolsPage() {
  return (
    <main className="w-full bg-white text-[#3B2F00]">
      <ScrollingTicker />
      <StickyHeader />

      {/* 1. INSTITUTIONAL HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 md:px-24 overflow-hidden">
        <div className="container mx-auto max-w-7xl relative z-10 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#FFD700]/10 text-[#3B2F00] px-6 py-2 rounded-full w-max text-xs font-black mb-8 border border-[#FFD700] tracking-[0.3em] uppercase"
            >
              School Administration Portal
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8 text-[#3B2F00]">
              The Gold Standard <br />
              of <span className="italic font-serif text-[#FFD700] font-normal">Safety.</span>
            </h1>
            <p className="text-xl text-[#3B2F00]/60 max-w-xl mb-12 font-medium leading-relaxed">
              Empower your institution with end-to-end fleet visibility and student accountability. SAFEHOP is the preferred partner for 500+ elite schools across India.
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,215,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-[#FFD700] text-[#3B2F00] px-12 py-6 rounded-full font-black flex items-center justify-center space-x-3 transition-all"
              >
                <span>Partner with SAFEHOP</span>
                <ArrowRight size={22} />
              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <AdminDashboardMockup />
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#FFD700]/5 rounded-full blur-[100px]" />
          </motion.div>
        </div>
      </section>

      {/* 2. INSTITUTIONAL STANDARDS (FEATURE GRID) */}
      <section className="py-32 bg-[#FDFDFD]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-[#FFD700] font-black tracking-[0.4em] uppercase text-xs mb-4 block">Institutional Compliance</span>
            <h2 className="text-5xl md:text-7xl font-black text-[#3B2F00]">Built for <span className="italic font-serif font-normal text-[#FFD700]">Principals.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Shield,
                title: "100% Accountability",
                desc: "Every boarding and de-boarding event is logged with millisecond precision via smart RFID sensors."
              },
              {
                icon: BarChart3,
                title: "Live Fleet Audit",
                desc: "Real-time route adherence monitoring with automated anomaly detection for school staff."
              },
              {
                icon: Users,
                title: "Parent Concierge",
                desc: "Integrated portal for direct, transparent communication between school transport and parents."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-12 rounded-[40px] border border-gray-50 shadow-sm hover:shadow-xl transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-[#FFD700]/10 rounded-2xl flex items-center justify-center text-[#FFD700] mb-8 group-hover:scale-110 group-hover:bg-[#FFD700] group-hover:text-[#3B2F00] transition-all">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-2xl font-black text-[#3B2F00] mb-4">{feature.title}</h3>
                <p className="text-[#3B2F00]/50 font-medium leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRECISION COMPLIANCE SECTION */}
      <section className="py-32 bg-[#3B2F00] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center relative z-10">
          <div>
            <span className="text-[#FFD700] font-black tracking-[0.4em] uppercase text-xs mb-4 block">Operational Excellence</span>
            <h2 className="text-5xl md:text-7xl font-black leading-tight mb-8">
              Zero-Risk <br />
              <span className="italic font-serif text-[#FFD700]">Standards.</span>
            </h2>
            <div className="space-y-6">
              {[
                "Government-mandated GPS compliance",
                "Advanced Biometric Verification",
                "Emergency Panic Response protocols",
                "Automated Maintenance Schedules"
              ].map((text, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <CheckCircle2 className="text-[#FFD700]" size={24} />
                  <span className="text-xl font-bold">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
             <div className="p-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] text-center">
                <h4 className="text-6xl font-serif italic text-[#FFD700] mb-2">99%</h4>
                <p className="text-xs font-black uppercase tracking-widest opacity-40">Accuracy Rate</p>
             </div>
             <div className="p-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] text-center">
                <h4 className="text-6xl font-serif italic text-[#FFD700] mb-2">500+</h4>
                <p className="text-xs font-black uppercase tracking-widest opacity-40">School Partners</p>
             </div>
             <div className="p-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] text-center col-span-2">
                <h4 className="text-6xl font-serif italic text-[#FFD700] mb-2">Instant</h4>
                <p className="text-xs font-black uppercase tracking-widest opacity-40">Crisis Alerts</p>
             </div>
          </div>
        </div>
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FFD700]/5 -z-10" style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 0 100%)' }} />
      </section>

      <StatsBento />
      <FinalCTA />
    </main>
  );
}
