"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const headingStyle = {
  fontSize: "clamp(60px, 10vw, 130px)",
  fontWeight: 600,
  lineHeight: "115%",
  letterSpacing: "-0.35vw",
} as const;

function BlinkingCursor() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => setVisible((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);
  return (
    <span
      className="inline-block w-[0.1em] h-[0.85em] align-middle ml-[0.05em]"
      style={{ background: "#ffbc95" }}
      style={{ opacity: visible ? 1 : 0 }}
    />
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="h-[100dvh] flex items-center relative overflow-hidden px-4 md:px-10" style={{ background: "#111" }}>
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:flex gap-2 items-end h-52">
        <motion.div
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          className="w-[3px] origin-bottom h-full"
          style={{ background: "#ffbc95" }}
        />
        <motion.div
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
          className="w-[3px] origin-bottom h-3/4"
          style={{ background: "#ffbc95" }}
        />
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full"
      >
        <motion.p variants={wordVariants} className="block" style={{ ...headingStyle, color: "#ffbc95" }}>4 years</motion.p>
        <motion.p variants={wordVariants} className="block" style={{ ...headingStyle, color: "#ffbc95" }}>making users</motion.p>

        <motion.div variants={wordVariants} className="flex flex-wrap items-baseline" style={{ gap: "0 0.25em" }}>
          <span className="relative inline-block">
            <motion.span
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 rounded-full origin-left"
              style={{ background: "#ffbc95" }}
            />
            <span className="relative font-semibold px-[0.2em]" style={{ ...headingStyle, color: "#111" }}>click</span>
          </span>
          <span className="font-semibold" style={{ ...headingStyle, color: "#ffbc95" }}>and</span>
          <span className="font-semibold inline-flex items-baseline" style={{ ...headingStyle, color: "#ffbc95" }}>
            scro<span>ll</span>
            {isInView && <BlinkingCursor />}
          </span>
        </motion.div>

        <motion.p variants={wordVariants} className="block" style={{ ...headingStyle, color: "#ffbc95" }}>my designs</motion.p>
      </motion.div>
    </section>
  );
}
