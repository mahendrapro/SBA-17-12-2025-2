import { Project } from './types';

// ==================================================================================
// 📁 IMAGE UPLOAD GUIDE
// ==================================================================================
//
// 1. WHERE TO UPLOAD:
//    Go to your project's 'public' folder. Create the following folder structure:
//    public/
//      └── images/
//           └── projects/
//                ├── berger-yard/      <-- Folder for Project 1
//                │     ├── hero.jpg    <-- Main image (shown in main scroller)
//                │     ├── 1.jpg       <-- Slide 1
//                │     ├── 2.jpg       <-- Slide 2
//                │     └── 3.jpg       <-- Slide 3
//                ├── berger-stp/       <-- Folder for Project 2
//                │     ├── hero.jpg
//                │     └── ...
//                └── wipro-rnd/        <-- Folder for Project 5
//                      └── ...
//
// 2. HOW TO UPDATE CODE:
//    Replace the Pexels URLs below with your local paths.
//    Example: 
//    change: "https://images.pexels.com/..."
//    to:     "/images/projects/berger-yard/hero.jpg"
//
// ==================================================================================

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

export const COMPANY_IMAGES = {
  // ✅ UPDATE LOGO HERE: Upload 'logo.png' to public/images/ OR paste a full URL here.
  logo: "/images/logo.png", 
  
  about: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1200",
  projectPlaceholder: "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800",
};

// ==========================================
// INDIVIDUAL PROJECT IMAGE COLLECTIONS
// The first image in each array is the "HERO" image for that project.
// ==========================================

// Project 1: Berger Paints - Scrap Yard
const IMAGES_PROJECT_1 = [
  "https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=1920", // Hero
  "https://images.pexels.com/photos/224924/pexels-photo-224924.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/1260309/pexels-photo-1260309.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800",
];

// Project 2: Berger Paints - STP
const IMAGES_PROJECT_2 = [
  "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920", // Hero
  "https://images.pexels.com/photos/374023/pexels-photo-374023.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800",
];

// Project 3: Berger Paints - Rain Water
const IMAGES_PROJECT_3 = [
  "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1920", // Hero
  "https://images.pexels.com/photos/936575/pexels-photo-936575.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/2226900/pexels-photo-2226900.jpeg?auto=compress&cs=tinysrgb&w=800",
];

// Project 4: Berger Paints - Workshop Sheds
const IMAGES_PROJECT_4 = [
  "https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1920", // Hero
  "https://images.pexels.com/photos/175039/pexels-photo-175039.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=800",
];

// Project 5: Wipro - R&D Center
const IMAGES_PROJECT_5 = [
  "https://images.pexels.com/photos/209702/pexels-photo-209702.jpeg?auto=compress&cs=tinysrgb&w=1920", // Hero
  "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=800",
];

// Project 6: Wipro - Tank Shed
const IMAGES_PROJECT_6 = [
  "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1920", // Hero
  "https://images.pexels.com/photos/1463917/pexels-photo-1463917.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg?auto=compress&cs=tinysrgb&w=800",
];

// ==========================================
// MAIN SLIDESHOW CONFIGURATION (HERO SECTION)
// This pulls the "Hero" (first) image from the key projects above.
// ==========================================
export const HERO_SLIDES = [
  IMAGES_PROJECT_1[0], // Berger Scrap Yard Hero
  IMAGES_PROJECT_5[0], // Wipro R&D Hero
  IMAGES_PROJECT_2[0], // Berger STP Hero
  IMAGES_PROJECT_6[0], // Wipro Shed Hero
  IMAGES_PROJECT_3[0], // Rain Water Hero
];

// ==========================================
// PROJECTS LIST
// ==========================================
export const PROJECTS: Project[] = [
  { 
    id: 1, 
    name: "Construction of Scrap and Barrel Yard at Berger Paints Limited", 
    value: "600 Lakhs", 
    client: "Berger Paints",
    image: IMAGES_PROJECT_1[0], // Main cover image
    images: IMAGES_PROJECT_1    // Slideshow images
  },
  { 
    id: 2, 
    name: "Construction of ECO STP at Berger Paints Limited", 
    value: "300 Lakhs", 
    client: "Berger Paints",
    image: IMAGES_PROJECT_2[0],
    images: IMAGES_PROJECT_2
  },
  { 
    id: 3, 
    name: "Construction of Rain Water Harvesting System at Berger Paints Limited", 
    value: "200 Lakhs", 
    client: "Berger Paints",
    image: IMAGES_PROJECT_3[0],
    images: IMAGES_PROJECT_3
  },
  { 
    id: 4, 
    name: "Construction of Work Shop Sheds at Berger Paints Limited", 
    value: "150 Lakhs", 
    client: "Berger Paints",
    image: IMAGES_PROJECT_4[0],
    images: IMAGES_PROJECT_4
  },
  { 
    id: 5, 
    name: "Construction of R&D Development Center at WIPRO Enterprises Limited, Peenya", 
    value: "150 Lakhs", 
    client: "WIPRO",
    image: IMAGES_PROJECT_5[0],
    images: IMAGES_PROJECT_5
  },
  { 
    id: 6, 
    name: "Construction of Material Handling Tank Shed at WIPRO Enterprises Limited", 
    value: "100 Lakhs", 
    client: "WIPRO",
    image: IMAGES_PROJECT_6[0],
    images: IMAGES_PROJECT_6
  },
  // ... Other projects use a generic set for now until you add their specific arrays ...
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
  { id: 17, name: "Construction of Slabs for Furnace Buildings, PumpHouses for M.B. Smeltors", value: "145 Lakhs", client: "M.B. Smeltors" },
  { id: 18, name: "Construction of Compound wall and Pump Houses for Berger", value: "145 Lakhs", client: "Berger Paints" },
  { id: 19, name: "Construction of Facilities for British Paints at Hindupur", value: "140 Lakhs", client: "British Paints" },
  { id: 20, name: "Construction of Canteen Buildings and Expansion Sheds for Wipro Infrastructure", value: "150 Lakhs", client: "Wipro" },
  { id: 21, name: "Development of Layout and Construction of Roads in J.V at KIADB at Gauribidanur", value: "710 Lakhs", client: "KIADB" },
  { id: 22, name: "Construction of Furnace at Tirupati Steels, Hindupur", value: "150 Lakhs", client: "Tirupati Steels" },
  { id: 23, name: "Construction of State Highway from Yelburga to Cocoonor at Koppal Dt.", value: "1750 Lakhs", client: "State Highway" },
  { id: 24, name: "Development of Layout and Construction of Roads in J.V at KIADB at Narasapur", value: "400 Lakhs", client: "KIADB" },
];

export const VISION_TEXT = "Our vision is to be the best in all our operating areas with strong commitment to quality, timely completion, customer satisfaction, continuous learning and to clock Rs. 200 crores turnover by the turn of this decade.";

export const MISSION_POINTS = [
  "To build a strong future ensuring increased revenues and enhanced support to associates.",
  "To Provide consistent quality products and services in construction projects with latest engineering practices.",
  "To encourage innovation, professional integrity, up-gradation of knowledge and skills of employees and a safe working environment."
];