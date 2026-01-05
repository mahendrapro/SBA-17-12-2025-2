import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { HERO_SLIDES } from "../constants";

const SLIDE_INTERVAL = 5000;
const ANIMATION_DURATION = 1200;

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);

  // ---------------- Auto Slide ----------------
  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = window.setInterval(() => {
      handleNext();
    }, SLIDE_INTERVAL);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    if (!isPaused) startAutoSlide();
    return () => stopAutoSlide();
  }, [isPaused]);

  // ---------------- Slide Controls ----------------
  const lockAndChange = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    stopAutoSlide();

    setTimeout(() => {
      setIsAnimating(false);
      if (!isPaused) startAutoSlide();
    }, ANIMATION_DURATION);
  };

  const handleNext = () => {
    lockAndChange((currentSlide + 1) % HERO_SLIDES.length);
  };

  const handlePrev = () => {
    lockAndChange(
      (currentSlide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length
    );
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={slide.image}
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-5xl px-6">
        <span className="inline-block mb-6 px-4 py-1 border border-white/20 rounded-full text-accent text-xs tracking-widest">
          EST. 2011 • ANDHRA PRADESH
        </span>

        <h1 className="text-4xl md:text-7xl font-display font-bold text-white uppercase mb-6">
          {slide.title}
        </h1>

        <p className="text-slate-300 max-w-2xl mx-auto mb-10">
          {slide.subtitle}
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="#projects"
            className="px-8 py-4 bg-white text-black font-bold uppercase text-xs tracking-widest"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-white/30 text-white font-bold uppercase text-xs tracking-widest"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Arrows */}
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-30 flex gap-6">
        <button
          onClick={handlePrev}
          disabled={isAnimating}
          className="w-12 h-12 flex items-center justify-center border border-white/30 text-white hover:bg-white hover:text-black transition disabled:opacity-40"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          onClick={handleNext}
          disabled={isAnimating}
          className="w-12 h-12 flex items-center justify-center border border-white/30 text-white hover:bg-white hover:text-black transition disabled:opacity-40"
        >
          <ArrowRight size={20} />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => lockAndChange(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentSlide
                ? "bg-white"
                : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 animate-bounce z-20">
        <ArrowDown size={22} />
      </div>
    </section>
  );
};

export default Hero;
