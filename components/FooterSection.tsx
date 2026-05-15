"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const techStack = ["Figma", "Webflow", "GSAP", "AE/Lottie", "Lennis Scroll"];
const contactLinks = ["Email", "Linkedin", "X", "Behance"];

export default function FooterSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      data-nav="peach"
      className="section footer relative min-h-[100dvh] flex flex-col"
      style={{ backgroundColor: "#1A1008" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 60%, rgba(245,160,122,0.07) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(107,79,160,0.05) 0%, transparent 50%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(26,16,8,0.6) 0%, rgba(26,16,8,0.2) 50%, rgba(26,16,8,0.85) 100%)",
        }}
      />

      <div
        ref={ref}
        className="main-wrapper-footer relative z-10 flex flex-col justify-between flex-1 px-4 md:px-10 py-12 md:py-16 gap-12 md:gap-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="wrapper-content-footer _1 flex flex-col md:flex-row gap-10 md:gap-0 justify-between"
        >
          <div className="wrapper-column">
            <h3 className="font-medium mb-3" style={{ color: "#8C8072", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              &ldquo;Website made using:&rdquo;
            </h3>
            <ul className="list-none p-0 m-0 flex flex-col gap-1.5">
              {techStack.map((item) => (
                <li key={item} style={{ color: "rgba(245,237,227,0.55)", fontSize: "13px" }}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="wrapper-column right">
            <h3 className="font-medium mb-3 md:text-right" style={{ color: "#8C8072", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              &ldquo;Contact:&rdquo;
            </h3>
            <ul className="list-none p-0 m-0 flex flex-col gap-1.5 md:items-end">
              {contactLinks.map((item) => (
                <li key={item}>
                  <a href="#" style={{ color: "rgba(245,237,227,0.55)", fontSize: "13px" }} className="hover:opacity-100 transition-opacity">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="wrapper-content-footer _2 flex items-baseline justify-between"
        >
          <h2 className="font-bold text-cream leading-none" style={{ fontSize: "clamp(5rem, 12vw, 14rem)", lineHeight: 0.9, letterSpacing: "-0.03em" }}>Juan</h2>
          <div className="flex-shrink-0 rounded-full" style={{ width: "clamp(10px, 1.5vw, 20px)", height: "clamp(10px, 1.5vw, 20px)", backgroundColor: "#F5A07A", alignSelf: "center" }} />
          <h2 className="font-bold text-cream leading-none" style={{ fontSize: "clamp(5rem, 12vw, 14rem)", lineHeight: 0.9, letterSpacing: "-0.03em" }}>Mora</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="wrapper-content-footer flex flex-col md:flex-row justify-between items-start md:items-end gap-2"
        >
          <h3 style={{ color: "#8C8072", fontSize: "12px", fontWeight: 500 }}>Freelance Design Director <span style={{ color: "rgba(245,237,227,0.35)" }}>2026</span></h3>
          <h3 style={{ color: "#8C8072", fontSize: "12px", fontWeight: 500 }}>Morable Design Studio <span style={{ color: "rgba(245,237,227,0.35)" }}>[Coming Soon]</span></h3>
        </motion.div>
      </div>
    </section>
  );
}
