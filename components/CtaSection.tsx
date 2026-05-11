"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CtaSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-cream px-3 md:px-6 pb-4 md:pb-6 pt-0">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="bg-salmon rounded-2xl md:rounded-3xl overflow-hidden relative min-h-[80vh] flex flex-col"
      >
        <div className="absolute inset-3 md:inset-4 rounded-xl md:rounded-2xl border border-salmon-dark/30 pointer-events-none" />

        <div className="flex-1 flex flex-col justify-center px-6 md:px-16 pt-14 md:pt-16 pb-6 md:pb-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-muted font-bold"
            style={{
              fontSize: "clamp(32px, 5vw, 60px)",
              lineHeight: "90%",
              letterSpacing: "-0.4px",
            }}
          >
            Let&apos;s build
            <br />
            something people
            <br />
            remember
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted/70 text-xs md:text-sm mt-4 md:mt-6 font-medium"
          >
            from global tech companies to growing startups.
          </motion.p>
        </div>

        <div className="px-6 md:px-16 pb-5 md:pb-8">
          <div className="border-t border-salmon-dark/20 pt-4 md:pt-6 flex items-center justify-between gap-4">
            <motion.a
              href="mailto:hello@juanmora.com"
              whileHover={{ x: 6 }}
              transition={{ duration: 0.2 }}
              className="text-muted text-xl md:text-2xl font-light flex-shrink-0"
            >
              →
            </motion.a>

            <div className="hidden md:flex items-center gap-1 rounded-full px-2 py-1.5 text-sm font-medium bg-salmon-dark/10 border border-salmon-dark/20">
              <a href="/about" className="px-3 py-1 text-muted/70 hover:text-muted transition-colors">About</a>
              <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M4 6h4v12H4zM10 6h4v12h-4zM16 6h4v6h-4z" fill="white" />
                </svg>
              </div>
              <a href="/#work" className="px-3 py-1 text-muted/70 hover:text-muted transition-colors">Work</a>
            </div>

            <motion.a
              href="mailto:hello@juanmora.com"
              whileHover={{ opacity: 0.7 }}
              className="text-display-md font-bold text-muted leading-none text-right"
            >
              Let&apos;s talk
            </motion.a>
          </div>
        </div>

        <div className="px-6 md:px-16 pb-5 md:pb-8">
          <div className="flex items-center gap-4 md:gap-6 text-muted/60 text-xs flex-wrap">
            <span className="text-muted/40 hidden md:inline">Juan • Mora</span>
            {["Email", "in", "x", "Be"].map((link) => (
              <a key={link} href="#" className="hover:text-muted transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
