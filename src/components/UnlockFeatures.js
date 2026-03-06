"use client";

import { useMemo, useState } from "react";
import { Plus, Check } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "./animations";

const addons = [
  { id: 1, name: "+25 Product Uploads", price: 150 },
  { id: 2, name: "+50 Product Uploads", price: 250 },
  { id: 3, name: "Additional Banner Asset", price: 35 },
  { id: 4, name: "Custom Homepage Section", price: 50 },
  { id: 5, name: "Analytics (GA4 + Pixel) Setup", price: 75 },
  { id: 6, name: "Additional Revision Cycle", price: 80 },
];

export default function UnlockFeatures() {
  const [selected, setSelected] = useState([1, 5]);

  const total = useMemo(
    () => selected.reduce((sum, id) => sum + (addons.find((a) => a.id === id)?.price || 0), 799),
    [selected]
  );

  return (
    <section id="features" className="bg-[#fafafa] py-20 lg:py-28">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10"
      >
        <motion.div variants={fadeUp} className="mb-12 max-w-xl">
          <h2 className="mb-3 text-2xl font-bold sm:text-3xl">Unlock More Features</h2>
          <p className="text-sm text-gray-500 sm:text-base">
            Extend your launch package with add-ons while keeping timeline and quality controlled.
          </p>
        </motion.div>

        <div className="px-2 md:px-20 lg:px-44">
          <motion.h3 variants={fadeUp} className="mb-6 text-lg font-semibold sm:text-xl">
            Add Ons
          </motion.h3>

          <motion.div variants={stagger} className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {addons.map((addon) => {
              const active = selected.includes(addon.id);
              return (
                <motion.article
                  key={addon.id}
                  variants={fadeUp}
                  whileHover={{ y: -2 }}
                  className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm"
                >
                  <p className="text-gray-700">{addon.name}</p>

                  <div className="flex items-center gap-3">
                    <span className="rounded-md bg-gray-100 px-3 py-1 text-sm font-semibold">${addon.price}</span>
                    <button
                      onClick={() =>
                        setSelected((prev) =>
                          prev.includes(addon.id) ? prev.filter((i) => i !== addon.id) : [...prev, addon.id]
                        )
                      }
                      className={`flex h-9 w-9 items-center justify-center rounded-full transition ${
                        active ? "bg-green-100 text-green-600" : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {active ? <Check size={16} /> : <Plus size={16} />}
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-8 rounded-2xl border border-gray-300 bg-white p-6 lg:flex-row lg:items-end lg:justify-between lg:p-10"
          >
            <div>
              <h4 className="mb-3 text-lg font-semibold">Shopify Store + Add Ons</h4>
              {selected.length === 0 ? (
                <p className="text-gray-500">No add-ons selected.</p>
              ) : (
                addons
                  .filter((addon) => selected.includes(addon.id))
                  .map((addon) => (
                    <p key={addon.id} className="text-gray-600">
                      {addon.name}
                    </p>
                  ))
              )}
            </div>

            <div className="lg:text-right">
              <p className="text-purple-500 line-through">$1499</p>
              <p className="text-3xl font-semibold">${total}</p>
              <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="mt-6 rounded-full bg-gradient px-8 py-3 text-sm text-white">
                Book a Call
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
