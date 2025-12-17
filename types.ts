export interface Project {
  id: number;
  name: string;
  value: string; // Represented as string to include "Lakhs"
  client?: string;
  category?: string;
  image?: string; // Primary cover image
  images?: string[]; // Array of images for slideshow
}

export interface Value {
  title: string;
  description: string;
  icon: any;
}

export interface Stat {
  label: string;
  value: string;
}