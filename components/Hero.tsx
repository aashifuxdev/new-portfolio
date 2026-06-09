"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Spring-smoothed cursor 0 (left) → 1 (right)
  const cursorX = useSpring(0.5, { stiffness: 60, damping: 20, mass: 0.6 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    cursorX.set((e.clientX - rect.left) / rect.width);
  };

  // Flex-grow values — AASHIF grows right, ALI grows left
  // cursor left  → AASHIF flex 1 (small), ALI flex 4 (large)
  // cursor right → AASHIF flex 4 (large), ALI flex 1 (small)
  // SVG fills 100% of its container → scales with flex, never clips
  const aashifFlex = useTransform(cursorX, [0, 1], [1, 4]);
  const aliFlex    = useTransform(cursorX, [0, 1], [4, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100dvh] w-full overflow-hidden"
      style={{ cursor: "none" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => cursorX.set(0.5)}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover object-center"
          style={{ filter: "brightness(0.55)" }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

      {/* Design Engineer label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute top-20 md:top-24 left-4 md:left-10 z-20
                   text-salmon text-xs font-medium tracking-widest uppercase"
      >
        Design Engineer
      </motion.p>

      {/* Bottom row — names scale with flex, image is fixed */}
      <div className="absolute bottom-0 left-0 right-0 z-20 flex items-end">

        {/* AASHIF — scales up/down, always fully visible */}
        <motion.div
          className="flex items-end pb-1 pl-2 md:pl-4"
          style={{ flex: aashifFlex, minWidth: 0 }}
        >
          <img
            src="/aashif.svg"
            alt="AASHIF"
            draggable={false}
            className="block select-none w-full h-auto"
            style={{ minWidth: 60 }}
          />
        </motion.div>

        {/* Center photo — fixed 240×126, 20px radius */}
        <div
          className="flex-shrink-0 relative overflow-hidden"
          style={{ width: 240, height: 126, borderRadius: 20, zIndex: 10 }}
        >
          <img
            src="/hero-photo.png"
            alt="Aashif Ali"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute bottom-2 right-3 bg-black/50 backdrop-blur-sm
                          rounded-full px-2.5 py-1 border border-white/10">
            <span className="text-white/60 text-[9px] font-medium">Design engineer</span>
          </div>
        </div>

        {/* ALI — scales up/down, always fully visible */}
        <motion.div
          className="flex items-end justify-end pb-1 pr-2 md:pr-4"
          style={{ flex: aliFlex, minWidth: 0 }}
        >
          <img
            src="/ali.svg"
            alt="ALI"
            draggable={false}
            className="block select-none w-full h-auto"
            style={{ minWidth: 40 }}
          />
        </motion.div>

      </div>
    </section>
  );
}
