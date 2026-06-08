"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const cursorX = useSpring(0.5, { stiffness: 50, damping: 20, mass: 0.8 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    cursorX.set((e.clientX - rect.left) / rect.width);
  };

  // AASHIF shrinks left → grows right; ALI is inverse
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

      {/* Names + center photo — anchored to bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20 flex items-end">

        {/* AASHIF — flex grows/shrinks, text anchored left, clips right */}
        <motion.div
          className="overflow-hidden flex-shrink-0 flex items-end pl-3 md:pl-6"
          style={{ flex: aashifFlex, minWidth: 0 }}
        >
          <img
            src="/aashif.svg"
            alt="AASHIF"
            draggable={false}
            className="select-none max-w-none block"
            style={{ height: "clamp(56px, 12vw, 170px)", width: "auto" }}
          />
        </motion.div>

        {/* Center photo */}
        <div
          className="flex-shrink-0 rounded-t-3xl overflow-hidden relative z-10"
          style={{ width: "clamp(150px, 18vw, 300px)", height: "clamp(180px, 26vw, 420px)" }}
        >
          <img
            src="/hero-photo.png"
            alt="Aashif Ali"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm
                          rounded-full px-3 py-1 border border-white/10">
            <span className="text-white/60 text-[10px] font-medium">Design engineer</span>
          </div>
        </div>

        {/* ALI — flex grows/shrinks, text anchored right, clips left */}
        <motion.div
          className="overflow-hidden flex-shrink-0 flex items-end justify-end pr-3 md:pr-6"
          style={{ flex: aliFlex, minWidth: 0 }}
        >
          <img
            src="/ali.svg"
            alt="ALI"
            draggable={false}
            className="select-none max-w-none block"
            style={{ height: "clamp(56px, 12vw, 170px)", width: "auto" }}
          />
        </motion.div>

      </div>
    </section>
  );
}
