"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollingTicker from "@/components/ScrollingTicker";
import StickyHeader from "@/components/StickyHeader";
import FinalCTA from "@/components/FinalCTA";
import PhoneMockup from "@/components/PhoneMockup";
import SafetyBento from "@/components/SafetyBento";
import JourneyTimeline from "@/components/JourneyTimeline";
import MetricSpotlight from "@/components/MetricSpotlight";
import EmotionalCarousel from "@/components/EmotionalCarousel";
import { ArrowRight, ShieldCheck, MapPin, Bell, Smartphone } from "lucide-react";
import TechPulse from "@/components/TechPulse";

export default function ParentsPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <main ref={containerRef} className="bg-[var(--card-bg)] min-h-screen font-sans text-black overflow-x-hidden">
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
              className="bg-[#E0B100]/10 text-[#E0B100] px-5 py-2 rounded-full w-max text-xs font-black mb-8 border border-[#E0B100] tracking-[0.2em] uppercase"
            >
              The Parental Portal
            </motion.div>
            <h1 className="text-5xl md:text-7xl lg:text-[85px] font-black mb-8 leading-[0.9] tracking-tighter text-[#E0B100]">
              Absolute Control. <br />
              Total <span className="italic font-serif text-[#E0B100] font-normal">Certainty.</span>
            </h1>
            <p className="text-xl text-[#E0B100] max-w-lg mb-12 font-medium leading-relaxed">
              Experience the world&apos;s most advanced parent-teacher mobility interface. Real-time updates, AI-driven ETA, and biometric safety standards.
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,215,0,0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-[#E0B100] text-[var(--card-bg)] px-12 py-6 rounded-full font-black flex items-center justify-center space-x-3 transition-all"
              >
                <span>Activate Safety</span>
                <ArrowRight size={22} />
              </motion.button>
              <button className="text-[#E0B100] font-black text-sm border-b-2 border-[#E0B100] pb-1 hover:text-[#E0B100] hover:border-[#E0B100] transition-all">
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
                className="absolute -left-12 top-20 bg-[var(--card-bg)] p-6 rounded-[30px] shadow-2xl border border-gray-50 flex items-center space-x-4 z-20"
              >
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-[var(--card-bg)]">
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
                className="absolute -right-12 bottom-20 bg-[var(--card-bg)] p-6 rounded-[30px] shadow-2xl border border-gray-50 flex items-center space-x-4 z-20"
              >
                <div className="w-12 h-12 bg-[#E0B100] rounded-full flex items-center justify-center text-black">
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
        <div className="absolute right-0 top-0 w-1/3 h-full bg-[#E0B100]/5 -z-10" style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }} />
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-[#E0B100]/10 rounded-full blur-[100px] -z-10" />
      </section>

      {/* 2. THE SECURITY BENTO */}
      <SafetyBento />

      {/* 3. THE DAILY GUARDIAN TIMELINE */}
      <JourneyTimeline />

      {/* 4. INNOVATIVE "TECH PULSE" SECTION */}
      <TechPulse />

      {/* 5. EMOTIONAL CAROUSEL */}
      <EmotionalCarousel />
      <MetricSpotlight />

      {/* 6. EXTENSIVE FAQ SECTION */}
      <section className="py-32 bg-[#F9F9F9]">
         <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-20">
               <h2 className="text-4xl md:text-6xl font-black">Common <span className="italic font-serif text-[#E0B100]">Questions.</span></h2>
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
                   className="bg-[var(--card-bg)] p-8 rounded-[30px] shadow-sm border border-gray-50 hover:shadow-md transition-all cursor-pointer group"
                 >
                    <h3 className="text-xl font-black mb-4 flex justify-between items-center">
                       {faq.q}
                       <span className="text-[#E0B100] group-hover:rotate-90 transition-transform">+</span>
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
