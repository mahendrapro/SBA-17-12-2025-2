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
  founderAndManagingDirector: "Mr. C. Krishna Kumar",
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
// 5. Sri Sathya Sai Park – CSR Project
const IMAGES_PROJECT_5 = [
  "/images/projects/sri-sathya-sai-park-work-supported-by-joyalukkas-foundation-at-puttaparthi/hero.jpg",
  "/images/projects/sri-sathya-sai-park-work-supported-by-joyalukkas-foundation-at-puttaparthi/1.jpg",
  "/images/projects/sri-sathya-sai-park-work-supported-by-joyalukkas-foundation-at-puttaparthi/2.jpg",
  "/images/projects/sri-sathya-sai-park-work-supported-by-joyalukkas-foundation-at-puttaparthi/3.jpg",
  "/images/projects/sri-sathya-sai-park-work-supported-by-joyalukkas-foundation-at-puttaparthi/4.jpg",
  "/images/projects/sri-sathya-sai-park-work-supported-by-joyalukkas-foundation-at-puttaparthi/5.jpg",
  "/images/projects/sri-sathya-sai-park-work-supported-by-joyalukkas-foundation-at-puttaparthi/6.jpg",
  "/images/projects/sri-sathya-sai-park-work-supported-by-joyalukkas-foundation-at-puttaparthi/7.jpg",
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
    name: "Berger Paints India Ltd – Barrel Scrap Yard Construction – Hindupur, Andhra Pradesh",
    value: "600 Lakhs",
    client: "Berger Paints India Limited",
    image: IMAGES_PROJECT_1[0],
    images: IMAGES_PROJECT_1,
  },
  {
    id: 2,
    name: "Berger Paints India Ltd – CSR Food Court Construction – Thumakunta, Andhra Pradesh",
    value: "—",
    client: "Berger Paints India Limited",
    image: IMAGES_PROJECT_2[0],
    images: IMAGES_PROJECT_2,
  },
  {
    id: 3,
    name: "Berger Paints India Ltd – RMS Canopy Extension Work – Hindupur, Andhra Pradesh",
    value: "—",
    client: "Berger Paints India Limited",
    image: IMAGES_PROJECT_3[0],
    images: IMAGES_PROJECT_3,
  },
  {
    id: 4,
    name: "Sewage Treatment Plant Construction – Hindupur, Andhra Pradesh",
    value: "—",
    client: "Government of Andhra Pradesh",
    image: IMAGES_PROJECT_4[0],
    images: IMAGES_PROJECT_4,
  },

  // ---------------- TEXT PROJECTS ----------------

  {
    id: 5,
    name: "Government Tool Room Facility Construction – Gauribidanur Industrial Estate, Karnataka",
    value: "1050 Lakhs",
    client: "Government of Karnataka / NSL",
  },
  {
    id: 6,
    name: "Upgradation of 35 Slums – Hospet Municipality, Karnataka",
    value: "660 Lakhs",
    client: "IVRCL / Government of Karnataka",
  },
  {
    id: 7,
    name: "Upgradation of 13 Slums – Chitradurga Municipality, Karnataka",
    value: "330 Lakhs",
    client: "IVRCL / Government of Karnataka",
  },
  {
    id: 8,
    name: "Railway Track Construction with Ballast Supply & Laying – Karnataka",
    value: "155 Lakhs",
    client: "Indian Railways (Government of India)",
  },
  {
    id: 9,
    name: "Overhead Sub-Reservoir Construction – Hindupur Constituency, Andhra Pradesh",
    value: "150 Lakhs",
    client: "Government of Andhra Pradesh",
  },
  {
    id: 10,
    name: "Ghat Road Construction for Wind Mills – Mundergi, Gadag District, Karnataka",
    value: "350 Lakhs",
    client: "Suzlon Infrastructure Limited",
  },
  {
    id: 11,
    name: "Ghat Road & Platform Construction for Wind Mill Projects – Karnataka",
    value: "450 Lakhs",
    client: "Barooka Power Corporation",
  },
  {
    id: 12,
    name: "Canal No.13 Upgradation – Bhadra Canal Project – Shivamoga, Karnataka",
    value: "110 Lakhs",
    client: "IVRCL & GVPR",
  },
  {
    id: 13,
    name: "Upgradation of Canals 9C, 7C, 150C & 135C – Bhadra Canal Project, Karnataka",
    value: "350 Lakhs",
    client: "IVRCL & GVPR",
  },
  {
    id: 14,
    name: "Overhead Reservoir Construction – Sri Rama Reddy Drinking Water Project, Andhra Pradesh",
    value: "100 Lakhs",
    client: "Larsen & Toubro (L&T)",
  },
  {
    id: 15,
    name: "Furnace Building Slabs & Pump Houses Construction – Hindupur, Andhra Pradesh",
    value: "145 Lakhs",
    client: "M.B. Smelters",
  },
  {
    id: 16,
    name: "Compound Wall & Pump House Construction – Berger Paints – Hindupur, Andhra Pradesh",
    value: "145 Lakhs",
    client: "Berger Paints India Limited",
  },
  {
    id: 17,
    name: "Industrial Facility Construction – British Paints – Hindupur, Andhra Pradesh",
    value: "140 Lakhs",
    client: "British Paints",
  },
  {
    id: 18,
    name: "Canteen Building & Expansion Sheds – Wipro Infrastructure",
    value: "150 Lakhs",
    client: "Wipro Enterprises Limited",
  },
  {
    id: 19,
    name: "Road & Layout Development – KIADB JV Project – Gauribidanur, Karnataka",
    value: "710 Lakhs",
    client: "KIADB (Government of Karnataka)",
  },
  {
    id: 20,
    name: "Industrial Furnace Construction – Tirupati Steels – Hindupur, Andhra Pradesh",
    value: "150 Lakhs",
    client: "Tirupati Steels",
  },
  {
    id: 21,
    name: "State Highway Construction – Yelburga to Cocoonor – Koppal District, Karnataka",
    value: "1750 Lakhs",
    client: "Government of Karnataka",
  },
  {
    id: 22,
    name: "Road & Layout Development – KIADB JV Project – Narasapur, Karnataka",
    value: "400 Lakhs",
    client: "KIADB (Government of Karnataka)",
  },
  {
  id: 23,
  name: "Construction of Manufacturing Unit – British Paints – Gollapuram Industrial Area, Hindupur, Andhra Pradesh",
  value: "—",
  client: "British Paints",
},
{
  id: 24,
  name: "Sri Sathya Sai Park Development Work – Supported by Joyalukkas Foundation – Puttaparthi, Andhra Pradesh",
  value: "—",
  client: "Joyalukkas Foundation",
  image: IMAGES_PROJECT_5[0],
  images: IMAGES_PROJECT_5,
},

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
