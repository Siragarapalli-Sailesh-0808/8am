"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LogIn, UserPlus } from "lucide-react";

export default function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-9 left-0 right-0 z-[100] transition-all duration-500 py-6 px-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LEFT: LOGO */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center"
        >
          <span className="text-2xl font-black tracking-tighter text-[#FFD700]">
            SAFE
            <span className="ml-1 inline-flex items-center rounded-full bg-[#FFD700] px-2 py-0.5 text-[#FFFFFF]">
              HOP
            </span>
          </span>
        </motion.div>

        {/* CENTER: FLOATING NAVIGATION PILL */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`hidden md:flex items-center bg-[rgba(0,0,0,0.5)] backdrop-blur-xl border border-white/25 rounded-full px-2 py-2 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.25)] transition-all duration-500 ${
            isScrolled ? "scale-95 shadow-2xl" : "scale-100"
          }`}
        >
          <div className="flex items-center space-x-1 px-4">
            {["Parents", "Schools", "Company"].map((item) => (
              <motion.a
                key={item}
                href={`/${item.toLowerCase()}`}
                className="px-6 py-2 text-xs font-black uppercase tracking-widest text-white/80 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#FFD700" }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FFD700] text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest shadow-lg shadow-[0_8px_24px_rgba(255,215,0,0.15)] transition-all"
          >
            Book a Demo
          </motion.button>
        </motion.nav>

        {/* RIGHT: SPACER FOR BALANCE */}
        <div className="hidden lg:flex w-[150px]" />

        {/* MOBILE TRIGGER (Minimal) */}
        <div className="md:hidden">
            <div className="w-8 h-8 rounded-full bg-[#FFD700]/20 flex flex-col items-center justify-center space-y-1">
            <div className="w-4 h-[2px] bg-[#FFD700]" />
            <div className="w-4 h-[2px] bg-[#FFD700]" />
          </div>
        </div>
      </div>
    </header>
  );
}
