"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "./animations";

const logos = ["VERTEX", "NEXUS", "QUANTUM", "STRATOS", "AEON"];

export default function MovingStrip() {
  const items = [...logos, ...logos, ...logos, ...logos];

  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className="group relative overflow-hidden bg-white py-5"
    >
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#f5f5f7] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#f5f5f7] to-transparent" />

      <div className="flex w-max animate-marquee gap-14 group-hover:[animation-play-state:paused] md:gap-20">
        {items.map((item, i) => (
          <motion.div
            key={`${item}-${i}`}
            whileHover={{ scale: 1.08 }}
            className="cursor-pointer whitespace-nowrap text-sm font-bold tracking-[0.2em] text-gray-400 md:text-base"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
