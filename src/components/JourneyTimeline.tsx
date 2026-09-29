"use client";
import React from "react";
import { m, useScroll, useSpring } from "framer-motion";
import { Coffee, Bus, School, Home } from "lucide-react";

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
    <section ref={containerRef} className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-20">
          <div className="w-full md:w-1/3 md:sticky md:top-32 mb-12 md:mb-0">
             <span className="text-[#B08A00] font-black tracking-[0.4em] uppercase text-xs mb-4 block">The Daily Guardian</span>
             <h2 className="display-lg font-black leading-[0.95] mb-8 tracking-tighter">
                Your Child&apos;s Day, <br />
                <span className="headline-italic text-[#E0B100]">Visualized.</span>
             </h2>
             <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed max-w-sm md:max-w-none">
                Experience the peace of mind that comes from knowing exactly where your child is, from breakfast to home-time.
             </p>
          </div>

          <div className="w-full md:w-2/3 relative pl-2">
            {/* Timeline Line (Adjusted for mobile icon center) */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-1 bg-gray-100 rounded-full">
               <m.div 
                 style={{ scaleY, transformOrigin: "top" }}
                 className="absolute inset-0 bg-[#E0B100] " 
               />
            </div>

            <div className="space-y-16 md:space-y-24">
              {TIMELINE_EVENTS.map((event, idx) => (
                <m.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  className="flex items-start space-x-6 md:space-x-12 relative"
                >
                  {/* Responsive Icon Circle */}
                  <div className="z-10 w-12 h-12 md:w-16 md:h-16 bg-[var(--card-bg)] border-2 md:border-4 border-[#E0B100] rounded-full flex items-center justify-center text-[#E0B100] shadow-xl shrink-0 ">
                     <event.icon size={22} className="md:hidden" />
                     <event.icon size={28} className="hidden md:block" />
                  </div>
                  <div className="pt-1 md:pt-2">
                     <span className="text-[#B08A00] font-black tracking-widest text-[10px] md:text-sm mb-2 block">{event.time}</span>
                     <h3 className="text-xl md:text-3xl font-black mb-3 md:mb-4">{event.title}</h3>
                     <p className="text-base md:text-lg text-gray-600 font-medium max-w-lg leading-relaxed">
                        {event.desc}
                     </p>
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
