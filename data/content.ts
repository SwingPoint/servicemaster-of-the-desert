import businessesData from "./businesses.json";
export type { FaqItem } from "./faqs-expanded";
export { FAQS } from "./faqs-expanded";
export type Business = (typeof businessesData)[number];
const businesses = businessesData;

export function getBusiness(slug: string): Business | undefined {
  return businesses.find((b) => b.slug === slug);
}

export function getAllBusinessSlugs(): string[] {
  return businesses.map((b) => b.slug);
}

export function getPrimaryBusiness(): Business {
  return businesses[0];
}

export const SITE_URL = "https://www.servicemasterofthedesert.com";
export const PHONE = "(442) 227-3064";
export const PHONE_LINK = "tel:+14422273064";

export const IMAGES = {
  logo: "https://cdn.prod.website-files.com/65f356ec7415593fe8a16928/65f35985d3f2415a16ad2e44_servicemaster-logo.webp",
  hero: "https://cdn.prod.website-files.com/65f356ec7415593fe8a16928/65f44d7eeb38050d0f7ecde8_professional-carpet-cleaning-palm-desert-p-1080.webp",
  heroTruck: "https://cdn.prod.website-files.com/65f356ec7415593fe8a16928/664ceefcd137839e87942b31_sm_customer_no-we_serve-p-1080.webp",
  residentialCarpet: "https://cdn.prod.website-files.com/65f356ec7415593fe8a16928/6629896521834bc915131795_gekko%20tool-p-800.webp",
  commercialCarpet: "https://cdn.prod.website-files.com/65f356ec7415593fe8a16928/65f44e053add29cae90a79d2_commercial-carpets-after-cleaning-palm-desert-p-800.webp",
  tileGrout: "https://cdn.prod.website-files.com/65f356ec7415593fe8a16928/65f4592e4aa7d25dd71d1a17_natural-stone-floor.webp",
  naturalStone: "https://cdn.prod.website-files.com/65f356ec7415593fe8a16928/65f4592e4aa7d25dd71d1a17_natural-stone-floor.webp",
  upholstery: "https://cdn.prod.website-files.com/65f356ec7415593fe8a16928/65f459d4d3107fdd0b893f62_professional-upholstery-cleaning-p-800.webp",
  window: "https://cdn.prod.website-files.com/65f356ec7415593fe8a16928/6629896569ce5c2dce6d3a01_window%20clean%20squegee.webp",
  pressure: "https://cdn.prod.website-files.com/65f356ec7415593fe8a16928/65f45fe40256421dc0535f4a_pressure-washing-p-800.webp",
  solar: "https://cdn.prod.website-files.com/65f356ec7415593fe8a16928/65f45fe40256421dc0535f4a_pressure-washing-p-1080.webp",
  van: "https://cdn.prod.website-files.com/65f356ec7415593fe8a16928/65f83bdd754def74795fb910_servicemaster-of-the-clean-van-p-1080.webp",
  owners: "https://cdn.prod.website-files.com/65f356ec7415593fe8a16928/65f3631ea3b9334e5b179ff5_steve-and-lesli-servicemaster.webp",
  thermalClub: "https://cdn.prod.website-files.com/65f356ec7415593fe8a16928/65f463d54acc8a860c6ee387_thermal-club-logo.webp",
  southwestChurch: "https://cdn.prod.website-files.com/65f356ec7415593fe8a16928/65f463bc56efeb2c02a7c481_southwest-church-logo.webp",
  mccallum: "https://cdn.prod.website-files.com/65f356ec7415593fe8a16928/65f463f2eb38050d0f935942_mccallum-logo.webp",
  springsClub: "https://cdn.prod.website-files.com/65f356ec7415593fe8a16928/65f464039ccdfd912c0339e4_Springs-Country-Club-logo.webp",
} as const;

export type Testimonial = {
  quote: string;
  author: string;
  source: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Service master has been to my home 6 or 7 times. I could not be happier with the work they do. Everyone that comes to your home is professional and good people. Leslie is great as well.",
    author: "Charles B.",
    source: "Google",
  },
  {
    quote:
      "I have used other carpet cleaners companies in the past but no company consistently does as good a cleaning as Service Masters. There is no reason to go elsewhere.",
    author: "Paul Chester",
    source: "Google",
  },
  {
    quote:
      "Service Master always does an amazing job cleaning our carpets and area rugs. We also had them do our windows today and they look great as well! Highly recommend!",
    author: "Summer Morris",
    source: "Google",
  },
  {
    quote:
      "Friendly, professional, arrived on time on short notice, and cleaned all items to perfection. Was a flawless experience. Highly recommend.",
    author: "Justin P.",
    source: "Google",
  },
  {
    quote:
      "Service Master of the Desert was wonderful! They arrived on time, they did a terrific job, they were fast and efficient, and the price of their work was fair and reasonable!",
    author: "Sharon J.",
    source: "NiceJob",
  },
  {
    quote:
      "I've had my carpets cleaned by Service Master for over 20 years! Our carpet is white throughout the condo and we have dogs, visiting grandkids yet they have kept it looking great. Highly recommend this company. Friendly and trustworthy employees!",
    author: "Ann M.",
    source: "NiceJob",
  },
  {
    quote:
      "Professional in every aspect of the work: estimate, appointment, tidiness, communication, and actual cleaning service. After using many individual service providers, I'd only go back to this franchise. They are WAY better.",
    author: "Rachel G.",
    source: "Google",
  },
];

export type GalleryCategory =
  | "Carpet"
  | "Tile & Stone"
  | "Upholstery"
  | "Exterior"
  | "Solar"
  | "Commercial";

export type GalleryItem = {
  title: string;
  category: GalleryCategory;
  image: string;
  alt: string;
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    title: "Residential carpet restoration",
    category: "Carpet",
    image: IMAGES.hero,
    alt: "Professional carpet cleaning in a Palm Desert home",
  },
  {
    title: "Truck-mounted carpet cleaning",
    category: "Carpet",
    image: IMAGES.residentialCarpet,
    alt: "Residential carpet cleaning equipment in use",
  },
  {
    title: "Commercial carpet care",
    category: "Commercial",
    image: IMAGES.commercialCarpet,
    alt: "Commercial carpets after cleaning in Palm Desert",
  },
  {
    title: "Natural stone floor care",
    category: "Tile & Stone",
    image: IMAGES.naturalStone,
    alt: "Natural stone floor cleaning in Palm Desert",
  },
  {
    title: "Upholstery refresh",
    category: "Upholstery",
    image: IMAGES.upholstery,
    alt: "Professional upholstery cleaning service",
  },
  {
    title: "Window cleaning detail",
    category: "Exterior",
    image: IMAGES.window,
    alt: "Window cleaning with squeegee in Palm Desert",
  },
  {
    title: "Driveway pressure washing",
    category: "Exterior",
    image: IMAGES.pressure,
    alt: "Pressure washing a desert home driveway",
  },
  {
    title: "Solar panel cleaning",
    category: "Solar",
    image: IMAGES.solar,
    alt: "Solar panel cleaning to restore system efficiency",
  },
  {
    title: "ServiceMaster service van",
    category: "Commercial",
    image: IMAGES.van,
    alt: "ServiceMaster of the Desert van at a client property",
  },
];

export const SERVICE_AREAS =
  "Palm Desert • Cathedral City • La Quinta • Indio • Thousand Palms • Palm Springs • Rancho Mirage • Bermuda Dunes • Desert Hot Springs";

export const TRUST_POINTS = [
  {
    title: "Your satisfaction is guaranteed.",
    description:
      "Rest assured, with ServiceMaster of the Desert, your happiness with the results is not just expected—it's guaranteed.",
  },
  {
    title: "Local cleaning company.",
    description:
      "As a resident of the Coachella Valley, you'll find unparalleled local expertise and personalized care with ServiceMaster of the Desert for all your cleaning needs.",
  },
  {
    title: "Over 30 years of carpet cleaning experience.",
    description:
      "You're choosing a carpet cleaning company that understands the value of your space and knows exactly how to care for it—you can count on our three decades of experience.",
  },
];

export const SERVICE_LINKS = [
  { label: "Carpet Cleaning", href: "/#carpet-cleaning" },
  { label: "Tile and Grout Cleaning", href: "/#tile-stone" },
  { label: "Natural Stone Cleaning", href: "/#tile-stone" },
  { label: "Upholstery Cleaning", href: "/#upholstery" },
  { label: "Window and Exterior Cleaning", href: "/#exterior" },
  { label: "Solar Panel Cleaning", href: "/#solar-cleaning" },
];

export const NAV_LINKS = [
  { label: "Reviews", href: "/reviews" },
  { label: "Our Work", href: "/our-work" },
  { label: "FAQ's", href: "/faq" },
  { label: "About Us", href: "/about-us" },
];

export const AUTHORITY_LINKS = [
  {
    label: "Facebook Reviews",
    href: "https://www.facebook.com/servicemaster.desert",
  },
  {
    label: "ServiceMaster (national brand)",
    href: "https://www.servicemaster.com/",
  },
  {
    label: "Coachella Valley Chamber of Commerce",
    href: "https://www.cvchamber.org/",
  },
  {
    label: "Google Business Profile",
    href: "https://www.google.com/search?hl=en-US&gl=us&q=ServiceMaster+Of+The+Desert,+75091+St+Charles+Pl+Ste+D,+Palm+Desert,+CA+92211&ludocid=3791423070672400915&lsig=AB86z5WEEDC0QN8e32ehz6iFrchY#lrd=",
  },
  {
    label: "Yelp",
    href: "https://www.yelp.com/biz/servicemaster-of-the-desert-palm-desert-9",
  },
];
