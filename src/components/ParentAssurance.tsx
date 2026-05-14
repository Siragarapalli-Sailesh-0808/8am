"use client";
import React from "react";
import { motion } from "framer-motion";
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
    <section className="py-24 md:py-40 bg-[#F8F7F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* LEFT CONTENT: EDITORIAL */}
          <div className="order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#E0B100] font-black tracking-[0.4em] uppercase text-xs mb-6 block">The Parent&apos;s Window</span>
              <h2 className="text-5xl md:text-8xl font-black text-[#222222] leading-[0.9] tracking-tighter mb-10">
                Moments <br />
                <span className="italic font-serif font-normal text-[#E0B100]">of Assurance.</span>
              </h2>
              <p className="text-xl md:text-2xl text-[#222222]/60 font-medium leading-relaxed max-w-lg mb-12">
                We believe security isn&apos;t just about data—it&apos;s about the relief you feel when you know exactly where they are.
              </p>

              <div className="flex items-center space-x-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-[#F8F7F2] bg-white overflow-hidden shadow-sm">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=parent${i}`} alt="parent" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <p className="text-xs font-black text-[#222222] uppercase tracking-widest opacity-40">Trusted by 50,000+ Indian Families</p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT CONTENT: INTERACTION STACK */}
          <div className="order-2 relative py-20">
            <div className="absolute inset-0 bg-[#E0B100]/5 rounded-[60px] rotate-3 -z-10" />
            
            <div className="flex flex-col space-y-6 relative">
              {ASSURANCE_MOMENTS.map((moment, idx) => (
                <motion.div
                  key={moment.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: moment.delay }}
                  whileHover={{ x: -10, scale: 1.02 }}
                  className="bg-white p-6 md:p-8 rounded-[32px] border border-[#E8E2D3] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] group transition-all"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#FDF7E7] flex items-center justify-center text-[#E0B100] shrink-0 group-hover:bg-[#E0B100] group-hover:text-white transition-colors duration-500">
                      <moment.icon size={28} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-black text-[#E0B100] uppercase tracking-widest">{moment.subtitle}</span>
                        <span className="text-[10px] font-black text-[#222222]/20">{moment.id}</span>
                      </div>
                      <h4 className="text-xl md:text-2xl font-black text-[#222222] mb-3">{moment.title}</h4>
                      <p className="text-sm text-[#222222]/50 leading-relaxed mb-6">
                        {moment.desc}
                      </p>
                      
                      {/* MINI NOTIFICATION MOCKUP */}
                      <div className="bg-[#222222] text-white p-4 rounded-2xl flex items-center gap-4 shadow-xl">
                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                          <Smartphone size={16} className="text-[#E0B100]" />
                        </div>
                        <p className="text-[11px] font-bold tracking-tight">{moment.notification}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative Pulse */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#E0B100]/10 rounded-full blur-[100px] -z-10 animate-pulse" />
          </div>

        </div>
      </div>
    </section>
  );
}
