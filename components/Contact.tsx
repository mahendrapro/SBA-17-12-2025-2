import React from 'react';
import { COMPANY_DETAILS } from '../constants';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-black py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <div>
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs block mb-6">Contact Us</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase leading-tight mb-8">
              Let's Build <br /> Something Great
            </h2>
            <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-xl text-slate-400 hover:text-white transition-colors">
              {COMPANY_DETAILS.email}
            </a>
          </div>

          <div className="flex flex-col justify-end">
             <div className="mb-8">
                <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-4">Headquarters</h4>
                <address className="not-italic text-slate-400 leading-relaxed font-light">
                   {COMPANY_DETAILS.address}<br />
                   Satya Sai District, Andhra Pradesh
                </address>
             </div>
             <div>
                <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-4">Phone</h4>
                <p className="text-slate-400">{COMPANY_DETAILS.phone}</p>
             </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-600 text-[10px] uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} {COMPANY_DETAILS.name}. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <span>Privacy Policy</span>
             <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;