"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function BlinkingCursor() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => setVisible((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);
  return (
    <span
      className="inline-block w-[0.18em] h-[0.85em] bg-salmon align-middle ml-1 translate-y-[-0.05em]"
      style={{ opacity: visible ? 1 : 0 }}
    />
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08 },
    },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <section className="min-h-screen bg-cream flex items-center relative overflow-hidden px-6 md:px-10 py-24">
      {/* Decorative vertical bars right side */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 flex gap-2 items-end h-48">
        <motion.div
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="w-[3px] bg-salmon origin-bottom h-full"
        />
        <motion.div
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="w-[3px] bg-salmon origin-bottom h-3/4"
        />
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-5xl"
      >
        <motion.p
          variants={wordVariants}
          className="text-display-lg font-bold text-muted leading-none"
        >
          16 years
        </motion.p>

        <motion.p
          variants={wordVariants}
          className="text-display-lg font-bold text-muted leading-none"
        >
          making users
        </motion.p>

        <motion.div
          variants={wordVariants}
          className="flex flex-wrap items-baseline gap-x-4 leading-none"
        >
          {/* "click" with pill highlight */}
          <motion.span
            initial={{ "--pill-scale": "0" } as Record<string, string>}
            animate={isInView ? { "--pill-scale": "1" } as Record<string, string> : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="relative inline-block"
          >
            <motion.span
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 bg-salmon rounded-full origin-left"
            />
            <span className="relative text-display-lg font-bold text-cream px-4 leading-none">
              click
            </span>
          </motion.span>

          <span className="text-display-lg font-bold text-muted leading-none">and</span>

          {/* "scroll" with cursor blink */}
          <span className="text-display-lg font-bold text-salmon leading-none inline-flex items-baseline">
            scro
            <span>ll</span>
            {isInView && <BlinkingCursor />}
          </span>
        </motion.div>

        <motion.p
          variants={wordVariants}
          className="text-display-lg font-bold text-muted leading-none"
        >
          my designs
        </motion.p>
      </motion.div>
    </section>
  );
}
