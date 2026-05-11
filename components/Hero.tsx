"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section
      ref={ref}
      className="relative h-[100dvh] w-full overflow-hidden bg-dark-warm"
    >
      {/* Background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 w-full h-[110%]"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brown-warm/60 via-brown-warm/40 to-dark-warm/80 z-10" />
        <div className="w-full h-full bg-gradient-to-br from-[#3D1F0E] via-[#2C1A0E] to-[#1A1008]" />
      </motion.div>

      <motion.div style={{ y: contentY }} className="relative z-20 h-[100dvh]">

        {/* Top-left label */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute top-20 md:top-24 left-4 md:left-10 text-salmon text-xs md:text-sm font-medium leading-tight"
        >
          Brand &amp; Web
          <br />
          Design Specialist
        </motion.p>

        {/* Bottom-right label */}
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-[max(1.5rem,env(safe-area-inset-bottom))] md:bottom-8 right-4 md:right-10 text-salmon text-xs md:text-sm font-medium"
        >
          Freelance Design Director
        </motion.p>

        {/* Split name + floating card */}
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-3 md:px-6 overflow-hidden">

          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-xl font-bold text-salmon leading-none select-none"
          >
            Juan
          </motion.span>

          {/* Floating center card — hidden on very small screens */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-10 md:mb-12 mx-1 md:mx-4 flex-shrink-0 w-[200px] sm:w-[260px] md:w-[380px] rounded-xl overflow-hidden border border-white/10 shadow-2xl hidden sm:block"
          >
            <div className="bg-[#0D0D0D] aspect-video flex flex-col items-center justify-center p-3 md:p-4 gap-2">
              <div className="self-start text-left w-full mb-1">
                <p className="text-[#00FF9F] font-mono text-[8px] md:text-[10px] opacity-70">PREPARE YOURSELF ///</p>
                <p className="text-[#00FF9F] font-mono text-[8px] md:text-[10px] opacity-50">1 REMEMBER</p>
                <p className="text-[#00FF9F] font-mono text-[8px] md:text-[10px] opacity-50">2 TRUST YOUR INSTINCTS</p>
                <p className="text-[#00FF9F] font-mono text-[8px] md:text-[10px] opacity-50">3 OBEY YOUR INSTINCTS</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-8 md:w-12 h-7 md:h-10 border-[3px] border-[#00FF9F] relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full border-b-[3px] border-[#00FF9F] rotate-45 scale-50 origin-bottom" />
                  </div>
                </div>
                <span className="text-[#00FF9F] font-bold text-xs md:text-sm tracking-widest">TopTrader</span>
              </div>
              <div className="self-end text-right">
                <p className="text-[#00FF9F] font-mono text-[7px] md:text-[8px] opacity-50 leading-tight">
                  DO YOU HAVE<br />WHAT IT TAKES<br />TO BE THE<br />TOP TRADER?
                </p>
              </div>
            </div>
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-xl font-bold text-salmon leading-none select-none"
          >
            Mora
          </motion.span>
        </div>
      </motion.div>
    </section>
  );
}
