"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import clsx from "clsx";

interface CardProps {
  title: string;
  tag: string;
  bg: string;
  textColor?: string;
  half?: boolean;
  index: number;
}

function ProjectCard({ title, tag, bg, textColor = "text-white", half = false, index }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.09 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={clsx(
        "rounded-2xl overflow-hidden cursor-pointer group relative",
        half ? "col-span-2 md:col-span-1" : "col-span-2",
        "min-h-[480px]"
      )}
    >
      <div className={clsx("w-full h-full flex flex-col justify-end p-6 md:p-8 min-h-[480px]", bg)}>
        <span className={clsx("text-xs font-medium mb-2 opacity-60", textColor)}>{tag}</span>
        <h3 className={clsx("font-bold leading-tight text-xl md:text-2xl", textColor)}>
          {title}
        </h3>
        <span className={clsx(
          "absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-lg",
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
    half: false,
  },
  {
    title: "TopTrader Platform",
    tag: "Branding",
    bg: "bg-[#0D0D0D]",
    textColor: "text-[#00FF9F]",
    half: false,
  },
  {
    title: "Morable Design Studio",
    tag: "Web Design · Brand Identity",
    bg: "bg-gradient-to-br from-[#E8855A] to-[#C4593A]",
    textColor: "text-white",
    half: true,
  },
  {
    title: "Clean UI Kit",
    tag: "UI Design",
    bg: "bg-gradient-to-br from-slate-200 to-slate-300",
    textColor: "text-slate-700",
    half: true,
  },
  {
    title: "CLAIM",
    tag: "Landing Page",
    bg: "bg-gradient-to-br from-[#1a0533] to-[#0a0015]",
    textColor: "text-white",
    half: false,
  },
];

export default function WorkSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" className="bg-cream py-16 md:py-24 px-4 md:px-10">
      <div ref={ref} className="mb-10 md:mb-14">
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
            fontSize: "clamp(40px, 7vw, 84px)",
            lineHeight: "90%",
            letterSpacing: "-0.4px",
          }}
        >
          I help companies to
          <br />
          succeed on projects like:
        </motion.h2>
      </div>

      <div className="grid grid-cols-2 gap-3 md:gap-4 w-full">
        {cards.map((card, i) => (
          <ProjectCard
            key={i}
            index={i}
            title={card.title}
            tag={card.tag}
            bg={card.bg}
            textColor={card.textColor}
            half={card.half}
          />
        ))}
      </div>
    </section>
  );
}
