import Link from "next/link";
import { brands, site, type Person } from "@/lib/site";
import { Button, Eyebrow, Title } from "./ui";

/** Navy text panel + photo panel closing call to action. */
export function ClosingCta({
  eyebrow = "Start a conversation",
  first = "A real estate decision ahead?",
  second = "Let’s get it right.",
  copy = "Tell us what you need. We’ll assign the right team to move it forward.",
  image = "/images/kaspian-about-partners.webp",
  imageAlt = "Open-plan office with city views",
  button = "Speak to a partner",
}: {
  eyebrow?: string;
  first?: string;
  second?: string;
  copy?: string;
  image?: string;
  imageAlt?: string;
  button?: string;
}) {
  return (
    <section className="section">
      <div className="container">
        <div className="closing reveal">
          <div className="closing__text">
            <Eyebrow light>{eyebrow}</Eyebrow>
            <Title first={first} second={second} className="title--light" />
            <p className="closing__copy">{copy}</p>
            <a className="closing__email" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <div>
              <Button href="/get-in-touch/" variant="light">
                {button}
              </Button>
            </div>
          </div>
          <div className="closing__media">
            <img src={image} alt={imageAlt} loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function BrandFamily() {
  return (
    <section className="section section--tint">
      <div className="container">
        <div className="section-head reveal">
          <Eyebrow>The Kaspian brand family</Eyebrow>
          <Title first="Distinct expertise." second="A shared identity." />
          <p className="lead">
            Our brand family connects asset performance, occupier decisions and property intelligence
          </p>
        </div>
        <div className="grid grid--3">
          {brands.map((b, i) => (
            <Link
              key={b.key}
              href={b.href}
              className="brand-card reveal"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <img src={b.logo} alt={b.name} className="brand-card__logo" />
              <p>{b.line}</p>
              <span className="brand-card__go" aria-hidden="true">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PersonCard({ p, index = 0 }: { p: Person; index?: number }) {
  return (
    <article className="person reveal" style={{ transitionDelay: `${(index % 5) * 70}ms` }}>
      {p.photo && (
        <div className="person__photo">
          <img src={p.photo} alt={p.name} loading="lazy" width={249} height={312} />
        </div>
      )}
      <h3 className="person__name">{p.name}</h3>
      <p className="person__role">{p.role}</p>
      {p.linkedin && (
        <a className="person__link" href={p.linkedin} target="_blank" rel="noopener">
          Connect on LinkedIn
        </a>
      )}
    </article>
  );
}

export function ComingSoon({
  logo,
  name,
  line,
}: {
  logo: string;
  name: string;
  line: string;
}) {
  return (
    <section className="soon">
      <div className="soon__pattern" aria-hidden="true" />
      <div className="container soon__inner reveal">
        <img src={logo} alt={name} className="soon__logo" />
        <p className="soon__line">{line}</p>
        <p className="soon__badge">Coming soon</p>
        <Button href="/get-in-touch/" variant="outline">
          Register interest
        </Button>
      </div>
    </section>
  );
}
