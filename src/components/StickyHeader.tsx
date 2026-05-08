"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`sticky top-9 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/75 backdrop-blur-md shadow-[0_8px_28px_rgba(0,0,0,0.06)]"
          : "bg-white/70 backdrop-blur-md"
      }`}
      initial={{ y: 0 }}
      animate={{ y: 0 }}
    >
      <nav className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-6 py-4 lg:px-8">
        <div className="justify-self-start">
          <span className="font-[var(--font-montserrat)] text-2xl font-extrabold tracking-tighter text-[#2D2D2D]">
            SAFE<span className="text-[#FFD700]">HOP</span>
          </span>
        </div>

        <div className="hidden md:flex items-center justify-center gap-8 justify-self-center">
          {["Schools", "Parents", "Company"].map((item) => (
            <motion.a
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-sm font-bold tracking-tight text-[#2D2D2D] relative"
              whileHover={{ color: "#FFD700" }}
              transition={{ duration: 0.2 }}
            >
              {item}
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-[#FFD700]"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        <motion.button
          className="justify-self-end rounded-full bg-[#FFD700] px-6 py-2 text-sm font-bold text-[#2D2D2D] shadow-[0_6px_18px_rgba(255,215,0,0.32)]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </nav>
    </motion.header>
  );
}
