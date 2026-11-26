import type { Metadata } from "next";
import { Button, Eyebrow, Title } from "@/components/ui";
import { ClosingCta } from "@/components/sections";

export const metadata: Metadata = {
  title: "AssetAdvantage: Managed Asset Services",
  description:
    "AssetAdvantage gives your asset a dedicated senior team, accountable to you for positioning, marketing and leasing. No leasing brokerage. No occupier mandates.",
};

const accountable = [
  { title: "Personnel", copy: "Named people. Clear roles. You know who is responsible." },
  { title: "Ownership", copy: "Your team is dedicated to your asset, with clear information boundaries." },
  {
    title: "Discipline",
    copy: "Demand generation and negotiation have separate responsibilities, aligned with your asset’s interests.",
  },
];

const manage = [
  {
    title: "Asset positioning and pre-leasing advisory",
    copy: "Identify technical gaps, occupier expectations and your asset’s competitive strengths.",
  },
  {
    title: "Pricing & leasing strategy",
    copy: "Benchmark rents, agree pricing boundaries and plan space release. Review against proposals and signed commitments.",
  },
  {
    title: "Occupier fit & broker coordination",
    copy: "Identify suitable occupiers, assess fit, brief brokers and manage the approved prospect pipeline.",
  },
  {
    title: "Reporting & documentation",
    copy: "Align project, finance and legal teams through shared data, documented approvals and regular reviews.",
  },
];

const nonNegotiables = [
  "No leasing brokerage",
  "No occupier mandates",
  "Your team works only on your asset",
  "Any other mandates disclosed before we sign",
  "No commission from any party",
];

const assessment = [
  { title: "The market evidence", copy: "Executed rents and competing supply, benchmarked against your asset." },
  { title: "The occupier fit", copy: "A prioritised occupier list matched to your asset." },
  { title: "The recommended plan", copy: "Recommended rental parameters and Pod size, based on the assessment." },
];

export default function AssetAdvantagePage() {
  return (
    <>
      <section className="page-hero page-hero--brand">
        <div className="page-hero__pattern" aria-hidden="true" />
        <div className="container split split--center">
          <div className="reveal">
            <img src="/logos/assetadvantage-logo.svg" alt="AssetAdvantage" className="page-hero__logo" />
            <Title as="h1" first="Your asset deserves" second="its exclusive team." className="title--hero" />
          </div>
          <div className="page-hero__media reveal">
            <img src="/images/kaspian-aa-intro.webp" alt="Asset team reviewing leasing data" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="reveal">
            <Eyebrow>A senior team. Dedicated to your asset.</Eyebrow>
            <Title first="Your asset." second="Our responsibility." className="title--xl" />
          </div>
          <div className="prose reveal">
            <p>
              AssetAdvantage gives your asset a dedicated senior team, accountable to you for positioning,
              marketing and leasing.
            </p>
            <p>We work alongside your team and brokers, with tenant management available when required.</p>
            <p className="strong-line">No leasing brokerage. No occupier mandates.</p>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <div className="section-head reveal">
            <Title first="One accountable team." second="On your asset alone." className="title--xl" />
          </div>
          <div className="grid grid--3">
            {accountable.map((a, i) => (
              <div key={a.title} className="pillar pillar--card reveal" style={{ transitionDelay: `${i * 90}ms` }}>
                <span className="pillar__num">0{i + 1}</span>
                <h3>{a.title}</h3>
                <p>{a.copy}</p>
              </div>
            ))}
          </div>
          <p className="engines reveal">
            Supported by two engines: the <strong>Origination Desk</strong> and <strong>Capability Desk</strong>.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <Eyebrow>What we manage</Eyebrow>
            <Title first="The decisions" second="behind the rent." className="title--xl" />
          </div>
          <ol className="numbered numbered--grid">
            {manage.map((m, i) => (
              <li key={m.title} className="reveal" style={{ transitionDelay: `${(i % 2) * 90}ms` }}>
                <span className="numbered__n">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{m.title}</h3>
                  <p>{m.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--navy">
        <div className="section__pattern" aria-hidden="true" />
        <div className="container split split--top">
          <div className="reveal">
            <Eyebrow light>Independence in practice</Eyebrow>
            <Title first="The five" second="non-negotiables." className="title--xl title--light" />
          </div>
          <ol className="rules reveal">
            {nonNegotiables.map((n, i) => (
              <li key={n}>
                <span>{i + 1}</span>
                {n}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <Eyebrow>Before you appoint us</Eyebrow>
            <Title first="A 14-day" second="asset assessment." className="title--xl" />
            <p className="lead">
              We assess your asset and propose a commercial starting point and the right team.
            </p>
          </div>
          <div className="grid grid--3 steps">
            {assessment.map((a, i) => (
              <div key={a.title} className="step reveal" style={{ transitionDelay: `${i * 90}ms` }}>
                <span className="step__day">Part {i + 1}</span>
                <h3>{a.title}</h3>
                <p>{a.copy}</p>
              </div>
            ))}
          </div>
          <div className="center reveal">
            <Button href="/get-in-touch/">Request an Asset Assessment</Button>
          </div>
        </div>
      </section>

      <ClosingCta
        eyebrow="Let’s connect"
        image="/images/kaspian-glass-office.webp"
        imageAlt="Office seen through glass"
      />
    </>
  );
}
