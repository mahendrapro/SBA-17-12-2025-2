import { Project } from "./types";

// =======================================================
// COMPANY DETAILS
// =======================================================

export const COMPANY_DETAILS = {
  name: "Sri Balaji Associates",
  tagline: "The Place Where Construction Takes Shape",
  address: "# 26-4-1978, Melapur, Hindupur – 515 201",
  email: "sribalajiassociates256@gmail.com",
  phone: "9963462203",
  founded: 2011,
  founder: "Mr. C. Krishna Kumar",
  turnover: "20 Crore+",
};

// =======================================================
// COMPANY IMAGES
// =======================================================

export const COMPANY_IMAGES = {
  logo: "/images/logo.png",
  about: "/images/about-us.jpeg",
  projectPlaceholder: "/images/project-placeholder.jpg",
};

// =======================================================
// PROJECT IMAGE COLLECTIONS
// FIRST IMAGE = HERO IMAGE
// =======================================================

const IMAGES_PROJECT_1 = [
  "/images/projects/Berger Paints India Limited- Barrel Scrap Yard/hero.jpeg",
  "/images/projects/Berger Paints India Limited- Barrel Scrap Yard/1.jpeg",
  "/images/projects/Berger Paints India Limited- Barrel Scrap Yard/2.jpeg",
];

const IMAGES_PROJECT_2 = [
  "/images/projects/Berger Paints India Limited- Scrap yard work/hero.jpeg",
  "/images/projects/Berger Paints India Limited- Scrap yard work/1.jpeg",
];

const IMAGES_PROJECT_3 = [
  "/images/projects/Berger Paints India limited- CSR Initiative work - Food Court construction for Thumakunta Government High school/hero.jpeg",
  "/images/projects/Berger Paints India limited- CSR Initiative work - Food Court construction for Thumakunta Government High school/1.jpeg",
];

const IMAGES_PROJECT_4 = [
  "/images/projects/Berger RMS canopy extension work/hero.jpeg",
  "/images/projects/Berger RMS canopy extension work/1.jpeg",
];

const IMAGES_PROJECT_5 = [
  "/images/projects/Sewage Treatment plant construction/hero.jpeg",
  "/images/projects/Sewage Treatment plant construction/1.jpeg",
];

// =======================================================
// HERO SLIDES
// =======================================================

export const HERO_SLIDES = [
  IMAGES_PROJECT_1[0],
  IMAGES_PROJECT_2[0],
  IMAGES_PROJECT_3[0],
  IMAGES_PROJECT_4[0],
  IMAGES_PROJECT_5[0],
];

// =======================================================
// PROJECTS LIST
// =======================================================

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "Berger Paints India Limited – Barrel Scrap Yard",
    value: "600 Lakhs",
    client: "Berger Paints",
    image: IMAGES_PROJECT_1[0],
    images: IMAGES_PROJECT_1,
  },
  {
    id: 2,
    name: "Berger Paints India Limited – Scrap Yard Work",
    value: "300 Lakhs",
    client: "Berger Paints",
    image: IMAGES_PROJECT_2[0],
    images: IMAGES_PROJECT_2,
  },
  {
    id: 3,
    name: "Berger Paints India Limited – CSR Initiative (Food Court Construction)",
    value: "—",
    client: "Berger Paints",
    image: IMAGES_PROJECT_3[0],
    images: IMAGES_PROJECT_3,
  },
  {
    id: 4,
    name: "Berger RMS Canopy Extension Work",
    value: "—",
    client: "Berger Paints",
    image: IMAGES_PROJECT_4[0],
    images: IMAGES_PROJECT_4,
  },
  {
    id: 5,
    name: "Sewage Treatment Plant Construction",
    value: "—",
    client: "Berger Paints",
    image: IMAGES_PROJECT_5[0],
    images: IMAGES_PROJECT_5,
  },

  // TEXT-ONLY PROJECTS (USE PLACEHOLDER AUTOMATICALLY)
  { id: 6, name: "Construction of Govt Tool Room facility at Gauribidanur Ind. Estate", value: "1050 Lakhs", client: "Govt / NSL" },
  { id: 7, name: "Upgradation of 35 slums in Hospet municipality under sublet of IVRCL", value: "660 Lakhs", client: "IVRCL / Municipality" },
  { id: 8, name: "Upgradation of 13 slums in Chitradurga municipality", value: "330 Lakhs", client: "IVRCL / Municipality" },
  { id: 9, name: "Construction of Railway lines with supply and laying of ballast", value: "155 Lakhs", client: "Railways" },
  { id: 10, name: "Construction over head sub reservoir in Hindupur Constituency", value: "150 Lakhs", client: "Government" },
];

// =======================================================
// VISION & MISSION
// =======================================================

export const VISION_TEXT =
  "Our vision is to be the best in all our operating areas with strong commitment to quality, timely completion, customer satisfaction, continuous learning and to clock Rs. 200 crores turnover by the turn of this decade.";

export const MISSION_POINTS = [
  "To build a strong future ensuring increased revenues and enhanced support to associates.",
  "To provide consistent quality products and services using latest engineering practices.",
  "To encourage innovation, integrity, skill upgradation and a safe working environment.",
];
