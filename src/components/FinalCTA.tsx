"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { m } from "framer-motion";
import { ArrowRight, MessageCircle, Star } from "lucide-react";
import { DEMO_WHATSAPP } from "@/lib/site";

export const FinalCTA = () => {
  return (
    <section className="py-20 md:py-24 px-5 md:px-8 bg-[#F8F7F2]">
      <div className="max-w-6xl mx-auto">
        <m.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-white rounded-[32px] md:rounded-[48px] p-7 sm:p-10 md:p-16 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] border border-[#E8E2D3]"
        >
          {/* Decorative golden route lines (static, cheap) */}
          <div aria-hidden className="absolute inset-0 z-0 opacity-25 pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 800 400" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M-100 200 Q 200 50 400 200 T 900 200" fill="none" stroke="#E0B100" strokeWidth="2" strokeDasharray="8 8" />
              <path d="M-100 300 Q 300 150 500 300 T 1000 300" fill="none" stroke="#E0B100" strokeWidth="1" strokeDasharray="12 12" />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <p className="mb-6 text-[11px] font-black uppercase tracking-[0.2em] text-[#B08A00]">
                Free demo · No commitment
              </p>

              <h2 className="display-md font-black text-[#222222] leading-[1.02] mb-6 tracking-tight">
                Join the journey <br />
                <span className="headline-italic text-[#E0B100]">tomorrow.</span>
              </h2>

              <p className="text-base text-[#555555] mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed font-medium">
                See how 8AM can bring real-time visibility, instant alerts and calmer mornings to your school.
                A short demo is all it takes.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="px-8 md:px-10 py-4 md:py-5 bg-[#E0B100] text-[#222222] font-black rounded-full shadow-[0_20px_40px_-10px_rgba(224,177,0,0.4)] flex items-center justify-center gap-3 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_25px_50px_-12px_rgba(224,177,0,0.5)]"
                >
                  <span className="text-sm">Book a Demo</span>
                  <ArrowRight size={18} strokeWidth={3} />
                </Link>
                <a
                  href={DEMO_WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 md:px-10 py-4 md:py-5 bg-white border-2 border-[#25D366] text-[#128C7E] font-black rounded-full flex items-center justify-center gap-2 transition-colors hover:bg-[#25D366] hover:text-white"
                >
                  <MessageCircle size={18} />
                  <span className="text-sm">Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="relative h-[460px] hidden lg:flex items-center justify-center">
              {/* POLAROID CARDS */}
              <m.div
                initial={{ opacity: 0, rotate: 12, x: 40 }}
                whileInView={{ opacity: 1, rotate: 6, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="absolute top-6 right-4 w-60 bg-white p-3 shadow-[0_30px_60px_-15px_rgba(224,177,0,0.2)] rounded-sm z-20 border border-[#E8E2D3] transition-transform duration-300 hover:scale-[1.04]"
              >
                <div className="w-full h-60 bg-gray-100 mb-3 overflow-hidden relative">
                  <Image src="/media/parent.webp" alt="A relaxed parent" fill sizes="240px" className="object-cover" />
                </div>
                <p className="text-[11px] font-bold text-black uppercase tracking-wider text-center">Parent Peace of Mind</p>
              </m.div>

              <m.div
                initial={{ opacity: 0, rotate: -14, x: -40 }}
                whileInView={{ opacity: 1, rotate: -8, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.15, ease: "easeOut" }}
                className="absolute bottom-6 left-6 w-60 bg-white p-3 shadow-[0_30px_60px_-15px_rgba(224,177,0,0.2)] rounded-sm z-10 border border-[#E8E2D3] transition-transform duration-300 hover:scale-[1.04]"
              >
                <div className="w-full h-60 bg-gray-100 mb-3 overflow-hidden relative">
                  <Image src="/media/boarding.webp" alt="Student boarding a school bus" fill sizes="240px" className="object-cover" />
                </div>
                <p className="text-[11px] font-bold text-black uppercase tracking-wider text-center">Real-Time Accountability</p>
              </m.div>

              <div className="absolute top-1/2 left-1/4 z-30 bg-[#E0B100] p-4 rounded-full shadow-[0_20px_40px_rgba(224,177,0,0.4)]">
                <Star className="text-[#222222] fill-current" size={28} />
              </div>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
};

export default FinalCTA;
