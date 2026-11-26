import type { Metadata } from "next";
import { Title } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy" };

// Placeholder copy: replace with the policy approved by legal before going live.
export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero page-hero--short">
        <div className="container page-hero__inner">
          <Title as="h1" first="Privacy Policy" className="title--hero" />
        </div>
      </section>
      <section className="section">
        <div className="container prose prose--narrow">
          <p>
            This page describes how Kaspian Partners collects and uses personal information submitted through this
            website.
          </p>
          <h2>Information we collect</h2>
          <p>
            When you send an enquiry we receive the details you provide: your name, email address, company and
            the content of your message.
          </p>
          <h2>How we use it</h2>
          <p>We use these details only to respond to your enquiry and to follow up on the requirement you share.</p>
          <h2>Contact</h2>
          <p>
            For any question about your data, write to <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
