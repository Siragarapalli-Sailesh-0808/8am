"use client";
import React from "react";
import { m } from "framer-motion";
import { Shield, Map, Zap, Fingerprint, type LucideIcon } from "lucide-react";

type BentoCardProps = { title: string; subtitle: string; icon: LucideIcon; className?: string; delay?: number };

const BentoCard = ({ title, subtitle, icon: Icon, className = "", delay = 0 }: BentoCardProps) => (
  <m.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45, delay }}
    className={`bg-white rounded-[32px] p-7 md:p-10 border border-[#E8E2D3] flex flex-col justify-between group shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-xl ${className}`}
  >
    <div className="w-16 h-16 bg-[#E0B100]/10 rounded-2xl flex items-center justify-center text-[#E0B100] mb-8 group-hover:bg-[#E0B100] group-hover:text-[var(--card-bg)] transition-all duration-500">
      <Icon size={32} />
    </div>
    <div>
      <h3 className="text-2xl font-black mb-2 leading-tight">{title}</h3>
      <p className="text-gray-600 font-medium leading-relaxed">{subtitle}</p>
    </div>
    <div className="mt-8 h-1 w-0 bg-[#E0B100] group-hover:w-full transition-all duration-700" />
  </m.div>
);

const SafetyBento = () => {
  return (
    <section className="py-20 md:py-28 px-5 md:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-12 md:mb-16">
        <span className="text-[#B08A00] font-black tracking-[0.4em] uppercase text-xs mb-4 block">The Security Stack</span>
        <h2 className="display-lg font-black leading-[0.95]">Multi-Layered <br /> <span className="headline-italic text-[#E0B100]">Protection.</span></h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        <BentoCard 
          title="Instant RFID Alerts" 
          subtitle="A notification the moment your child taps their smart card when boarding."
          icon={Fingerprint}
          className="md:col-span-2"
          delay={0.1}
        />
        <BentoCard 
          title="Live GPS Pulse" 
          subtitle="Frequent location updates so you always see where the bus is."
          icon={Map}
          delay={0.2}
        />
        <BentoCard 
          title="Geo-Fence Security" 
          subtitle="Instant alerts if the bus deviates from its pre-approved safety corridor."
          icon={Shield}
          delay={0.3}
        />
        <BentoCard 
          title="Speed Monitoring" 
          subtitle="Automated alerts for any speed violations or sudden braking events."
          icon={Zap}
          className="md:col-span-2"
          delay={0.4}
        />
      </div>
    </section>
  );
};

export default SafetyBento;
