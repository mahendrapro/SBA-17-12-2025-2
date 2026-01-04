import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { HERO_SLIDES } from "../constants";

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length
    );
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-matte"
    >
      {/* Background slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={HERO_SLIDES[currentSlide]}
            alt="Hero Slide"
            loading="eager"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-5xl px-6">
        <span className="inline-block mb-6 px-4 py-1 border border-white/20 rounded-full text-accent text-xs tracking-widest">
          EST. 2011 • ANDHRA PRADESH
        </span>

        <h1 className="text-4xl md:text-7xl font-display font-bold text-white uppercase mb-6">
          Engineering <br /> Excellence
        </h1>

        <p className="text-slate-300 max-w-2xl mx-auto mb-10">
          Trusted partner for large-scale industrial and infrastructure projects.
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

      {/* Prev / Next controls (centered) */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-6">
        <button
          onClick={prevSlide}
          className="w-12 h-12 flex items-center justify-center border border-white/30 text-white hover:bg-white hover:text-black transition"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 flex items-center justify-center border border-white/30 text-white hover:bg-white hover:text-black transition"
        >
          <ArrowRight size={20} />
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 animate-bounce z-20">
        <ArrowDown size={22} />
      </div>
    </section>
  );
};

export default Hero;
