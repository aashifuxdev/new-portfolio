"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// ─── Individual card designs ───────────────────────────────────────────────

function TopTraderCard() {
  return (
    <div className="w-full h-full bg-[#0D0D0D] flex flex-col justify-between p-3 md:p-5">
      <div>
        <p className="text-[#00FF9F] font-mono opacity-70 mb-0.5" style={{ fontSize: "clamp(7px,0.9vw,11px)" }}>
          PREPARE YOURSELF ///
        </p>
        <p className="text-[#00FF9F] font-mono opacity-50" style={{ fontSize: "clamp(7px,0.9vw,11px)" }}>1 REMEMBER</p>
        <p className="text-[#00FF9F] font-mono opacity-50" style={{ fontSize: "clamp(7px,0.9vw,11px)" }}>2 TRUST YOUR INSTINCTS</p>
        <p className="text-[#00FF9F] font-mono opacity-50" style={{ fontSize: "clamp(7px,0.9vw,11px)" }}>3 OBEY YOUR INSTINCTS</p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <svg viewBox="0 0 48 48" fill="none" style={{ width: "clamp(24px,3.5vw,44px)", height: "clamp(24px,3.5vw,44px)" }}>
          <rect x="1.5" y="1.5" width="45" height="45" stroke="#00FF9F" strokeWidth="3" />
          <path d="M11 11 L24 27 L37 11" stroke="#00FF9F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="24" y1="27" x2="24" y2="39" stroke="#00FF9F" strokeWidth="3" strokeLinecap="round" />
        </svg>
        <span className="text-[#00FF9F] font-bold tracking-widest" style={{ fontSize: "clamp(7px,1vw,12px)" }}>
          TopTrader
        </span>
      </div>
      <div className="self-end text-right">
        <p className="text-[#00FF9F] font-mono opacity-50 leading-tight" style={{ fontSize: "clamp(5px,0.7vw,8px)" }}>
          DO YOU HAVE<br />WHAT IT TAKES<br />TO BE THE<br />TOP TRADER?
        </p>
      </div>
    </div>
  );
}

function GoogleCard() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex flex-col justify-between p-3 md:p-5 relative overflow-hidden">
      <div>
        <p className="text-yellow-900 font-mono opacity-70 mb-0.5" style={{ fontSize: "clamp(7px,0.9vw,11px)" }}>
          GOOGLE MAPS ///
        </p>
        <p className="text-yellow-900 font-mono opacity-50" style={{ fontSize: "clamp(7px,0.9vw,11px)" }}>WEB DESIGN</p>
      </div>
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 24 24" fill="none" style={{ width: "clamp(18px,2.5vw,30px)", height: "clamp(18px,2.5vw,30px)" }}>
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#78350f" />
        </svg>
        <span className="text-yellow-900 font-bold tracking-wide" style={{ fontSize: "clamp(9px,1.2vw,15px)" }}>
          Google
        </span>
      </div>
      <p className="text-yellow-900 font-mono opacity-50 self-end" style={{ fontSize: "clamp(5px,0.7vw,8px)" }}>
        LOCAL GUIDE
      </p>
    </div>
  );
}

function DinoRunnerCard() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#1a0533] to-[#0a0015] flex flex-col justify-between p-3 md:p-5">
      <div>
        <p className="text-[#C084FC] font-mono opacity-70 mb-0.5" style={{ fontSize: "clamp(7px,0.9vw,11px)" }}>
          DINO RUNNER ///
        </p>
        <p className="text-[#C084FC] font-mono opacity-50" style={{ fontSize: "clamp(7px,0.9vw,11px)" }}>GAME DESIGN</p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <span style={{ fontSize: "clamp(20px,3vw,36px)" }}>🦕</span>
        <span className="text-[#C084FC] font-bold tracking-widest" style={{ fontSize: "clamp(7px,1vw,12px)" }}>
          DINO RUNNER
        </span>
      </div>
      <p className="text-[#C084FC] font-mono opacity-50 self-end leading-tight" style={{ fontSize: "clamp(5px,0.7vw,8px)" }}>
        ENDLESS RUNNER<br />GAME
      </p>
    </div>
  );
}

function AlenaCard() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#F5A07A] to-[#E8855A] flex flex-col justify-between p-3 md:p-5">
      <div>
        <p className="text-white/70 font-mono mb-0.5" style={{ fontSize: "clamp(7px,0.9vw,11px)" }}>
          ALENA ///
        </p>
        <p className="text-white/50 font-mono" style={{ fontSize: "clamp(7px,0.9vw,11px)" }}>PRODUCT DESIGN</p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <div className="rounded-full bg-white/25" style={{ width: "clamp(22px,3vw,38px)", height: "clamp(22px,3vw,38px)" }} />
        <span className="text-white font-bold tracking-widest" style={{ fontSize: "clamp(7px,1vw,12px)" }}>
          ALENA
        </span>
      </div>
      <p className="text-white/50 font-mono self-end leading-tight" style={{ fontSize: "clamp(5px,0.7vw,8px)" }}>
        UI/UX<br />ENHANCEMENT
      </p>
    </div>
  );
}

// ─── Card registry ────────────────────────────────────────────────────────

type CardId = "toptrader" | "google" | "dino" | "alena";

const CARDS: { id: CardId; label: string }[] = [
  { id: "toptrader", label: "TopTrader" },
  { id: "google",    label: "Google Maps" },
  { id: "dino",      label: "Dino Runner" },
  { id: "alena",     label: "Alena" },
];

const CardComponents: Record<CardId, () => JSX.Element> = {
  toptrader: TopTraderCard,
  google:    GoogleCard,
  dino:      DinoRunnerCard,
  alena:     AlenaCard,
};

// ─── Hero ─────────────────────────────────────────────────────────────────

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const [cardIndex, setCardIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCardIndex((i) => (i + 1) % CARDS.length), 3000);
    return () => clearInterval(t);
  }, []);

  const { id: currentId } = CARDS[cardIndex];
  const ActiveCard = CardComponents[currentId];

  return (
    <section ref={ref} className="relative h-[100dvh] w-full overflow-hidden bg-dark-warm">
      {/* ── Background ── */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 w-full h-[110%]">
        {/* gradient fallback */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3D1F0E] via-[#2C1A0E] to-[#1A1008]" />
        {/* hero photo — swap /hero-bg.jpg with real photo */}
        <img
          src="/hero-bg.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />
      </motion.div>

      <div className="relative z-20 h-full">
        {/* ── Top-left label ── */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute top-20 md:top-24 left-4 md:left-10 text-salmon text-xs md:text-sm font-medium leading-tight"
        >
          Design Engineer
        </motion.p>

        {/* ── Centered names + rotating card ── */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center items-end">
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
