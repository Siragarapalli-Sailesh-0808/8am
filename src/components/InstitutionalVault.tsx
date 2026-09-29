"use client";
import React from "react";
import { m } from "framer-motion";
import { CheckCircle2, ShieldCheck, Radio, MapPinned } from "lucide-react";

const standards = [
  "GPS tracking on every bus",
  "RFID student check-in and check-out",
  "Emergency alert protocols",
  "Automated maintenance reminders",
];

const InstitutionalVault = () => {
  return (
    <section className="py-20 md:py-28 bg-[var(--background)] relative overflow-hidden px-5 md:px-8">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(224,177,0,0.1),transparent_60%)] pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <m.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <span className="text-[#B08A00] font-black tracking-[0.4em] uppercase text-[10px] md:text-xs mb-6 block">
              Operational Excellence
            </span>
            <h2 className="display-lg font-black text-[var(--foreground)] mb-10 leading-[0.95] tracking-tighter">
              Safety-First <br />
              <span className="headline-italic text-[#E0B100]">Standards.</span>
            </h2>

            <ul className="space-y-5 md:space-y-6">
              {standards.map((text) => (
                <li key={text} className="flex items-center gap-4">
                  <span className="w-6 h-6 shrink-0 rounded-full bg-[#E0B100]/20 flex items-center justify-center text-[#B08A00]">
                    <CheckCircle2 size={14} />
                  </span>
                  <span className="text-base text-[var(--foreground)]/85 font-bold tracking-tight">{text}</span>
                </li>
              ))}
            </ul>
          </m.div>

          <div className="grid gap-5 md:gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
              <div className="bg-white border border-[#E8E2D3] p-7 md:p-10 rounded-[28px] md:rounded-[36px] shadow-xl transition-transform duration-300 hover:-translate-y-1.5">
                <MapPinned className="text-[#B08A00] mb-5" size={24} />
                <p className="text-4xl md:text-5xl font-black text-[var(--foreground)] mb-2">Live</p>
                <p className="text-[10px] font-black text-[#7A5F00] uppercase tracking-widest">Fleet visibility</p>
              </div>
              <div className="bg-white border border-[#E8E2D3] p-7 md:p-10 rounded-[28px] md:rounded-[36px] shadow-xl transition-transform duration-300 hover:-translate-y-1.5">
                <Radio className="text-[#B08A00] mb-5" size={24} />
                <p className="text-4xl md:text-5xl font-black text-[var(--foreground)] mb-2">RFID</p>
                <p className="text-[10px] font-black text-[#7A5F00] uppercase tracking-widest">Student check-in</p>
              </div>
            </div>

            <div className="w-full bg-gradient-to-r from-[#E0B100]/15 to-white border border-[#E0B100]/25 p-7 md:p-12 rounded-[28px] md:rounded-[36px] shadow-xl transition-transform duration-300 hover:-translate-y-1.5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-4xl md:text-6xl font-serif italic text-[#B08A00] mb-2">Instant</p>
                  <p className="text-[10px] font-black text-[var(--foreground)] uppercase tracking-widest opacity-70">Alerts to school staff</p>
                </div>
                <ShieldCheck className="text-[#E0B100]/40 shrink-0" size={56} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstitutionalVault;
