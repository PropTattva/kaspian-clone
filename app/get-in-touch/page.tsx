import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Eyebrow, Title } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get in Touch",
  description: "Tell us what you need. Speak to a Kaspian partner about your commercial real estate requirement.",
};

export default function GetInTouchPage() {
  const careersHref = `mailto:${site.email}?subject=${encodeURIComponent(
    "Expression of interest: joining Kaspian",
  )}&body=${encodeURIComponent("Hello Kaspian team,\n\nA little about me:\n\n(Please attach your CV.)")}`;

  return (
    <>
      <section className="page-hero page-hero--short">
        <div className="page-hero__pattern" aria-hidden="true" />
        <div className="container page-hero__inner reveal">
          <Eyebrow>Let’s connect</Eyebrow>
          <Title as="h1" first="Tell us" second="what you need." className="title--hero" />
        </div>
      </section>

      <section className="section">
        <div className="container contact">
          <div className="contact__form reveal">
            <ContactForm />
          </div>
          <aside className="contact__aside reveal">
            <div className="contact__card">
              <h3>Write to us</h3>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
            <div className="contact__card">
              <h3>Visit</h3>
              <a href={site.mapsUrl} target="_blank" rel="noopener">
                {site.address}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section--navy">
        <div className="section__pattern" aria-hidden="true" />
        <div className="container split split--top">
          <div className="reveal">
            <Eyebrow light>Careers</Eyebrow>
            <Title first="Join the" second="Kaspian Team" className="title--xl title--light" />
          </div>
          <div className="prose prose--light reveal">
            <p>Interested in joining us? Share your background, interests and what you would bring to the team.</p>
            <p>We welcome interest in asset services, leasing, research, data, business development and support.</p>
            <p>
              <a className="closing__email" href={careersHref}>
                {site.email}
              </a>
            </p>
            <p className="small">
              Expressions of interest are welcome. Attach your CV to the email draft; this is not an advertised
              vacancy.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
