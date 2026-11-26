import Link from "next/link";
import { Button, Eyebrow, Title } from "@/components/ui";
import { BrandFamily, ClosingCta } from "@/components/sections";

const pillars = [
  {
    title: "Independence by design",
    copy: "AssetAdvantage serves owners. Navig8 serves occupiers. Each has a dedicated team, a clear mandate and information boundaries.",
  },
  {
    title: "Senior judgement. Clear accountability.",
    copy: "A senior partner stays involved. Scope, responsibilities and reporting are agreed at the start.",
  },
  {
    title: "Advice carried through",
    copy: "We bring specialists together and stay involved from decision to execution.",
  },
];

const firms = [
  {
    eyebrow: "For owners & investors",
    logo: "/logos/assetadvantage-logo.svg",
    name: "AssetAdvantage",
    title: "Turn space into income.",
    copy: [
      "A dedicated asset team manages positioning, broker coordination and leasing performance alongside your people.",
      "Start with a 14-day assessment: market evidence, occupier fit and a recommended plan.",
    ],
    cta: { href: "/assetadvantage/", label: "Explore AssetAdvantage" },
    image: "/images/kaspian-home-aa.webp",
    alt: "Asset team reviewing leasing data at their desks",
  },
  {
    eyebrow: "For corporate occupiers",
    logo: "/logos/navig8-logo.svg",
    name: "Navig8",
    title: "The business need comes first.",
    copy: [
      "We assess requirements, economics and options, then support implementation with your team and brokers.",
    ],
    soon: true,
    image: "/images/kaspian-home-n8.webp",
    alt: "Open-plan office with a city view",
  },
  {
    eyebrow: "Property intelligence",
    logo: "/logos/proptattva-logo.svg",
    name: "Proptattva",
    title: "Intelligence to enable",
    copy: ["The technology and data platform within the Kaspian family."],
    soon: true,
    image: "/images/kaspian-proptattva-meeting.webp",
    alt: "Team meeting by a window overlooking the city skyline",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <img className="hero__bg" src="/images/kaspian-home-slide-2.webp" alt="" />
        <div className="hero__shade" aria-hidden="true" />
        <div className="hero__pattern" aria-hidden="true" />
        <div className="container hero__inner">
          <h1 className="hero__title">
            <span className="hero__line">Built Without</span>
            <span className="hero__line hero__line--accent">Conflict.</span>
          </h1>
          <p className="hero__sub">
            Commercial real estate expertise. Built for owners and occupiers. Carried through to execution.
          </p>
          <div className="hero__ctas">
            <Button href="/assetadvantage/" variant="light">
              For owners &amp; investors
            </Button>
            <Button href="/navig8/" variant="outline-light">
              For corporate occupiers
            </Button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container split split--intro">
          <div className="reveal">
            <Eyebrow>A different standard in commercial real estate</Eyebrow>
            <Title first="Experience that stays" second="close to your decisions." className="title--xl" />
          </div>
          <div className="reveal prose">
            <p>
              Five founding partners. Deep market experience. One conviction: sound advice must lead to
              measurable action.
            </p>
            <p>Specialist teams give owners and occupiers focused expertise and senior accountability.</p>
            <Button href="/about-us/">Why Kaspian</Button>
          </div>
        </div>
      </section>

      {/* Photo band */}
      <section className="photo-band reveal">
        <img
          src="/images/kaspian-home-office.webp"
          alt="Kaspian team at work in an open office overlooking the city"
          loading="lazy"
        />
      </section>

      {/* Pillars */}
      <section className="section">
        <div className="container grid grid--3">
          {pillars.map((p, i) => (
            <div key={p.title} className="pillar reveal" style={{ transitionDelay: `${i * 90}ms` }}>
              <span className="pillar__num">0{i + 1}</span>
              <h3>{p.title}</h3>
              <p>{p.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Firms */}
      <section className="section section--tint" id="firms">
        <div className="container">
          <div className="section-head section-head--center reveal">
            <Title first="One market. Two sides." second="No divided loyalties." className="title--xl" />
            <p className="lead lead--lg">
              Supported by a tech layer. Choose the team built around your objective.
            </p>
          </div>

          <div className="firms">
            {firms.map((f, i) => (
              <article key={f.name} className={`firm reveal${i % 2 ? " firm--flip" : ""}`}>
                <div className="firm__media">
                  <img src={f.image} alt={f.alt} loading="lazy" />
                  {f.soon && <span className="badge">Coming Soon</span>}
                </div>
                <div className="firm__body">
                  <Eyebrow>{f.eyebrow}</Eyebrow>
                  <img src={f.logo} alt={f.name} className="firm__logo" />
                  <h3 className="firm__title">{f.title}</h3>
                  {f.copy.map((c) => (
                    <p key={c}>{c}</p>
                  ))}
                  {f.soon ? (
                    <p className="firm__soon">Coming soon.</p>
                  ) : (
                    f.cta && <Button href={f.cta.href}>{f.cta.label}</Button>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta />

      <BrandFamily />

      <p className="sr-only">
        <Link href="/get-in-touch/">Get in touch</Link>
      </p>
    </>
  );
}
