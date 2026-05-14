"use client";
import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Coffee, Bus, MapPin, School, Home } from "lucide-react";

const TIMELINE_EVENTS = [
  {
    time: "7:15 AM",
    title: "Morning Boarding",
    desc: "Your child taps their RFID card. You receive an instant 'Boarded' notification.",
    icon: Coffee,
    color: "#E0B100"
  },
  {
    time: "7:45 AM",
    title: "In-Transit Monitoring",
    desc: "Watch the bus move live on your high-precision map as it navigates the city.",
    icon: Bus,
    color: "#E0B100"
  },
  {
    time: "8:10 AM",
    title: "School Arrival",
    desc: "A 'Safe Arrival' confirmation alert hits your phone as the bus reaches the school gate.",
    icon: School,
    color: "#E0B100"
  },
  {
    time: "3:30 PM",
    title: "Evening Return",
    desc: "Receive an alert the moment the bus leaves the school premises for home.",
    icon: Home,
    color: "#E0B100"
  }
];

const JourneyTimeline = () => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="py-32 bg-[var(--card-bg)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start gap-20">
          <div className="w-full md:w-1/3 sticky top-32">
             <span className="text-[#E0B100] font-black tracking-[0.4em] uppercase text-xs mb-4 block">The Daily Guardian</span>
             <h2 className="text-5xl md:text-7xl font-black leading-tight mb-8">
               Your Child's Day, <br />
               <span className="italic font-serif text-[#E0B100]">Visualized.</span>
             </h2>
             <p className="text-xl text-gray-400 font-medium leading-relaxed">
               Experience the peace of mind that comes from knowing exactly where your child is, from breakfast to home-time.
             </p>
          </div>

          <div className="w-full md:w-2/3 relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-100 rounded-full">
               <motion.div 
                 style={{ scaleY, transformOrigin: "top" }}
                 className="absolute inset-0 bg-[#E0B100] shadow-[0_0_15px_rgba(255,215,0,0.5)]" 
               />
            </div>

            <div className="space-y-24">
              {TIMELINE_EVENTS.map((event, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className="flex items-start space-x-12 relative"
                >
                  <div className="z-10 w-16 h-16 bg-[var(--card-bg)] border-4 border-[#E0B100] rounded-full flex items-center justify-center text-[#E0B100] shadow-xl shrink-0 transition-transform hover:scale-110 duration-500">
                     <event.icon size={28} />
                  </div>
                  <div className="pt-2">
                     <span className="text-[#E0B100] font-black tracking-widest text-sm mb-2 block">{event.time}</span>
                     <h3 className="text-3xl font-black mb-4">{event.title}</h3>
                     <p className="text-lg text-gray-500 font-medium max-w-lg leading-relaxed">
                       {event.desc}
                     </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
