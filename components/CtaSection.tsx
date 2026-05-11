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
        className="bg-salmon rounded-2xl md:rounded-3xl overflow-hidden relative min-h-[85vh] flex flex-col"
      >
        {/* Inner border outline */}
        <div className="absolute inset-3 md:inset-5 rounded-xl md:rounded-2xl border border-white/20 pointer-events-none" />

        {/* Main content */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-16 pt-16 pb-8">
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
            className="text-muted/60 text-sm mt-5 font-medium"
          >
            from global tech companies to growing startups.
          </motion.p>
        </div>

        {/* Footer row */}
        <div className="px-8 md:px-16 pb-8 md:pb-10">
          <div className="border-t border-white/20 pt-5 flex items-center justify-between">
            <motion.a
              href="mailto:hello@juanmora.com"
              whileHover={{ x: 6 }}
              transition={{ duration: 0.2 }}
              className="text-muted text-2xl font-light"
            >
              →
            </motion.a>
            <motion.a
              href="mailto:hello@juanmora.com"
              whileHover={{ opacity: 0.7 }}
              className="font-bold text-muted"
              style={{ fontSize: "clamp(28px, 4vw, 52px)" }}
            >
              Let&apos;s talk
            </motion.a>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-between mt-6">
            <span className="text-muted/50 text-xs">Juan • Mora</span>
            <div className="flex items-center gap-5 text-muted/60 text-xs">
              {["Email", "in", "x", "Be"].map((link) => (
                <a key={link} href="#" className="hover:text-muted transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
