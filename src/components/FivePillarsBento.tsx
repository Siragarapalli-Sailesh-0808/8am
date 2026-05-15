"use client";
import React from "react";
import { motion } from "framer-motion";
import { Shield, Truck, School, Zap, TrendingDown, Star } from "lucide-react";

const FivePillarsBento = () => {
  return (
    <section className="py-24 bg-[#F8F7F2] px-6">
      <div className="max-w-5xl mx-auto">
        <header className="mb-20 text-center">
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-4 py-2 rounded-full border border-[#E8E2D3] bg-white shadow-sm mb-6"
            >
                <Star size={12} className="text-[#E0B100] mr-2 fill-current" />
                <span className="text-[10px] font-black uppercase tracking-widest text-[#222222]">The Gold Standard of Student Safety</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black text-[#222222] tracking-tighter leading-[0.9]">
                Five Pillars <br />
                <span className="italic font-serif font-normal text-[#E0B100]">One Platform</span>
            </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 auto-rows-min md:auto-rows-[300px]">
          {/* Pillar 01: Parent Confidence (Large Feature) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 md:row-span-2 bg-white/40 backdrop-blur-xl border border-[#E8E2D3] rounded-[40px] p-8 md:p-12 relative overflow-hidden group shadow-lg"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
                <Shield size={300} className="text-[#E0B100]" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                    <div className="w-14 h-14 bg-[#E0B100] rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-[#E0B100]/20">
                        <Shield className="text-white" size={28} />
                    </div>
                    <h3 className="text-2xl md:text-4xl font-black text-[#222222] mb-6 leading-tight">
                        Parental Peace <br className="hidden md:block" />of Mind
                    </h3>
                    <p className="text-[#666666] text-sm md:text-base max-w-md leading-relaxed">
                        Real-time boarding notifications and precise ETA alerts ensure families are always connected to their child&apos;s journey with 100% visibility.
                    </p>
                </div>
                <div className="mt-12 md:mt-0 flex flex-wrap gap-4">
                    <div className="px-4 py-2 rounded-full bg-[#E0B100]/10 text-[#E0B100] text-[10px] font-bold uppercase tracking-widest">
                        Live Tracking
                    </div>
                    <div className="px-4 py-2 rounded-full bg-green-500/10 text-green-600 text-[10px] font-bold uppercase tracking-widest">
                        99.9% Reliability
                    </div>
                </div>
            </div>
          </motion.div>

          {/* Pillar 02: Driver Excellence */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-[#E8E2D3] rounded-[40px] p-8 md:p-10 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all"
          >
            <div className="w-12 h-12 bg-[#FDF7E7] rounded-xl flex items-center justify-center mb-6">
                <Truck className="text-[#E0B100]" size={24} />
            </div>
            <div>
                <h4 className="text-xl font-black text-[#222222] mb-4">Driver Mastery</h4>
                <p className="text-[#666666] text-sm leading-relaxed">
                    Guided navigation and safety compliance tools designed to empower road captains with zero-distraction workflows.
                </p>
            </div>
          </motion.div>

          {/* Pillar 03: School Operations */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ delay: 0.2 }}
            className="bg-white border border-[#E8E2D3] rounded-[40px] p-8 md:p-10 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all"
          >
            <div className="w-12 h-12 bg-[#FDF7E7] rounded-xl flex items-center justify-center mb-6">
                <School className="text-[#E0B100]" size={24} />
            </div>
            <div>
                <h4 className="text-xl font-black text-[#222222] mb-4">Institution Ops</h4>
                <p className="text-[#666666] text-sm leading-relaxed">
                    A unified command center to manage entire fleets, student rosters, and administrative schedules with surgical precision.
                </p>
            </div>
          </motion.div>

          {/* Pillar 04: Real-time Intelligence */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-1 bg-white border border-[#E8E2D3] rounded-[40px] p-8 md:p-10 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 bg-[#FDF7E7] rounded-xl flex items-center justify-center">
                    <Zap className="text-[#E0B100]" size={24} />
                </div>
                <div className="flex items-end space-x-1 h-8">
                    {[30, 50, 40, 70, 90, 60, 80].map((h, i) => (
                        <div key={i} className="w-1 bg-[#E0B100]/20 rounded-full h-full relative overflow-hidden">
                            <motion.div 
                                initial={{ height: 0 }}
                                whileInView={{ height: `${h}%` }}
                                transition={{ delay: 0.5 + (i * 0.1), duration: 1 }}
                                className="absolute bottom-0 w-full bg-[#E0B100]"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h4 className="text-xl font-black text-[#222222] mb-4">8AM Intelligence</h4>
                <p className="text-[#666666] text-sm leading-relaxed">
                    Predictive AI analytics that foresee traffic bottlenecks and optimize routes before the bus even leaves the yard.
                </p>
            </div>
          </motion.div>

          {/* Pillar 05: Cost Optimization */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 bg-[#222222] rounded-[40px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden"
          >
            <div className="relative z-10 mb-12 md:mb-0">
                <div className="w-12 h-12 bg-[#E0B100] rounded-xl flex items-center justify-center mb-6">
                    <TrendingDown className="text-[#222222]" size={24} />
                </div>
                <h4 className="text-2xl font-black text-white mb-4">Cost Efficiency</h4>
                <p className="text-white/60 text-sm max-w-sm">
                    Reduce operational overhead by up to 25% with automated scheduling and fuel-saving route algorithms.
                </p>
            </div>
            
            <div className="relative z-10 flex items-center space-x-8">
                <div className="text-center">
                    <p className="text-4xl font-black text-[#E0B100]">25%</p>
                    <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mt-2">Operational Save</p>
                </div>
                <div className="w-[1px] h-12 bg-white/10" />
                <div className="text-center">
                    <p className="text-4xl font-black text-[#E0B100]">15m</p>
                    <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mt-2">Avg Save/Route</p>
                </div>
            </div>
            
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#E0B100]/10 rounded-full blur-[100px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FivePillarsBento;
