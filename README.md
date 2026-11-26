# Kaspian Partners website

A rebuild of [kaspianpartners.com](https://kaspianpartners.com/) (currently WordPress + Elementor) as a fast static site using **Next.js 15 (App Router) + React 19 + TypeScript**, with no CSS framework.

## Pages

| Route | Content |
| --- | --- |
| `/` | Hero, intro, three pillars, firm rows (AssetAdvantage / Navig8 / Proptattva), closing CTA, brand family |
| `/about-us/` | Why we built Kaspian, rolling "100+ years" stat, vision & values, partners, founding team, specialists |
| `/assetadvantage/` | Managed asset services, what we manage, five non-negotiables, 14-day assessment |
| `/navig8/`, `/proptattva/` | Coming-soon brand pages |
| `/get-in-touch/` | Enquiry form + careers |
| `/privacy-policy/` | Placeholder policy (replace with approved copy) |

## Run it

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # static export to ./out
npm start            # serves ./out
```

`out/` is plain HTML/CSS/JS and can be deployed to Vercel, Netlify, Cloudflare Pages, S3 or any static host.

## Structure

```
app/                 routes (one folder per page) + globals.css (all styles, design tokens at the top)
components/
  Header.tsx         sticky header, active link, mobile menu
  Footer.tsx
  sections.tsx       ClosingCta, BrandFamily, PersonCard, ComingSoon
  ui.tsx             Button, Eyebrow, Title (two-line headline, second line in copper)
  Odometer.tsx       rolling-digit counter
  Reveal.tsx         scroll-in animation (adds .is-visible to .reveal elements)
  ContactForm.tsx
lib/site.ts          nav, contact details, brands, team data: edit content here
public/              images, logos, Aileron font files, team headshots
```

## Design tokens

- Navy `#102B4E`, navy-2 `#253A71`, copper `#B36628` / `#C47534`, soft copper `#E39A62`, sand `#F5F2EE`
- Headings: **Aileron** (self-hosted in `public/fonts`); body: **DM Sans** (Google Fonts)
- Side gutters 80px / 50px (≤1366px) / 7% (≤1024px) / 20px (≤680px), matching the live site

## To do before launch

- **Contact form:** it currently opens the visitor's mail client with the enquiry filled in. To store submissions instead, point `onSubmit` in `components/ContactForm.tsx` at a form service (Formspree, Web3Forms) or an API route.
- **LinkedIn links:** only Rahul Arora's is filled in (`lib/site.ts`); the rest are `#`.
- **Social icons** in the footer are `#` placeholders, as on the live site.
- **Privacy policy:** replace the placeholder copy.
