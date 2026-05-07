"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";

const categories = [
  {
    label: "Websites &\nLanding pages",
    description: "Creating high-end and beautiful websites built to perform and convert.",
    projects: [
      { title: "Google Maps Campaign", category: "Web Design", bg: "bg-gradient-to-br from-yellow-400 to-yellow-500" },
      { title: "Matrix Grid", category: "Landing Page", bg: "bg-gradient-to-br from-gray-800 to-gray-900" },
      { title: "Morable Studio", category: "Web Design", bg: "bg-gradient-to-br from-[#E8855A] to-[#C4593A]" },
      { title: "Clean UI Kit", category: "UI Design", bg: "bg-gradient-to-br from-slate-100 to-slate-200" },
      { title: "CLAIM", category: "Landing Page", bg: "bg-gradient-to-br from-[#1a0533] to-[#0a0015]" },
    ],
  },
  {
    label: "Brand Identity\n& Visual Design",
    description: "Crafting memorable brands that communicate clearly and stand out.",
    projects: [
      { title: "TopTrader", category: "Branding", bg: "bg-gradient-to-br from-[#0D0D0D] to-[#1a1a1a]" },
      { title: "Morable Mark", category: "Logo Design", bg: "bg-gradient-to-br from-blue-600 to-blue-800" },
      { title: "Startup X", category: "Brand System", bg: "bg-gradient-to-br from-violet-600 to-purple-800" },
      { title: "App Icons", category: "Visual Design", bg: "bg-gradient-to-br from-orange-400 to-rose-500" },
    ],
  },
];

export default function WorkSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" className="bg-cream py-24 overflow-hidden">
      <div ref={ref} className="px-6 md:px-10 mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium text-muted mb-4"
        >
          Design Expert
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-display-lg font-bold text-muted max-w-4xl leading-none"
        >
          I help companies to
          <br />
          succeed on projects like:
        </motion.h2>
      </div>

      {categories.map((cat, catIndex) => (
        <div key={catIndex} className="mb-16">
          <div className="px-6 md:px-10 mb-8">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="text-display-md font-bold text-muted text-center whitespace-pre-line leading-tight"
            >
              {cat.label}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + catIndex * 0.1 }}
              className="text-sm text-muted/70 text-center mt-2 max-w-xs mx-auto"
            >
              {cat.description}
            </motion.p>
          </div>

          {/* Horizontal scroll strip */}
          <motion.div
            className="flex gap-4 px-6 md:px-10 overflow-x-auto pb-4 cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ right: 0, left: -(cat.projects.length * 280 - 800) }}
            dragTransition={{ bounceStiffness: 200, bounceDamping: 30 }}
            style={{ scrollbarWidth: "none" }}
          >
            {cat.projects.map((project, i) => (
              <ProjectCard
                key={i}
                title={project.title}
                category={project.category}
                bg={project.bg}
                index={i}
              />
            ))}
          </motion.div>
        </div>
      ))}
    </section>
  );
}
