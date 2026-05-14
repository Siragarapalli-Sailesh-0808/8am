"use client";
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Bell, ShieldCheck, Clock } from "lucide-react";

const PhoneMockup = () => {
  return (
    <div className="relative w-[300px] h-[600px] bg-[var(--card-bg)] rounded-[60px] border-[12px] border-[#000000] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#000000] rounded-b-3xl z-50" />
      
      {/* Screen Content */}
      <div className="h-full w-full bg-[#F9F9F9] flex flex-col pt-12">
        {/* Header */}
        <div className="px-6 flex justify-between items-center mb-6">
          <div className="text-sm font-black">8AM</div>
          <div className="flex space-x-1">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
             <span className="text-[10px] font-bold text-gray-400">LIVE</span>
          </div>
        </div>

        {/* Live Tracking View */}
        <div className="flex-1 bg-[var(--card-bg)] mx-4 rounded-3xl overflow-hidden relative border border-gray-100 shadow-inner">
           <video 
             src="/portal_preview.mp4"
             autoPlay 
             loop 
             muted 
             playsInline 
             className="absolute inset-0 w-full h-full object-cover"
           />

           {/* Overlay Labels */}
           <div className="absolute top-4 left-4 bg-[var(--card-bg)]/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold shadow-sm border border-gray-100 z-10 text-[#222222]">
              Bus #42 • Live Tracking
           </div>
        </div>

        {/* Notification Panel */}
        <div className="p-4 space-y-3">
           <motion.div 
             initial={{ x: 20, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ delay: 1 }}
             className="bg-[var(--card-bg)] p-3 rounded-2xl shadow-sm border border-gray-50 flex items-center space-x-3"
           >
              <div className="w-8 h-8 bg-[#E0B100] rounded-full flex items-center justify-center text-[var(--card-bg)]">
                 <Bell size={16} />
              </div>
              <div>
                 <p className="text-[10px] font-black uppercase text-[#E0B100]">Boarded</p>
                 <p className="text-[11px] font-bold">Child is on the bus</p>
              </div>
           </motion.div>

           <motion.div 
             initial={{ x: 20, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ delay: 2 }}
             className="bg-[#000000] p-3 rounded-2xl shadow-lg flex items-center space-x-3"
           >
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-[var(--card-bg)]">
                 <ShieldCheck size={16} />
              </div>
              <div className="text-[var(--card-bg)]">
                 <p className="text-[10px] font-black uppercase text-green-500">Arrived</p>
                 <p className="text-[11px] font-bold">Safe at School Gate</p>
              </div>
           </motion.div>
        </div>
      </div>

      {/* Home Bar */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#000000] rounded-full opacity-20" />
    </div>
  );
};

export default PhoneMockup;
