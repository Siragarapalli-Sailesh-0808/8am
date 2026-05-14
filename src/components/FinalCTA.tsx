"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-32 px-6 bg-[#F8F7F2]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-[var(--card-bg)] rounded-[40px] md:rounded-[48px] p-8 md:p-24 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] border border-[#E8E2D3]"
        >
          {/* BACKGROUND DECO - Golden Dashed Lines */}
          <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
               <motion.path 
                 d="M-100 200 Q 200 50 400 200 T 900 200" 
                 fill="none" 
                 stroke="#E0B100" 
                 strokeWidth="2" 
                 strokeDasharray="8 8" 
                 initial={{ pathLength: 0 }}
                 whileInView={{ pathLength: 1 }}
                 transition={{ duration: 2, ease: "easeInOut" }}
               />
               <motion.path 
                 d="M-100 300 Q 300 150 500 300 T 1000 300" 
                 fill="none" 
                 stroke="#E0B100" 
                 strokeWidth="1" 
                 strokeDasharray="12 12" 
                 initial={{ pathLength: 0 }}
                 whileInView={{ pathLength: 1 }}
                 transition={{ duration: 2.5, delay: 0.5, ease: "easeInOut" }}
               />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="flex flex-col lg:flex-row items-center lg:items-center space-y-4 lg:space-y-0 lg:space-x-3 mb-8">
                <div className="flex -space-x-3">
                   {[1, 2, 3, 4].map(i => (
                     <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-[var(--card-bg)] shadow-sm overflow-hidden">
                       <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${i + 10}`} alt="user" className="w-full h-full object-cover" />
                     </div>
                   ))}
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <div className="flex text-[#E0B100]">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                  <p className="text-[10px] font-black text-black/60 uppercase tracking-[0.2em]">50K+ Active Parents</p>
                </div>
              </div>

              <h2 className="text-4xl md:text-7xl font-black text-black leading-[1.05] mb-8 tracking-tight">
                Join the journey <br />
                <span className="italic font-serif text-[#E0B100] text-5xl md:text-8xl">tomorrow.</span>
              </h2>
              
              <p className="text-base md:text-lg text-[#666666] mb-12 max-w-md mx-auto lg:mx-0 leading-relaxed font-medium opacity-80">
                Experience India&apos;s most trusted student mobility platform. Real-time visibility, instant alerts, and total peace of mind.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 lg:gap-5 justify-center lg:justify-start">
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 md:px-12 py-5 md:py-6 bg-[#E0B100] text-black font-black rounded-full shadow-[0_20px_40px_-10px_rgba(224,177,0,0.4)] flex items-center justify-center space-x-3 hover:shadow-[0_25px_50px_-12px_rgba(224,177,0,0.5)] transition-all"
                >
                  <span className="tracking-tight">Get Started Now</span>
                  <ArrowRight size={22} strokeWidth={3} />
                </motion.button>
              </div>
            </div>

            <div className="relative h-[500px] hidden lg:flex items-center justify-center">
               {/* POLAROID CARDS */}
               <motion.div 
                 initial={{ opacity: 0, rotate: 15, x: 50 }}
                 whileInView={{ opacity: 1, rotate: 6, x: 0 }}
                 whileHover={{ scale: 1.05, rotate: 4, zIndex: 40 }}
                 transition={{ duration: 0.8, ease: "easeOut" }}
                 className="absolute top-10 right-0 w-72 h-96 bg-[var(--card-bg)] p-4 shadow-[0_30px_60px_-15px_rgba(224,177,0,0.15)] rounded-sm rotate-6 z-20 border border-[#E8E2D3] group"
               >
                 <div className="w-full h-72 bg-gray-100 mb-4 overflow-hidden relative">
                    <img 
                      src="/parent.png" 
                      alt="Happy Parent" 
                      className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500" 
                    />
                    <div className="absolute inset-0 bg-[#E0B100]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                 </div>
                 <p className="text-[11px] font-bold text-black uppercase tracking-wider text-center">Parent Peace of Mind</p>
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0, rotate: -15, x: -50 }}
                 whileInView={{ opacity: 1, rotate: -8, x: 0 }}
                 whileHover={{ scale: 1.05, rotate: -6, zIndex: 40 }}
                 transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                 className="absolute bottom-10 left-10 w-72 h-96 bg-[var(--card-bg)] p-4 shadow-[0_30px_60px_-15px_rgba(224,177,0,0.15)] rounded-sm -rotate-8 z-10 border border-[#E8E2D3] group"
               >
                 <div className="w-full h-72 bg-gray-100 mb-4 overflow-hidden relative">
                    <img 
                      src="/boarding.jpeg" 
                      alt="Safe Boarding" 
                      className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500" 
                    />
                    <div className="absolute inset-0 bg-[#E0B100]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                 </div>
                 <p className="text-[11px] font-bold text-black uppercase tracking-wider text-center">Real-Time Accountability</p>
               </motion.div>

               {/* FLOATING ICON */}
               <motion.div 
                 animate={{ 
                   y: [0, -20, 0],
                   rotate: [0, 10, 0],
                   scale: [1, 1.1, 1]
                 }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute top-1/2 left-1/4 z-30 bg-[#E0B100] p-6 rounded-full shadow-[0_20px_40px_rgba(255,215,0,0.4)]"
               >
                 <Star className="text-black fill-current" size={40} />
               </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
