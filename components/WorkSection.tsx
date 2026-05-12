"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import clsx from "clsx";

interface CardProps {
  title: string;
  tag: string;
  bg: string;
  textColor?: string;
  index: number;
}

function ProjectCard({ title, tag, bg, textColor = "text-white", index }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group relative"
      style={{ width: "clamp(160px, 22vw, 240px)", height: "clamp(240px, 32vw, 360px)" }}
    >
      <div className={clsx("w-full h-full flex flex-col justify-end p-4 md:p-6", bg)}>
        <span className={clsx("text-[11px] font-medium mb-1.5 opacity-60", textColor)}>{tag}</span>
        <h3 className={clsx("font-bold leading-tight text-base md:text-lg", textColor)}>
          {title}
        </h3>
        <span className={clsx(
          "absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200",
          textColor
        )}>↗</span>
      </div>
    </motion.div>
  );
}

const cards = [
  {
    title: "Google Maps Local Guide",
    tag: "Web Design",
    bg: "bg-gradient-to-br from-yellow-400 to-yellow-500",
    textColor: "text-yellow-900",
  },
  {
    title: "TopTrader Platform",
    tag: "Branding",
    bg: "bg-[#0D0D0D]",
    textColor: "text-[#00FF9F]",
  },
  {
    title: "Morable Design Studio",
    tag: "Web Design · Brand Identity",
    bg: "bg-gradient-to-br from-[#6B4FA0] to-[#3B2060]",
    textColor: "text-white",
  },
  {
    title: "Clean UI Kit",
    tag: "UI Design",
    bg: "bg-gradient-to-br from-slate-200 to-slate-300",
    textColor: "text-slate-700",
  },
  {
    title: "CLAIM",
    tag: "Landing Page",
    bg: "bg-gradient-to-br from-[#0a1a0a] to-[#0a0015]",
    textColor: "text-[#00FF9F]",
  },
];

export default function WorkSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" className="bg-cream py-16 md:py-24 overflow-hidden">
      {/* Header */}
      <div ref={ref} className="px-4 md:px-10 mb-10 md:mb-14">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs md:text-sm font-medium text-muted mb-3 md:mb-4"
        >
          Design Expert
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-muted font-bold"
          style={{
            fontSize: "clamp(36px, 7vw, 84px)",
            lineHeight: "90%",
            letterSpacing: "-0.4px",
          }}
        >
          I help companies to
          <br />
          succeed{" "}
          <span className="text-salmon">on</span>{" "}
          <span className="text-salmon">projects like:</span>
        </motion.h2>
      </div>

      {/* Horizontal scroll strip */}
      <div
        className="flex gap-3 md:gap-4 px-4 md:px-10 overflow-x-auto pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {cards.map((card, i) => (
          <ProjectCard
            key={i}
            index={i}
            title={card.title}
            tag={card.tag}
            bg={card.bg}
            textColor={card.textColor}
          />
        ))}
      </div>
    </section>
  );
}
