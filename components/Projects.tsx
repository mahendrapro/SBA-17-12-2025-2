import React, { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { HERO_SLIDES } from "../utils/heroSlides";

/* ================= CONFIG ================= */
const SLIDE_INTERVAL = 5000;
const SWIPE_THRESHOLD = 80;

/* ================= COMPONENT ================= */
const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [tick, setTick] = useState(0); // resets timer on interaction

  /* -------- AUTO SLIDE -------- */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((p) => (p + 1) % HERO_SLIDES.length);
    }, SLIDE_INTERVAL);

    return () => clearInterval(timer);
  }, [tick]);

  const next = () => {
    setCurrentSlide((p) => (p + 1) % HERO_SLIDES.length);
    setTick((t) => t + 1);
  };

  const prev = () => {
    setCurrentSlide((p) =>
      p === 0 ? HERO_SLIDES.length - 1 : p - 1
    );
    setTick((t) => t + 1);
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section
      id="home"
      className="relative w-full h-[100svh] md:h-screen overflow-hidden bg-black"
    >
      {/* ================= IMAGE ================= */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={slide.image}
            src={slide.image}
            alt={slide.title}
            className="
              absolute inset-0 w-full h-full
              object-contain md:object-cover
              bg-black
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}

            /* ===== SWIPE ===== */
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            onDragEnd={(_, info) => {
              if (info.offset.x < -SWIPE_THRESHOLD) next();
              if (info.offset.x > SWIPE_THRESHOLD) prev();
            }}
          />
        </AnimatePresence>

        {/* OVERLAYS */}
        <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black z-10 pointer-events-none" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center">
        <span className="mb-4 px-4 py-1 border border-white/30 rounded-full text-accent text-xs tracking-widest">
          EST. 2011 • ANDHRA PRADESH
        </span>

        <h1 className="text-3xl md:text-7xl font-display font-bold text-white uppercase mb-4">
          {slide.title}
        </h1>

        <p className="text-slate-300 max-w-xl mb-8 text-sm md:text-base">
          {slide.subtitle}
        </p>

        <div className="flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-white text-black font-bold uppercase text-xs tracking-widest"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-white/40 text-white font-bold uppercase text-xs tracking-widest"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* ================= DOTS ================= */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrentSlide(i);
              setTick((t) => t + 1);
            }}
            className={`w-2.5 h-2.5 rounded-full transition ${
              i === currentSlide ? "bg-white scale-125" : "bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* ================= SCROLL ================= */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 animate-bounce z-30">
        <ArrowDown size={22} />
      </div>
    </section>
  );
};

export default Hero;
