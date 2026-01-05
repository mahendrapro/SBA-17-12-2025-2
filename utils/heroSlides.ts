import { PROJECTS } from "../constants";

export const HERO_SLIDES = PROJECTS
  .filter(project => project.images && project.images.length > 0)
  .map(project => {
    const title = project.category
      ? project.category.toUpperCase()
      : "CONSTRUCTION PROJECT";

    const subtitle = project.client
      ? `${project.name} | ${project.client}`
      : project.name;

    return {
      image: project.images![0], // hero.jpg
      title,
      subtitle,
    };
  });
