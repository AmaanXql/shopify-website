"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "./animations";
import AnimatedPrice from "./AnimatedPrice";
import { CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f4f2f6] pt-12 md:pt-14">
      <div className="pointer-events-none absolute left-1/2 top-[110px] z-0 h-[360px] w-[500px] -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(216,180,254,0.7)_0%,rgba(255,255,255,0)_70%)] opacity-30 blur-3xl md:h-[520px] md:w-[760px]" />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="relative z-10 mx-auto max-w-6xl px-5 text-center md:px-6"
      >
        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-1 text-xs">
          <span className="h-2.5 w-2.5 rounded-full bg-gradient" />
          Fixed Scope. Fixed Timeline. No Surprises.
        </motion.div>

        <motion.h1 variants={fadeUp} className="mt-5 text-4xl font-extrabold tracking-tight text-gray-800 sm:text-5xl md:text-6xl">
          Launch Your Shopify <br />
          Store in 15 Days <br />
          For <AnimatedPrice/>
        </motion.h1>

        <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-xl text-sm font-medium text-zinc-500 md:text-base">
          A complete Shopify launch built on Dawn. Payments, shipping and domain configured. 10 products included.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-7 flex flex-col justify-center gap-3 text-sm sm:flex-row">
          <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="rounded-full bg-gradient px-8 py-2.5 font-medium text-white shadow-md">
            Start My Launch
          </motion.button>
          <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="rounded-full border border-gray-300 bg-white px-8 py-2.5 font-medium text-gray-700">
            View What&apos;s Included
          </motion.button>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-gray-500 md:text-sm">
        <div className="flex items-center gap-1">
            <CheckCircle size={13} className="text-purple-500" />
            <span>Built on Shopify</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle size={13} className="text-purple-500" />
            <span>Fast Launch</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle size={13} className="text-purple-500" />
            <span>14-Day Support</span>
          </div>
        </motion.div>

       

        <motion.div variants={fadeUp} className="relative mx-auto mt-8 flex max-w-6xl justify-center md:mt-16">

          {/* LEFT SCREEN (hide mobile) */}
          <div className="hidden md:block absolute left-[-50px] top-6 w-[820px] scale-[0.92] opacity-30 z-0 pointer-events-none">
            <div className="bg-white rounded-2xl shadow-lg border overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b bg-gray-100">
                <span className="w-3 h-3 bg-red-400 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                <span className="w-3 h-3 bg-green-400 rounded-full"></span>
              </div>

              <Image
                src="/hero-image.png" width={900}
                height={500}
                alt=""
                className="w-full object-cover object-top grayscale"
              />
            </div>
          </div>

          {/* RIGHT SCREEN (hide mobile) */}
          <div className="hidden md:block absolute right-[-50px] top-6 w-[820px] scale-[0.92] opacity-30 z-0 pointer-events-none">
            <div className="bg-white rounded-2xl shadow-lg border overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b bg-gray-100">
                <span className="w-3 h-3 bg-red-400 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                <span className="w-3 h-3 bg-green-400 rounded-full"></span>
              </div>

              <Image
                src="/hero-image.png" width={900}
                height={500}
                alt=""
                className="w-full object-cover object-top grayscale"
              />
            </div>
          </div>

          {/* MAIN SCREEN */}
          <div className="relative z-10 w-full max-w-5xl">
            <div className="bg-white rounded-t-2xl shadow-xl border-t border-r border-l overflow-hidden">

              <div className="flex items-center gap-2 px-4 py-3 border-b bg-white">
                <span className="w-3 h-3 bg-red-400 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                <span className="w-3 h-3 bg-green-400 rounded-full"></span>
              </div>

              <div className="h-[220px] sm:h-[320px] md:h-[420px] overflow-hidden">
                <Image
                  src="/hero-image.png"
                  width={900}
                  height={500}
                  alt="Shopify Store"
                  className="w-full object-cover object-top"
                />
              </div>

            </div>
          </div>

        </motion.div>

      </motion.div>
    </section>
  );
}
