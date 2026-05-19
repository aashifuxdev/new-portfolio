"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// ─── Card template ───────────────────────────────────────────────────

function ProjectCard({
  label,
  accent,
  visual,
  bottomText,
}: {
  label: string;
  accent: string;
  visual: React.ReactNode;
  bottomText: string;
}) {
  return (
    <div className="w-full h-full bg-[#0D0D0D] flex flex-col justify-between p-3 md:p-5">
      <p className="font-mono opacity-70" style={{ color: accent, fontSize: "clamp(7px,0.9vw,11px)" }}>
        {label} ///
      </p>
      <div className="flex flex-col items-center justify-center gap-1 flex-1 py-2">
        {visual}
      </div>
      <p className="font-mono opacity-40 self-end text-right leading-tight" style={{ color: accent, fontSize: "clamp(5px,0.7vw,9px)" }}>
        {bottomText}
      </p>
    </div>
  );
}

// ─── Individual cards ───────────────────────────────────────────────────

function TopTraderCard() {
  return (
    <ProjectCard
      label="TOPTRADER"
      accent="#00FF9F"
      bottomText={"DO YOU HAVE\nWHAT IT TAKES\nTO BE THE\nTOP TRADER?"}
      visual={
        <div className="flex flex-col items-center gap-1">
          <svg viewBox="0 0 48 48" fill="none" style={{ width: "clamp(22px,3vw,40px)", height: "clamp(22px,3vw,40px)" }}>
            <rect x="1.5" y="1.5" width="45" height="45" stroke="#00FF9F" strokeWidth="3" />
            <path d="M11 11 L24 27 L37 11" stroke="#00FF9F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="24" y1="27" x2="24" y2="39" stroke="#00FF9F" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <span className="font-bold tracking-widest text-[#00FF9F]" style={{ fontSize: "clamp(7px,1vw,12px)" }}>
            TopTrader
          </span>
        </div>
      }
    />
  );
}

function GoogleCard() {
  return (
    <ProjectCard
      label="GOOGLE MAPS"
      accent="#FBBC04"
      bottomText={"LOCAL\nGUIDE"}
      visual={
        <div className="flex flex-col items-center gap-1">
          <div
            className="rounded-full flex items-center justify-center"
            style={{ width: "clamp(22px,3vw,40px)", height: "clamp(22px,3vw,40px)", backgroundColor: "#FBBC04" }}
          >
            <svg viewBox="0 0 24 24" fill="#0a0604" style={{ width: "60%", height: "60%" }}>
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </div>
          <span className="font-bold tracking-widest text-[#FBBC04]" style={{ fontSize: "clamp(7px,1vw,12px)" }}>
            Google
          </span>
        </div>
      }
    />
  );
}

function DinoRunnerCard() {
  return (
    <ProjectCard
      label="DINO RUNNER"
      accent="#C084FC"
      bottomText={"ENDLESS\nRUNNER GAME"}
      visual={
        <div className="flex flex-col items-center gap-1">
          <span style={{ fontSize: "clamp(18px,2.8vw,34px)", lineHeight: 1 }}>🦕</span>
          <span className="font-bold tracking-widest text-[#C084FC]" style={{ fontSize: "clamp(7px,1vw,12px)" }}>
            Dino Runner
          </span>
        </div>
      }
    />
  );
}

function AlenaCard() {
  return (
    <ProjectCard
      label="ALENA"
      accent="#60A5FA"
      bottomText={"PRODUCT\nDESIGN"}
      visual={
        <div className="flex flex-col items-center gap-1">
          <div
            className="rounded-full border-2 border-[#60A5FA]/60"
            style={{ width: "clamp(22px,3vw,40px)", height: "clamp(22px,3vw,40px)" }}
          />
          <span className="font-bold tracking-widest text-[#60A5FA]" style={{ fontSize: "clamp(7px,1vw,12px)" }}>
            Alena
          </span>
        </div>
      }
    />
  );
}

// ─── Card registry ─────────────────────────────────────────────────────

type CardId = "toptrader" | "google" | "dino" | "alena";

const CARDS: { id: CardId }[] = [
  { id: "toptrader" },
  { id: "google" },
  { id: "dino" },
  { id: "alena" },
];

const CardComponents: Record<CardId, () => JSX.Element> = {
  toptrader: TopTraderCard,
  google: GoogleCard,
  dino: DinoRunnerCard,
  alena: AlenaCard,
};

// ─── Hero ─────────────────────────────────────────────────────────────────

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const [cardIndex, setCardIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCardIndex((i) => (i + 1) % CARDS.length), 3000);
    return () => clearInterval(t);
  }, []);

  const { id: currentId } = CARDS[cardIndex];
  const ActiveCard = CardComponents[currentId];

  return (
    <section
      ref={ref}
      className="relative min-h-[100dvh] w-full overflow-hidden"
      style={{ background: "radial-gradient(ellipse at center, #3d2817 0%, #1a0f08 70%, #0a0604 100%)" }}
    >
      {/* Subtle dark overlay for depth */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 w-full h-[110%]">
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      <div className="relative z-20 min-h-[100dvh] flex flex-col">
        {/* ── Top-left label ── */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute top-20 md:top-24 left-4 md:left-10 text-salmon text-xs md:text-sm font-medium leading-tight"
        >
          Design Engineer
        </motion.p>

        {/* ── Centered names + rotating card — pushed to lower third ── */}
        <div className="flex-1 flex items-end justify-center pb-0">
          <div
            className="relative flex items-end justify-center"
            style={{ gap: "clamp(180px, 25vw, 320px)" }}
          >
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-display-xl font-bold text-salmon leading-none select-none"
            >
              Aashif
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-display-xl font-bold text-salmon leading-none select-none"
            >
              Ali
            </motion.span>

            {/* ── Rotating card — centered, overlaps inner edges of names ── */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-1/2 -translate-x-1/2 hidden sm:block"
              style={{
                bottom: "clamp(2rem, 5vw, 5rem)",
                width: "clamp(220px, 33vw, 500px)",
                height: "clamp(82px, 12vw, 185px)",
              }}
            >
              <div className="w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentId}
                    className="w-full h-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  >
                    <ActiveCard />
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
