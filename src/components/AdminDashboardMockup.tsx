"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  Users, 
  GraduationCap, 
  FileText, 
  DollarSign, 
  MessageSquare, 
  Settings, 
  Search, 
  Bell, 
  User,
  Plus,
  Minus
} from "lucide-react";

const AdminDashboardMockup = () => {
  return (
    <div className="relative w-full max-w-[900px] h-[550px] bg-white rounded-xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] overflow-hidden flex font-sans border border-gray-200">
      
      {/* SIDEBAR */}
      <div className="w-[180px] bg-[#E0B100] h-full flex flex-col p-4 text-[#222222]">
        <div className="flex items-center space-x-2 mb-8 px-2">
          <div className="bg-[#222222] p-1.5 rounded-lg">
             <LayoutDashboard size={16} className="text-[#E0B100]" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-tight leading-none">Fleet Management</p>
            <p className="text-[8px] font-bold opacity-60">Admin</p>
          </div>
        </div>

        <div className="space-y-1">
          {[
            { icon: LayoutDashboard, label: "Dashboard", active: true },
            { icon: Users, label: "Staff" },
            { icon: GraduationCap, label: "Students" },
            { icon: FileText, label: "Admissions" },
            { icon: DollarSign, label: "Finance" },
            { icon: MessageSquare, label: "Communications" },
            { icon: Settings, label: "System Settings" },
          ].map((item, i) => (
            <div 
              key={i} 
              className={`flex items-center space-x-3 px-3 py-2.5 rounded-xl transition-colors cursor-pointer ${
                item.active ? "bg-[#222222]/10 font-bold" : "hover:bg-[#222222]/5"
              }`}
            >
              <item.icon size={16} />
              <span className="text-[10px] uppercase tracking-wide">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col bg-gray-50">
        
        {/* TOP HEADER */}
        <div className="h-14 bg-white border-b border-gray-100 flex items-center justify-between px-6">
           <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
              <input 
                type="text" 
                placeholder="Search vehicles, drivers, routes..." 
                className="w-full bg-gray-50 border border-gray-200 rounded-lg py-1.5 pl-10 pr-4 text-[10px] focus:outline-none focus:border-[#E0B100]"
              />
           </div>
           <div className="flex items-center space-x-6">
              <Bell size={18} className="text-gray-400 cursor-pointer" />
              <div className="flex items-center space-x-3">
                 <div className="text-right">
                    <p className="text-[10px] font-black text-[#222222]">A. Chen</p>
                    <p className="text-[8px] font-bold text-gray-400">Administrator</p>
                 </div>
                 <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Chen" alt="Profile" />
                 </div>
              </div>
           </div>
        </div>

        {/* DASHBOARD CONTENT */}
        <div className="p-6 flex-1 flex flex-col space-y-6 overflow-hidden">
           <h2 className="text-xl font-black text-[#222222]">Real-time Fleet Operations</h2>

           {/* MAP VIEW */}
           <div className="flex-1 bg-[#FDF7E7] rounded-2xl border border-gray-200 relative overflow-hidden shadow-inner">
              {/* Grid Overlay */}
              <div className="absolute inset-0 opacity-[0.05]">
                <svg width="100%" height="100%">
                  <pattern id="mapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E0B100" strokeWidth="1" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#mapGrid)" />
                </svg>
              </div>

              {/* Styled Road Simulation */}
              <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 800 400">
                <path d="M0 100 L 200 100 L 200 300 L 600 300 L 600 50 L 800 50" fill="none" stroke="#E0B100" strokeWidth="20" strokeLinecap="round" />
                <path d="M100 0 L 100 400 M 400 0 L 400 400 M 700 0 L 700 400" fill="none" stroke="#E0B100" strokeWidth="2" strokeDasharray="10 10" />
              </svg>

              {/* Interactive Bus Markers */}
              {[
                { x: "15%", y: "20%", id: "10" },
                { x: "45%", y: "30%", id: "4" },
                { x: "75%", y: "15%", id: "21" },
                { x: "30%", y: "60%", id: "7" },
                { x: "60%", y: "75%", id: "13" },
                { x: "50%", y: "45%", id: "12", active: true },
              ].map((bus, i) => (
                <motion.div 
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute cursor-pointer"
                  style={{ left: bus.x, top: bus.y }}
                >
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-black border-2 border-white shadow-lg ${
                    bus.active ? "bg-[#222222] text-[#E0B100]" : "bg-[#E0B100] text-[#222222]"
                  }`}>
                    {bus.id}
                  </div>
                  {bus.active && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-30">
                       <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-4 w-48 animate-in fade-in slide-in-from-top-2">
                          <div className="flex items-center space-x-3 mb-3 pb-2 border-b border-gray-50">
                             <div className="w-8 h-8 rounded-lg bg-gray-100 overflow-hidden">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Driver" alt="Driver" />
                             </div>
                             <div>
                                <p className="text-[10px] font-black">Bus 12</p>
                                <p className="text-[8px] font-bold text-green-500">On Time</p>
                             </div>
                          </div>
                          <div className="space-y-2">
                             <div className="flex justify-between">
                                <span className="text-[8px] text-gray-400 font-bold uppercase">Speed</span>
                                <span className="text-[8px] font-black">28 km/h</span>
                             </div>
                             <div className="flex justify-between">
                                <span className="text-[8px] text-gray-400 font-bold uppercase">Students</span>
                                <span className="text-[8px] font-black">18/25</span>
                             </div>
                             <div className="flex justify-between">
                                <span className="text-[8px] text-gray-400 font-bold uppercase">ETD</span>
                                <span className="text-[8px] font-black">14:32</span>
                             </div>
                          </div>
                       </div>
                       <div className="w-3 h-3 bg-white border-l border-t border-gray-100 rotate-45 mx-auto -mt-1.5" />
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Map Controls */}
              <div className="absolute left-4 top-4 bg-white border border-gray-200 rounded-lg flex flex-col shadow-md">
                 <button className="p-1.5 border-b border-gray-100 hover:bg-gray-50"><Plus size={14} /></button>
                 <button className="p-1.5 hover:bg-gray-50"><Minus size={14} /></button>
              </div>
           </div>

           {/* BOTTOM STATS ROW */}
           <div className="grid grid-cols-4 gap-4">
              {[
                { label: "Vehicles On-Road", value: "22", sub: "(+1)", active: true },
                { label: "Drivers Active", value: "18", sub: "" },
                { label: "Student Passengers", value: "485", sub: "" },
                { label: "Route Delay Events", value: "3", sub: "" },
              ].map((stat, i) => (
                <div key={i} className={`p-4 rounded-xl border transition-all ${
                  stat.active ? "bg-[#E0B100] border-[#E0B100] text-[#222222]" : "bg-white border-gray-200 text-[#222222]"
                }`}>
                  <p className="text-[8px] font-black uppercase tracking-tight opacity-60 mb-1">{stat.label}</p>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-xl font-black">{stat.value}</span>
                    {stat.sub && <span className="text-[10px] font-bold">{stat.sub}</span>}
                  </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardMockup;
