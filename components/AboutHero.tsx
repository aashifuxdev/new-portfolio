"use client";

import { motion } from "framer-motion";

const techStack = [
  "Figma",
  "Webflow",
  "GSAP",
  "AE/Lottie",
  "Lenis Scroll",
];

export default function AboutHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-dark-warm flex flex-col">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brown-warm via-dark-warm to-[#0A0705]" />

      {/* Top-right tech stack */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute top-24 right-6 md:right-10 text-right z-20"
      >
        <p className="text-cream/40 text-xs mb-3">Website made using:</p>
        <ul className="space-y-1">
          {techStack.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
              className="text-cream/70 text-sm"
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Center avatar placeholder */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-48 h-48 md:w-72 md:h-72 rounded-full bg-gradient-to-b from-[#3D2010] to-[#1A1008] border border-white/10 flex items-center justify-center overflow-hidden"
        >
          {/* 3D avatar placeholder — replace with <Image> when asset is ready */}
          <div className="text-cream/20 text-center p-4">
            <div className="w-20 h-20 mx-auto mb-2 rounded-full bg-white/5 border border-white/10" />
            <p className="text-xs">Avatar placeholder</p>
          </div>
        </motion.div>
      </div>

      {/* Split name */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-4 md:px-6 overflow-hidden z-20">
        <div className="flex flex-col">
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-xl font-bold text-salmon leading-none select-none"
          >
            Juan
          </motion.span>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-salmon/60 text-sm mb-8"
          >
            Freelance Design Director&nbsp;&nbsp;2026
          </motion.p>
        </div>

        <div className="flex flex-col items-end">
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-xl font-bold text-salmon leading-none select-none"
          >
            Mora
          </motion.span>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-salmon/60 text-sm mb-8"
          >
            Morable Design Studio&nbsp;
            <span className="text-salmon/40">[Coming Soon]</span>
          </motion.p>
        </div>
      </div>
    </section>
  );
}
