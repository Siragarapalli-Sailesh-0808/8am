"use client";
import React from "react";
import Image from "next/image";
import { m } from "framer-motion";

export type FloatingCard = {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  subtitle: React.ReactNode;
};

type Props = {
  badge: { label: string; className: string };
  title: React.ReactNode;
  paragraphs: string[];
  image: { src: string; alt: string };
  cards: [FloatingCard, FloatingCard];
  imageFirst?: boolean;
  bg?: string;
};

function Card({ card, position }: { card: FloatingCard; position: "top" | "bottom" }) {
  const pos =
    position === "top"
      ? "-top-6 right-2 sm:-right-4 lg:-right-8"
      : "-bottom-6 left-2 sm:-left-4 lg:-left-8";
  return (
    <m.div
      initial={{ opacity: 0, y: position === "top" ? 16 : -16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: position === "top" ? 0.3 : 0.45, duration: 0.45 }}
      className={`absolute ${pos} z-20 flex max-w-[calc(100%-1rem)] items-center gap-3 rounded-2xl border border-gray-100 bg-white p-3 pr-4 shadow-xl sm:p-4 sm:pr-5`}
    >
      <div className={`flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full ${card.iconBg}`}>
        {card.icon}
      </div>
      <div className="min-w-0">
        <p className="truncate text-xs font-black text-[#222222]">{card.title}</p>
        <div className="text-[10px] font-bold uppercase tracking-tight">{card.subtitle}</div>
      </div>
    </m.div>
  );
}

export default function FeatureSplit({ badge, title, paragraphs, image, cards, imageFirst, bg = "bg-white" }: Props) {
  return (
    <section className={`py-20 md:py-28 ${bg} overflow-hidden`}>
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <m.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className={imageFirst ? "lg:order-2" : ""}
          >
            <div className={`mb-6 inline-flex items-center rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest ${badge.className}`}>
              {badge.label}
            </div>
            <h2 className="display-md mb-8 font-black leading-[0.95] tracking-tighter text-[#222222]">{title}</h2>
            <div className="max-w-md space-y-4">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-base font-medium leading-relaxed text-[#222222]/75">
                  {p}
                </p>
              ))}
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className={`relative mx-2 sm:mx-6 lg:mx-0 ${imageFirst ? "lg:order-1" : ""}`}
          >
            <div aria-hidden className="absolute -inset-3 rounded-[36px] bg-[#E0B100] opacity-10 -rotate-2" />
            <div className="relative overflow-hidden rounded-[28px] border-4 border-white shadow-2xl">
              <Image
                src={image.src}
                alt={image.alt}
                width={1024}
                height={1024}
                sizes="(max-width: 1024px) 90vw, 520px"
                className="h-auto w-full object-cover"
              />
            </div>
            <Card card={cards[0]} position="top" />
            <Card card={cards[1]} position="bottom" />
          </m.div>
        </div>
      </div>
    </section>
  );
}
