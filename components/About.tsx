import React from 'react';
import { Target, Hammer } from 'lucide-react';
import { COMPANY_IMAGES } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-matte">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Content */}
          <div className="lg:w-1/2">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-accent"></div>
              <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs">Who We Are</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase leading-tight mb-8">
              Constructing <br /> Excellence since 2011
            </h2>
            
            <p className="text-slate-400 leading-relaxed text-lg mb-8 font-light">
              Sri Balaji Associates is a premier construction firm specializing in institutional, industrial, and mass housing projects. From humble beginnings, we have grown into a powerhouse delivering major infrastructure with a turnover target of ₹200 Crores by 2030.
            </p>

            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8 mb-8">
              <div>
                <span className="block text-4xl font-display font-bold text-white mb-1">13+</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest">Years of Experience</span>
              </div>
              <div>
                <span className="block text-4xl font-display font-bold text-white mb-1">₹40Cr+</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest">Current Order Book</span>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-display font-bold text-lg uppercase">Our Mission</h4>
               <p className="text-slate-400 text-sm leading-relaxed">
                 To provide consistent quality products and services in construction projects with the latest engineering practices, ensuring increased revenues and enhanced support to our associates.
               </p>
            </div>
          </div>

          {/* Right Side: Single High-Quality Image */}
          <div className="lg:w-1/2 relative">
            <div className="aspect-[4/5] overflow-hidden bg-slate-900">
              <img 
                src={COMPANY_IMAGES.about}
                alt="Construction Engineer" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-l border-b border-accent/50 hidden md:block"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;