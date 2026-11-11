"use client";
import React from "react";
import { m } from "framer-motion";
import ScrollingTicker from "@/components/ScrollingTicker";
import StickyHeader from "@/components/StickyHeader";
import FinalCTA from "@/components/FinalCTA";
import PhoneMockup from "@/components/PhoneMockup";
import SafetyBento from "@/components/SafetyBento";
import JourneyTimeline from "@/components/JourneyTimeline";
import MetricSpotlight from "@/components/MetricSpotlight";
import EmotionalCarousel from "@/components/EmotionalCarousel";
import Link from "next/link";
import { ArrowRight, ShieldCheck, MapPin, Plus } from "lucide-react";
import ParentAssurance from "@/components/ParentAssurance";
import Footer from "@/components/Footer";

export default function ParentsPage() {
  return (
    <main className="bg-white min-h-screen font-sans text-[#222222] overflow-x-clip">
      <ScrollingTicker />
      <StickyHeader />

      {/* 1. HERO */}
      <section className="relative lg:min-h-screen flex items-center pt-36 pb-16 lg:pt-28 overflow-hidden">
        <div
          className="mx-auto w-full max-w-6xl px-5 md:px-8 grid lg:grid-cols-2 gap-16 lg:gap-12 items-center z-10"
        >
          <m.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <m.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#E0B100]/10 text-[#7A5F00] px-5 py-2 rounded-full w-max mx-auto lg:mx-0 text-xs font-black mb-8 border border-[#E0B100] tracking-[0.2em] uppercase"
            >
              The Parental Portal
            </m.div>
            <h1 className="display-xl font-black mb-8 leading-[0.92] tracking-tighter text-[#222222]">
              Absolute Control. <br />
              Total <span className="headline-italic text-[#E0B100]">Certainty.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#222222]/75 max-w-lg mx-auto lg:mx-0 mb-10 font-medium leading-relaxed">
              Know when your child boards, where the bus is right now, and when they reach school. Real-time updates and smart arrival estimates, free for parents at partner schools.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 sm:gap-8">
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-[#E0B100] text-[#222222] px-10 py-5 rounded-full font-black flex items-center justify-center gap-3 shadow-[0_20px_40px_-12px_rgba(224,177,0,0.45)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5"
              >
                <span>Get 8AM for My School</span>
                <ArrowRight size={20} />
              </Link>
              <a href="#features" className="text-[#222222] font-black text-sm border-b-2 border-[#E0B100] pb-1 hover:text-[#B08A00] transition-colors">
                View Feature Tour
              </a>
            </div>
          </m.div>

          {/* Phone Mockup with Floating Elements */}
          <m.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <PhoneMockup />
              
              {/* Floating Badges */}
              <m.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-6 sm:-left-16 top-16 bg-white p-3 pr-4 sm:p-5 rounded-[22px] shadow-2xl border border-gray-100 flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 bg-green-600 rounded-full flex items-center justify-center text-white">
                  <ShieldCheck size={22} />
                </div>
                <div>
                   <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Security Status</p>
                   <p className="text-sm font-black">Verified parents only</p>
                </div>
              </m.div>

              <m.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-6 sm:-right-16 bottom-16 bg-white p-3 pr-4 sm:p-5 rounded-[22px] shadow-2xl border border-gray-100 flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 bg-[#E0B100] rounded-full flex items-center justify-center text-[#222222]">
                  <MapPin size={22} />
                </div>
                <div>
                   <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Live Updates</p>
                   <p className="text-sm font-black">Real-time</p>
                </div>
              </m.div>
            </div>
          </m.div>
        </div>

        {/* Dynamic Background */}
        <div aria-hidden className="absolute right-0 top-0 w-1/3 h-full bg-[#E0B100]/5 pointer-events-none" style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }} />
      </section>

      {/* 2. THE SECURITY BENTO */}
      <div id="features" className="scroll-mt-28">
        <SafetyBento />
      </div>

      {/* 3. THE DAILY GUARDIAN TIMELINE */}
      <JourneyTimeline />

      {/* 4. THE PARENT ASSURANCE GALLERY */}
      <ParentAssurance />

      {/* 5. EMOTIONAL CAROUSEL */}
      <EmotionalCarousel />
      <MetricSpotlight />

      {/* 6. EXTENSIVE FAQ SECTION */}
      <section className="py-20 md:py-28 bg-[#F9F9F9]">
         <div className="max-w-3xl mx-auto px-5 md:px-8">
            <div className="text-center mb-12 md:mb-16">
               <h2 className="display-md font-black">Common <span className="headline-italic text-[#E0B100]">Questions.</span></h2>
            </div>
            <div className="space-y-4">
               {[
                 { q: "How accurate is the location tracking?", a: "The bus position comes from a GPS device on the bus and updates every few seconds, so the map shows where the bus really is." },
                 { q: "Is my child's data safe?", a: "Your child’s data is only visible to authorised school staff and verified parents. See our Privacy Policy for exactly what we collect and how it is protected." },
                 { q: "What happens if the bus is delayed?", a: "The arrival estimate updates automatically and affected parents get a notification, so nobody waits at the gate wondering." }
               ].map((faq, i) => (
                 <details
                   key={i}
                   open={i === 0}
                   className="bg-white rounded-[24px] shadow-sm border border-gray-100 group [&_summary::-webkit-details-marker]:hidden"
                 >
                    <summary className="list-none cursor-pointer p-6 md:p-8 text-lg md:text-xl font-black flex justify-between items-center gap-4">
                       {faq.q}
                       <Plus size={22} className="text-[#B08A00] shrink-0 transition-transform duration-300 group-open:rotate-45" />
                    </summary>
                    <p className="px-6 md:px-8 pb-6 md:pb-8 -mt-2 text-gray-600 font-medium leading-relaxed">{faq.a}</p>
                 </details>
               ))}
            </div>
         </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
}
