"use client";
import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, BarChart3 } from "lucide-react";

export default function DistrictEfficiency() {
  return (
    <section className="py-24 md:py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* LEFT CONTENT */}
          <div className="order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-widest mb-8">
                Efficiency
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-[#222222] leading-[0.9] tracking-tighter mb-10">
                Institutions do <br />
                more <span className="headline-italic text-[#E0B100]">with less</span>
              </h2>
              <div className="space-y-6 max-w-lg">
                <p className="text-base md:text-lg text-[#222222]/70 font-medium leading-relaxed">
                  School districts gain tremendous efficiencies with the unified 8AM platform. Routes are designed and optimized to ensure commute times for students are reduced.
                </p>
                <p className="text-base md:text-lg text-[#222222]/70 font-medium leading-relaxed">
                  Fewer buses are on the road without sacrificing coverage and the right size of vehicles are being used. 8AM connects people, vehicles, and data in real-time to provide total operational mastery.
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="order-2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              {/* Main Image with Yellow Backdrop */}
              <div className="absolute -inset-4 bg-[#E0B100] rounded-[40px] opacity-10 -rotate-2" />
              <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="/indian_admin.png" 
                  alt="Indian school administrator managing logistics" 
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating UI Card: Fuel Savings */}
              <motion.div
                initial={{ opacity: 0, y: 20, x: 20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -top-10 -right-4 md:-right-10 bg-white p-4 md:p-6 rounded-2xl shadow-2xl border border-gray-100 flex items-center space-x-4 z-20"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <p className="text-xs font-black text-[#222222]">25% Fuel Saved</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase">AI-Route Optimization</p>
                </div>
              </motion.div>

              {/* Floating UI Card: Fleet Mastery */}
              <motion.div
                initial={{ opacity: 0, y: -20, x: -20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="absolute -bottom-6 -left-4 md:-left-10 bg-white p-4 md:p-6 rounded-2xl shadow-2xl border border-gray-100 flex items-center space-x-4 z-20"
              >
                <div className="w-12 h-12 bg-[#FDF7E7] rounded-full flex items-center justify-center text-[#E0B100]">
                  <BarChart3 size={24} />
                </div>
                <div>
                  <p className="text-xs font-black text-[#222222]">Unified Command</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase">Real-time Decision Hub</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
