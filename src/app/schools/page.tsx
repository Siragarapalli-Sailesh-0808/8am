"use client";
import React from "react";
import ScrollingTicker from "@/components/ScrollingTicker";
import StickyHeader from "@/components/StickyHeader";
import StatsBento from "@/components/StatsBento";
import FinalCTA from "@/components/FinalCTA";
import AdminDashboardMockup from "../../components/AdminDashboardMockup";
import { motion } from "framer-motion";
import { Shield, BarChart3, Users, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import InstitutionalVault from "@/components/InstitutionalVault";
import Footer from "@/components/Footer";

export default function SchoolsPage() {
  return (
    <main className="w-full bg-[var(--background)] text-[var(--foreground)]">
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
              className="bg-[#E0B100]/10 text-[var(--foreground)] px-6 py-2 rounded-full w-max text-xs font-black mb-8 border border-[#E0B100] tracking-[0.3em] uppercase"
            >
              School Administration Portal
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8 text-[var(--foreground)]">
              The Gold Standard <br />
              of <span className="italic font-serif text-[#E0B100] font-normal">Safety.</span>
            </h1>
            <p className="text-xl text-[var(--foreground)]/60 max-w-xl mb-12 font-medium leading-relaxed">
              Empower your institution with end-to-end fleet visibility and student accountability. 8AM is the preferred partner for 500+ elite schools across India.
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,215,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-[#E0B100] text-[var(--card-bg)] px-12 py-6 rounded-full font-black flex items-center justify-center space-x-3 transition-all shadow-[0_12px_28px_rgba(255,215,0,0.35)]"
              >
                <span>Partner with 8AM</span>
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
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#E0B100]/5 rounded-full blur-[100px]" />
          </motion.div>
        </div>
      </section>

      {/* 2. INSTITUTIONAL STANDARDS (IMMERSIVE VAULT) */}
      <InstitutionalVault />

      <StatsBento />
      <FinalCTA />
      <Footer />
    </main>
  );
}
