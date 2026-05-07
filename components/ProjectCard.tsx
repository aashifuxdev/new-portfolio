"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

interface ProjectCardProps {
  title: string;
  category: string;
  bg: string;
  index: number;
}

export default function ProjectCard({ title, category, bg, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      className="flex-shrink-0 w-[220px] md:w-[260px] rounded-xl overflow-hidden cursor-pointer group"
    >
      <div
        className={clsx("aspect-[4/3] w-full flex items-end p-4", bg)}
      >
        <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-xs font-medium text-white/60 mb-1">{category}</p>
          <p className="text-sm font-semibold text-white">{title}</p>
        </div>
      </div>
    </motion.div>
  );
}
