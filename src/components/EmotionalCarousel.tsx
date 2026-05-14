"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  { id: 1, name: "Anita Sharma", role: "Parent, Delhi Public School", feedback: "The real-time RFID alerts give me peace of mind every single morning.", img: "/parent1.jpg" },
  { id: 2, name: "Rajesh Iyer", role: "Principal, Oakridge International", feedback: "8AM transformed our fleet efficiency and student safety standards.", img: "/school1.jpg" },
  { id: 3, name: "Priya V.", role: "Parent, Glendale Academy", feedback: "I no longer worry about delays. The GPS tracking is incredibly accurate.", img: "/parent2.jpg" },
];

export const EmotionalCarousel = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-32 bg-[#F8F7F2] overflow-hidden px-6">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[#E0B100] font-bold tracking-[0.3em] uppercase mb-4 block"
        >
          Parent & School Stories
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-black text-[var(--foreground)]"
        >
          From our community <br />
          <span className="italic font-serif text-[#E0B100]">to everywhere.</span>
        </motion.h2>
      </div>

      <div className="relative max-w-7xl mx-auto h-[600px] flex items-center justify-center perspective-1000">
        {/* SIDE NAVIGATION BUTTONS */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between items-center z-[100] pointer-events-none px-4 md:px-0">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prev}
            className="pointer-events-auto p-6 rounded-full bg-[var(--card-bg)]/80 backdrop-blur-md border-2 border-[#E0B100]/5 text-[var(--foreground)] shadow-xl hover:bg-[#E0B100] hover:border-[#E0B100] transition-all duration-300 -ml-4 lg:-ml-20"
          >
            <ChevronLeft size={32} />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={next}
            className="pointer-events-auto p-6 rounded-full bg-[var(--card-bg)]/80 backdrop-blur-md border-2 border-[#E0B100]/5 text-[var(--foreground)] shadow-xl hover:bg-[#E0B100] hover:border-[#E0B100] transition-all duration-300 -mr-4 lg:-mr-20"
          >
            <ChevronRight size={32} />
          </motion.button>
        </div>

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
                className="absolute w-full max-w-[500px] bg-[var(--card-bg)] rounded-[40px] p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-[#E8E2D3] flex flex-col items-center text-center"
              >
                <div className="w-28 h-28 rounded-full overflow-hidden mb-8 border-4 border-[#E0B100] shadow-xl">
                  {/* High-res image placeholder with fallback */}
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${item.name}`}
                    alt={item.name}
                    className="w-full h-full object-cover bg-gray-100"
                  />
                </div>
                <h3 className="text-3xl font-black text-[var(--foreground)] mb-2">{item.name}</h3>
                <p className="text-[#E0B100] text-sm font-bold uppercase tracking-widest mb-6">{item.role}</p>
                <p className="text-xl text-[var(--foreground)] font-medium italic leading-relaxed mb-10">
                  "{item.feedback}"
                </p>
                <button className="group flex items-center space-x-2 text-sm font-black uppercase tracking-tighter border-b-2 border-[#E0B100] pb-1 hover:border-[#E0B100] transition-all">
                  <span>Read Full Story</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* PAGINATION DOTS ONLY */}
      <div className="flex justify-center items-center mt-16">
        <div className="flex space-x-3">
          {testimonials.map((_, i) => (
            <motion.div
              key={i}
              animate={{
                width: i === index ? 40 : 10,
                backgroundColor: i === index ? "#E0B100" : "#E8E2D3"
              }}
              className="h-2 rounded-full transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmotionalCarousel;
