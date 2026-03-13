"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, stagger, viewport } from "./animations";

const references = [
  {
    theme: "Essentials",
    category: "Category: Health & Wellness",
    previewImage: "/essentialsPreview.png",
    webViewImage: "/essentialsdesktopview.png",
    mobileViewImage: "/essentialsmobileview.png",
  },
  {
    theme: "Skincare",
    category: "Category: Health & Wellness",
    previewImage: "/skincarepreview.png",
    webViewImage: "/skincaredesktopview.png",
    mobileViewImage: "/skincaredesktopview.png",
  },
];

export default function ReferenceSection() {
  const [index, setIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeView, setActiveView] = useState("desktop");
  const [selectedReference, setSelectedReference] = useState(null);
  const item = references[index];
  const modalItem = selectedReference ?? item;
  const hasMultipleReferences = references.length > 1;
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
        setSelectedReference(null);
      }
    };

    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);


  useEffect(() => {
    if (!hasMultipleReferences) return;
    if (isModalOpen) return;

    const interval = setInterval(() => {
      setDirection(1); // auto scroll goes right → left
      setIndex((prev) => (prev + 1) % references.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [hasMultipleReferences, isModalOpen]);

  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setCursor({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <>
      <section className="bg-white py-8 md:py-16 lg:py-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12"
        >
          <motion.div variants={fadeUp} className="mb-18 md:mb-20 max-w-xl">
            <h2 className="mb-3 text-2xl font-bold sm:text-3xl">Choose a Reference We Can Build Fast</h2>
            <p className="text-sm text-gray-500 sm:text-base">
              Pick one layout from our Dawn-ready references. This keeps scope fixed and delivery predictable.
            </p>
          </motion.div>

          <motion.div variants={stagger} className="relative flex items-center justify-center">
            {hasMultipleReferences && (
              <button
                onClick={() => {
                  setDirection(-1);
                  setIndex((prev) => (prev === 0 ? references.length - 1 : prev - 1));
                }} className="absolute left-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow"
              >
                <ChevronLeft size={20} />
              </button>
            )}

            <motion.div variants={fadeUp} className="relative w-full max-w-4xl ">
              <h3 className="gradient-text absolute -top-9 left-0  text-xl font-semibold sm:text-2xl">
                {item.theme}
              </h3>

              <div className="relative w-full overflow-hidden">

                <AnimatePresence mode="wait">
                  <motion.button
                    key={item.previewImage}
                    custom={direction}
                    initial={(direction) => ({
                      x: direction > 0 ? 220 : -220,
                      scale: 0.92,
                      opacity: 0,
                    })}
                    animate={{ x: 0, scale: 1, opacity: 1 }}
                    exit={(direction) => ({
                      x: direction > 0 ? -220 : 220,
                      scale: 0.85,
                      opacity: 0,
                    })}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                    type="button"
                    onClick={() => {
                      setActiveView("desktop");
                      setSelectedReference(item);
                      setIsModalOpen(true);
                    }}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    className="relative block w-full overflow-hidden rounded-xl border border-gray-100 will-change-transform">
                    <Image
                      src={item.previewImage}
                      width={1200}
                      height={700}
                      alt="reference preview"
                      priority
                      quality={100}
                      className="w-full"
                    />

                    {/* Cursor Preview Circle */}
                    {hover && (
                      <motion.div
                        animate={{
                          x: cursor.x - 60,
                          y: cursor.y - 60,
                        }}
                        transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
                        className="cursor-pointer absolute top-0 left-0 flex h-[90px] w-[90px] items-center justify-center rounded-full border border-white bg-black/40 text-sm font-semibold text-white backdrop-blur-md"
                      >
                        PREVIEW
                      </motion.div>
                    )}
                  </motion.button>
                </AnimatePresence>
              </div>
            </motion.div>

            {hasMultipleReferences && (
              <button
                onClick={() => {
                  setDirection(1);
                  setIndex((prev) => (prev + 1) % references.length);
                }} className="absolute right-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow"
              >
                <ChevronRight size={20} />
              </button>
            )}
          </motion.div>
        </motion.div>
      </section>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-[1px] p-3 sm:p-6"
            onClick={() => {
              setIsModalOpen(false);
              setSelectedReference(null);
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 14, scale: 0.98 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
              className="mx-auto flex h-full w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-gray-100 px-3 py-3 sm:px-5">
                <div className="rounded-full bg-gray-100 p-1">
                  <button
                    type="button"
                    onClick={() => setActiveView("desktop")}
                    className={`rounded-full px-4 py-1.5 text-sm transition ${activeView === "desktop"
                      ? "bg-white text-[#5745FF] shadow-sm"
                      : "text-gray-500"
                      }`}
                  >
                    Web View
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveView("mobile")}
                    className={`rounded-full px-4 py-1.5 text-sm transition ${activeView === "mobile"
                      ? "bg-white text-[#5745FF] shadow-sm"
                      : "text-gray-500"
                      }`}
                  >
                    Mobile
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    setSelectedReference(null);
                  }}
                  aria-label="Close preview"
                  className="rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="h-full overflow-y-auto bg-[#f4f5f8] p-2 sm:p-4">
                <div className={`mx-auto overflow-hidden rounded-xl border border-gray-200 bg-white ${activeView === "mobile" ? "max-w-[360px]" : "max-w-[1200px]"
                  }`}>
                  <Image
                    src={activeView === "mobile" ? modalItem.mobileViewImage : modalItem.webViewImage}
                    alt={activeView === "mobile" ? "Mobile reference full screenshot" : "Desktop reference full screenshot"}
                    width={activeView === "mobile" ? 535 : 2352}
                    height={10000}
                    quality={100}
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
