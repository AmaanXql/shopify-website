import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const prices = [
  { value: "$1499", old: true },
  { value: "$799", old: false }
];
const label = "Limited Launch Pricing ";
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

const letter = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2 }
  }
};

export default function AnimatedPrice() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((p) => (p === 0 ? 1 : 0));
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <span className="relative inline-flex items-center align-middle">

      {/* price */}
      <span className="relative inline-block h-[1.2em] w-[4.3ch] tabular-nums">
        <AnimatePresence mode="wait">
          <motion.span
            key={prices[index].value}
            initial={{ rotateX: 90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateX: -90, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className={`absolute left-0 top-0 w-full origin-center ${
              prices[index].old
                ? "text-gray-400 line-through"
                : "gradient-text"
            }`}
          >
            {prices[index].value}
          </motion.span>
        </AnimatePresence>
      </span>

      {/* responsive label */}
      <AnimatePresence mode="wait">
  {!prices[index].old && (
    <motion.span
      key="label"
      variants={container}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="
        absolute
        -bottom-2 md:right-7 right-2
        text-[10px] sm:text-xs md:text-sm
        font-medium
        gradient-text
        whitespace-nowrap
        flex
      "
    >
      {label.split("").map((char, i) => (
        <motion.span key={i} variants={letter}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  )}
</AnimatePresence>

    </span>
  );
}