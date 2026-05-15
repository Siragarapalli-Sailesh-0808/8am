"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Clock } from "lucide-react";

export default function StudentsArrive() {
  return (
    <section className="py-24 md:py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* LEFT CONTENT */}
          <div className="order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-black uppercase tracking-widest mb-8">
                Reliability
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-[#222222] leading-[0.9] tracking-tighter mb-10">
                Students arrive <br />
                on time and <span className="headline-italic text-[#E0B100]">ready to learn</span>
              </h2>
              <div className="space-y-6 max-w-lg">
                <p className="text-base md:text-lg text-[#222222]/70 font-medium leading-relaxed">
                  Drivers and transportation teams have the right information and tools to focus on safe driving and the student experience.
                </p>
                <p className="text-base md:text-lg text-[#222222]/70 font-medium leading-relaxed">
                  Dispatchers are empowered to coordinate routing and dispatch dynamically to prevent delays. Students&apos; ride times are shortened, reducing missed school breakfasts and late arrivals to class.
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="order-2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              {/* Main Image with Yellow Backdrop */}
              <div className="absolute -inset-4 bg-[#E0B100] rounded-[40px] opacity-10 -rotate-2" />
              <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="/indian_school_bus.png" 
                  alt="Indian students arriving at school" 
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating UI Card 1: Student Status */}
              <motion.div
                initial={{ opacity: 0, y: 20, x: 20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -top-10 -right-4 md:-right-10 bg-white p-4 md:p-6 rounded-2xl shadow-2xl border border-gray-100 flex items-center space-x-4 z-20"
              >
                <div className="w-12 h-12 bg-green-50 rounded-full overflow-hidden border-2 border-green-100">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=student1" alt="student" />
                </div>
                <div>
                  <p className="text-xs font-black text-[#222222]">Arjun Mehra</p>
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-bold text-gray-400 uppercase">Grade 5</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span className="flex items-center text-[10px] font-black text-green-600 uppercase tracking-tighter">
                      <CheckCircle2 size={10} className="mr-1" /> Picked Up
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Floating UI Card 2: Driver Status */}
              <motion.div
                initial={{ opacity: 0, y: -20, x: -20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="absolute -bottom-6 -left-4 md:-left-10 bg-white p-4 md:p-6 rounded-2xl shadow-2xl border border-gray-100 flex items-center space-x-4 z-20"
              >
                <div className="w-12 h-12 bg-[#FDF7E7] rounded-full overflow-hidden border-2 border-[#E0B100]/20">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=driver1" alt="driver" />
                </div>
                <div>
                  <p className="text-xs font-black text-[#222222]">Rajesh Kumar</p>
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-bold text-gray-400 uppercase">Bus 04</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span className="flex items-center text-[10px] font-black text-[#E0B100] uppercase tracking-tighter">
                      <Clock size={10} className="mr-1" /> Arriving Now
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
