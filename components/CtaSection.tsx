"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";

const EMAIL = "aash.if.ux@gmail.com";

export default function CtaSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [hovered, setHovered] = useState(false);
  const [copied, setCopied]   = useState(false);
  const [pos, setPos]         = useState({ x: 0, y: 0 });

  const onMouseMove = useCallback((e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY }), []);

  useEffect(() => {
    if (hovered) window.addEventListener("mousemove", onMouseMove);
    else window.removeEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [hovered, onMouseMove]);

  const copy = () =>
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });

  return (
    <section className="px-4 md:px-8 py-16 md:py-24" style={{ background: "#5b21b6" }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-2xl overflow-hidden p-8 md:p-12 lg:p-14"
        style={{ minHeight: "clamp(280px, 40vw, 480px)" }}
      >
        {/* Background — animates white on hover */}
        <motion.div
          className="absolute inset-0"
          animate={{ background: hovered ? "#ffffff" : "#7c3aed" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        />

        <div className="relative z-10 h-full flex flex-col justify-between"
             style={{ minHeight: "inherit" }}>

          {/* Top text */}
          <div>
            <motion.h2
              animate={{ color: hovered ? "#1a1008" : "#ffffff" }}
              transition={{ duration: 0.3 }}
              className="font-bold max-w-[520px] leading-[1.05]"
              style={{ fontSize: "clamp(22px, 3.8vw, 52px)", letterSpacing: "-0.4px" }}
            >
              Let&apos;s build something<br />people remember
            </motion.h2>

            <motion.p
              animate={{ color: hovered ? "#8C8072" : "rgba(255,255,255,0.5)" }}
              transition={{ duration: 0.3 }}
              className="text-sm font-medium mt-3"
            >
              from global tech companies to growing startups.
            </motion.p>
          </div>

          {/* Bottom CTA row */}
          <div
            className="flex items-center justify-between mt-12 md:mt-16 cursor-none"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={copy}
          >
            {/* Arrow */}
            <motion.span
              animate={{ color: hovered ? "#1a1008" : "#ffffff" }}
              transition={{ duration: 0.3 }}
              className="text-3xl font-light select-none leading-none"
            >
              →
            </motion.span>

            {/* Text toggle: Let's talk ↔ email */}
            <div
              className="relative overflow-hidden"
              style={{ height: "clamp(30px, 5vw, 68px)", minWidth: 120 }}
            >
              {/* Let's talk */}
              <motion.span
                className="absolute right-0 top-0 font-bold leading-none whitespace-nowrap select-none"
                style={{ fontSize: "clamp(26px, 5vw, 68px)" }}
                animate={{
                  y: hovered ? "-120%" : "0%",
                  color: "#ffffff",
                  opacity: hovered ? 0 : 1,
                }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                Let&apos;s talk
              </motion.span>

              {/* Email */}
              <motion.span
                className="absolute right-0 bottom-0 font-bold leading-none whitespace-nowrap select-none"
                style={{ fontSize: "clamp(13px, 2vw, 30px)" }}
                animate={{
                  y: hovered ? "0%" : "120%",
                  color: "#1a1008",
                  opacity: hovered ? 1 : 0,
                }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                {EMAIL}
              </motion.span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Cursor badge */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key="badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            className="fixed z-[9999] pointer-events-none"
            style={{ left: pos.x + 16, top: pos.y - 14 }}
          >
            <div className="bg-[#1a1008] text-white text-[11px] font-semibold
                            px-3 py-1.5 rounded-full whitespace-nowrap shadow-lg">
              {copied ? "Copied ✓" : "Copy email"}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
