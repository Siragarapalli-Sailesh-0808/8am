"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollingTicker from "@/components/ScrollingTicker";
import StickyHeader from "@/components/StickyHeader";
import FinalCTA from "@/components/FinalCTA";
import PhoneMockup from "@/components/PhoneMockup";
import SafetyBento from "@/components/SafetyBento";
import JourneyTimeline from "@/components/JourneyTimeline";
import EmotionalCarousel from "@/components/EmotionalCarousel";
import { ArrowRight, ShieldCheck, MapPin, Bell, Smartphone } from "lucide-react";

export default function ParentsPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <main ref={containerRef} className="bg-white min-h-screen font-sans text-black overflow-x-hidden">
      <ScrollingTicker />
      <StickyHeader />

      {/* 1. ULTRA-PREMIUM HERO SECTION [cite: 20, 21] */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="container mx-auto px-6 md:px-12 lg:px-24 grid lg:grid-cols-2 gap-20 items-center z-10"
        >
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#FFD700]/10 text-black px-5 py-2 rounded-full w-max text-xs font-black mb-8 border border-[#FFD700] tracking-[0.2em] uppercase"
            >
              The Parental Portal
            </motion.div>
            <h1 className="text-6xl md:text-[100px] font-black mb-8 leading-[0.85] tracking-tighter">
              Absolute Control. <br />
              Total <span className="italic font-serif text-[#FFD700] font-normal">Certainty.</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-lg mb-12 font-medium leading-relaxed">
              Experience the world's most advanced parent-teacher mobility interface. Real-time updates, AI-driven ETA, and biometric safety standards.
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,215,0,0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-[#FFD700] text-black px-12 py-6 rounded-full font-black flex items-center justify-center space-x-3 transition-all"
              >
                <span>Activate Safety</span>
                <ArrowRight size={22} />
              </motion.button>
              <button className="text-black font-black text-sm border-b-2 border-black pb-1 hover:text-[#FFD700] hover:border-[#FFD700] transition-all">
                View Feature Tour
              </button>
            </div>
          </motion.div>

          {/* Phone Mockup with Floating Elements */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <PhoneMockup />
              
              {/* Floating Badges */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-12 top-20 bg-white p-6 rounded-[30px] shadow-2xl border border-gray-50 flex items-center space-x-4 z-20"
              >
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                  <ShieldCheck size={28} />
                </div>
                <div>
                   <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Security Status</p>
                   <p className="text-sm font-black">100% Secure</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-12 bottom-20 bg-white p-6 rounded-[30px] shadow-2xl border border-gray-50 flex items-center space-x-4 z-20"
              >
                <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center text-black">
                  <MapPin size={28} />
                </div>
                <div>
                   <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Live Updates</p>
                   <p className="text-sm font-black">Every 5 Seconds</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Dynamic Background */}
        <div className="absolute right-0 top-0 w-1/3 h-full bg-[#FFD700]/5 -z-10" style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }} />
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-[#FFD700]/10 rounded-full blur-[100px] -z-10" />
      </section>

      {/* 2. THE SECURITY BENTO */}
      <SafetyBento />

      {/* 3. THE DAILY GUARDIAN TIMELINE */}
      <JourneyTimeline />

      {/* 4. INNOVATIVE "TECH PULSE" SECTION */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
         <div className="container mx-auto px-6 text-center mb-24 relative z-10">
            <span className="text-[#FFD700] font-black tracking-[0.4em] uppercase text-xs mb-4 block">Zero-Latency Mesh</span>
            <h2 className="text-5xl md:text-8xl font-black leading-tight">
              Real-time is <br />
              <span className="italic font-serif text-[#FFD700]">not enough.</span>
            </h2>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-1 px-6 lg:px-0">
            {[
              { title: "Quantum Sync", desc: "Our proprietary protocol ensures updates reach you in under 200ms." },
              { title: "AES-256 Mesh", desc: "Bank-grade encryption for every single student data packet." },
              { title: "Edge Compute", desc: "Processing speed alerts locally on the bus for zero-delay response." }
            ].map((item, i) => (
              <div key={i} className="group relative p-20 border-r border-white/10 last:border-0 hover:bg-[#FFD700] transition-all duration-700">
                 <h3 className="text-3xl font-black mb-6 group-hover:text-black transition-colors">{item.title}</h3>
                 <p className="text-gray-400 font-medium group-hover:text-black/70 transition-colors leading-relaxed">
                   {item.desc}
                 </p>
                 <div className="absolute bottom-10 right-10 text-white/10 group-hover:text-black/20 text-9xl font-black transition-colors">
                   0{i+1}
                 </div>
              </div>
            ))}
         </div>

         {/* Animated Background Line */}
         <motion.div 
           animate={{ x: ["-100%", "100%"] }}
           transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
           className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FFD700] to-transparent opacity-30"
         />
      </section>

      {/* 5. EMOTIONAL CAROUSEL */}
      <EmotionalCarousel />

      {/* 6. EXTENSIVE FAQ SECTION */}
      <section className="py-32 bg-[#F9F9F9]">
         <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-20">
               <h2 className="text-4xl md:text-6xl font-black">Common <span className="italic font-serif text-[#FFD700]">Questions.</span></h2>
            </div>
            <div className="space-y-6">
               {[
                 { q: "How accurate is the location tracking?", a: "Our GPS units use multi-constellation GNSS which provides accuracy within 1.5 meters, refreshing every 5 seconds." },
                 { q: "Is my child's data safe?", a: "We are GDPR and DPDP compliant. All data is encrypted and only accessible by authorized school staff and verified parents." },
                 { q: "What happens if the bus is delayed?", a: "The system automatically adjusts the ETA and sends a proactive push notification to all affected parents immediately." }
               ].map((faq, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 10 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   className="bg-white p-8 rounded-[30px] shadow-sm border border-gray-50 hover:shadow-md transition-all cursor-pointer group"
                 >
                    <h3 className="text-xl font-black mb-4 flex justify-between items-center">
                       {faq.q}
                       <span className="text-[#FFD700] group-hover:rotate-90 transition-transform">+</span>
                    </h3>
                    <p className="text-gray-500 font-medium leading-relaxed">{faq.a}</p>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      <FinalCTA />
    </main>
  );
}
