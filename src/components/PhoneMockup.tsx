"use client";
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Bell, ShieldCheck, Clock } from "lucide-react";

const PhoneMockup = () => {
  return (
    <div className="relative w-[300px] h-[600px] bg-white rounded-[60px] border-[12px] border-[#000000] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#000000] rounded-b-3xl z-50" />
      
      {/* Screen Content */}
      <div className="h-full w-full bg-[#F9F9F9] flex flex-col pt-12">
        {/* Header */}
        <div className="px-6 flex justify-between items-center mb-6">
          <div className="text-sm font-black">SAFEHOP</div>
          <div className="flex space-x-1">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
             <span className="text-[10px] font-bold text-gray-400">LIVE</span>
          </div>
        </div>

        {/* Map Area */}
        <div className="flex-1 bg-white mx-4 rounded-3xl overflow-hidden relative border border-gray-100 shadow-inner">
           {/* Grid Pattern */}
           <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%">
                <pattern id="phoneGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#000000" strokeWidth="1" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#phoneGrid)" />
              </svg>
           </div>

           {/* Bus Path */}
           <svg className="absolute inset-0 h-full w-full" viewBox="0 0 200 300">
             <motion.path
               d="M40 250 Q 100 200 160 250 T 160 100"
               stroke="#FFD700"
               strokeWidth="4"
               strokeLinecap="round"
               strokeDasharray="10 10"
               initial={{ pathLength: 0 }}
               animate={{ pathLength: 1 }}
               transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
               fill="none"
             />
             <motion.circle 
               r="6" 
               fill="#FFD700"
               animate={{ 
                 cx: [40, 100, 160, 160], 
                 cy: [250, 200, 250, 100] 
               }}
               transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
               stroke="white"
               strokeWidth="2"
             />
           </svg>

           {/* Labels */}
           <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold shadow-sm border border-gray-100">
              Bus #42 • Moving
           </div>
        </div>

        {/* Notification Panel */}
        <div className="p-4 space-y-3">
           <motion.div 
             initial={{ x: 20, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ delay: 1 }}
             className="bg-white p-3 rounded-2xl shadow-sm border border-gray-50 flex items-center space-x-3"
           >
              <div className="w-8 h-8 bg-[#FFD700] rounded-full flex items-center justify-center text-white">
                 <Bell size={16} />
              </div>
              <div>
                 <p className="text-[10px] font-black uppercase text-[#FFD700]">Boarded</p>
                 <p className="text-[11px] font-bold">Child is on the bus</p>
              </div>
           </motion.div>

           <motion.div 
             initial={{ x: 20, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ delay: 2 }}
             className="bg-[#000000] p-3 rounded-2xl shadow-lg flex items-center space-x-3"
           >
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
                 <ShieldCheck size={16} />
              </div>
              <div className="text-white">
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
