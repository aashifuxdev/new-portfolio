"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

// ── Card data ──────────────────────────────────────────────────────────────

const RIGHT_CARDS = [
  {
    id: "buying",
    category: "BUYING PLATFORM | B2C",
    title: "Revamping the Car Buying Experience: Designing Make & Model Page and Non-Assisted Journey",
    bg: "#0f1923",
    accent: "#60a5fa",
    screenshot: "",
  },
  {
    id: "toptrader",
    category: "FINTECH | TRADING",
    title: "TopTrader — Gamified Investment Platform for Retail Traders",
    bg: "#001a0d",
    accent: "#00FF9F",
    screenshot: "",
  },
  {
    id: "studio",
    category: "BRAND IDENTITY | WEB",
    title: "Morable Design Studio — Full Visual Identity System",
    bg: "#1a0a06",
    accent: "#f97316",
    screenshot: "",
  },
];

const STEPS = RIGHT_CARDS.length;

// ── Left card — always visible ─────────────────────────────────────────────

function LeftCard({ height }: { height: string }) {
  return (
    <div
      className="w-full flex flex-col justify-between rounded-2xl overflow-hidden"
      style={{ height, background: "#0a0015" }}
    >
      {/* Top bar */}
      <div className="flex items-center gap-2 px-5 pt-5">
        <div className="w-5 h-5 rounded border border-white/20 flex items-center justify-center
                        text-white/40 text-[9px] font-mono">M</div>
        <span className="text-white/25 text-[10px] font-mono tracking-widest">MAVI</span>
        <span className="ml-auto text-white/15 text-[9px] font-mono hidden md:block">SOLUTIONS</span>
        <span className="text-white/15 text-[9px] font-mono hidden md:block ml-3">CURRENT DEALS</span>
      </div>

      {/* Center — title + orb */}
      <div className="flex-1 flex flex-col items-center justify-center gap-4 px-5">
        <p
          className="font-bold tracking-[0.18em] text-white/90 text-center leading-tight"
          style={{
            fontSize: "clamp(20px, 3.5vw, 52px)",
            fontFamily: "monospace",
            textShadow: "0 0 60px #a855f780",
          }}
        >
          CLAIM<br />YOUR LOOT
        </p>
        <div
          className="rounded-full"
          style={{
            width: "clamp(50px, 8vw, 120px)",
            height: "clamp(50px, 8vw, 120px)",
            background: "radial-gradient(circle at 40% 35%, #ff9f43, #e84393, #a855f7, #1a0033)",
            boxShadow: "0 0 80px #a855f760, 0 0 160px #a855f730",
          }}
        />
      </div>

      {/* Bottom info strip */}
      <div className="border-t border-white/10 px-5 py-4">
        <p className="text-white/30 text-[9px] font-mono tracking-widest uppercase mb-1.5">
          GAMING PLATFORM | WEB3
        </p>
        <div className="flex items-end justify-between gap-2">
          <p className="text-white/60 text-xs md:text-sm font-medium leading-snug max-w-[85%]">
            Designing the NFT rewards experience for competitive gaming
          </p>
          <span className="text-white/30 text-base flex-shrink-0">→</span>
        </div>
      </div>
    </div>
  );
}

// ── Right card ─────────────────────────────────────────────────────────────

function RightCard({ card, height }: { card: typeof RIGHT_CARDS[number]; height: string }) {
  return (
    <motion.div
      key={card.id}
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0 rounded-2xl overflow-hidden flex flex-col"
      style={{ background: card.bg, height }}
    >
      {/* Screenshot area — top 72% */}
      <div
        className="flex-1 relative overflow-hidden"
        style={{
          background: `linear-gradient(160deg, ${card.bg} 0%, ${card.accent}18 100%)`,
          borderBottom: `1px solid ${card.accent}18`,
        }}
      >
        {card.screenshot ? (
          <img src={card.screenshot} alt={card.title} className="w-full h-full object-cover object-top" />
        ) : (
          /* Mockup placeholder */
          <div className="w-full h-full flex flex-col gap-3 p-4 md:p-5">
            {/* Browser chrome */}
            <div className="flex items-center gap-1.5">
              {[1,2,3].map(i => (
                <div key={i} className="w-2 h-2 rounded-full"
                  style={{ background: card.accent, opacity: 0.12 + i * 0.06 }} />
              ))}
              <div className="flex-1 h-1.5 rounded-full ml-2"
                style={{ background: card.accent, opacity: 0.08 }} />
            </div>
            {/* Content rows */}
            <div className="flex gap-2 mt-1">
              <div className="flex-[0_0_30%] rounded-lg"
                style={{ height: "clamp(40px,6vw,70px)", background: card.accent, opacity: 0.07 }} />
              <div className="flex-1 flex flex-col gap-2 justify-center">
                {[100,75,90].map((w,i) => (
                  <div key={i} className="h-1.5 rounded-full"
                    style={{ width: `${w}%`, background: card.accent, opacity: 0.07 }} />
                ))}
              </div>
            </div>
            <div className="flex gap-2">
              {[1,2,3].map(i => (
                <div key={i} className="flex-1 rounded-lg"
                  style={{ height: "clamp(32px,5vw,56px)", background: card.accent, opacity: 0.05 }} />
              ))}
            </div>
            {[80,60,70,50].map((w,i) => (
              <div key={i} className="h-1.5 rounded-full"
                style={{ width: `${w}%`, background: card.accent, opacity: 0.06 }} />
            ))}
          </div>
        )}
      </div>

      {/* Info strip — bottom */}
      <div className="flex-shrink-0 px-4 md:px-5 py-4 md:py-5"
           style={{ background: "rgba(0,0,0,0.4)" }}>
        <p className="text-[9px] font-mono tracking-widest uppercase mb-1.5"
           style={{ color: `${card.accent}80` }}>
          {card.category}
        </p>
        <div className="flex items-start justify-between gap-3">
          <p className="text-white/70 text-xs md:text-sm font-medium leading-snug flex-1">
            {card.title}
          </p>
          <span className="text-white/30 text-base flex-shrink-0 mt-0.5">→</span>
        </div>
        {/* Progress indicators */}
        <div className="flex gap-1.5 mt-3">
          {RIGHT_CARDS.map(c => (
            <div key={c.id} className="h-[2px] rounded-full transition-all duration-300"
              style={{
                width: c.id === card.id ? 16 : 5,
                background: c.id === card.id ? card.accent : "rgba(255,255,255,0.15)",
              }} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ── Section ────────────────────────────────────────────────────────────────

export default function WorkSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActiveIdx(Math.min(Math.floor(v * STEPS), STEPS - 1));
  });

  // Height for each card — fills the sticky viewport minus the header
  const CARD_HEIGHT = "calc(100dvh - 160px)";

  return (
    <div ref={containerRef} style={{ height: `${(STEPS + 1) * 100}vh` }}>
      <div className="sticky top-0 h-[100dvh] bg-cream flex flex-col overflow-hidden">

        {/* Section header */}
        <div className="px-4 md:px-8 pt-8 md:pt-12 pb-5 flex-shrink-0">
          <p className="text-[10px] font-medium text-muted tracking-widest uppercase mb-2">
            Selected Work
          </p>
          <h2
            className="text-muted font-bold leading-[0.92]"
            style={{ fontSize: "clamp(22px, 4.5vw, 58px)", letterSpacing: "-0.3px" }}
          >
            I help companies to<br />succeed on projects like:
          </h2>
        </div>

        {/* Cards row */}
        <div className="flex-1 min-h-0 px-4 md:px-8 pb-6 md:pb-8 flex gap-3 md:gap-4">

          {/* Left — Card 1, always visible */}
          <div className="flex-[0_0_58%] md:flex-[0_0_60%]">
            <LeftCard height={CARD_HEIGHT} />
          </div>

          {/* Right — Cards 2-4, one at a time */}
          <div className="flex-1 relative">
            <AnimatePresence mode="wait">
              <RightCard
                key={RIGHT_CARDS[activeIdx].id}
                card={RIGHT_CARDS[activeIdx]}
                height={CARD_HEIGHT}
              />
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
}
