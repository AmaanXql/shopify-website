"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b border-gray-200/70 bg-white/90 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="XQL Systems"
            width={130}
            height={35}
            priority
            className="h-auto w-[100px] sm:w-[110px] md:w-[130px]"
          />
        </Link>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          <Link href="#features" className="text-gray-600 transition font-semibold hover:text-black">
            Our Services
          </Link>
          <Link href="#process" className="text-gray-600 transition font-semibold hover:text-black">
            Process
          </Link>
          {/* <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full bg-gradient px-6 py-2 text-white shadow-md"
          >
            Start Project
          </motion.button> */}
        </nav>

        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-gray-200 bg-white md:hidden"
          >
            <div className="flex flex-col items-center gap-5 py-6 text-sm">
              <Link href="#features" className="text-gray-600" onClick={() => setOpen(false)}>
                Features
              </Link>
              <Link href="#process" className="text-gray-600" onClick={() => setOpen(false)}>
                Process
              </Link>
              {/* <button className="rounded-full bg-gradient px-6 py-2 text-white shadow-md">
                Start Project
              </button> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
