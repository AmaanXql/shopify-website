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
    text: "Team XQL is Professional, fast and extremely reliable. For me, The best in the market right now",
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
    <section className="bg-white py-8 md:py-16 lg:py-20">

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="max-w-7xl mx-auto px-4 sm:px-6">



        {/* Heading */}
        <motion.div variants={fadeUp} className="mb-6 max-w-xl lg:mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Built on Trust. Proven by Results.
          </h2>

          <p className="text-gray-500 text-sm sm:text-base">
            Everything required to transition from idea to transaction.
            Pre-configured, rigorously tested, and ready for handover.
          </p>
        </motion.div>

        <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 md:flex-row md:gap-6">

          {/* Avatar Column */}
          <motion.div variants={fadeUp} className="w-full md:w-auto">



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

            </div>

          </motion.div>

          {/* Testimonial Card */}
          <motion.div variants={fadeUp} className="w-full flex-1">

            <div className="relative flex flex-col md:flex-row items-start gap-4 md:gap-6 rounded-3xl bg-white p-6 sm:p-8 md:p-10 shadow-sm">

              {/* Mobile Top Row */}
              <div className="flex items-center gap-4 md:flex-col md:items-start">

                {/* Image */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 md:w-32 md:h-32 rounded-xl p-[2px] bg-gradient-to-r from-blue-500 to-purple-500">
                    <Image
                      src={current.image}
                      alt={current.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>

                {/* Name + Role (Mobile only) */}
                <div className="md:hidden">
                  <h4 className="text-base font-semibold">
                    {current.name}
                  </h4>

                  <p className="text-gray-500 text-sm">
                    {current.role}
                  </p>
                </div>

              </div>

              {/* Quote */}
              <div className="absolute right-4 top-2 text-[60px] md:text-[140px] text-gray-100 font-serif leading-none">
                ”
              </div>

              {/* Content */}
              <div className="flex-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="relative z-10"
                  >

                    {/* Desktop Text First */}
                    <p className="mb-4 text-base md:text-lg leading-7 text-gray-800">
                      {current.text}
                    </p>

                    {/* Desktop Name + Role */}
                    <div className="hidden md:block">
                      <h4 className="text-lg font-semibold md:text-lg">
                        {current.name}
                      </h4>

                      <p className="text-gray-500 text-sm md:text-base">
                        {current.role}
                      </p>
                    </div>

                  </motion.div>
                </AnimatePresence>
              </div>

            </div>

          </motion.div>

        </div>

      </motion.div>

    </section>
  );
}
