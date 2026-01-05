import React, { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { HERO_SLIDES } from "../constants";

const SLIDE_INTERVAL = 5000;
const ANIMATION_DURATION = 1200;

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // ---------------- Logic ----------------

  // Standard function to handle slide changes
  const changeSlide = (index: number) => {
    // Prevent clicking if already animating or clicking the active dot
    if (isAnimating || index === currentSlide) return;

    setIsAnimating(true);
    setCurrentSlide(index);

    // Lock interaction until animation finishes
    setTimeout(() => {
      setIsAnimating(false);
    }, ANIMATION_DURATION);
  };

  const handleNext = () => {
    const nextIndex = (currentSlide + 1) % HERO_SLIDES.length;
    changeSlide(nextIndex);
  };

  // ---------------- Automatic Slider Effect ----------------
  useEffect(() => {
    // 1. If paused (hovering) or animating, don't start a timer yet.
    if (isPaused || isAnimating) return;

    // 2. Start the timer.
    const timer = setInterval(() => {
      handleNext();
    }, SLIDE_INTERVAL);

    // 3. Cleanup. 
    // This is the magic part: Whenever 'currentSlide' changes (via auto or dot click),
    // this clears the OLD timer and the effect runs again to start a NEW timer.
    return () => clearInterval(timer);
  }, [isPaused, isAnimating, currentSlide]); 

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black"
      // Pause on hover
      onMouseEnter={() => setIsPaused(true)} 
      // Resume on leave (will start a fresh timer)
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image with Animation */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={slide.image} // Key change triggers the animation
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black z-10" />
      </div>

      {/* Text Content */}
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
          <a href="#projects" className="px-8 py-4 bg-white text-black font-bold uppercase text-xs tracking-widest">
            View Projects
          </a>
          <a href="#contact" className="px-8 py-4 border border-white/30 text-white font-bold uppercase text-xs tracking-widest">
            Contact Us
          </a>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => changeSlide(index)} // This manually changes slide & resets timer
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
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
