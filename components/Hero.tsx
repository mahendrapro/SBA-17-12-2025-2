import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { HERO_SLIDES } from '../constants';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // Changed h-screen to min-h-screen/dvh for better mobile browser support
    <div id="home" className="relative min-h-[100dvh] w-full flex items-center justify-center bg-matte overflow-hidden pt-20 md:pt-0">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentSlide}
            src={HERO_SLIDES[currentSlide]}
            alt="Construction Site"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Permanent Overlays for readability */}
        <div className="absolute inset-0 bg-matte/70 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-matte/80 via-transparent to-matte z-10"></div>
      </div>
      
      {/* Content Centered */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 border border-white/20 rounded-full text-accent font-sans text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-6 md:mb-8">
            Est. 2011 • Andhra Pradesh
          </span>

          {/* Adjusted font sizes for mobile to prevent overflow */}
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-display font-bold text-white uppercase leading-tight tracking-tight mb-6 md:mb-8 break-words">
            Building the <br /> Future
          </h1>
          
          <p className="max-w-2xl mx-auto text-base md:text-lg text-slate-300 font-light leading-relaxed mb-8 md:mb-12">
            Specialists in institutional, industrial, and mass housing projects. 
            Delivering over ₹200 Crores of value with absolute precision.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
            <a 
              href="#projects" 
              onClick={(e) => handleScroll(e, '#projects')}
              className="px-8 py-4 bg-white text-black font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-accent transition-colors duration-300"
            >
              View Projects
            </a>
            
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, '#contact')}
              className="px-8 py-4 border border-white/20 text-white font-bold text-xs md:text-sm uppercase tracking-widest hover:border-white transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>

      {/* Minimal Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden md:block">
        <ArrowDown className="text-white/50 w-6 h-6" />
      </div>
    </div>
  );
};

export default Hero;