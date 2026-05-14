"use client";
import React from "react";
import { motion } from "framer-motion";

const PhoneMockup = () => {
  return (
    <div className="relative w-[300px] h-[600px] mx-auto">
      {/* Premium Video-Only Screen */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative h-full w-full bg-[#222222] rounded-[50px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[6px] border-white ring-1 ring-black/5"
      >
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/portal_preview.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Subtle Glass Overlay for Premium feel */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-black/20 to-transparent opacity-30" />
      </motion.div>
    </div>
  );
};

export default PhoneMockup;
