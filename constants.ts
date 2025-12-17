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
  about: "/images/about-us.jpg",
  projectPlaceholder: "/images/project-placeholder.jpg",
};

// =======================================================
// PROJECT IMAGE COLLECTIONS
// FIRST IMAGE = HERO IMAGE
// =======================================================

// Project 1: Berger Scrap Yard
const IMAGES_PROJECT_1 = [
  "/images/projects/berger-yard/hero.jpeg",
  "/images/projects/berger-yard/1.jpeg",
  "/images/projects/berger-yard/2.jpeg",
];

// Project 2: Berger STP
const IMAGES_PROJECT_2 = [
  "/images/projects/berger-stp/hero.jpeg",
  "/images/projects/berger-stp/1.jpeg",
];

// Project 3: Rain Water Harvesting
const IMAGES_PROJECT_3 = [
  "/images/projects/rain-water/hero.jpeg",
  "/images/projects/rain-water/1.jpeg",
];

// Project 4: Workshop Sheds
const IMAGES_PROJECT_4 = [
  "/images/projects/workshop-sheds/hero.jpeg",
  "/images/projects/workshop-sheds/1.jpeg",
];

// Project 5: Wipro R&D
const IMAGES_PROJECT_5 = [
  "/images/projects/wipro-rnd/hero.jpeg",
  "/images/projects/wipro-rnd/1.jpeg",
];

// Project 6: Wipro Tank Shed
const IMAGES_PROJECT_6 = [
  "/images/projects/wipro-tank-shed/hero.jpeg",
  "/images/projects/wipro-tank-shed/1.jpeg",
];

// =======================================================
// HERO SLIDES (AUTO USES HERO IMAGES)
// =======================================================

export const HERO_SLIDES = [
  IMAGES_PROJECT_1[0],
  IMAGES_PROJECT_5[0],
  IMAGES_PROJECT_2[0],
  IMAGES_PROJECT_6[0],
  IMAGES_PROJECT_3[0],
];

// =======================================================
// PROJECTS LIST
// =======================================================

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "Construction of Scrap and Barrel Yard at Berger Paints Limited",
    value: "600 Lakhs",
    client: "Berger Paints",
    image: IMAGES_PROJECT_1[0],
    images: IMAGES_PROJECT_1,
  },
  {
    id: 2,
    name: "Construction of ECO STP at Berger Paints Limited",
    value: "300 Lakhs",
    client: "Berger Paints",
    image: IMAGES_PROJECT_2[0],
    images: IMAGES_PROJECT_2,
  },
  {
    id: 3,
    name: "Construction of Rain Water Harvesting System at Berger Paints Limited",
    value: "200 Lakhs",
    client: "Berger Paints",
    image: IMAGES_PROJECT_3[0],
    images: IMAGES_PROJECT_3,
  },
  {
    id: 4,
    name: "Construction of Workshop Sheds at Berger Paints Limited",
    value: "150 Lakhs",
    client: "Berger Paints",
    image: IMAGES_PROJECT_4[0],
    images: IMAGES_PROJECT_4,
  },
  {
    id: 5,
    name: "Construction of R&D Development Center at WIPRO Enterprises Limited, Peenya",
    value: "150 Lakhs",
    client: "WIPRO",
    image: IMAGES_PROJECT_5[0],
    images: IMAGES_PROJECT_5,
  },
  {
    id: 6,
    name: "Construction of Material Handling Tank Shed at WIPRO Enterprises Limited",
    value: "100 Lakhs",
    client: "WIPRO",
    image: IMAGES_PROJECT_6[0],
    images: IMAGES_PROJECT_6,
  },

  // Other projects (text-only for now)
  { id: 7, name: "Construction of Govt Tool Room facility at Gauribidanur Ind. Estate", value: "1050 Lakhs", client: "Govt / NSL" },
  { id: 8, name: "Up gradation of 35 slums in Hospet municipality under sublet of IVRCL", value: "660 Lakhs", client: "IVRCL / Municipality" },
  { id: 9, name: "Up gradation of 13 Slums in Chitradurga Municipality under sublet of IVRCL", value: "330 Lakhs", client: "IVRCL / Municipality" },
  { id: 10, name: "Construction of Railway lines with supply and laying of ballast", value: "155 Lakhs", client: "Railways" },
  { id: 11, name: "Construction over head sub reservoir in Hindupur Constituency", value: "150 Lakhs", client: "Government" },
  { id: 12, name: "Construction of Ghat Road for wind mills at Mundergi, Gadag District", value: "350 Lakhs", client: "Suzlon Infrastructure" },
  { id: 13, name: "Construction of GHAT Road and platform for wind mill projects", value: "450 Lakhs", client: "Barooka Power Corp" },
  { id: 14, name: "Up gradation of Canal No. 13 Badra Canal project at Shivamoga", value: "110 Lakhs", client: "IVRCL & GVPR" },
  { id: 15, name: "Up graduation of canal 9C, 7C, 150C, 135C, Badra Canal project", value: "350 Lakhs", client: "IVRCL & GVPR" },
  { id: 16, name: "Construction of over subhead reservoirs in SRI RAMA REDDY Drinking Water project", value: "100 Lakhs", client: "L&T" },
  { id: 17, name: "Construction of Slabs for Furnace Buildings, Pump Houses for M.B. Smelters", value: "145 Lakhs", client: "M.B. Smelters" },
  { id: 18, name: "Construction of Compound wall and Pump Houses for Berger", value: "145 Lakhs", client: "Berger Paints" },
  { id: 19, name: "Construction of Facilities for British Paints at Hindupur", value: "140 Lakhs", client: "British Paints" },
  { id: 20, name: "Construction of Canteen Buildings and Expansion Sheds for Wipro Infrastructure", value: "150 Lakhs", client: "Wipro" },
  { id: 21, name: "Development of Layout and Construction of Roads in J.V at KIADB at Gauribidanur", value: "710 Lakhs", client: "KIADB" },
  { id: 22, name: "Construction of Furnace at Tirupati Steels, Hindupur", value: "150 Lakhs", client: "Tirupati Steels" },
  { id: 23, name: "Construction of State Highway from Yelburga to Cocoonor at Koppal Dt.", value: "1750 Lakhs", client: "State Highway" },
  { id: 24, name: "Development of Layout and Construction of Roads in J.V at KIADB at Narasapur", value: "400 Lakhs", client: "KIADB" },
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
