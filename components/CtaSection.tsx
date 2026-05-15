"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function CtaSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState(false);

  return (
    <section
      data-nav="grey"
      className="bg-cream px-4 md:px-10 py-16 md:py-24"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="main-cta-wrapper w-full"
      >
        <div className="content-cta-wrapper flex flex-col gap-8 md:gap-12">
          {/* Text block */}
          <div className="cta-text-wrapper">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-muted font-bold"
              style={{
                fontSize: "clamp(32px, 5vw, 64px)",
                lineHeight: "90%",
                letterSpacing: "-0.4px",
              }}
            >
              Let&apos;s build something people remember
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted/60 text-sm mt-4 font-medium"
            >
              from global tech companies to growing startups.
            </motion.p>
          </div>

          {/* Large CTA button */}
          <motion.a
            href="mailto:HelloJuanMora@gmail.com"
            className="cta-button-wrapper relative flex items-center justify-between w-full border border-muted/25 rounded-2xl px-8 md:px-12 py-6 md:py-8 overflow-hidden cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Hover fill background */}
            <motion.div
              className="hover-main-cta absolute inset-0 bg-salmon"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: hovered ? 1 : 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ originX: 0 }}
            />

            {/* Arrow icon */}
            <motion.div
              className="cont-icon-cta relative z-10 text-2xl md:text-3xl font-light"
              animate={{ color: hovered ? "#F5EDE3" : "#8C8072" }}
              transition={{ duration: 0.3 }}
            >
              →
            </motion.div>

            {/* "Let's talk" / email text */}
            <div className="relative z-10 flex flex-col items-end overflow-hidden">
              {/* "Let's talk" — slides up on hover */}
              <motion.h2
                className="font-bold leading-none"
                animate={{
                  y: hovered ? "-110%" : "0%",
                  color: hovered ? "#F5EDE3" : "#8C8072",
                }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{ fontSize: "clamp(28px, 4vw, 56px)" }}
              >
                Let&apos;s talk
              </motion.h2>

              {/* Email — slides in from below on hover */}
              <motion.h2
                className="email-cta font-bold leading-none absolute"
                animate={{
                  y: hovered ? "0%" : "110%",
                  color: "#F5EDE3",
                }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{ fontSize: "clamp(14px, 2vw, 28px)" }}
              >
                HelloJuanMora@gmail.com
              </motion.h2>
            </div>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
