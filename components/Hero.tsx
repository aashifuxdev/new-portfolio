"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Spring-smoothed cursor position: 0 = far left, 1 = far right
  const cursorX = useSpring(0.5, { stiffness: 60, damping: 20, mass: 0.6 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    cursorX.set((e.clientX - rect.left) / rect.width);
  };

  // AASHIF: cursor left → shrinks to 14%, cursor right → grows to 50%
  // ALI:    cursor left → grows to 50%, cursor right → shrinks to 14%
  // Overflow hidden clips on the inner edge (image side)
  const aashifWidth = useTransform(cursorX, [0, 1], ["14%", "50%"]);
  const aliWidth    = useTransform(cursorX, [0, 1], ["50%", "14%"]);

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

      {/* Bottom row: AASHIF | photo | ALI */}
      <div className="absolute bottom-0 left-0 right-0 z-20 flex items-end">

        {/* AASHIF — clips on RIGHT (inner) edge as width shrinks */}
        <motion.div
          className="overflow-hidden flex-shrink-0 flex items-end"
          style={{ width: aashifWidth }}
        >
          <img
            src="/aashif.svg"
            alt="AASHIF"
            draggable={false}
            className="block select-none max-w-none"
            style={{ height: "clamp(56px, 12vw, 160px)", width: "auto" }}
          />
        </motion.div>

        {/* Center photo — fixed 240×126, 20px radius */}
        <div
          className="flex-shrink-0 relative overflow-hidden"
          style={{
            width: 240,
            height: 126,
            borderRadius: 20,
            zIndex: 10,
          }}
        >
          <img
            src="/hero-photo.png"
            alt="Aashif Ali"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* ALI — clips on LEFT (inner) edge as width shrinks */}
        <motion.div
          className="overflow-hidden flex-shrink-0 flex items-end justify-end"
          style={{ width: aliWidth, flex: 1, minWidth: 0 }}
        >
          <img
            src="/ali.svg"
            alt="ALI"
            draggable={false}
            className="block select-none max-w-none"
            style={{ height: "clamp(56px, 12vw, 160px)", width: "auto" }}
          />
        </motion.div>

      </div>
    </section>
  );
}
