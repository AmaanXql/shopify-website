'use client'

import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { fadeUp, stagger, viewport } from "./animations";

const phases = [
    {
        number: "01",
        phase: "PHASE 1 — DAYS 1-3",
        title: "Discovery & Setup",
        desc: "Requirements & project alignment",
    },
    {
        number: "02",
        phase: "PHASE 2 — DAYS 4-10",
        title: "Design & Planning",
        desc: "Structure, UX flow, approval",
    },
    {
        number: "03",
        phase: "PHASE 3 — DAYS 11-15",
        title: "Build & Integration",
        desc: "Development, features, integrations",
    },
    {
        number: "04",
        phase: "PHASE 4 — DAYS 4-10",
        title: "QA & Refinement",
        desc: "Testing, fixes, performance optimization",
    },
    {
        number: "05",
        phase: "PHASE 5 — DAYS 4-10",
        title: "Launch & Handover",
        desc: "Go live, training, support",
        highlight: true,
    },
];

export default function LaunchPhases() {

    return (
        <section className="py-20 lg:py-32 bg-white relative overflow-hidden">

        {/* Gradient Ring (desktop only) */}
        <div className="hidden lg:block absolute right-[-350px] top-1/2 -translate-y-1/2 w-[600px] h-[500px] pointer-events-none">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-300 to-purple-300 opacity-40"></div>
          <div className="absolute inset-[100px] rounded-full bg-[#f7f7f9]"></div>
        </div>
  
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
  
           {/* Heading */}
      <div className="max-w-xl mb-12 lg:mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
          From Setup to Launch in 5 Phases
          </h2>

          <p className="text-gray-500 text-sm sm:text-base">
          Engineered for velocity. A linear execution model to guarantee
          on-time delivery by eliminating scope creep and asynchronous delays.
          </p>
        </div>
  
          {/* Timeline */}
          <div className="relative">
  
            {/* Base Line (desktop only) */}
            <div className="hidden lg:block absolute top-6 left-24 right-24 h-[2px] bg-gray-200" />
  
            {/* Animated Line */}
            <motion.div
  initial={{ width: "0%" }}
  whileInView={{ width: "82%" }}
  viewport={{ once: false, amount: 0.4 }}
    transition={{ duration: 4, ease: "easeInOut" }}
  className="hidden lg:block absolute top-6 left-24 h-[2px] bg-gray-800"
/>
  
            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mt-10 md:mt-28">
  
              {phases.map((phase, index) => (
                <div key={index} className="relative text-center ">
  
                  {/* Node */}
                  <div className="mb-6 flex justify-center">
  
                    {phase.highlight ? (
  
                      <motion.div
  initial={{ filter: "grayscale(1)" }}
  whileInView={{ filter: "grayscale(0)" }}
  viewport={{ once: false }}
  transition={{ delay: 4, duration: 0.5 }}
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg"
                      >
                        <img
                          src="/shopify.png"
                          alt="Shopify"
                          className="w-6 h-6 sm:w-7 sm:h-7"
                        />
                      </motion.div>
  
                    ) : (
  
                      <motion.div
  initial={{ backgroundColor: "#e5e7eb", color: "#6b7280" }}
  whileInView={{ backgroundColor: "#000000", color: "#ffffff" }}
  viewport={{ once: false }}
  transition={{
    delay: (index + 1) * 0.7,
    duration: 0.5,
    ease: "easeInOut"
  }}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-sm shadow"
                      >
                        {phase.number}
                      </motion.div>
  
                    )}
  
                  </div>
  
                  {/* Content */}
                  {phase.highlight ? (
                    <>
                      <span className="inline-block text-xs px-3 py-1 rounded-full border border-purple-300 text-purple-600 mb-2">
                        {phase.phase}
                      </span>
  
                      <h3 className="text-base sm:text-lg font-semibold text-purple-600 mb-2">
                        {phase.title}
                      </h3>
  
                      <p className="text-gray-500 text-sm">
                        {phase.desc}
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-xs tracking-widest text-gray-400 mb-2">
                        {phase.phase}
                      </p>
  
                      <h3 className="text-base sm:text-lg font-semibold mb-2">
                        {phase.title}
                      </h3>
  
                      <p className="text-gray-500 text-sm">
                        {phase.desc}
                      </p>
                    </>
                  )}
  
                </div>
              ))}
  
            </div>
  
          </div>
  
        </div>
  
      </section>
    );
}