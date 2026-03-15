"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "./animations";

export default function MovingStrip() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className="group relative overflow-hidden bg-white py-5"
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-400">
          Brand references available on request
        </p>
      </div>
    </motion.section>
  );
}
