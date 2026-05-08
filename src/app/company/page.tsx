"use client";
import React from "react";
import ScrollingTicker from "@/components/ScrollingTicker";
import StickyHeader from "@/components/StickyHeader";
import CrisisSectionWhite from "@/components/CrisisSectionWhite";
import FinalCTA from "@/components/FinalCTA";
import { motion } from "framer-motion";
import { Globe, Lightbulb, Target, Award } from "lucide-react";

export default function CompanyPage() {
  return (
    <main className="w-full bg-[#FDFDFD]">
      <ScrollingTicker />
      <StickyHeader />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 md:px-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.4] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="companyGrid" width="160" height="160" patternUnits="userSpaceOnUse">
                <path d="M 160 0 L 0 0 0 160" fill="none" stroke="#E5E7EB" strokeWidth="1" />
                <circle cx="0" cy="0" r="1.5" fill="#FFD700" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#companyGrid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-[#FFD700] font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Our Mission</span>
            <h1 className="text-5xl md:text-8xl font-black text-[#2D2D2D] leading-[1] mb-8">
              Pioneering <br />
              <span className="italic font-serif text-[#FFD700]">Safe Transit.</span>
            </h1>
            <p className="text-xl text-[#2D2D2D]/70 leading-relaxed font-medium mb-12">
              SAFEHOP was founded on a simple belief: every student deserves a safe journey, and every parent deserves certainty. We are redefining urban mobility for India's next generation.
            </p>

            <div className="flex items-center space-x-12">
               <div>
                  <h3 className="text-4xl font-black text-[#2D2D2D]">15+</h3>
                  <p className="text-xs font-bold text-[#FFD700] uppercase tracking-widest mt-1">Smart Cities</p>
               </div>
               <div>
                  <h3 className="text-4xl font-black text-[#2D2D2D]">2M+</h3>
                  <p className="text-xs font-bold text-[#FFD700] uppercase tracking-widest mt-1">Daily Alerts</p>
               </div>
               <div>
                  <h3 className="text-4xl font-black text-[#2D2D2D]">500+</h3>
                  <p className="text-xs font-bold text-[#FFD700] uppercase tracking-widest mt-1">School Partners</p>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
             <div className="bg-white rounded-[48px] p-12 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-gray-50 aspect-square flex items-center justify-center">
                <div className="grid grid-cols-2 gap-12">
                   {[
                     { icon: <Globe />, label: "National" },
                     { icon: <Lightbulb />, label: "Innovation" },
                     { icon: <Target />, label: "Precision" },
                     { icon: <Award />, label: "Excellence" }
                   ].map((item, i) => (
                     <div key={i} className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-[#FDFDFD] rounded-3xl shadow-lg flex items-center justify-center text-[#FFD700] mb-4 border border-gray-50">
                           {item.icon}
                        </div>
                        <p className="font-bold text-[#2D2D2D] uppercase tracking-tighter text-sm">{item.label}</p>
                     </div>
                   ))}
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      <CrisisSectionWhite />

      {/* CORE VALUES SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-20">
           <h2 className="text-5xl font-black text-[#2D2D2D]">Built on <span className="italic font-serif text-[#FFD700]">Core Values.</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { title: "Radical Transparency", desc: "We believe parents and schools should never have to guess. Data is our language of trust." },
             { title: "Human-Centric Tech", desc: "Our technology is complex, but the experience is simple, intuitive, and built for humans." },
             { title: "Unyielding Safety", desc: "We don't compromise on the safety of the millions of students who rely on us every day." }
           ].map((value, i) => (
             <motion.div 
               key={i}
               whileHover={{ y: -10 }}
               className="p-10 bg-[#FDFDFD] rounded-[40px] border border-gray-100 shadow-sm"
             >
                <h3 className="text-2xl font-bold text-[#2D2D2D] mb-4">{value.title}</h3>
                <p className="text-[#2D2D2D]/60 font-medium leading-relaxed">{value.desc}</p>
             </motion.div>
           ))}
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
