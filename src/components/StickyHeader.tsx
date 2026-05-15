"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Parents", href: "/parents" },
    { name: "Schools", href: "/schools" },
    { name: "Company", href: "/company" },
  ];

  return (
    <>
      <header className="fixed top-6 md:top-10 left-0 right-0 z-[100] px-4 flex justify-center pointer-events-none">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`pointer-events-auto flex items-center bg-white/95 backdrop-blur-2xl border border-[#E8E2D3] rounded-full transition-all duration-500 ease-in-out shadow-[0_20px_50px_rgba(0,0,0,0.06)] ${
            isScrolled ? "py-1.5 md:py-1 shadow-xl border-[#E0B100]/20 md:scale-95" : "py-2 md:py-1.5"
          } 
          /* MOBILE: SMALL PILL */
          w-fit px-4 space-x-3
          /* DESKTOP: COMPLETE HEADER */
          md:w-full md:max-w-4xl md:px-6 md:justify-between`}
        >
          {/* LOGO */}
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <img 
                src="/logo.png" 
                alt="8AM Logo" 
                className={`w-auto mix-blend-multiply object-contain transition-all duration-500 ${
                  isScrolled ? "h-10 md:h-14" : "h-12 md:h-20"
                }`} 
              />
            </div>
          </Link>

          {/* DESKTOP NAV (HIDDEN ON MOBILE) */}
          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map((item) => (
              <Link
                key={item.name} 
                href={item.href}
                className="px-4 py-2 text-[10px] font-black text-[#222222]/60 hover:text-[#E0B100] transition-colors uppercase tracking-widest"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* MOBILE MENU TRIGGER (TIGHT GAP) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col items-center justify-center space-y-1 w-8 h-8 rounded-full bg-gray-50 md:bg-transparent"
          >
            <motion.div 
                animate={isMenuOpen ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
                className="w-4 h-[1.2px] bg-[#222222]" 
            />
            <motion.div 
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-4 h-[1.2px] bg-[#222222]" 
            />
            <motion.div 
                animate={isMenuOpen ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }}
                className="w-4 h-[1.2px] bg-[#222222]" 
            />
          </button>
        </motion.div>
      </header>

      {/* FULLSCREEN MENU OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[95] bg-white flex items-center justify-center"
          >
            <nav className="flex flex-col items-center space-y-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-5xl font-black text-[#222222] hover:text-[#E0B100] transition-colors uppercase tracking-tighter"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
