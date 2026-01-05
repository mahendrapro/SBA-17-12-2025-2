import { Project } from "./types";

// =======================================================
// COMPANY DETAILS
// =======================================================

export const COMPANY_DETAILS = {
  name: "Sri Balaji Associates",
  tagline: "The Place Where Construction Takes Shape",
  address: "#26-4-1978, Melapur, Hindupur – 515201",
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
// PROJECT IMAGE COLLECTIONS
// FIRST IMAGE = HERO IMAGE
// =======================================================

// Berger Paints
const IMAGES_BERGER_BARREL = [
  "/images/projects/berger-barrel-scrap-yard/hero.jpg",
  "/images/projects/berger-barrel-scrap-yard/1.jpg",
  "/images/projects/berger-barrel-scrap-yard/2.jpg",
];

const IMAGES_BERGER_CSR = [
  "/images/projects/berger-csr-food-court/hero.jpg",
  "/images/projects/berger-csr-food-court/1.jpg",
];

const IMAGES_BERGER_CANOPY = [
  "/images/projects/berger-rms-canopy/hero.jpg",
  "/images/projects/berger-rms-canopy/1.jpg",
];

const IMAGES_BERGER_STP = [
  "/images/projects/sewage-treatment-plant/hero.jpg",
  "/images/projects/sewage-treatment-plant/1.jpg",
];

// CSR – Sri Sathya Sai Park
const IMAGES_SAI_PARK = [
  "/images/projects/sri-sathya-sai-park-work-supported-by-joyalukkas-foundation-at-puttaparthi/hero.jpg",
  "/images/projects/sri-sathya-sai-park-work-supported-by-joyalukkas-foundation-at-puttaparthi/1.jpg",
  "/images/projects/sri-sathya-sai-park-work-supported-by-joyalukkas-foundation-at-puttaparthi/2.jpg",
  "/images/projects/sri-sathya-sai-park-work-supported-by-joyalukkas-foundation-at-puttaparthi/3.jpg",
  "/images/projects/sri-sathya-sai-park-work-supported-by-joyalukkas-foundation-at-puttaparthi/4.jpg",
  "/images/projects/sri-sathya-sai-park-work-supported-by-joyalukkas-foundation-at-puttaparthi/5.jpg",
  "/images/projects/sri-sathya-sai-park-work-supported-by-joyalukkas-foundation-at-puttaparthi/6.jpg",
  "/images/projects/sri-sathya-sai-park-work-supported-by-joyalukkas-foundation-at-puttaparthi/7.jpg",
];

// British Paints – Manufacturing Unit
const IMAGES_BRITISH_PAINTS = [
  "/images/projects/british-paints-manufacturing-unit-gollapuram-hindupur/hero.jpg",
  "/images/projects/british-paints-manufacturing-unit-gollapuram-hindupur/1.jpg",
  "/images/projects/british-paints-manufacturing-unit-gollapuram-hindupur/2.jpg",
  "/images/projects/british-paints-manufacturing-unit-gollapuram-hindupur/3.jpg",
  "/images/projects/british-paints-manufacturing-unit-gollapuram-hindupur/4.jpg",
];

// =======================================================
// PROJECTS LIST (MASTER DATA)
// FIRST IMAGE IS USED AS HERO
// =======================================================

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "Construction of Scrap & Barrel Yard – Berger Paints – Hindupur, AP",
    value: "600 Lakhs",
    client: "Berger Paints India Ltd",
    category: "Industrial",
    image: IMAGES_BERGER_BARREL[0],
    images: IMAGES_BERGER_BARREL,
  },
  {
    id: 2,
    name: "Construction of ECO STP – Berger Paints – Hindupur, AP",
    value: "—",
    client: "Berger Paints India Ltd",
    category: "Sewage",
    image: IMAGES_BERGER_STP[0],
    images: IMAGES_BERGER_STP,
  },
  {
    id: 3,
    name: "CSR Food Court Construction – Berger Paints – Thumakunta, AP",
    value: "—",
    client: "Berger Paints India Ltd",
    category: "CSR",
    image: IMAGES_BERGER_CSR[0],
    images: IMAGES_BERGER_CSR,
  },
  {
    id: 4,
    name: "RMS Canopy Extension – Berger Paints – Hindupur, AP",
    value: "—",
    client: "Berger Paints India Ltd",
    category: "Industrial",
    image: IMAGES_BERGER_CANOPY[0],
    images: IMAGES_BERGER_CANOPY,
  },
  {
    id: 5,
    name: "Manufacturing Unit Construction – British Paints – Gollapuram, Hindupur, AP",
    value: "—",
    client: "British Paints",
    category: "Industrial",
    image: IMAGES_BRITISH_PAINTS[0],
    images: IMAGES_BRITISH_PAINTS,
  },
  {
    id: 6,
    name: "Sri Sathya Sai Park Development – Puttaparthi, AP",
    value: "—",
    client: "Joyalukkas Foundation",
    category: "CSR",
    image: IMAGES_SAI_PARK[0],
    images: IMAGES_SAI_PARK,
  },

  // -------- TEXT PROJECTS (NO IMAGES YET) --------

  { id: 7, name: "R&D Development Center – Wipro Enterprises – Peenya, Bengaluru", value: "—", client: "Wipro", category: "Industrial" },
  { id: 8, name: "Material Handling Tank Shed – Wipro – Hindupur", value: "—", client: "Wipro", category: "Industrial" },
  { id: 9, name: "Government Tool Room Facility – Gauribidanur Industrial Estate, KA", value: "1050 Lakhs", client: "Govt of Karnataka / NSL", category: "Infrastructure" },
  { id: 10, name: "Upgradation of 35 Slums – Hospet Municipality, KA", value: "660 Lakhs", client: "IVRCL / Govt of Karnataka", category: "Mass Housing" },
  { id: 11, name: "Upgradation of 13 Slums – Chitradurga Municipality, KA", value: "330 Lakhs", client: "IVRCL / Govt of Karnataka", category: "Mass Housing" },
  { id: 12, name: "Railway Line Construction – Thornagallu to Hospet Section", value: "155 Lakhs", client: "Indian Railways", category: "Infrastructure" },
  { id: 13, name: "Overhead Sub Reservoir – Hindupur Constituency, AP", value: "150 Lakhs", client: "Govt of Andhra Pradesh", category: "Water" },
  { id: 14, name: "Ghat Road for Wind Mills – Mundargi, Gadag District, KA", value: "350 Lakhs", client: "Suzlon Infrastructure", category: "Infrastructure" },
  { id: 15, name: "Wind Mill Foundations – Barooka Power – Gadag District, KA", value: "450 Lakhs", client: "Barooka Power Corp", category: "Infrastructure" },
  { id: 16, name: "Bhadra Canal No.13 Upgradation – Shivamogga, KA", value: "110 Lakhs", client: "IVRCL & GVPR", category: "Infrastructure" },
  { id: 17, name: "Bhadra Canal 9C, 7C, 150C & 135C – Davanagere, KA", value: "350 Lakhs", client: "IVRCL & GVPR", category: "Infrastructure" },
  { id: 18, name: "Sri Rama Reddy Drinking Water Project – AP", value: "100 Lakhs", client: "L&T", category: "Water" },
  { id: 19, name: "Furnace Buildings & Pump Houses – M.B. Smelters", value: "145 Lakhs", client: "M.B. Smelters", category: "Industrial" },
  { id: 20, name: "Compound Wall & Pump Houses – Berger Paints", value: "145 Lakhs", client: "Berger Paints", category: "Industrial" },
  { id: 21, name: "Canteen & Expansion Sheds – Wipro Infrastructure – Hindupur", value: "150 Lakhs", client: "Wipro", category: "Industrial" },
  { id: 22, name: "KIADB Layout & Roads – Gauribidanur Industrial Estate", value: "710 Lakhs", client: "KIADB", category: "Infrastructure" },
  { id: 23, name: "Furnace Construction – Tirupati Steels – Hindupur", value: "150 Lakhs", client: "Tirupati Steels", category: "Industrial" },
  { id: 24, name: "State Highway – Yelburga to Kuknoor – Koppal District", value: "1750 Lakhs", client: "Govt of Karnataka", category: "Infrastructure" },
  { id: 25, name: "KIADB Layout & Roads – Narasapura Industrial Estate, Kolar", value: "400 Lakhs", client: "KIADB", category: "Infrastructure" },
];

// =======================================================
// VISION & MISSION
// =======================================================

export const VISION_TEXT =
  "Our vision is to be the best in all our operating areas with strong commitment to quality, timely completion, customer satisfaction, continuous learning and to clock Rs. 200 crores turnover by the turn of this decade.";

export const MISSION_POINTS = [
  "To build a strong future ensuring increased revenues and enhanced support to associates.",
  "To provide consistent quality products and services using latest engineering practices.",
  "To encourage innovation, integrity, skill upgradation and safe working environments.",
];
