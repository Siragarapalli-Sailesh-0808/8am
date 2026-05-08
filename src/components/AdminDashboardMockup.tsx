"use client";
import React from "react";
import { motion } from "framer-motion";
import { Map, Users, Shield, Bell } from "lucide-react";

const AdminDashboardMockup = () => {
  return (
    <div className="relative w-full max-w-[700px] h-[450px] bg-white rounded-[32px] border-[8px] border-[#3B2F00]/5 shadow-[0_60px_120px_-30px_rgba(61,43,31,0.15)] overflow-hidden">
      {/* Top Bar */}
      <div className="h-12 bg-white border-b border-gray-100 flex items-center px-6 justify-between">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="text-[10px] font-black tracking-widest text-[#3B2F00]/40 uppercase">SafeHop Admin Console</div>
        <div className="w-8 h-8 rounded-full bg-[#FFD700]/20" />
      </div>

      <div className="flex h-full">
        {/* Sidebar */}
        <div className="w-16 border-r border-gray-50 flex flex-col items-center py-8 space-y-8 bg-[#FDFDFD]">
          <Map size={20} className="text-[#FFD700]" />
          <Users size={20} className="text-gray-300" />
          <Shield size={20} className="text-gray-300" />
          <Bell size={20} className="text-gray-300" />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 bg-[#FDFDFD]">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h4 className="text-2xl font-black text-[#3B2F00]">Live Fleet</h4>
              <p className="text-xs font-bold text-gray-400">12 Active Buses • All Synchronized</p>
            </div>
            <div className="px-4 py-2 bg-green-500/10 rounded-full flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-black text-green-600 uppercase">System Optimal</span>
            </div>
          </div>

          {/* Map Simulation */}
          <div className="w-full h-48 bg-white rounded-3xl border border-gray-100 relative overflow-hidden shadow-inner">
             {/* Grid */}
             <div className="absolute inset-0 opacity-[0.03]">
                <svg width="100%" height="100%">
                  <pattern id="adminGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3B2F00" strokeWidth="1" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#adminGrid)" />
                </svg>
             </div>

             {/* Animated Bus Markers */}
             {[
               { x: "20%", y: "40%", id: "B1" },
               { x: "60%", y: "20%", id: "B2" },
               { x: "40%", y: "70%", id: "B3" }
             ].map((bus, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, scale: 0 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ delay: i * 0.2 }}
                 className="absolute w-6 h-6 bg-[#FFD700] rounded-full border-2 border-white shadow-lg flex items-center justify-center text-[8px] font-black"
                 style={{ left: bus.x, top: bus.y }}
               >
                 {bus.id}
               </motion.div>
             ))}

             {/* Pulse Effect */}
             <motion.div 
               animate={{ scale: [1, 2, 1], opacity: [0.3, 0, 0.3] }}
               transition={{ duration: 3, repeat: Infinity }}
               className="absolute left-[20%] top-[40%] w-12 h-12 -ml-3 -mt-3 bg-[#FFD700] rounded-full"
             />
          </div>

          {/* Mini Stats */}
          <div className="grid grid-cols-2 gap-4 mt-6">
             <div className="p-4 bg-white rounded-2xl border border-gray-50 flex items-center justify-between">
                <div>
                   <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Active Students</p>
                   <p className="text-lg font-black text-[#3B2F00]">1,240</p>
                </div>
                <div className="w-2 h-8 bg-gray-100 rounded-full overflow-hidden">
                   <motion.div 
                     animate={{ height: "85%" }}
                     className="w-full bg-[#FFD700]"
                   />
                </div>
             </div>
             <div className="p-4 bg-white rounded-2xl border border-gray-50 flex items-center justify-between">
                <div>
                   <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest">On-Time Rate</p>
                   <p className="text-lg font-black text-[#3B2F00]">99.2%</p>
                </div>
                <div className="w-2 h-8 bg-gray-100 rounded-full overflow-hidden">
                   <motion.div 
                     animate={{ height: "99%" }}
                     className="w-full bg-[#FFD700]"
                   />
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardMockup;
