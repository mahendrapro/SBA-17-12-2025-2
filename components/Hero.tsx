import React, { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { HERO_SLIDES } from "../utils/heroSlides";

/* ================= CONFIG ================= */
const SLIDE_INTERVAL = 5000;
const ANIMATION_DURATION = 1.2;

/* ================= COMPONENT ================= */
const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [pauseOnDots, setPauseOnDots] = useState(false);
  const [slideTick, setSlideTick] = useState(0);

  /* -------- AUTO SLIDE -------- */
  useEffect(() => {
    if (pauseOnDots) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_INTERVAL);

    return () => clearInterval(timer);
  }, [pauseOnDots, slideTick]);

  const next = () => {
    setCurrentSlide((p) => (p + 1) % HERO_SLIDES.length);
    setSlideTick((t) => t + 1);
  };

  const prev = () => {
    setCurrentSlide((p) => (p === 0 ? HERO_SLIDES.length - 1 : p - 1));
    setSlideTick((t) => t + 1);
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section
      id="home"
      className="relative w-full h-[100svh] overflow-hidden bg-black"
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
              object-cover
              bg-black
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: ANIMATION_DURATION }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            onDragEnd={(_, info) => {
              if (info.offset.x < -80) next();
              if (info.offset.x > 80) prev();
            }}
          />
        </AnimatePresence>

        {/* OVERLAYS */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black z-10" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-20 flex h-full items-center justify-center px-5">
        <div className="text-center max-w-5xl">

          <span className="inline-block mb-4 px-4 py-1 border border-white/20 rounded-full text-accent text-xs tracking-widest">
            EST. 2011 • ANDHRA PRADESH
          </span>

          <h1 className="
            font-display font-bold uppercase text-white mb-4
            [font-size:clamp(1.75rem,6vw,4.5rem)]
          ">
            {slide.title}
          </h1>

          <p className="
            text-slate-300
            max-w-2xl mx-auto mb-8
            [font-size:clamp(0.9rem,3vw,1.05rem)]
          ">
            {slide.subtitle}
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-white text-black font-bold uppercase text-xs tracking-widest"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-white/30 text-white font-bold uppercase text-xs tracking-widest"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* ================= DOTS ================= */}
      <div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 flex gap-3"
        onMouseEnter={() => setPauseOnDots(true)}
        onMouseLeave={() => setPauseOnDots(false)}
      >
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrentSlide(i);
              setSlideTick((t) => t + 1);
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              i === currentSlide
                ? "bg-white scale-125"
                : "bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* ================= SCROLL ================= */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 animate-bounce z-20">
        <ArrowDown size={22} />
      </div>
    </section>
  );
};

export default Hero;
