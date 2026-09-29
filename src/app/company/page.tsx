"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { m } from "framer-motion";
import ScrollingTicker from "@/components/ScrollingTicker";
import StickyHeader from "@/components/StickyHeader";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { ArrowRight, HeartHandshake, MapPin, ShieldCheck, Sparkles, Zap } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Safety first",
    desc: "Every feature starts with one question: does this make a child's journey safer or more predictable?",
  },
  {
    icon: MapPin,
    title: "Built for India",
    desc: "Designed around Indian roads, Indian schools and Indian mornings, including narrow lanes and changing traffic.",
  },
  {
    icon: HeartHandshake,
    title: "Calm technology",
    desc: "Fewer calls, fewer surprises. Clear information for parents, schools and drivers, only when it matters.",
  },
];

export default function CompanyPage() {
  return (
    <main className="bg-white min-h-screen text-[#222222] overflow-x-clip">
      <ScrollingTicker />
      <StickyHeader />

      {/* 1. HERO */}
      <section className="relative flex flex-col items-center justify-center pt-40 pb-24 md:pt-48 md:pb-32 px-5 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_45%_at_50%_45%,rgba(224,177,0,0.14),transparent_70%)]" />

        <m.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-center relative z-10 max-w-4xl"
        >
          <div className="flex justify-center mb-8 text-[#E0B100]">
            <Zap size={40} fill="currentColor" />
          </div>
          <h1 className="display-xl font-black leading-[0.9] tracking-tighter mb-10 text-[#222222]">
            The Future <br />
            <span className="headline-italic text-[#E0B100]">is Guarded.</span>
          </h1>
          <p className="text-lg md:text-2xl text-[#222222]/75 font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
            8AM is building smarter, safer school transport for India, connecting schools, drivers and parents
            around every child&apos;s daily journey.
          </p>
          <a
            href="#story"
            className="inline-flex bg-[#E0B100] text-[#222222] px-10 py-5 rounded-full font-black uppercase text-xs tracking-widest shadow-[0_20px_40px_-12px_rgba(224,177,0,0.45)] transition-transform duration-200 hover:-translate-y-0.5"
          >
            Our Story
          </a>
        </m.div>
      </section>

      {/* 2. STORY */}
      <section id="story" className="scroll-mt-24 py-20 md:py-28 bg-[#F8F7F2]">
        <div className="mx-auto max-w-6xl px-5 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.4em] text-[#B08A00] block mb-6">Why we exist</span>
            <h2 className="display-lg font-black leading-[0.95] tracking-tighter">
              Why we started <br />
              <span className="headline-italic text-[#E0B100]">8AM.</span>
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-2xl md:text-3xl font-black leading-tight text-[#222222]">
              The most important journey of a child&apos;s day was also the least visible one.
            </p>
            <p className="text-lg text-[#222222]/75 font-medium leading-relaxed">
              Parents waiting at the gate, school offices fielding call after call, drivers juggling a phone and a
              steering wheel. We started 8AM to bring transparency, accountability and smart routing to school
              transport.
            </p>
            <p className="text-lg text-[#222222]/75 font-medium leading-relaxed">
              Based in Rajahmundry, Andhra Pradesh, we are building tools that fit how Indian school transport
              really works.
            </p>
          </div>
        </div>
      </section>

      {/* 3. VALUES */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="mb-12 md:mb-16 text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#E8E2D3] bg-white shadow-sm mb-6">
              <Sparkles size={12} className="text-[#E0B100] mr-2" />
              <span className="text-[10px] font-black uppercase tracking-widest text-[#222222]">What we believe</span>
            </div>
            <h2 className="display-md font-black tracking-tight">Our principles.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {values.map((v, i) => (
              <m.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`p-8 rounded-[28px] border transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                  i === 1 ? "bg-[#E0B100] border-[#E0B100]" : "bg-white border-[#E8E2D3] shadow-sm"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-8 ${i === 1 ? "bg-white/30" : "bg-[#FDF7E7]"}`}>
                  <v.icon className={i === 1 ? "text-[#222222]" : "text-[#B08A00]"} size={22} />
                </div>
                <h3 className="text-2xl font-black mb-3">{v.title}</h3>
                <p className={`text-base font-medium leading-relaxed ${i === 1 ? "text-[#222222]/80" : "text-[#555555]"}`}>{v.desc}</p>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FOR INSTITUTIONS */}
      <section className="py-20 md:py-28 px-5 md:px-8 bg-[#F8F7F2]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.4em] text-[#B08A00] block mb-6">Built for Schools</span>
            <h2 className="display-lg font-black leading-[0.95] tracking-tighter mb-8">
              Institutional <br />
              <span className="headline-italic text-[#E0B100]">Precision.</span>
            </h2>
            <p className="text-lg md:text-xl text-[#222222]/75 font-medium mb-10 max-w-md">
              From a single campus with a handful of buses to larger multi-campus fleets, 8AM is designed to scale
              with your school.
            </p>
            <Link
              href="/schools"
              className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-widest border-b-2 border-[#E0B100] pb-2 hover:text-[#B08A00] transition-colors"
            >
              <span>See 8AM for Schools</span>
              <ArrowRight size={16} />
            </Link>
          </div>
          <m.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[36px] md:rounded-[56px] border border-gray-100 shadow-2xl overflow-hidden relative h-[340px] sm:h-[460px] lg:h-[560px]"
          >
            <Image
              src="/media/institutional-campus.webp"
              alt="School campus with buses"
              fill
              sizes="(max-width: 1024px) 92vw, 560px"
              className="object-cover"
            />
            <div className="absolute left-5 bottom-5 md:left-8 md:bottom-8 bg-[#222222]/85 border border-white/10 px-5 py-3 rounded-2xl shadow-xl">
              <p className="text-[10px] font-black text-[#E0B100] uppercase tracking-widest">Headquarters</p>
              <p className="text-lg font-black text-white">Rajahmundry, AP</p>
            </div>
          </m.div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
}
