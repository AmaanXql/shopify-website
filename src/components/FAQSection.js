"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "./animations";

const faqs = [
  {
    q: "How are you making it so quick?",
    a: "We use a fixed scope, a pre-approved Dawn reference, and a locked 5-phase process. No scope creep, just a clean build from day one.",
  },
  {
    q: "What if I don’t have any brand design?",
    a: "We can work with basic brand inputs and still create a clean and professional store layout.",
  },
  {
    q: "Can I request revisions?",
    a: "Yes, revision cycles are included and additional ones can be added as an add-on.",
  },
  {
    q: "Will the store be mobile optimized?",
    a: "Yes. All builds are optimized for mobile devices and tested across screen sizes.",
  },
  {
    q: "Do you support Shopify apps?",
    a: "Yes, we can integrate essential apps during the build process.",
  },
  {
    q: "What happens after launch?",
    a: "You get a 30-45 min handover session plus a 14-day stabilization window for bug fixes and minor tweaks.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-white py-10 md:py-16 lg:py-20">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12"
      >
        <motion.div variants={fadeUp} className="mb-6 md:mb-14 max-w-xl">
          <h2 className="mb-3 text-2xl font-bold sm:text-3xl">Frequently Asked Questions</h2>
          <p className="text-sm text-gray-500 sm:text-base">
            Answers to common launch and delivery questions.
          </p>
        </motion.div>

        <motion.div variants={stagger} className="grid grid-cols-1 items-start  gap-2 md:gap-5 px-3 md:grid-cols-2 md:px-20">
          {faqs.map((faq, index) => {
            const active = open === index;
            return (
              <motion.article
                variants={fadeUp}
                key={faq.q}
                className="rounded-xl bg-[#fafafa] p-5 sm:p-6"
              >
                <button
                  onClick={() => setOpen(active ? null : index)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <span className="pr-6 text-sm font-medium text-gray-900 sm:text-base">{faq.q}</span>
                  {active ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                </button>

                <motion.div
                  initial={false}
                  animate={{ height: active ? "auto" : 0, opacity: active ? 1 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="mt-4 text-sm leading-relaxed text-gray-500">{faq.a}</p>
                </motion.div>
              </motion.article>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
