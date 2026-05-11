"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Globe, Activity } from "lucide-react";

const InstitutionalVault = () => {
  return (
    <section className="py-40 bg-[var(--background)] relative overflow-hidden px-6">
      {/* 1. AMBIENT GLOW & TEXTURE */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1),transparent)] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="vaultGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#FFD700" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#vaultGrid)" />
        </svg>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* LEFT CONTENT: THE STANDARDS */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-[var(--color-primary)] font-black tracking-[0.4em] uppercase text-xs mb-6 block">Operational Excellence</span>
            <h2 className="text-6xl md:text-8xl font-black text-[var(--foreground)] mb-12 leading-[0.9] tracking-tighter">
              Zero-Risk <br />
              <span className="italic font-serif font-normal text-[var(--color-primary)]">Standards.</span>
            </h2>

            <div className="space-y-8">
              {[
                "Government-mandated GPS compliance",
                "Advanced Biometric Verification",
                "Emergency Panic Response protocols",
                "Automated Maintenance Schedules"
              ].map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-6 h-6 rounded-full bg-[#FFD700]/20 flex items-center justify-center text-[var(--color-primary)]">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-[var(--foreground)] opacity-80 font-bold tracking-tight">{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT CONTENT: THE GLASS CARDS */}
          <div className="relative">
            {/* Large Watermark Text */}
            <div className="absolute -top-20 -right-20 text-[200px] font-black text-white/5 pointer-events-none select-none">
              VLT
            </div>

            <div className="grid gap-6">
              <div className="flex gap-6">
                <motion.div
                  whileHover={{ y: -10, rotateX: 5 }}
                  className="flex-1 bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-[40px] shadow-2xl relative overflow-hidden group"
                >
                  <Activity className="text-[var(--color-primary)] mb-6" size={32} />
                  <p className="text-5xl font-black text-[var(--foreground)] mb-2">99%</p>
                  <p className="text-[10px] font-black text-[var(--color-primary)] uppercase tracking-widest">Accuracy Rate</p>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>

                <motion.div
                  whileHover={{ y: -10, rotateX: -5 }}
                  className="flex-1 bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-[40px] shadow-2xl relative overflow-hidden group"
                >
                  <Globe className="text-[var(--color-primary)] mb-6" size={32} />
                  <p className="text-5xl font-black text-[var(--foreground)] mb-2">500+</p>
                  <p className="text-[10px] font-black text-[var(--color-primary)] uppercase tracking-widest">School Partners</p>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              </div>

              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="w-full bg-gradient-to-r from-[#FFD700]/10 to-transparent backdrop-blur-2xl border border-[#FFD700]/20 p-12 rounded-[40px] shadow-2xl relative overflow-hidden group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-6xl font-black text-[var(--color-primary)] italic font-serif mb-2">Instant</p>
                    <p className="text-[10px] font-black text-[var(--foreground)] uppercase tracking-widest opacity-60">Crisis Response Hub</p>
                  </div>
                  <ShieldCheck className="text-[var(--color-primary)]/20" size={80} />
                </div>
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#FFD700]/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Light Leak */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[#FFD700]/10 to-transparent pointer-events-none" />
    </section>
  );
};

export default InstitutionalVault;
