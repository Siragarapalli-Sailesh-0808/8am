"use client";
import React from "react";
import { m } from "framer-motion";

const PhoneMockup = () => {
  return (
    <div className="relative w-[260px] h-[520px] sm:w-[300px] sm:h-[600px] mx-auto">
      {/* Premium Video-Only Screen */}
      <m.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative h-full w-full bg-[#222222] rounded-[50px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[6px] border-white ring-1 ring-black/5"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/media/portal-poster.jpg"
          aria-label="8AM parent app preview"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/media/portal.mp4" type="video/mp4" />
        </video>
        
        {/* Subtle Glass Overlay for Premium feel */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-black/20 to-transparent opacity-30" />
      </m.div>
    </div>
  );
};

export default PhoneMockup;
