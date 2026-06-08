"use client";

import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState } from "react";

// ── Data ───────────────────────────────────────────────────────────────────

const LEFT_CARD = {
  category: "GAMING PLATFORM | WEB3",
  title: "Designing the NFT rewards experience for competitive gaming",
  accent: "#a855f7",
};

const RIGHT_CARDS = [
  {
    id: "buying",
    category: "BUYING PLATFORM | B2C",
    title:
      "Revamping the Car Buying Experience: Designing Make & Model Page and Non-Assisted Journey",
    accent: "#60a5fa",
    bg: "#0f1923",
    screenshot: "",
  },
  {
    id: "toptrader",
    category: "FINTECH | TRADING",
    title: "TopTrader — Gamified Investment Platform for Retail Traders",
    accent: "#00FF9F",
    bg: "#001a0d",
    screenshot: "",
  },
  {
    id: "studio",
    category: "BRAND IDENTITY | WEB",
    title: "Morable Design Studio — Full Visual Identity System",
    accent: "#f97316",
    bg: "#1a0a06",
    screenshot: "",
  },
];

// Number of "scroll steps" = number of right cards
const STEPS = RIGHT_CARDS.length; // 3

// ── Left card ──────────────────────────────────────────────────────────────

function LeftCard() {
  return (
    <div
      className="w-full h-full flex flex-col justify-between p-6 md:p-8 rounded-2xl overflow-hidden"
      style={{ background: "#0a0015" }}
    >
      {/* Top nav mock */}
      <div className="flex items-center gap-3">
        <div
          className="w-6 h-6 rounded border border-white/20 flex items-center justify-center
                     text-white/50 text-[10px] font-mono"
        >
          M
        </div>
        <span className="text-white/30 text-[10px] font-mono tracking-widest">MAVI</span>
        <span className="ml-auto text-white/20 text-[9px] font-mono hidden md:block">
          SOLUTIONS
        </span>
        <span className="text-white/20 text-[9px] font-mono hidden md:block">
          CURRENT DEALS
        </span>
      </div>

      {/* Center visual */}
      <div className="flex-1 flex flex-col items-center justify-center py-4 gap-4">
        <p
          className="font-bold tracking-[0.15em] text-white/90 leading-tight text-center"
          style={{
            fontSize: "clamp(22px, 3.8vw, 58px)",
            fontFamily: "monospace",
            textShadow: "0 0 50px #a855f780",
          }}
        >
          CLAIM
          <br />
          YOUR LOOT
        </p>
        {/* Glowing orb */}
        <div
          className="rounded-full"
          style={{
            width: "clamp(56px, 9vw, 130px)",
            height: "clamp(56px, 9vw, 130px)",
            background:
              "radial-gradient(circle at 40% 35%, #ff9f43, #e84393, #a855f7, #1a0033)",
            boxShadow: "0 0 70px #a855f750, 0 0 140px #a855f720",
          }}
        />
      </div>

      {/* Bottom label */}
      <div className="border-t border-white/10 pt-4">
        <p className="text-white/30 text-[9px] font-mono tracking-widest mb-2 uppercase">
          {LEFT_CARD.category}
        </p>
        <div className="flex items-end justify-between gap-2">
          <p className="text-white/60 text-xs md:text-sm font-medium leading-snug max-w-[80%]">
            {LEFT_CARD.title}
          </p>
          <span className="text-white/30 text-base flex-shrink-0">→</span>
        </div>
      </div>
    </div>
  );
}

// ── Right card ─────────────────────────────────────────────────────────────

function RightCard({ card }: { card: (typeof RIGHT_CARDS)[number] & { screenshot?: string } }) {
  return (
    <motion.div
      key={card.id}
      initial={{ opacity: 0, y: 36 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -28 }}
      transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0 rounded-2xl overflow-hidden flex flex-col p-5 md:p-7"
      style={{ background: card.bg }}
    >
      {/* Screenshot */}
      <div className="flex-1 rounded-xl overflow-hidden mb-4">
        {card.screenshot ? (
          <img
            src={card.screenshot}
            alt={card.title}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <div
            className="w-full h-full flex flex-col gap-2 p-4"
            style={{
              border: `1px solid ${card.accent}18`,
              background: `linear-gradient(160deg, ${card.bg}, ${card.accent}10)`,
            }}
          >
            {/* Fake browser chrome */}
            <div className="flex items-center gap-1.5 mb-1">
              <div className="w-2 h-2 rounded-full opacity-30" style={{ background: card.accent }} />
              <div className="w-2 h-2 rounded-full opacity-20" style={{ background: card.accent }} />
              <div className="w-2 h-2 rounded-full opacity-10" style={{ background: card.accent }} />
              <div className="flex-1 h-1.5 rounded-full ml-2 opacity-10" style={{ background: card.accent }} />
            </div>
            {/* Fake content rows */}
            {[80, 60, 90, 50, 70].map((w, i) => (
              <div
                key={i}
                className="h-2 rounded-full opacity-[0.07]"
                style={{ width: `${w}%`, background: card.accent }}
              />
            ))}
            <div className="flex gap-2 mt-2">
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="flex-1 rounded-lg opacity-[0.06]"
                  style={{ height: 48, background: card.accent }}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Label + title */}
      <div>
        <p
          className="text-[9px] font-mono tracking-widest mb-2 uppercase"
          style={{ color: `${card.accent}70` }}
        >
          {card.category}
        </p>
        <div className="flex items-start justify-between gap-2">
          <p className="text-white/70 text-xs md:text-sm font-medium leading-snug">
            {card.title}
          </p>
          <span className="text-white/25 text-base flex-shrink-0">→</span>
        </div>
      </div>

      {/* Progress dots */}
      <div className="flex gap-1.5 mt-4">
        {RIGHT_CARDS.map((c) => (
          <div
            key={c.id}
            className="h-[2px] rounded-full transition-all duration-300"
            style={{
              width: c.id === card.id ? 18 : 5,
              background:
                c.id === card.id ? card.accent : "rgba(255,255,255,0.18)",
            }}
          />
        ))}
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

  // Map scroll 0→1 across STEPS discrete card slots
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(Math.floor(v * STEPS), STEPS - 1);
    setActiveIdx(idx);
  });

  return (
    // Outer scroll container — height gives scroll budget for each card step
    <div ref={containerRef} style={{ height: `${(STEPS + 1) * 100}vh` }}>
      {/* Sticky viewport */}
      <div className="sticky top-0 h-[100dvh] bg-cream flex flex-col overflow-hidden">

        {/* Title */}
        <div className="px-4 md:px-10 pt-10 md:pt-14 pb-5 md:pb-6 flex-shrink-0">
          <p className="text-[10px] font-medium text-muted mb-2.5 tracking-widest uppercase">
            Selected Work
          </p>
          <h2
            className="text-muted font-bold leading-[0.92]"
            style={{
              fontSize: "clamp(26px, 5vw, 64px)",
              letterSpacing: "-0.3px",
            }}
          >
            I help companies to
            <br />
            succeed on projects like:
          </h2>
        </div>

        {/* Two-column cards */}
        <div className="flex-1 min-h-0 px-4 md:px-10 pb-8 md:pb-10 flex gap-3 md:gap-4">
          {/* Left — always Card 1 */}
          <div className="flex-[0_0_58%] md:flex-[0_0_60%] relative">
            <LeftCard />
          </div>

          {/* Right — animated card based on scroll */}
          <div className="flex-1 relative">
            <AnimatePresence mode="wait">
              <RightCard key={RIGHT_CARDS[activeIdx].id} card={RIGHT_CARDS[activeIdx]} />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
