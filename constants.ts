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
// PROJECT IMAGE COLLECTIONS (SEO SAFE FOLDERS)
// FIRST IMAGE = HERO IMAGE
// =======================================================

// 1. Berger – Barrel Scrap Yard
const IMAGES_PROJECT_1 = [
  "/images/projects/berger-barrel-scrap-yard/hero.jpg",
  "/images/projects/berger-barrel-scrap-yard/1.jpg",
  "/images/projects/berger-barrel-scrap-yard/2.jpg",
];


// 2. Berger – CSR Food Court
const IMAGES_PROJECT_2 = [
  "/images/projects/berger-csr-food-court/hero.jpg",
  "/images/projects/berger-csr-food-court/1.jpg",
];

// 3. Berger – RMS Canopy Extension
const IMAGES_PROJECT_3 = [
  "/images/projects/berger-rms-canopy/hero.jpg",
  "/images/projects/berger-rms-canopy/1.jpg",
];


// 4. Sewage Treatment Plant
const IMAGES_PROJECT_4 = [
  "/images/projects/sewage-treatment-plant/hero.jpg",
  "/images/projects/sewage-treatment-plant/1.jpg",
];



// =======================================================
// HERO SLIDES (TOP SLIDER)
// =======================================================

export const HERO_SLIDES = [
  {
    image: IMAGES_PROJECT_1[0],
    title: "BUILDING THE FUTURE",
    subtitle:
      "Delivering industrial and infrastructure projects with precision since 2011.",
  },
  {
    image: IMAGES_PROJECT_2[0],
    title: "COMMUNITY INFRASTRUCTURE",
    subtitle:
      "Supporting education and public facilities through CSR construction initiatives.",
  },
  {
    image: IMAGES_PROJECT_3[0],
    title: "INDUSTRIAL EXPANSION",
    subtitle:
      "Executing complex industrial upgrades with safety and efficiency.",
  },
  {
    image: IMAGES_PROJECT_4[0],
    title: "SUSTAINABLE UTILITIES",
    subtitle:
      "Building reliable sewage and water treatment infrastructure.",
  },
];



// =======================================================
// PROJECTS LIST (NO DUPLICATES)
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
  name: "Berger Paints India Limited – CSR Food Court",
  value: "—",
  client: "Berger Paints",
  image: IMAGES_PROJECT_2[0],
  images: IMAGES_PROJECT_2,
},
{
  id: 3,
  name: "Berger RMS Canopy Extension Work",
  value: "—",
  client: "Berger Paints",
  image: IMAGES_PROJECT_3[0],
  images: IMAGES_PROJECT_3,
},
{
  id: 4,
  name: "Sewage Treatment Plant Construction",
  value: "—",
  client: "Government",
  image: IMAGES_PROJECT_4[0],
  images: IMAGES_PROJECT_4,
},


  // ---------------------------------------------------
  // REMAINING PROJECTS (TEXT ONLY)
  // ---------------------------------------------------

  { id: 6, name: "Construction of Govt Tool Room facility at Gauribidanur Ind. Estate", value: "1050 Lakhs", client: "Govt / NSL" },
  { id: 7, name: "Up gradation of 35 slums in Hospet municipality under sublet of IVRCL", value: "660 Lakhs", client: "IVRCL / Municipality" },
  { id: 8, name: "Up gradation of 13 Slums in Chitradurga Municipality under sublet of IVRCL", value: "330 Lakhs", client: "IVRCL / Municipality" },
  { id: 9, name: "Construction of Railway lines with supply and laying of ballast", value: "155 Lakhs", client: "Railways" },
  { id: 10, name: "Construction over head sub reservoir in Hindupur Constituency", value: "150 Lakhs", client: "Government" },
  { id: 11, name: "Construction of Ghat Road for wind mills at Mundergi, Gadag District", value: "350 Lakhs", client: "Suzlon Infrastructure" },
  { id: 12, name: "Construction of GHAT Road and platform for wind mill projects", value: "450 Lakhs", client: "Barooka Power Corp" },
  { id: 13, name: "Up gradation of Canal No. 13 Badra Canal project at Shivamoga", value: "110 Lakhs", client: "IVRCL & GVPR" },
  { id: 14, name: "Up graduation of canal 9C, 7C, 150C, 135C, Badra Canal project", value: "350 Lakhs", client: "IVRCL & GVPR" },
  { id: 15, name: "Construction of over subhead reservoirs in SRI RAMA REDDY Drinking Water project", value: "100 Lakhs", client: "L&T" },
  { id: 16, name: "Construction of Slabs for Furnace Buildings, Pump Houses for M.B. Smelters", value: "145 Lakhs", client: "M.B. Smelters" },
  { id: 17, name: "Construction of Compound wall and Pump Houses for Berger", value: "145 Lakhs", client: "Berger Paints" },
  { id: 18, name: "Construction of Facilities for British Paints at Hindupur", value: "140 Lakhs", client: "British Paints" },
  { id: 19, name: "Construction of Canteen Buildings and Expansion Sheds for Wipro Infrastructure", value: "150 Lakhs", client: "Wipro" },
  { id: 20, name: "Development of Layout and Construction of Roads in J.V at KIADB at Gauribidanur", value: "710 Lakhs", client: "KIADB" },
  { id: 21, name: "Construction of Furnace at Tirupati Steels, Hindupur", value: "150 Lakhs", client: "Tirupati Steels" },
  { id: 22, name: "Construction of State Highway from Yelburga to Cocoonor at Koppal Dt.", value: "1750 Lakhs", client: "State Highway" },
  { id: 23, name: "Development of Layout and Construction of Roads in J.V at KIADB at Narasapur", value: "400 Lakhs", client: "KIADB" },
];

// =======================================================
// VISION & MISSION
// =======================================================

export const VISION_TEXT =
  "Our vision is to be the best in all our operating areas with strong commitment to quality, timely completion, customer satisfaction, continuous learning and to clock Rs. 200 crores turnover by the turn of this decade.";

export const MISSION_POINTS = [
  "To build a strong future ensuring increased revenues and enhanced support to associates.",
  "To provide consistent quality products and services in construction projects with latest engineering practices.",
  "To encourage innovation, professional integrity, up-gradation of knowledge and skills of employees and a safe working environment.",
];
