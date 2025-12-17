import React, { useState, useEffect } from 'react';
import { PROJECTS, COMPANY_IMAGES } from '../constants';
import { Project } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

// Separate ProjectCard component to handle individual hover states and intervals
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // If no specific images array is provided, create a fallback slideshow using the main image + placeholders
  const images = project.images && project.images.length > 0
    ? project.images
    : [
        project.image || COMPANY_IMAGES.projectPlaceholder,
        "https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800"
      ];

  useEffect(() => {
    let interval: any;
    if (isHovered && images.length > 1) {
      interval = setInterval(() => {
        setActiveImageIndex((prev) => (prev + 1) % images.length);
      }, 1500); // Change image every 1.5 seconds
    } else {
      // Reset to cover image when not hovering
      setActiveImageIndex(0);
    }
    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  return (
    <motion.div
      className="relative group cursor-pointer h-full"
      whileHover={{ 
        scale: 1.05, 
        zIndex: 20,
        boxShadow: "0px 20px 40px rgba(0,0,0,0.6)"
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      layout
    >
      {/* Image Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-900 border border-white/10 group-hover:border-accent/50 transition-colors">
        
        {/* Slideshow */}
        <div className="absolute inset-0">
          <AnimatePresence>
            <motion.img
              key={activeImageIndex}
              src={images[activeImageIndex]}
              alt={project.name}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }} // Smooth cross-fade
              onError={(e) => {
                (e.target as HTMLImageElement).src = COMPANY_IMAGES.projectPlaceholder;
              }}
            />
          </AnimatePresence>
        </div>
        
        {/* Persistent Gradient Overlay - Ensures text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />

        {/* Text Content - Overlaying the image */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
          <div className="flex items-center justify-between mb-2">
            <span className="text-accent text-[10px] font-bold uppercase tracking-widest bg-black/50 px-2 py-1 backdrop-blur-sm rounded">
              {project.client || "Client Project"}
            </span>
            <span className="text-white text-[10px] font-bold uppercase tracking-widest bg-white/10 px-2 py-1 backdrop-blur-sm rounded">
              ₹{project.value}
            </span>
          </div>
          <h3 className="text-xl font-display font-bold text-white uppercase leading-snug drop-shadow-md group-hover:text-accent transition-colors">
            {project.name}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const displayProjects = showAll ? PROJECTS : PROJECTS.slice(0, 6); 

  return (
    <section id="projects" className="py-32 bg-black overflow-x-clip">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
          <h2 className="text-4xl font-display font-bold text-white uppercase">
            Selected Works
          </h2>
          <button 
            onClick={() => setShowAll(!showAll)}
            className="text-xs font-bold text-slate-500 uppercase tracking-widest hover:text-white transition-colors mt-4 md:mt-0 focus:outline-none"
          >
            {showAll ? 'Show Less' : 'View Full Portfolio'}
          </button>
        </div>

        {/* 2-Column Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12"
          layout
        >
          <AnimatePresence>
            {displayProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom "Show More" button as well for better UX on mobile */}
        {!showAll && PROJECTS.length > 6 && (
           <div className="mt-16 text-center">
              <button 
                onClick={() => setShowAll(true)}
                className="px-8 py-4 border border-white/10 text-white font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300"
              >
                Load All Projects
              </button>
           </div>
        )}
      </div>
    </section>
  );
};

export default Projects;