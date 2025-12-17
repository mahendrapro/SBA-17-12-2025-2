import React from 'react';
import { Factory, Home, Map, BookOpen, PenTool } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    { title: "Industrial", desc: "Factories, Sheds, Workshops", icon: Factory },
    { title: "Mass Housing", desc: "Residential Layouts, Urban Development", icon: Home },
    { title: "Infrastructure", desc: "Roads, Highways, Internal Paths", icon: Map },
    { title: "Consultancy", desc: "Project Management & Strategy", icon: BookOpen },
    { title: "Civil Works", desc: "Reservoirs, Canals, Foundations", icon: PenTool }
  ];

  return (
    <section id="services" className="py-32 bg-matte">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20 text-center">
          <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs block mb-4">What We Do</span>
          <h2 className="text-4xl font-display font-bold text-white uppercase">Areas of Expertise</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 border border-white/5 hover:border-accent/30 transition-colors duration-300 bg-white/[0.02]">
              <service.icon className="h-8 w-8 text-accent mb-6" />
              <h3 className="text-xl font-display font-bold text-white uppercase mb-3">
                  {service.title}
              </h3>
              <p className="text-slate-400 font-light text-sm leading-relaxed">
                  {service.desc}
              </p>
            </div>
          ))}
          
          {/* Call to Action Card */}
          <div className="p-8 flex flex-col justify-center items-center text-center border border-dashed border-white/10">
             <h3 className="text-xl font-display font-bold text-white uppercase mb-2">Have a Project?</h3>
             <a href="#contact" className="text-sm text-accent border-b border-accent pb-1 font-bold uppercase tracking-widest hover:text-white hover:border-white transition-all">
                Get a Quote
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;