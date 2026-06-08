"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";

const EMAIL = "aash.if.ux@gmail.com";

export default function CtaSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const [hovered, setHovered] = useState(false);
  const [copied, setCopied] = useState(false);
  const [badgePos, setBadgePos] = useState({ x: 0, y: 0 });

  // Track cursor globally while hovered so the badge follows everywhere in the row
  const trackMouse = useCallback((e: MouseEvent) => {
    setBadgePos({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    if (hovered) {
      window.addEventListener("mousemove", trackMouse);
    } else {
      window.removeEventListener("mousemove", trackMouse);
    }
    return () => window.removeEventListener("mousemove", trackMouse);
  }, [hovered, trackMouse]);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  };

  return (
    <section
      className="px-4 md:px-10 py-16 md:py-24"
      style={{ background: "#6d28d9" }}
    >
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-3xl overflow-hidden"
      >
        {/* Card background — animates to white on hover */}
        <motion.div
          className="absolute inset-0"
          animate={{ background: hovered ? "#ffffff" : "#7c3aed" }}
          transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
        />

        <div className="relative z-10 p-8 md:p-12 lg:p-16">
          {/* Heading */}
          <motion.h2
            animate={{ color: hovered ? "#1a1008" : "#ffffff" }}
            transition={{ duration: 0.3 }}
            className="font-bold max-w-[500px] mb-2"
            style={{
              fontSize: "clamp(24px, 4vw, 52px)",
              lineHeight: "1.05",
              letterSpacing: "-0.5px",
            }}
          >
            Let&apos;s build something people remember
          </motion.h2>

          <motion.p
            animate={{ color: hovered ? "#8C8072" : "rgba(255,255,255,0.55)" }}
            transition={{ duration: 0.3 }}
            className="text-sm font-medium"
            style={{ marginBottom: "clamp(48px, 8vw, 96px)" }}
          >
            from global tech companies to growing startups.
          </motion.p>

          {/* CTA row — hover triggers bg + text change + cursor badge */}
          <div
            className="flex items-center justify-between cursor-none"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={handleCopy}
          >
            {/* Arrow */}
            <motion.span
              animate={{ color: hovered ? "#1a1008" : "#ffffff" }}
              transition={{ duration: 0.3 }}
              className="text-2xl md:text-3xl font-light select-none"
            >
              →
            </motion.span>

            {/* Sliding text: "Let's talk" ↔ email */}
            <div
              className="overflow-hidden relative"
              style={{ height: "clamp(28px, 4vw, 58px)" }}
            >
              {/* "Let's talk" — exits up */}
              <motion.span
                animate={{
                  y: hovered ? "-115%" : "0%",
                  color: hovered ? "#1a1008" : "#ffffff",
                }}
                transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                className="absolute right-0 top-0 font-bold leading-none whitespace-nowrap select-none"
                style={{ fontSize: "clamp(26px, 4vw, 58px)" }}
              >
                Let&apos;s talk
              </motion.span>

              {/* Email — enters from below */}
              <motion.span
                animate={{
                  y: hovered ? "-50%" : "60%",
                  color: "#1a1008",
                }}
                transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                className="absolute right-0 top-1/2 font-bold leading-none whitespace-nowrap select-none"
                style={{ fontSize: "clamp(14px, 2.2vw, 34px)" }}
              >
                {EMAIL}
              </motion.span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Cursor badge — follows mouse, only while hovering the CTA row */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key="badge"
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.75 }}
            transition={{ duration: 0.18 }}
            className="fixed z-[9999] pointer-events-none select-none"
            style={{ left: badgePos.x + 18, top: badgePos.y - 16 }}
          >
            <div className="bg-[#1a1008] text-white text-[11px] font-semibold px-3 py-1.5 rounded-full whitespace-nowrap shadow-lg">
              {copied ? "Copied ✓" : "Copy email"}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
