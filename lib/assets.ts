import { asset } from "@/lib/base";
/**
 * Assets under AssetAdvantage management.
 * To add an asset: append an object below. `status` decides whether it appears under
 * "Currently managing" or "Delivered". Pages are generated from `slug` at build time.
 */

export type AssetStatus = "active" | "delivered";

export type Inline = { lead?: string; text: string; link?: { href: string; label: string; external?: boolean } };

export type Block =
  | ({ type: "p" } & Inline)
  | { type: "ul"; items: Inline[] }
  | { type: "image"; src: string; alt: string; caption: string; downloadName: string; downloadLabel: string; extra?: { href: string; label: string } };

export type AssetSection = { id: string; button: string; title: string; blocks: Block[] };

export type Asset = {
  slug: string;
  status: AssetStatus;
  name: string;
  location: string;
  address: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  facts: { label: string; value: string }[];
  sections: AssetSection[];
  mapsUrl: string;
};

export const statusLabels: Record<AssetStatus, { tab: string; title: string; blurb: string; empty: string }> = {
  active: {
    tab: "Currently managing",
    title: "Currently Managing",
    blurb: "Commercial office assets our teams position, market and lease for owners today.",
    empty: "No active assets to show yet.",
  },
  delivered: {
    tab: "Delivered assets",
    title: "Delivered Assets",
    blurb: "Assets we have positioned and leased for owners.",
    empty: "Delivered assets will be listed here soon.",
  },
};

export const assets: Asset[] = [
  {
    slug: "vaswani-one",
    status: "active",
    name: "Vaswani One",
    location: "Bengaluru CBD",
    address: "36, St. Marks Road, Bengaluru",
    category: "Commercial office",
    description:
      "A commercial office development with column-free workspaces and a one-firm-per-floor layout. IGBC Gold pre-certified.",
    image: asset("/assets/vaswani-one.jpg"),
    imageAlt: "Architectural rendering of Vaswani One",
    imagePosition: "center 30%",
    facts: [
      { label: "Typical floor plate", value: "~10,786 sq. ft." },
      { label: "Building", value: "Ground + 17" },
      { label: "Expected OC", value: "Q1 2027" },
    ],
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=36%20St%20Marks%20Road%20Bengaluru",
    sections: [
      {
        id: "floor-plan",
        button: "Floor plan",
        title: "Typical floor plan",
        blocks: [
          {
            type: "p",
            text: "Approximately 10,786 sq. ft. per typical floor, with perimeter columns, 8–11 m core-to-glass depth and a 4.05 m floor-to-floor height.",
          },
          {
            type: "image",
            src: asset("/assets/vaswani-one-floor-plan.png"),
            alt: "Indicative typical Vaswani One office floor plan with central core",
            caption: "Indicative layout.",
            downloadName: "Vaswani-One-Typical-Floor-Plan.png",
            downloadLabel: "Download floor plan",
          },
        ],
      },
      {
        id: "amenities",
        button: "Amenities & specifications",
        title: "Amenities & building specifications",
        blocks: [
          {
            type: "ul",
            items: [
              { text: "Four 17-passenger Mitsubishi destination-control lifts and one service lift" },
              { text: "Mitsubishi VRF air-conditioning and a double-glazed curtain wall" },
              {
                text: "100% backup power and tenant power provision of 1.0 kVA per 100 sq. ft. of carpet area, including air-conditioning",
              },
              { text: "Three basements and 129 stack-parking spaces" },
            ],
          },
        ],
      },
      {
        id: "warm-shell",
        button: "Warm shell specifications",
        title: "Warm shell specifications",
        blocks: [
          {
            type: "ul",
            items: [
              {
                lead: "Floor plate",
                text: "Approximately 10,786 sq. ft. on a typical floor, with perimeter columns, 8–11 m core-to-glass depth and 4.05 m floor-to-floor height.",
              },
              { lead: "Façade", text: "Double-glazed curtain wall." },
              { lead: "Air-conditioning", text: "Mitsubishi VRF system." },
              {
                lead: "Electrical provision",
                text: "Two rising mains and two feeders per floor, with a 160 A tap-off on each floor. Tenant power provision of 1.0 kVA per 100 sq. ft. of carpet area, including air-conditioning.",
              },
            ],
          },
          {
            type: "p",
            text: "Confirm the floor-specific handover scope, finishes and tenant fit-out responsibilities with AssetAdvantage.",
          },
        ],
      },
      {
        id: "connectivity",
        button: "Connectivity",
        title: "Connectivity",
        blocks: [
          { type: "p", lead: "Namma Metro", text: "M.G. Road and Cubbon Park stations serve the surrounding CBD on the Purple Line." },
          { type: "p", lead: "Road access", text: "The building is on St. Marks Road, with access to M.G. Road and Residency Road." },
          {
            type: "p",
            text: "36, St. Marks Road, Bengaluru Central Business District, Karnataka.",
            link: {
              href: "https://www.google.com/maps/search/?api=1&query=36%20St%20Marks%20Road%20Bengaluru",
              label: "Open in Google Maps",
              external: true,
            },
          },
        ],
      },
    ],
  },
  {
    slug: "fortius-silicon-forest",
    status: "active",
    name: "Fortius Silicon Forest",
    location: "Whitefield, Bengaluru",
    address: "Dinnur Main Road, Kadugodi Industrial Area",
    category: "Commercial office campus",
    description:
      "A commercial office campus by Fortius Infra, planned around landscaped open space, a shared amenity spine and a transit plaza.",
    image: asset("/assets/fortius-silicon-forest.jpg"),
    imageAlt: "Indicative exterior rendering of Fortius Silicon Forest",
    facts: [
      { label: "Typical floor plate", value: "~40,000 sq. ft." },
      { label: "Campus", value: "10 acres" },
      { label: "Phase 1 target", value: "Q2 2028" },
    ],
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Fortius%20Silicon%20Forest%20Whitefield%20Bengaluru",
    sections: [
      {
        id: "plans",
        button: "Plans",
        title: "Campus master plan & floor plates",
        blocks: [
          {
            type: "p",
            text: "The typical office floor plate is approximately 40,000 sq. ft., with a 4.2 m floor-to-floor height. Tower 1 comprises approximately 650,000 sq. ft. and targets substantial completion in Q2 2028.",
          },
          {
            type: "image",
            src: asset("/assets/fortius-master-plan.jpg"),
            alt: "Indicative Fortius Silicon Forest campus master plan",
            caption: "Indicative campus master plan.",
            downloadName: "Fortius-Silicon-Forest-Campus-Master-Plan.jpg",
            downloadLabel: "Download master plan",
            extra: {
              href: "mailto:connect@kaspianpartners.com?subject=Fortius%20Silicon%20Forest%20floor%20plan%20request",
              label: "Request tower floor plans",
            },
          },
        ],
      },
      {
        id: "amenities",
        button: "Amenities",
        title: "Campus amenities",
        blocks: [
          {
            type: "ul",
            items: [
              { text: "36% of the campus planned as open, landscaped and amenity space." },
              { text: "Planned amphitheatre, sports courts, food zone, knowledge hub and transit plaza." },
              { text: "LEED registration and WELL certification in progress, as reported in the project deck." },
            ],
          },
        ],
      },
      {
        id: "warm-shell",
        button: "Warm shell specifications",
        title: "Warm shell & base-build specifications",
        blocks: [
          {
            type: "ul",
            items: [
              {
                lead: "Power",
                text: "5.5 VA/sq. ft. base provision, scalable to 7.5 VA/sq. ft. The design is sized for up to 10.5 VA/sq. ft.",
              },
              { lead: "Backup", text: "100% diesel generator backup, with space for an additional transformer." },
              { lead: "HVAC", text: "Chillers designed for COP 6.3, with MERV 8 and MERV 14 filtration." },
              { lead: "Vertical transport", text: "Destination-control lifts and dedicated lifts to the basements." },
            ],
          },
          { type: "p", text: "Confirm the final handover scope and occupier-specific upgrades with AssetAdvantage." },
        ],
      },
      {
        id: "connectivity",
        button: "Connectivity",
        title: "Connectivity",
        blocks: [
          { type: "p", lead: "Namma Metro", text: "Approximately 700 m to Tree Park Metro station on the Purple Line." },
          { type: "p", lead: "Road", text: "Access from Dinnur Main Road in Kadugodi Industrial Area, Whitefield." },
          {
            type: "p",
            lead: "Rail and airport",
            text: "Approximately 3.5 km to Kadugodi railway station and 36 km to Kempegowda International Airport.",
          },
          {
            type: "p",
            text: "",
            link: {
              href: "https://www.google.com/maps/search/?api=1&query=Fortius%20Silicon%20Forest%20Whitefield%20Bengaluru",
              label: "Open in Google Maps",
              external: true,
            },
          },
        ],
      },
    ],
  },
];

export const assetsByStatus = (status: AssetStatus) => assets.filter((a) => a.status === status);
export const getAsset = (slug: string) => assets.find((a) => a.slug === slug);
export const assetHref = (a: Pick<Asset, "slug">) => `/assetadvantage/assets/${a.slug}/`;
export const enquiryHref = (a: Pick<Asset, "name">) =>
  `mailto:connect@kaspianpartners.com?subject=${encodeURIComponent(`${a.name} leasing enquiry`)}`;
