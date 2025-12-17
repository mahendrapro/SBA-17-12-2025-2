import React from 'react';
import { Quote } from 'lucide-react';
import { COMPANY_DETAILS, COMPANY_IMAGES } from '../constants';

const Leadership: React.FC = () => {
  return (
    <section id="team" className="py-32 bg-matte">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <Quote className="h-8 w-8 text-accent mx-auto mb-8 opacity-50" />
        
        <blockquote className="text-2xl md:text-4xl font-display font-medium text-white uppercase leading-tight mb-12">
          "To build a strong future ensuring increased revenues and enhanced support to associates, while strictly adhering to quality and safety."
        </blockquote>

        <div className="flex flex-col items-center">
          <div className="w-16 h-1 bg-accent mb-6"></div>
          {/* Optional: Uncomment below if you want to show the Founder's image circle
          <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-white/10">
             <img src={COMPANY_IMAGES.leadership} className="w-full h-full object-cover" alt={COMPANY_DETAILS.founder} />
          </div>
          */}
          <h3 className="text-xl font-bold text-white uppercase tracking-wider">{COMPANY_DETAILS.founder}</h3>
          <p className="text-sm text-slate-500 font-medium uppercase tracking-widest mt-2">Founder & Managing Director</p>
          <p className="text-xs text-slate-600 mt-2">Post Graduate in Management | Mechanical Engineering</p>
        </div>
      </div>
    </section>
  );
};

export default Leadership;