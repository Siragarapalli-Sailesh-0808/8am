"use client";
import React from "react";
import { motion } from "framer-motion";
import { Bell, ShieldCheck } from "lucide-react";

export default function FamilyConfidence() {
  return (
    <section className="py-20 md:py-32 bg-[#F8F7F2] overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* LEFT VISUAL (IMAGE ON LEFT FOR THIS SECTION) */}
          <div className="order-2 lg:order-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              {/* Main Image with Yellow Backdrop */}
              <div className="absolute -inset-4 bg-[#E0B100] rounded-[40px] opacity-10 rotate-2" />
              <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="/indian_mother.png" 
                  alt="Indian mother confident with 8AM app" 
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating UI Card: Real-time Alert */}
              <motion.div
                initial={{ opacity: 0, y: 20, x: -20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -top-10 -left-4 md:-left-10 bg-white p-4 md:p-6 rounded-2xl shadow-2xl border border-gray-100 flex items-center space-x-4 z-20"
              >
                <div className="w-12 h-12 bg-[#E0B100]/10 rounded-full flex items-center justify-center text-[#E0B100]">
                  <Bell size={24} />
                </div>
                <div>
                  <p className="text-xs font-black text-[#222222]">Bus 04: Arrived</p>
                  <p className="text-[10px] font-bold text-green-600 uppercase">Secure Arrival Confirmed</p>
                </div>
              </motion.div>

              {/* Floating UI Card: Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20, x: 20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="absolute -bottom-6 -right-4 md:-right-10 bg-white p-4 md:p-6 rounded-2xl shadow-2xl border border-gray-100 flex items-center space-x-4 z-20"
              >
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-white">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-xs font-black text-[#222222]">100% Transparency</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase">DPDP Compliant</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#E0B100]/10 text-[#E0B100] text-[10px] font-black uppercase tracking-widest mb-6">
                Transparency
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-[#222222] leading-[0.9] tracking-tighter mb-8">
                Families gain <span className="headline-italic text-[#E0B100]">trust</span> <br />
                and <span className="headline-italic text-[#E0B100]">confidence</span>
              </h2>
              <div className="space-y-4 max-w-md">
                <p className="text-sm md:text-base text-[#222222]/70 font-medium leading-relaxed">
                  Students and families get a consistent, transparent experience that provides safety across every ride.
                </p>
                <p className="text-sm md:text-base text-[#222222]/70 font-medium leading-relaxed">
                  Parents and caregivers receive real-time, role-appropriate visibility into where their children are. They also receive proactive communication of changes, delays, and issue resolutions.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
