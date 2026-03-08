'use client'

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";
import { fadeUp, stagger, viewport } from "./animations";

const testimonials = [
  {
    name: "Katherine Monroe",
    role: "Clothing eCommerce Owner",
    text: "Our shopify store finally sells way more than what we expected. Thanks to our tech partners XQL.",
    image: "/test1.jpg",
  },
  {
    name: "Daniel Brooks",
    role: "Streetwear Brand Founder",
    text: "The launch process was incredibly smooth and our store was ready faster than we imagined.",
    image: "/test2.png",
  },
  {
    name: "Michael Carter",
    role: "Lifestyle Brand Owner",
    text: "Professional, fast and extremely reliable team. The results speak for themselves.",
    image: "/test3.jpg",
  },
];

export default function TestimonialSection() {

  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((prev) => (prev + 1) % testimonials.length);

  const prev = () =>
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  const current = testimonials[index];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white">

      <motion.div
       variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
       className="max-w-7xl mx-auto px-4 sm:px-6">



        {/* Heading */}
        <motion.div variants={fadeUp}  className="max-w-xl mb-10 lg:mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Built on Trust. Proven by Results.
          </h2>

          <p className="text-gray-500 text-sm sm:text-base">
            Everything required to transition from idea to transaction.
            Pre-configured, rigorously tested, and ready for handover.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6 md:gap-6 items-center">

          {/* Avatar Column */}
          <motion.div variants={fadeUp} className="w-full md:w-auto">

            {/* Mobile Avatar + Controls */}
            <div className="flex md:hidden flex-col items-center gap-4">
              <div className="flex items-center justify-center gap-3">
                {[index - 1, index, index + 1].map((i, pos) => {
                  const safeIndex = (i + testimonials.length) % testimonials.length;
                  const item = testimonials[safeIndex];
                  const isActive = pos === 1;

                  return (
                    <div
                      key={`mobile-${safeIndex}-${pos}`}
                      className={`relative overflow-hidden rounded-xl transition-all duration-300 ${
                        isActive
                          ? "w-24 h-24 p-[2px] bg-gradient-to-r from-blue-500 to-purple-500 scale-100"
                          : "w-16 h-16 opacity-50 grayscale"
                      }`}
                    >
                      <Image
                        src={item.image}
                        className="w-full h-full object-cover rounded-xl"
                        width={500}
                        height={500}
                        alt="Testimonial"
                      />
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-50 transition"
                >
                  <ArrowLeft size={16} />
                </button>

                <button
                  onClick={next}
                  className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-50 transition"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Desktop Avatar Rail */}
            <div className="hidden md:flex items-center gap-6">

            {/* arrows */}
            <div className="flex flex-col gap-3 md:gap-4">

              <button
                onClick={prev}
                className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-50 transition"
              >
                <ArrowUp size={16} />
              </button>

              <button
                onClick={next}
                className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-50 transition"
              >
                <ArrowDown size={16} />
              </button>

            </div>

            {/* avatars */}
            <div className="flex flex-col items-center gap-3 md:gap-4">

              {[index - 1, index, index + 1].map((i, pos) => {

                const safeIndex = (i + testimonials.length) % testimonials.length;
                const item = testimonials[safeIndex];
                const isActive = pos === 1;

                return (
                  <div
                    key={safeIndex}
                    className={`relative transition-all duration-300 rounded-xl overflow-hidden
                  ${isActive
                        ? "w-32 h-32 md:w-44 md:h-44 p-[2px] bg-gradient-to-r from-blue-500 to-purple-500 scale-105"
                        : "w-32 h-20 md:w-44 md:h-24 opacity-40 grayscale"
                      }`}
                  >
                    <Image
                      src={item.image}
                      className="w-full h-full object-cover rounded-xl"
                      width={500}
                      height={500}
                      alt="Testimonial"
                    />
                  </div>
                );
              })}

            </div>
            </div>

          </motion.div>

          {/* Testimonial Card */}
          <motion.div variants={fadeUp}  className="flex-1 w-full">

            <div className="relative bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm flex flex-col justify-center w-full">

              {/* Quote Decoration */}
              <div className="absolute right-2 -top-3 text-[90px] sm:text-[120px] md:text-[240px] text-gray-100 font-serif leading-none">
                ”
              </div>

              <AnimatePresence mode="wait">

                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10"
                >

                  <p className="text-base sm:text-xl md:text-3xl font-medium text-gray-800 mb-6 md:mb-24 max-w-xl">
                    {current.text}
                  </p>

                  <h4 className="font-bold text-lg sm:text-2xl md:text-4xl mb-1 md:mb-2">
                    {current.name}
                  </h4>

                  <p className="text-gray-500 text-sm sm:text-base md:text-lg">
                    {current.role}
                  </p>

                </motion.div>

              </AnimatePresence>

            </div>

          </motion.div>

        </div>

      </motion.div>

    </section>
  );
}
