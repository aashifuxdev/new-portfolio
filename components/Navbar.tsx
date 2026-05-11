"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import clsx from "clsx";

interface NavbarProps {
  theme?: "dark" | "light";
}

export default function Navbar({ theme = "light" }: NavbarProps) {
  const isDark = theme === "dark";

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 md:px-10 md:py-4"
    >
      {/* Logo */}
      <Link
        href="/"
        className={clsx(
          "text-sm font-medium tracking-wide transition-opacity hover:opacity-70",
          isDark ? "text-cream" : "text-dark-warm"
        )}
      >
        Juan<span className="mx-1 text-salmon">•</span>Mora
      </Link>

      {/* Center pill nav */}
      <div
        className={clsx(
          "flex items-center gap-1 rounded-full px-2 py-1.5 text-sm font-medium",
          isDark
            ? "bg-white/10 backdrop-blur-md border border-white/20"
            : "bg-dark-warm/5 backdrop-blur-md border border-dark-warm/10"
        )}
      >
        <Link
          href="/about"
          className={clsx(
            "px-2 md:px-3 py-1 rounded-full transition-colors hover:opacity-70 text-xs md:text-sm",
            isDark ? "text-cream/80" : "text-muted"
          )}
        >
          About
        </Link>

        <div className="bg-blue-600 rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center flex-shrink-0">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M4 6h4v12H4zM10 6h4v12h-4zM16 6h4v6h-4z" fill="white" />
          </svg>
        </div>

        <Link
          href="/#work"
          className={clsx(
            "px-2 md:px-3 py-1 rounded-full transition-colors hover:opacity-70 text-xs md:text-sm",
            isDark ? "text-cream/80" : "text-muted"
          )}
        >
          Work
        </Link>
      </div>

      {/* Social links — hidden on small screens */}
      <div className={clsx(
        "hidden md:flex items-center gap-4 text-sm",
        isDark ? "text-cream/70" : "text-muted"
      )}>
        {["Email", "in", "x", "Be"].map((link) => (
          <a key={link} href="#" className="hover:opacity-100 transition-opacity opacity-70">
            {link}
          </a>
        ))}
      </div>

      {/* Mobile: just Email link */}
      <a
        href="#"
        className={clsx(
          "md:hidden text-xs opacity-70",
          isDark ? "text-cream" : "text-muted"
        )}
      >
        Email
      </a>
    </motion.nav>
  );
}
