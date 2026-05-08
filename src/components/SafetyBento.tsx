"use client";
import React from "react";
import { motion } from "framer-motion";
import { Shield, Map, Zap, Bell, Fingerprint } from "lucide-react";

const BentoCard = ({ title, subtitle, icon: Icon, className, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    whileHover={{ y: -10, boxShadow: "0 40px 80px -20px rgba(255, 215, 0, 0.15)" }}
    className={`bg-white rounded-[40px] p-10 border border-gray-100 flex flex-col justify-between group transition-all duration-500 ${className}`}
  >
    <div className="w-16 h-16 bg-[#FFD700]/10 rounded-2xl flex items-center justify-center text-[#FFD700] mb-8 group-hover:scale-110 group-hover:bg-[#FFD700] group-hover:text-white transition-all duration-500">
      <Icon size={32} />
    </div>
    <div>
      <h3 className="text-2xl font-black mb-2 leading-tight">{title}</h3>
      <p className="text-gray-400 font-medium leading-relaxed">{subtitle}</p>
    </div>
    <div className="mt-8 h-1 w-0 bg-[#FFD700] group-hover:w-full transition-all duration-700" />
  </motion.div>
);

const SafetyBento = () => {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <span className="text-[#FFD700] font-black tracking-[0.4em] uppercase text-xs mb-4 block">The Security Stack</span>
        <h2 className="text-5xl md:text-8xl font-black leading-[0.9]">Multi-Layered <br /> <span className="italic font-serif text-[#FFD700]">Protection.</span></h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <BentoCard 
          title="Instant RFID Alerts" 
          subtitle="Notification triggered the millisecond your child taps their smart card upon boarding."
          icon={Fingerprint}
          className="md:col-span-2"
          delay={0.1}
        />
        <BentoCard 
          title="Live GPS Pulse" 
          subtitle="Ultra-low latency tracking with 5-second refresh intervals."
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
