"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Spring-smoothed cursor position: 0 = far left, 1 = far right
  const cursorX = useSpring(0.5, { stiffness: 55, damping: 18, mass: 0.6 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    cursorX.set((e.clientX - rect.left) / rect.width);
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
      onMouseLeave={() => cursorX.set(0.5)}
    >
      {/* ── Background photo ──────────────────────────────────────────── */}
      {/* USER: place your photo at /public/hero-bg.jpg — remove the gradient div below */}
      <div className="absolute inset-0 bg-[#1a0f08]">
        <div
          className="w-full h-full bg-cover bg-center opacity-70"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/40" />

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
          {/*
            USER: swap the <span> below for your SVG:
            <img
              src="/aashif.svg"
              alt="AASHIF"
              draggable={false}
              className="select-none max-w-none"
              style={{ height: "clamp(52px, 11vw, 160px)", width: "auto" }}
            />
          */}
          <span
            className="whitespace-nowrap font-bold leading-[0.85] select-none text-[#E8D5C4]"
            style={{ fontSize: "clamp(52px, 11vw, 160px)", letterSpacing: "-0.02em" }}
          >
            AASHIF
          </span>
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
          {/*
            USER: swap the gradient div below for your photo:
            <img
              src="/hero-photo.jpg"
              alt="Aashif Ali"
              className="w-full h-full object-cover object-top"
            />
          */}
          <div className="w-full h-full bg-gradient-to-b from-[#4a3525] to-[#1a0f08]" />

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
          {/*
            USER: swap the <span> below for your SVG:
            <img
              src="/ali.svg"
              alt="ALI"
              draggable={false}
              className="select-none max-w-none"
              style={{ height: "clamp(52px, 11vw, 160px)", width: "auto" }}
            />
          */}
          <span
            className="whitespace-nowrap font-bold leading-[0.85] select-none text-[#E8D5C4]"
            style={{ fontSize: "clamp(52px, 11vw, 160px)", letterSpacing: "-0.02em" }}
          >
            ALI
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
