"use client";

import { useMemo, useState } from "react";
import { Plus, Check } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "./animations";

const addons = [
  { id: 1, name: "+25 Product Uploads", originalPrice: 300, discountedPrice: 150, repeatable: true },
  { id: 2, name: "+50 Product Uploads", originalPrice: 500, discountedPrice: 250, repeatable: true },
  { id: 3, name: "Additional Banner Asset", originalPrice: 35, discountedPrice: 35 },
  { id: 4, name: "Custom Homepage Section", originalPrice: 50, discountedPrice: 50 },
  { id: 5, name: "Analytics (GA4 + Pixel) Setup", originalPrice: 75, discountedPrice: 70 },
  { id: 6, name: "Additional Revision Cycle", originalPrice: 80, discountedPrice: 80 },
];

export default function UnlockFeatures() {
  const [selected, setSelected] = useState({ 1: 1, 5: 1 });

  const summary = useMemo(() => {
    const selectedAddons = addons
      .filter((addon) => (selected[addon.id] || 0) > 0)
      .map((addon) => {
        const qty = selected[addon.id] || 0;
        return {
          ...addon,
          qty,
          originalTotal: addon.originalPrice * qty,
          discountedTotal: addon.discountedPrice * qty,
        };
      });

    const addonsOriginalTotal = selectedAddons.reduce((sum, addon) => sum + addon.originalTotal, 0);
    const addonsDiscountedTotal = selectedAddons.reduce((sum, addon) => sum + addon.discountedTotal, 0);

    return {
      selectedAddons,
      grandTotal: 799 + addonsDiscountedTotal,
      grandOriginalTotal: 1499 + addonsOriginalTotal,
    };
  }, [selected]);

  const incrementAddon = (addonId) => {
    setSelected((prev) => ({ ...prev, [addonId]: (prev[addonId] || 0) + 1 }));
  };

  const decrementAddon = (addonId) => {
    setSelected((prev) => {
      const nextQty = Math.max((prev[addonId] || 0) - 1, 0);
      if (nextQty === 0) {
        const next = { ...prev };
        delete next[addonId];
        return next;
      }
      return { ...prev, [addonId]: nextQty };
    });
  };

  const toggleAddon = (addonId) => {
    setSelected((prev) => {
      if (prev[addonId]) {
        const next = { ...prev };
        delete next[addonId];
        return next;
      }
      return { ...prev, [addonId]: 1 };
    });
  };

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
              const qty = selected[addon.id] || 0;
              const active = qty > 0;
              return (
                <motion.article
                  key={addon.id}
                  variants={fadeUp}
                  whileHover={{ y: -2 }}
                  className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm"
                >
                  <p className="text-gray-700">{addon.name}</p>

                  <div className="flex items-center gap-3">
                    <span className="rounded-md bg-gray-100 px-3 py-1 text-sm font-semibold">
                      ${addon.discountedPrice}
                    </span>
                    {addon.repeatable ? (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => decrementAddon(addon.id)}
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-gray-700 transition hover:bg-gray-300"
                        >
                          -
                        </button>
                        <span className="min-w-7 text-center text-sm font-semibold">{qty}</span>
                        <button
                          onClick={() => incrementAddon(addon.id)}
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-gray-700 transition hover:bg-gray-300"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => toggleAddon(addon.id)}
                        className={`flex h-9 w-9 items-center justify-center rounded-full transition ${active ? "bg-green-100 text-green-600" : "bg-gray-200 text-gray-700"
                          }`}
                      >
                        {active ? <Check size={16} /> : <Plus size={16} />}
                      </button>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-gray-200 bg-white p-6 lg:p-10"
          >
            {/* Pricing Summary */}
            <div className="space-y-3">

              {/* Base Shopify Store */}
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-800 text-lg">
                  Shopify Store
                </span>

                <div className="flex items-center gap-3">
                  <span className="text-purple-500 line-through text-sm">
                    $1499
                  </span>
                  <span className="text-xl font-semibold">
                    $799
                  </span>
                </div>
              </div>

              {/* Selected Add-ons */}
              {summary.selectedAddons.map((addon) => (
                <div
                  key={addon.id}
                  className="flex items-center justify-between text-gray-600"
                >
                  <span>
                    {addon.name}
                    {addon.qty > 1 ? ` x${addon.qty}` : ""}
                  </span>

                  <div className="flex items-center gap-3">
                    <span className="text-purple-500 line-through text-sm">
                      ${addon.originalTotal}
                    </span>

                    <span className="font-medium">
                      ${addon.discountedTotal}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t my-6"></div>

            {/* Total */}
            <div className="mb-6 flex items-center justify-between">
              <span className="text-lg font-semibold text-gray-800">Total</span>
              <div className="flex items-center gap-3">
                <span className="text-purple-500 line-through text-sm">
                  ${summary.grandOriginalTotal}
                </span>
                <span className="text-2xl font-bold text-gray-900">
                  ${summary.grandTotal}
                </span>
              </div>
            </div>

            {/* Button */}
            <div className="flex justify-end">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-full bg-gradient px-10 py-3 text-white text-sm font-medium shadow-lg"
              >
                Book a Call
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
