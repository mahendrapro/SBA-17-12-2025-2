import React, { useState, useEffect } from "react";
import { PROJECTS, COMPANY_IMAGES } from "../constants";
import { Project } from "../types";
import { motion, AnimatePresence } from "framer-motion";

/* ======================================================
   PROJECT CARD
====================================================== */

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  /* ---------- IMAGE DATA ---------- */
  const validImages =
    project.images?.filter(
      (img) => typeof img === "string" && img.trim().length > 0
    ) || [];

  const images =
    validImages.length > 0
      ? validImages
      : [COMPANY_IMAGES.projectPlaceholder];

  const isLogoFallback =
    images[activeImageIndex] === COMPANY_IMAGES.projectPlaceholder;

  /* ---------- NAV HELPERS ---------- */
  const nextImage = () =>
    setActiveImageIndex((prev) => (prev + 1) % images.length);

  const prevImage = () =>
    setActiveImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );

  /* ---------- DESKTOP HOVER SLIDESHOW ---------- */
  useEffect(() => {
    if (!isHovered || images.length <= 1) return;

    const interval = window.setInterval(nextImage, 4000);
    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  return (
    <motion.div
      className="relative group cursor-pointer h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setActiveImageIndex(0); // reset after hover
      }}
      whileHover={{
        scale: 1.04,
        zIndex: 20,
        boxShadow: "0px 20px 40px rgba(0,0,0,0.6)",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      layout
    >
      {/* IMAGE CONTAINER (SWIPE ENABLED) */}
      <motion.div
        className="relative aspect-video w-full overflow-hidden bg-black border border-white/10 group-hover:border-accent/50 transition-colors"
        drag={images.length > 1 ? "x" : false}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.15}
        onDragEnd={(_, info) => {
          if (info.offset.x < -80) nextImage();
          if (info.offset.x > 80) prevImage();
        }}
      >
        {/* IMAGE */}
        <AnimatePresence mode="wait">
          <motion.img
            key={activeImageIndex}
            src={images[activeImageIndex]}
            alt={project.name}
            className={`absolute inset-0 w-full h-full bg-black transition-all duration-300 ${
              isLogoFallback
                ? "object-contain p-12 max-w-[60%] max-h-[60%] mx-auto my-auto opacity-80"
                : "object-cover"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              if (!img.dataset.fallback) {
                img.dataset.fallback = "true";
                img.src = COMPANY_IMAGES.projectPlaceholder;
              }
            }}
          />
        </AnimatePresence>

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 pointer-events-none" />

        {/* TEXT */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-20 pointer-events-none">
          <span className="inline-block text-accent text-[10px] font-bold uppercase tracking-widest bg-black/60 px-2 py-1 rounded">
            {project.client || "Project"}
          </span>

          <h3 className="mt-2 text-sm md:text-xl font-display font-bold text-white uppercase leading-snug line-clamp-3 md:line-clamp-none">
            {project.name}
          </h3>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ======================================================
   PROJECTS SECTION
====================================================== */

const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const displayProjects = showAll ? PROJECTS : PROJECTS.slice(0, 6);

  return (
    <section id="projects" className="py-32 bg-black overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase">
            Selected Works
          </h2>

          <button
            onClick={() => setShowAll(!showAll)}
            className="text-xs font-bold text-slate-500 uppercase tracking-widest hover:text-white transition-colors mt-4 md:mt-0"
          >
            {showAll ? "Show Less" : "View Full Portfolio"}
          </button>
        </div>

        {/* GRID */}
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

        {/* MOBILE LOAD MORE */}
        {!showAll && PROJECTS.length > 6 && (
          <div className="mt-16 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-4 border border-white/10 text-white font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
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
