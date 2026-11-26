import type { Metadata } from "next";
import { Button, Eyebrow, Title } from "@/components/ui";
import { ClosingCta, PersonCard } from "@/components/sections";
import Odometer from "@/components/Odometer";
import { foundingTeam, partners, specialists } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Five founding partners. Senior partners, on your side, accountable to the end. Meet the people behind Kaspian Partners.",
};

const values = [
  { title: "Trust", copy: "In every relationship earned." },
  { title: "Discipline", copy: "In how we work and deliver." },
  { title: "Respect", copy: "For people, ideas and outcomes." },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__pattern" aria-hidden="true" />
        <div className="container page-hero__inner reveal">
          <Title as="h1" first="Experience that" second="takes responsibility." className="title--hero" />
          <p className="page-hero__sub">Senior partners, on your side, accountable to the end.</p>
        </div>
      </section>

      {/* Why we built */}
      <section className="section">
        <div className="container split">
          <div className="reveal">
            <Eyebrow>Why we built Kaspian</Eyebrow>
            <Title first="Experience shaped" second="into a different way of working." className="title--xl" />
            <div className="prose">
              <p>
                Our careers in India’s commercial real estate market have shown us what matters: experienced
                people, aligned incentives and advice carried through.
              </p>
              <p>
                Five founding partners bring that experience to Kaspian. Specialist teams serve owners and
                occupiers through clear mandates and direct senior involvement.
              </p>
              <p>Your objective guides the work from brief to execution.</p>
              <Button href="/assetadvantage/" variant="navy">
                Explore AssetAdvantage
              </Button>
            </div>
          </div>
          <div className="statphoto reveal">
            <img
              src="/images/kaspian-home-contact-meeting.webp"
              alt="Partners meeting in an office overlooking the city skyline"
              loading="lazy"
            />
            <div className="statphoto__card">
              <span className="statphoto__number">
                <Odometer value={100} />
              </span>
              <span className="statphoto__label">
                <strong>years</strong> of combined experience across our founding partners
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="section section--navy">
        <div className="section__pattern" aria-hidden="true" />
        <div className="container split split--top">
          <div className="reveal">
            <Eyebrow light>Our vision</Eyebrow>
            <h2 className="title title--xl title--light">
              Real assets.
              <br />
              <em>Lasting</em>
              <br />
              <em>value.</em>
            </h2>
          </div>
          <div className="reveal">
            <p className="vision__statement">
              To be India’s most trusted real estate partner — creating lasting value for owners, occupiers and
              everyone who builds with us.
            </p>
            <div className="values">
              {values.map((v, i) => (
                <div key={v.title} className="value">
                  <span className="value__num">0{i + 1}</span>
                  <h3>{v.title}</h3>
                  <p>{v.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <Eyebrow>The people behind the promise</Eyebrow>
            <Title first="Experienced people." second="Direct accountability." className="title--xl" />
            <p className="lead">Five founding partners. One shared standard of advice.</p>
          </div>
          <div className="people">
            {partners.map((p, i) => (
              <PersonCard key={p.name} p={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Founding team */}
      <section className="section section--tint">
        <div className="container">
          <div className="section-head reveal">
            <Eyebrow>Our people</Eyebrow>
            <Title first="Founding Team" />
          </div>
          <div className="people">
            {foundingTeam.map((p, i) => (
              <PersonCard key={p.name} p={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Specialists */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <Eyebrow>Our specialists</Eyebrow>
            <Title first="Specialist Partners" />
          </div>
          <div className="specialists">
            {specialists.map((s) => (
              <div key={s.name} className="specialist reveal">
                <h3>{s.name}</h3>
                <p>{s.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta
        eyebrow="Get in touch"
        first="A conversation about"
        second="what comes next."
        copy="Bring us a property requirement. We will connect you with the right partner."
        button="Discuss a requirement"
        image="/images/kaspian-about-cta.webp"
        imageAlt="Two advisers walking through an office building"
      />

      <section className="section section--tint">
        <div className="container">
          <div className="section-head reveal">
            <Eyebrow>Insights and news</Eyebrow>
            <Title first="From the Kaspian desk" />
          </div>
          <p className="muted reveal">No posts yet. Check back soon for market insights and firm news.</p>
        </div>
      </section>
    </>
  );
}
