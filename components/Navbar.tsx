import React, { useState, useEffect } from 'react';
import { Menu, X, HardHat } from 'lucide-react';
import { COMPANY_IMAGES } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Team', href: '#team' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      setIsOpen(false);
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  // Logic to determine navbar styles
  const getNavClasses = () => {
    if (isOpen) {
      return 'bg-transparent py-4';
    }
    if (scrolled) {
      return 'bg-matte/95 backdrop-blur-sm py-4 border-b border-white/5';
    }
    return 'bg-transparent py-6';
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getNavClasses()}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-50">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            {!logoError ? (
               <img 
                src={COMPANY_IMAGES.logo} 
                alt="Sri Balaji Associates" 
                className="h-12 md:h-14 w-auto object-contain bg-white px-2 py-1 rounded-sm"
                onError={() => setLogoError(true)}
               />
            ) : (
              <>
                <HardHat className="h-6 w-6 text-accent" />
                <div className="flex flex-col">
                  <span className="font-display font-bold text-xl text-white tracking-widest leading-none">SRI BALAJI</span>
                  <span className="font-sans text-[10px] font-medium text-slate-400 tracking-[0.3em] uppercase">Associates</span>
                </div>
              </>
            )}
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-xs font-bold text-slate-300 hover:text-white tracking-[0.2em] uppercase transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="px-6 py-2 border border-white/10 text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300"
            >
              Contact
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-accent focus:outline-none transition-colors p-2"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-matte transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
          <div className="h-full w-full overflow-y-auto no-scrollbar">
            <div className="min-h-full flex flex-col items-center justify-center gap-8 py-24 px-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-3xl font-display font-bold text-white hover:text-accent uppercase tracking-wider transition-transform hover:scale-105"
                >
                  {link.name}
                </a>
              ))}
              <a
                  href="#contact"
                  onClick={(e) => handleScroll(e, '#contact')}
                  className="mt-8 px-10 py-4 bg-accent text-black font-bold text-sm uppercase tracking-widest shadow-[0_0_20px_rgba(56,189,248,0.4)]"
                >
                  Get in Touch
              </a>
            </div>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;