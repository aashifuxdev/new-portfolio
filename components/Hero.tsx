"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorVisible, setCursorVisible] = useState(false);

  // Spring-smoothed cursor position: 0 = far left, 1 = far right
  const cursorX = useSpring(0.5, { stiffness: 55, damping: 18, mass: 0.6 });

  const dotX = useSpring(-100, { stiffness: 120, damping: 20, mass: 0.5 });
  const dotY = useSpring(-100, { stiffness: 120, damping: 20, mass: 0.5 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    cursorX.set((e.clientX - rect.left) / rect.width);
    dotX.set(e.clientX - rect.left);
    dotY.set(e.clientY - rect.top);
    setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setCursorVisible(true);
  };

  // AASHIF: shrinks when cursor moves left, grows when cursor moves right
  // ALI:    grows  when cursor moves left, shrinks when cursor moves right
  const aashifWidth = useTransform(cursorX, [0, 1], ["14%", "50%"]);
  const aliWidth    = useTransform(cursorX, [0, 1], ["50%", "14%"]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100dvh] w-full overflow-hidden"
      style={{ cursor: "none" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { cursorX.set(0.5); setCursorVisible(false); }}
    >
      {/* ── Background photo ──────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-[#1a0f08]">
        <img
          src="/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover object-center opacity-65"
          style={{ filter: "blur(2px)", transform: "scale(1.04)" }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/50" />

      {/* ── Custom cursor ─────────────────────────────────────────────── */}
      <motion.div
        className="pointer-events-none absolute z-50"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: cursorVisible ? 1 : 0 }}
        transition={{ opacity: { duration: 0.2 } }}
      >
        {/* outer ring */}
        <div className="w-10 h-10 rounded-full border border-white/60 absolute -translate-x-1/2 -translate-y-1/2" />
        {/* inner dot */}
        <div className="w-2 h-2 rounded-full bg-white absolute -translate-x-1/2 -translate-y-1/2" />
      </motion.div>

      {/* ── Design Engineer label ─────────────────────────────────────── */}
      <motion.p
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="absolute top-20 md:top-24 left-4 md:left-10 z-20
                   text-salmon text-xs font-medium tracking-widest uppercase"
      >
        Design Engineer
      </motion.p>

      {/* ── Bottom name row ───────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="absolute bottom-0 left-0 right-0 z-20 flex items-end"
      >
        {/* AASHIF — text anchored left; right edge clips as width shrinks */}
        <motion.div
          className="flex-shrink-0 overflow-hidden flex items-end"
          style={{ width: aashifWidth }}
        >
          <img
            src="/aashif.svg"
            alt="AASHIF"
            draggable={false}
            className="select-none max-w-none"
            style={{ height: "clamp(52px, 11vw, 155px)", width: "auto" }}
          />
        </motion.div>

        {/* Center photo */}
        <div
          className="relative flex-shrink-0 rounded-t-[2rem] overflow-hidden"
          style={{
            width: "clamp(160px, 20vw, 340px)",
            height: "clamp(190px, 30vw, 460px)",
            zIndex: 10,
          }}
        >
          <img
            src="/hero-photo.png"
            alt="Aashif Ali"
            className="w-full h-full object-cover object-top"
          />

          {/* "Design engineer" badge */}
          <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md rounded-full
                          px-3 py-1.5 border border-white/10">
            <span className="text-white/60 text-[11px] font-medium">Design engineer</span>
          </div>
        </div>

        {/* ALI — text anchored right; left edge clips as width shrinks */}
        <motion.div
          className="flex-1 overflow-hidden flex items-end justify-end"
          style={{ width: aliWidth, minWidth: 0 }}
        >
          <img
            src="/ali.svg"
            alt="ALI"
            draggable={false}
            className="select-none max-w-none"
            style={{ height: "clamp(52px, 11vw, 155px)", width: "auto" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
