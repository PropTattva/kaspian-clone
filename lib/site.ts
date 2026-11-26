export const site = {
  name: "Kaspian Partners",
  tagline: "Independent commercial real estate advice. Built without Conflict.",
  email: "connect@kaspianpartners.com",
  address: "#34, Embassy Diamante, 2nd floor, Vittal Mallya Road, Bengaluru 560001",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Embassy+Diamante+Vittal+Mallya+Road+Bengaluru+560001",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/" },
  { label: "AssetAdvantage", href: "/assetadvantage/" },
  { label: "Navig8", href: "/navig8/" },
  { label: "Proptattva", href: "/proptattva/" },
  { label: "Get in Touch", href: "/get-in-touch/" },
];

export const brands = [
  {
    key: "assetadvantage",
    name: "AssetAdvantage",
    href: "/assetadvantage/",
    logo: "/logos/assetadvantage-logo.svg",
    logoDark: "/logos/assetadvantage-logo-dark.svg",
    line: "Managed asset services for owners.",
  },
  {
    key: "navig8",
    name: "Navig8",
    href: "/navig8/",
    logo: "/logos/navig8-logo.svg",
    logoDark: "/logos/navig8-logo-dark.svg",
    line: "Independent occupier advisory.",
  },
  {
    key: "proptattva",
    name: "Proptattva",
    href: "/proptattva/",
    logo: "/logos/proptattva-logo.svg",
    logoDark: "/logos/proptattva-logo-dark.svg",
    line: "Intelligence to enable.",
  },
];

export type Person = { name: string; role: string; photo?: string; linkedin?: string };

export const partners: Person[] = [
  { name: "Rahul Arora", role: "Founder & Managing Partner", photo: "/team/RA2_249x312.png", linkedin: "https://www.linkedin.com/in/raahularora/" },
  { name: "Karan Panjwani", role: "Founding Partner", photo: "/team/KP1_249x312.png", linkedin: "#" },
  { name: "Jobby N George", role: "Founding Partner", photo: "/team/JG2_249x312.png", linkedin: "#" },
  { name: "Rohan Sharma", role: "Founding Partner", photo: "/team/RS2_249x312.png", linkedin: "#" },
  { name: "Sahil Nagpal", role: "Founding Partner", photo: "/team/Sahil.png", linkedin: "#" },
];

export const foundingTeam: Person[] = [
  { name: "Sneha Mohan", role: "AssetAdvantage", photo: "/team/SM1_249x312.png", linkedin: "#" },
  { name: "Shabeer Abdulkareem", role: "Navig8", photo: "/team/SA1_249x312.png", linkedin: "#" },
  { name: "Akhil Anil", role: "AssetAdvantage", photo: "/team/AA1_249x312.png", linkedin: "#" },
  { name: "Vineet Malayil", role: "AssetAdvantage", photo: "/team/VM1_249x312.png", linkedin: "#" },
  { name: "Umesh Gera", role: "AssetAdvantage", photo: "/team/Gera.png", linkedin: "#" },
];

export const specialists: Person[] = [
  { name: "Tapan Mozumdar", role: "Technical & Sustainability" },
  { name: "Aman Gupta", role: "Head of Technology & Product" },
];
