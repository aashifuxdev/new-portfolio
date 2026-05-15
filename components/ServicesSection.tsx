"use client";

import { motion } from "framer-motion";

interface ImagePlaceholderProps {
  gradient: string;
}

function ImagePlaceholder({ gradient }: ImagePlaceholderProps) {
  return (
    <div
      className="flex-shrink-0 rounded-xl overflow-hidden"
      style={{ width: "200px", height: "150px", background: gradient }}
    />
  );
}

interface ServiceItem {
  title: string;
  placeholders: string[];
}

const services: ServiceItem[] = [
  {
    title: "Websites & Landing pages",
    placeholders: [
      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    ],
  },
  {
    title: "Visual Branding",
    placeholders: [
      "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
      "linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)",
      "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
      "linear-gradient(135deg, #f5a07a 0%, #e8855a 100%)",
    ],
  },
  {
    title: "Product Design Enhancement",
    placeholders: [
      "linear-gradient(135deg, #0d0d0d 0%, #1a1008 100%)",
      "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)",
      "linear-gradient(135deg, #134e5e 0%, #71b280 100%)",
      "linear-gradient(135deg, #373b44 0%, #4286f4 100%)",
    ],
  },
  {
    title: "Webflow & Framer",
    placeholders: [
      "linear-gradient(135deg, #6b4fa0 0%, #3b2060 100%)",
      "linear-gradient(135deg, #f5ede3 0%, #f5a07a 100%)",
      "linear-gradient(135deg, #1a1008 0%, #6b4fa0 100%)",
      "linear-gradient(135deg, #0a1a0a 0%, #0a0015 100%)",
      "linear-gradient(135deg, #2c1a0e 0%, #f5a07a 100%)",
    ],
  },
];

interface ServiceRowProps {
  service: ServiceItem;
  index: number;
}

function ServiceRow({ service, index }: ServiceRowProps) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="service-wrapper flex flex-col md:flex-row md:items-center border-b border-muted/20 py-8 md:py-10 gap-6 md:gap-0"
    >
      {/* Left: dot + title (~40% width) */}
      <div className="cont-text-service md:w-[40%] flex-shrink-0">
        <div className="cont-title-service flex items-center gap-3">
          <div
            className="dot-project flex-shrink-0 rounded-full"
            style={{ width: "8px", height: "8px", backgroundColor: "#F5A07A" }}
          />
          <h2
            className="text-muted font-semibold"
            style={{
              fontSize: "clamp(20px, 2.5vw, 36px)",
              lineHeight: "1.1",
              letterSpacing: "-0.02em",
            }}
          >
            {service.title}
          </h2>
        </div>
      </div>

      {/* Right: horizontal scroll of image placeholders (~60% width) */}
      <div
        className="cont-imgs-service flex gap-3 overflow-x-auto md:w-[60%]"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {service.placeholders.map((gradient, i) => (
          <ImagePlaceholder key={i} gradient={gradient} />
        ))}
      </div>
    </motion.li>
  );
}

export default function ServicesSection() {
  return (
    <section className="bg-cream px-4 md:px-10 py-16 md:py-24">
      {/* Headline wrapper */}
      <div className="service-headline-wrapper mb-10 md:mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="tag-text text-xs md:text-sm font-medium text-muted mb-3 md:mb-4"
        >
          Design Expert
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="service-headline text-muted font-bold"
          style={{
            fontSize: "clamp(36px, 7vw, 84px)",
            lineHeight: "90%",
            letterSpacing: "-0.4px",
          }}
        >
          I help companies to succeed on projects like:
        </motion.h1>
      </div>

      {/* Services list */}
      <ul className="main-wrapper-services list-none p-0 m-0">
        {services.map((service, i) => (
          <ServiceRow key={service.title} service={service} index={i} />
        ))}
      </ul>
    </section>
  );
}
