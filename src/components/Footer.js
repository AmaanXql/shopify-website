"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "./animations";

export default function Footer() {
  return (
    <motion.footer
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className="mt-10 border-t border-gray-200 bg-[#f5f5f5] py-16"
    >
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="mb-4 text-xs tracking-[0.35em] text-gray-500">XQL SYSTEMS</p>
        <p className="text-sm text-gray-400">© 2026 Xqlsystems. Designed to scale.</p>
      </div>
    </motion.footer>
  );
}
