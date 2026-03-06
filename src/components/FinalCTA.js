"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "./animations";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#568EFE_2.5%,#AB28FF_100%)] opacity-25" />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-10 px-6 md:flex-row md:px-10"
      >
        <div className="max-w-xl text-center md:text-left">
          <h2 className="mb-6 text-3xl font-bold leading-tight text-black sm:text-4xl">
            Bypass the build phase.
            <br />
            Start selling.
          </h2>
          <p className="text-sm font-medium text-gray-700">
            Fixed deliverables and fixed pricing to get your brand to market in exactly 15 days.
          </p>
        </div>

        <motion.button
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="rounded-full bg-gradient px-6 py-3 text-sm font-medium text-white shadow-lg"
        >
          Initiate Launch Sequence
        </motion.button>
      </motion.div>
    </section>
  );
}
