"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, viewport } from "./animations";

const references = [
  {
    theme: "Theme Name",
    category: "Category: Health & Wellness",
    image: "/desktopandmobile.png",
  },
];

export default function ReferenceSection() {
  const [index, setIndex] = useState(0);
  const item = references[index];

  return (
    <section className="bg-white py-16 lg:py-24">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12"
      >
        <div className="mb-12 max-w-xl">
          <h2 className="mb-3 text-2xl font-bold sm:text-3xl">Choose a Reference We Can Build Fast</h2>
          <p className="text-sm text-gray-500 sm:text-base">
            Pick one layout from our Dawn-ready references. This keeps scope fixed and delivery predictable.
          </p>
        </div>

        <div className="relative flex items-center justify-center">
          <button
            onClick={() => setIndex((prev) => (prev === 0 ? references.length - 1 : prev - 1))}
            className="absolute left-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="relative w-full max-w-4xl">
            <h3 className="gradient-text absolute -top-9 left-4 text-xl font-semibold sm:text-2xl">
              {item.theme}
            </h3>
            <p className="absolute -bottom-8 left-4 text-xs text-gray-500 sm:text-sm">{item.category}</p>

            <AnimatePresence mode="wait">
              <motion.div
                key={item.image}
                initial={{ opacity: 0.3, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0.3, y: -10 }}
                transition={{ duration: 0.35 }}
              >
                <Image
                  src={item.image}
                  width={1200}
                  height={700}
                  alt="reference preview"
                  className="w-full rounded-xl"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={() => setIndex((prev) => (prev + 1) % references.length)}
            className="absolute right-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
