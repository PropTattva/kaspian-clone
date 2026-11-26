import Link from "next/link";
import { nav, site } from "@/lib/site";

const social = [
  {
    label: "LinkedIn",
    path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.8v1.6h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1V21h-4v-4.9c0-1.17-.02-2.68-1.63-2.68-1.64 0-1.89 1.28-1.89 2.6V21h-4V9.75Z",
  },
  {
    label: "Instagram",
    path: "M12 7.4a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2Zm0 7.6a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm5.85-7.8a1.07 1.07 0 1 1-2.14 0 1.07 1.07 0 0 1 2.14 0ZM21 8.3c-.06-1.4-.37-2.65-1.4-3.68C18.57 3.6 17.33 3.28 15.92 3.2 14.47 3.13 9.53 3.13 8.08 3.2c-1.4.07-2.65.38-3.68 1.4S3.07 6.9 3 8.3c-.08 1.46-.08 6.4 0 7.85.06 1.4.38 2.65 1.4 3.68 1.03 1.03 2.27 1.35 3.68 1.42 1.45.08 6.39.08 7.84 0 1.4-.07 2.65-.39 3.68-1.42 1.02-1.03 1.34-2.27 1.4-3.68.09-1.45.09-6.39 0-7.84Z",
  },
  {
    label: "X",
    path: "M17.5 3h3.1l-6.8 7.75L21.8 21h-6.25l-4.9-6.4L5.05 21H1.94l7.27-8.3L1.5 3h6.4l4.43 5.86L17.5 3Zm-1.1 16.2h1.72L7 4.7H5.15L16.4 19.2Z",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__pattern" aria-hidden="true" />
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src="/logos/kaspian-logo-white.webp" alt="Kaspian Partners" width={200} height={67} />
          <p>{site.tagline}</p>
          <ul className="footer__social">
            {social.map((s) => (
              <li key={s.label}>
                <a href="#" aria-label={s.label}>
                  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                    <path d={s.path} fill="currentColor" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="footer__heading">Get In Touch</h4>
          <p>
            <a className="footer__link-strong" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
          <p>
            <a href={site.mapsUrl} target="_blank" rel="noopener">
              {site.address}
            </a>
          </p>
        </div>

        <div>
          <h4 className="footer__heading">Explore</h4>
          <ul className="footer__nav">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href}>{n.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/privacy-policy/">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {year} Kaspian Partners</span>
        <span>Bengaluru, India</span>
      </div>
    </footer>
  );
}
