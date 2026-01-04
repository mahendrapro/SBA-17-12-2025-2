import React, { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { HERO_SLIDES } from "../constants";

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5 seconds
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
    setCurrentSlide((prev) =>
      prev === 0 ? HERO_SLIDES.length - 1 : prev - 1
    );
  };

  const slide = HERO_SLIDES[currentSlide];

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="home"
      className="relative min-h-[100dvh] w-full flex items-center justify-center bg-matte overflow-hidden pt-20 md:pt-0"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={slide.image}
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Overlays */}
        <div className="absolute inset-0 bg-matte/70 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-matte/80 via-transparent to-matte z-10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 border border-white/20 rounded-full text-accent text-xs font-bold tracking-[0.2em] uppercase mb-8">
              Est. 2011 • Andhra Pradesh
            </span>

            <h1 className="text-4xl md:text-7xl lg:text-8xl font-display font-bold text-white uppercase leading-tight mb-6">
              {slide.title}
            </h1>

            <p className="max-w-2xl mx-auto text-base md:text-lg text-slate-300 leading-relaxed mb-10">
              {slide.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#projects"
                onClick={(e) => handleScroll(e, "#projects")}
                className="px-8 py-4 bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-accent transition"
              >
                View Projects
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScroll(e, "#contact")}
                className="px-8 py-4 border border-white/20 text-white font-bold text-xs uppercase tracking-widest hover:border-white transition"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-10 right-10 z-20 flex gap-3">
        <button
          onClick={prevSlide}
          className="w-10 h-10 bg-white/20 text-white text-xl hover:bg-white/40"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 bg-white/20 text-white text-xl hover:bg-white/40"
        >
          ›
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden md:block">
        <ArrowDown className="text-white/50 w-6 h-6" />
      </div>
    </div>
  );
};

export default Hero;
