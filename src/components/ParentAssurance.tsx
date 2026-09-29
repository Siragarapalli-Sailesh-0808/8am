"use client";
import React from "react";
import { m } from "framer-motion";
import { Bell, MapPin, CheckCircle2, Smartphone } from "lucide-react";

const ASSURANCE_MOMENTS = [
  {
    id: "01",
    title: "The Morning Handshake",
    subtitle: "Real-time Boarding",
    desc: "The second your child taps their RFID card, a secure alert hits your phone. No more wondering if they made the bus.",
    icon: Bell,
    notification: "Aarav has boarded Bus 04 • 7:12 AM",
    delay: 0.1
  },
  {
    id: "02",
    title: "The Invisible Guardian",
    subtitle: "Proximity Intelligence",
    desc: "Receive a precise '2-minute arrival' alert before the bus reaches your gate. Perfect for busy Indian mornings.",
    icon: MapPin,
    notification: "Bus 04 is 200m away • Preparing for arrival",
    delay: 0.2
  },
  {
    id: "03",
    title: "The Safe Return",
    subtitle: "Campus Arrival",
    desc: "Close the loop with a final confirmation the moment the bus enters the school premises. Total peace of mind, every day.",
    icon: CheckCircle2,
    notification: "Safe Arrival Confirmed at School • 8:10 AM",
    delay: 0.3
  }
];

export default function ParentAssurance() {
  return (
    <section className="py-20 md:py-28 bg-[#F8F7F2] overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT CONTENT: EDITORIAL */}
          <div className="order-1">
            <m.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <span className="text-[#B08A00] font-black tracking-[0.4em] uppercase text-xs mb-6 block">The Parent&apos;s Window</span>
              <h2 className="display-lg font-black text-[#222222] leading-[0.95] tracking-tighter mb-8">
                Moments <br />
                <span className="italic font-serif font-normal text-[#E0B100]">of Assurance.</span>
              </h2>
              <p className="text-lg md:text-xl text-[#222222]/70 font-medium leading-relaxed max-w-lg mb-10">
                We believe security isn&apos;t just about data—it&apos;s about the relief you feel when you know exactly where they are.
              </p>

              <p className="text-xs font-black text-[#222222]/60 uppercase tracking-widest">Free for parents at partner schools</p>
            </m.div>
          </div>

          {/* RIGHT CONTENT: INTERACTION STACK */}
          <div className="order-2 relative py-6 lg:py-12">
            <div aria-hidden className="absolute inset-0 bg-[#E0B100]/5 rounded-[48px] rotate-2 -z-10" />
            
            <div className="flex flex-col space-y-6 relative">
              {ASSURANCE_MOMENTS.map((moment) => (
                <m.div
                  key={moment.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: moment.delay }}
                  className="bg-white p-5 sm:p-6 md:p-8 rounded-[28px] border border-[#E8E2D3] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] group transition-transform duration-300 hover:-translate-x-1.5"
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#FDF7E7] flex items-center justify-center text-[#E0B100] shrink-0 group-hover:bg-[#E0B100] group-hover:text-white transition-colors duration-500">
                      <moment.icon size={28} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-black text-[#B08A00] uppercase tracking-widest">{moment.subtitle}</span>
                        <span className="text-[10px] font-black text-[#222222]/30">{moment.id}</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-black text-[#222222] mb-3 leading-tight">{moment.title}</h3>
                      <p className="text-sm text-[#222222]/70 leading-relaxed mb-5">
                        {moment.desc}
                      </p>
                      
                      {/* MINI NOTIFICATION MOCKUP */}
                      <div className="bg-[#222222] text-white p-4 rounded-2xl flex items-center gap-4 shadow-xl">
                        <div className="w-8 h-8 shrink-0 rounded-lg bg-white/10 flex items-center justify-center">
                          <Smartphone size={16} className="text-[#E0B100]" />
                        </div>
                        <p className="text-[11px] font-bold tracking-tight min-w-0">{moment.notification}</p>
                      </div>
                    </div>
                  </div>
                </m.div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
