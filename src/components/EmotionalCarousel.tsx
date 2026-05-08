"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  { id: 1, name: "Anita Sharma", role: "Parent, Delhi Public School", feedback: "The real-time RFID alerts give me peace of mind every single morning.", img: "/parent1.jpg" },
  { id: 2, name: "Rajesh Iyer", role: "Principal, Oakridge International", feedback: "SAFEHOP transformed our fleet efficiency and student safety standards.", img: "/school1.jpg" },
  { id: 3, name: "Priya V.", role: "Parent, Glendale Academy", feedback: "I no longer worry about delays. The GPS tracking is incredibly accurate.", img: "/parent2.jpg" },
];

export const EmotionalCarousel = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-32 bg-[#FDFDFD] overflow-hidden px-6">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[#FFD700] font-bold tracking-[0.3em] uppercase mb-4 block"
        >
          Parent & School Stories
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-black text-black"
        >
          From our community <br />
          <span className="italic font-serif text-[#FFD700]">to everywhere.</span>
        </motion.h2>
      </div>

      <div className="relative h-[600px] flex items-center justify-center perspective-1000">
        <AnimatePresence mode="popLayout">
          {[-1, 0, 1].map((offset) => {
            const itemIndex = (index + offset + testimonials.length) % testimonials.length;
            const item = testimonials[itemIndex];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: offset * 400, scale: 0.8 }}
                animate={{
                  opacity: offset === 0 ? 1 : 0.3,
                  x: offset * 450,
                  scale: offset === 0 ? 1 : 0.7,
                  zIndex: offset === 0 ? 50 : 10,
                  rotateY: offset * 25, // 3D Inward Rotation
                  filter: offset === 0 ? "blur(0px)" : "blur(4px)"
                }}
                exit={{ opacity: 0, x: -offset * 400 }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                className="absolute w-full max-w-[500px] bg-white rounded-[40px] p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-50 flex flex-col items-center text-center"
              >
                <div className="w-28 h-28 rounded-full overflow-hidden mb-8 border-4 border-[#FFD700] shadow-xl">
                  {/* High-res image placeholder with fallback */}
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${item.name}`}
                    alt={item.name}
                    className="w-full h-full object-cover bg-gray-100"
                  />
                </div>
                <h3 className="text-3xl font-black text-black mb-2">{item.name}</h3>
                <p className="text-[#FFD700] text-sm font-bold uppercase tracking-widest mb-6">{item.role}</p>
                <p className="text-xl text-[#555555] font-medium italic leading-relaxed mb-10">
                  "{item.feedback}"
                </p>
                <button className="group flex items-center space-x-2 text-sm font-black uppercase tracking-tighter border-b-2 border-black pb-1 hover:border-[#FFD700] transition-all">
                  <span>Read Full Story</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* CUSTOM 80-LAKH NAVIGATION BUTTONS */}
      <div className="flex justify-center items-center space-x-12 mt-16">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prev}
          className="p-5 rounded-full border-2 border-black/10 text-black hover:bg-[#FFD700] hover:border-[#FFD700] transition-all duration-300"
        >
          <ChevronLeft size={32} />
        </motion.button>
        <div className="flex space-x-2">
          {testimonials.map((_, i) => (
            <motion.div
              key={i}
              animate={{
                width: i === index ? 32 : 8,
                backgroundColor: i === index ? "#FFD700" : "#E5E7EB"
              }}
              className="h-2 rounded-full"
            />
          ))}
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={next}
          className="p-5 rounded-full border-2 border-black/10 text-black hover:bg-[#FFD700] hover:border-[#FFD700] transition-all duration-300"
        >
          <ChevronRight size={32} />
        </motion.button>
      </div>
    </section>
  );
};

export default EmotionalCarousel;
