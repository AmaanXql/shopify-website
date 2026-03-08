

'use client'

import { useState } from "react";
import { motion } from "framer-motion";
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
  FileText
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
    title: "Mobile, speed, and QA",
    icon: Smartphone,
    points: [
      "Mobile responsiveness",
      "Performance optimization",
      "Final QA testing",
    ],
  },
  {
    title: "Apps included (standard setup)",
    icon: Puzzle,
    points: [
      "Install recommended apps",
      "Basic configuration",
      "Integration testing",
    ],
  },
  {
    title: "Graphics (fixed)",
    icon: ImageIcon,
    points: [
      "Homepage banners",
      "Collection thumbnails",
      "Basic brand visuals",
    ],
  },
  {
    title: "Pages and Policies",
    icon: FileText,
    points: [
      "Privacy policy",
      "Refund policy",
      "Terms & conditions",
    ],
  },
];

export default function LaunchIncluded() {

  const [expanded, setExpanded] = useState(false);

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#fafafa]">

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-0 md:gap-10 mb-4 md:mb-0">

          {/* Heading */}
          <motion.div variants={fadeUp} className="max-w-xl mb-10 lg:mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Everything Included in the Launch
            </h2>

            <p className="text-gray-500 text-sm sm:text-base">
              Clear deliverables. Clear limits. Built on Dawn using one
              approved reference—so you get speed and predictability.
            </p>
          </motion.div>



          <motion.div variants={fadeUp} className="md:text-right">

            <p className="text-xs tracking-[0.2em] text-gray-400 mb-1">
              FIXED PRICE
            </p>

            <p className="text-3xl sm:text-4xl font-bold">
              $799
            </p>

            <p className="text-purple-500 font-bold text-lg line-through">
              $1499
            </p>

          </motion.div>

        </div>

        {/* Cards Section */}
        <motion.div variants={fadeUp} className="relative">

          <motion.div
            animate={{ height: expanded ? "auto" : 380 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden"
          >

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

              {items.map((item, i) => {
                const Icon = item.icon;

                return (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-200 hover:shadow-sm transition"
                  >

                    {/* Icon */}
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 mb-4">
                      <Icon size={18} className="text-gray-700" />
                    </div>

                    {/* Title */}
                    <h3 className="font-semibold mb-4 text-sm md:text-base">
                      {item.title}
                    </h3>

                    {/* Points */}
                    <ul className="space-y-2 text-xs sm:text-sm text-gray-500">

                      {item.points.map((point, index) => (
                        <li
                          key={index}
                          className="flex gap-2 items-start"
                        >

                          <Check
                            size={14}
                            className="text-gray-400 mt-[2px]"
                          />

                          {point}

                        </li>
                      ))}

                    </ul>

                  </div>
                )
              })}

            </div>

          </motion.div>

          {/* Gradient Fade */}
          {!expanded && (
            <div className="absolute bottom-0 left-0 w-full h-56 md:h-60 bg-gradient-to-t from-[#f6f6f8] to-transparent pointer-events-none" />
          )}

          {/* Show More Button */}
          {!expanded && (
            <div className="absolute left-1/2 bottom-14 md:bottom-16 -translate-x-1/2 z-20">

              <button
                onClick={() => setExpanded(true)}
                className="px-6 md:px-8 py-3 text-xs sm:text-sm bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition flex items-center gap-2"
              >

                Show More

                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />

              </button>

            </div>
          )}

        </motion.div>

      </motion.div>

    </section>
  );
}