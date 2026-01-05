import { PROJECTS } from "../constants";

export const HERO_SLIDES = PROJECTS
  .filter(project => project.images && project.images.length > 0)
  .map(project => ({
    image: project.images![0], // hero.jpg
    title: project.category
      ? project.category.toUpperCase()
      : "CONSTRUCTION PROJECT",
    subtitle: project.name,
  }));

