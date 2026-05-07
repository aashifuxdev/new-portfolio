"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "./Navbar";

export default function CtaSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-cream px-4 md:px-6 pb-6 pt-0">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="bg-salmon rounded-3xl overflow-hidden relative min-h-[85vh] flex flex-col"
      >
        {/* Inner border outline */}
        <div className="absolute inset-4 rounded-2xl border border-salmon-dark/30 pointer-events-none" />

        {/* Main content */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-16 pt-16 pb-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-lg font-bold text-muted max-w-2xl leading-none"
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
            className="text-muted/70 text-sm mt-6 font-medium"
          >
            from global tech companies to growing startups.
          </motion.p>
        </div>

        {/* Footer bar */}
        <div className="px-8 md:px-16 pb-8">
          <div className="border-t border-salmon-dark/20 pt-6 flex items-center justify-between">
            {/* Arrow */}
            <motion.a
              href="mailto:hello@juanmora.com"
              whileHover={{ x: 6 }}
              transition={{ duration: 0.2 }}
              className="text-muted text-2xl font-light"
            >
              →
            </motion.a>

            {/* Inline navbar */}
            <div className="hidden md:flex items-center gap-1 rounded-full px-2 py-1.5 text-sm font-medium bg-salmon-dark/10 border border-salmon-dark/20">
              <a href="/about" className="px-3 py-1 text-muted/70 hover:text-muted transition-colors">About</a>
              <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M4 6h4v12H4zM10 6h4v12h-4zM16 6h4v6h-4z" fill="white" />
                </svg>
              </div>
              <a href="/#work" className="px-3 py-1 text-muted/70 hover:text-muted transition-colors">Work</a>
            </div>

            {/* Let's talk */}
            <motion.a
              href="mailto:hello@juanmora.com"
              whileHover={{ opacity: 0.7 }}
              className="text-display-md font-bold text-muted leading-none"
            >
              Let&apos;s talk
            </motion.a>
          </div>
        </div>

        {/* Social links in footer */}
        <div className="px-8 md:px-16 pb-8 flex items-center justify-between">
          <div className="flex items-center gap-6 text-muted/60 text-xs">
            <span className="text-muted/40">Juan • Mora</span>
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
