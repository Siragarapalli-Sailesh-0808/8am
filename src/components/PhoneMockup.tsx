"use client";
import React from "react";
import { motion } from "framer-motion";

const PhoneMockup = () => {
  return (
    <div className="relative w-full max-w-[320px] aspect-[9/19] mx-auto">
      {/* Premium Video Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative h-full w-full bg-[#F8F7F2] rounded-[40px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] border-4 border-white/50"
      >
        <video 
          src="/portal_preview.mp4"
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Subtle Inner Glow */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_80px_rgba(0,0,0,0.05)]" />
      </motion.div>
    </div>
  );
};

export default PhoneMockup;
