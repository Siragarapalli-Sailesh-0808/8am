"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-10 left-0 right-0 z-[100] transition-all duration-500 px-4">
      <div 
        className={`max-w-4xl mx-auto flex items-center justify-between bg-white/95 backdrop-blur-xl border border-[#E8E2D3] rounded-full px-6 py-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 ${
          isScrolled ? "py-1 shadow-xl border-[#E0B100]/20 scale-95" : "py-1.5"
        }`}
      >
        {/* LEFT: LOGO */}
        <Link href="/">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center cursor-pointer"
          >
            <img 
              src="/logo.png" 
              alt="8AM Logo" 
              className={`w-auto mix-blend-multiply object-contain transition-all duration-500 ${
                isScrolled ? "h-14" : "h-20"
              }`} 
            />
          </motion.div>
        </Link>

        {/* CENTER: NAV LINKS */}
        <nav className="hidden lg:flex items-center space-x-1">
          {["Parents", "Schools", "Company"].map((item) => (
            <motion.a
              key={item} 
              href={`/${item.toLowerCase()}`}
              className="px-4 py-2 text-[10px] font-black text-[#222222]/60 hover:text-[#E0B100] transition-colors uppercase tracking-widest"
              whileHover={{ y: -1 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        {/* RIGHT: CTA BUTTON */}
        <div className="flex items-center">
          <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#C99700", boxShadow: "0 10px 25px -5px rgba(224, 177, 0, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#E0B100] text-[#222222] px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-[#E0B100]/20 transition-all"
          >
              Book a Demo
          </motion.button>
        </div>

        {/* MOBILE TRIGGER */}
        <div className="lg:hidden">
            <div className="w-8 h-8 rounded-full bg-[#E0B100]/5 flex flex-col items-center justify-center space-y-1 cursor-pointer">
            <div className="w-4 h-[1.5px] bg-[#E0B100]" />
            <div className="w-4 h-[1.5px] bg-[#E0B100]" />
          </div>
        </div>
      </div>
    </header>
  );
}
