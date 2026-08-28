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
                src="/logo-horizontal.png" 
                alt="8AM Mobility Platform Logo" 
                className={`w-auto object-contain transition-all duration-500 ${
                  isScrolled ? "h-7 md:h-9" : "h-9 md:h-11"
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
            <a 
              href="https://wa.me/918374054499"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 bg-[#25D366] text-white hover:bg-[#128C7E] transition-all rounded-full text-[10px] font-black uppercase tracking-widest flex items-center space-x-1.5 shadow-sm hover:shadow-md"
            >
              <span>WhatsApp</span>
            </a>
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
            <nav className="flex flex-col items-center space-y-6 text-center px-6">
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
                    className="text-4xl font-black text-[#222222] hover:text-[#E0B100] transition-colors uppercase tracking-tighter"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-6 border-t border-gray-100 flex flex-col items-center space-y-3 text-xs font-bold text-[#666666]"
              >
                <a href="mailto:8amplatform@gmail.com" className="hover:text-[#E0B100] transition-colors">
                  8amplatform@gmail.com
                </a>
                <a href="tel:+918143528142" className="hover:text-[#E0B100] transition-colors">
                  Mobile: +91 81435 28142
                </a>
                <a 
                  href="https://wa.me/918374054499" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-6 py-3 bg-[#25D366] text-white rounded-full font-black text-xs uppercase tracking-wider flex items-center space-x-2"
                >
                  <span>WhatsApp: +91 83740 54499</span>
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
