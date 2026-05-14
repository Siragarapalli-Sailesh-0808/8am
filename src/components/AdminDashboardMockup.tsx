"use client";
import React from "react";
import { motion } from "framer-motion";

const AdminDashboardMockup = () => {
  return (
    <div className="w-full max-w-[1000px] mx-auto group">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative aspect-[16/10] w-full rounded-[40px] overflow-hidden shadow-[0_50px_120px_-30px_rgba(0,0,0,0.25)] border border-white/50"
      >
        <img 
          src="/admin_panel.png" 
          alt="8AM Professional Admin Dashboard" 
          className="w-full h-full object-cover"
        />
        
        {/* Subtle Glassmorphism Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#222222]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      </motion.div>

      {/* Caption for the "Perfect" UI */}
      <div className="mt-8 flex items-center justify-center space-x-4">
        <div className="h-[1px] w-12 bg-gray-200" />
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Standard Enterprise Interface</p>
        <div className="h-[1px] w-12 bg-gray-200" />
      </div>
    </div>
  );
};

export default AdminDashboardMockup;
