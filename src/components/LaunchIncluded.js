"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ChevronDown,
  Store,
  LayoutTemplate,
  Boxes,
  CreditCard,
  Smartphone,
  Puzzle,
  ImageIcon,
  FileText,
} from "lucide-react";
import { fadeUp, stagger, viewport } from "./animations";

const items = [
  {
    title: "Store Setup",
    icon: Store,
    points: [
      "Store setup on dev store",
      "Ownership transfer after approval",
      "Online Store channel configured",
    ],
  },
  {
    title: "Design & Structure",
    icon: LayoutTemplate,
    points: [
      "Shopify Dawn free theme",
      "One reference before build",
      "Product collection cart setup",
    ],
  },
  {
    title: "Catalog Setup",
    icon: Boxes,
    points: [
      "Add up to 10 products",
      "Create up to 10 collections",
      "Organize with basic tags",
    ],
  },
  {
    title: "Payments, Shipping & Domain",
    icon: CreditCard,
    points: [
      "Domain connection and setup",
      "Configure payment provider",
      "Set shipping zones and rates",
    ],
  },
  {
    title: "Mobile, Speed and QA",
    icon: Smartphone,
    points: ["Mobile responsiveness", "Performance optimization", "Final QA testing"],
  },
  {
    title: "Apps Included",
    icon: Puzzle,
    points: ["Install recommended apps", "Basic configuration", "Integration testing"],
  },
  {
    title: "Graphics",
    icon: ImageIcon,
    points: ["Homepage banners", "Collection thumbnails", "Basic brand visuals"],
  },
  {
    title: "Pages and Policies",
    icon: FileText,
    points: ["Privacy policy", "Refund policy", "Terms & conditions"],
  },
];

export default function LaunchIncluded() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-[#fafafa] py-16 md:py-24">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10"
      >
        <motion.div variants={fadeUp} className="mb-12 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xl">
            <h2 className="mb-3 text-2xl font-bold sm:text-3xl">Everything Included in the Launch</h2>
            <p className="text-sm text-gray-500 sm:text-base">
              Clear deliverables and clear limits. Built on Dawn using one approved reference for speed and predictability.
            </p>
          </div>

          <div className="md:text-right">
            <p className="mb-1 text-xs tracking-[0.2em] text-gray-400">FIXED PRICE</p>
            <p className="text-4xl font-bold">$799</p>
            <p className="text-lg font-bold text-purple-500 line-through">$1499</p>
          </div>
        </motion.div>

        <div className="relative">
          <AnimatePresence initial={false}>
            <motion.div
              key={expanded ? "open" : "closed"}
              initial={{ height: 380 }}
              animate={{ height: expanded ? "auto" : 380 }}
              transition={{ duration: 0.45 }}
              className="overflow-hidden"
            >
              <motion.div variants={stagger} className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.article
                      key={item.title}
                      variants={fadeUp}
                      whileHover={{ y: -4 }}
                      className="rounded-2xl border border-gray-200 bg-white p-6"
                    >
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                        <Icon size={18} className="text-gray-700" />
                      </div>

                      <h3 className="mb-4 text-base font-semibold">{item.title}</h3>

                      <ul className="space-y-2 text-sm text-gray-500">
                        {item.points.map((point) => (
                          <li key={point} className="flex items-start gap-2">
                            <Check size={14} className="mt-[2px] text-gray-400" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </motion.article>
                  );
                })}
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {!expanded && (
            <div className="pointer-events-none absolute bottom-0 left-0 h-60 w-full bg-gradient-to-t from-[#f6f6f8] to-transparent" />
          )}

          {!expanded && (
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport} className="absolute bottom-16 left-1/2 z-20 -translate-x-1/2">
              <button
                onClick={() => setExpanded(true)}
                className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-8 py-3 text-sm shadow-sm transition hover:shadow"
              >
                Show More
                <ChevronDown className="h-4 w-4" />
              </button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
