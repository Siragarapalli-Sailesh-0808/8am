"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const [isPlaying, setIsPlaying] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setIsPlaying(true);
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    setIsPlaying(false);
    videoRef.current?.pause();
  };

  return (
    <section className="relative overflow-hidden bg-[#F8F7F2] pt-32 lg:pt-40">
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-[#F8F7F2]" />
        <div
          className="absolute inset-y-0 right-0 hidden w-3/5 bg-[#E0B100] lg:block"
          style={{ clipPath: "polygon(24% 0, 100% 0, 100% 100%, 0 100%)" }}
        />
      </div>

      <div className="mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-9rem)] max-w-5xl px-6 pb-20 pt-8 lg:px-8 text-center">
        <div className="max-w-3xl w-full">
          <motion.div
            className="z-10 flex flex-col items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <h1 className="text-4xl font-black leading-[0.85] text-[#E0B100] sm:text-6xl lg:text-7xl tracking-[-0.07em] lg:leading-[0.8] text-center">
                <span>The morning</span>
                <br />
                <span>commute,</span>
                <br />
                <span className="headline-italic text-[#E0B100] tracking-tight">re-engineered.</span>
              </h1>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="mb-10 max-w-xl mx-auto text-base leading-relaxed text-[#222222]/70 sm:text-lg lg:text-xl font-medium"
            >
              8AM is a routing-intelligence platform for Indian school transport — automatic nodal points, fuel-aware routes, and live driver, parent and ops apps in one calm system.
            </motion.p>

            <motion.div variants={fadeInUp} className="mb-16">
              <motion.button
                className="inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-[#E0B100] px-10 py-5 text-base font-black text-[#222222] shadow-[0_25px_50px_-12px_rgba(224,177,0,0.4)] transition-all hover:shadow-[0_30px_60px_-12px_rgba(224,177,0,0.5)] tracking-tight"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Your Free Demo
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* MAGNETIC INTERACTIVE VIDEO PLAYER */}
        <motion.div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="group relative w-full max-w-5xl aspect-video rounded-[32px] md:rounded-[40px] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] border-2 md:border-4 border-white/20 bg-[#222222] cursor-none"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <video 
            ref={videoRef}
            src="/hero_demo.mp4" 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* MAGNETIC PLAY BUTTON */}
          <AnimatePresence>
            {!isPlaying && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center z-10 pointer-events-none"
              >
                <div className="flex flex-col items-center">
                  <Play className="w-16 h-16 text-[#E0B100] fill-[#E0B100] mb-4" />
                  <span className="text-white font-black uppercase tracking-[0.3em] text-[10px]">Hover to Experience</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* THE MAGNETIC CURSOR REPLACEMENT */}
          <motion.div 
            className="absolute pointer-events-none z-20 hidden md:flex items-center justify-center w-24 h-24 rounded-full bg-[#E0B100] text-[#222222] shadow-2xl mix-blend-normal"
            animate={{ 
              x: mousePos.x - 48, 
              y: mousePos.y - 48,
              scale: isPlaying ? 0.8 : 1,
              opacity: isPlaying ? 0.9 : 0
            }}
            transition={{ type: "spring", damping: 20, stiffness: 200, mass: 0.5 }}
          >
             <span className="text-[10px] font-black uppercase tracking-tighter">
                {isPlaying ? "Playing" : ""}
             </span>
          </motion.div>

          <div className="absolute top-4 left-4 md:top-8 md:left-8 z-30">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-black/20 backdrop-blur-xl border border-white/10 px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center space-x-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#E0B100] animate-pulse" />
              <span className="text-[8px] md:text-[10px] font-black text-white uppercase tracking-widest">8AM Intelligence Hub</span>
            </motion.div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
