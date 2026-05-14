"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-12 left-0 right-0 z-[100] transition-all duration-500 px-4 md:px-8">
      <div 
        className={`max-w-7xl mx-auto flex items-center justify-between bg-white/95 backdrop-blur-xl border border-[#E8E2D3] rounded-full px-8 py-2 shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 ${
          isScrolled ? "py-2 shadow-xl border-[#E0B100]/20" : "py-3"
        }`}
      >
        {/* LEFT: LOGO */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.02 }}
          className="flex items-center"
        >
          <img src="/logo.png" alt="8AM Logo" className="h-16 w-auto mix-blend-multiply" />
        </motion.div>

        {/* CENTER: NAV LINKS */}
        <nav className="hidden lg:flex items-center space-x-2">
            {["Parents", "Schools", "Company"].map((item) => (
              <motion.a
                key={item}
                href={`/${item.toLowerCase()}`}
                className="px-6 py-2 text-sm font-bold text-[#666666] hover:text-[#E0B100] transition-colors"
                whileHover={{ y: -2 }}
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
              className="bg-[#E0B100] text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest shadow-lg shadow-[#E0B100]/20 transition-all"
          >
              Book a Demo
          </motion.button>
        </div>

        {/* MOBILE TRIGGER (Minimal) */}
        <div className="lg:hidden">
            <div className="w-10 h-10 rounded-full bg-[#E0B100]/5 flex flex-col items-center justify-center space-y-1 cursor-pointer">
            <div className="w-5 h-[2px] bg-[#E0B100]" />
            <div className="w-5 h-[2px] bg-[#E0B100]" />
          </div>
        </div>
      </div>
    </header>
  );
}
