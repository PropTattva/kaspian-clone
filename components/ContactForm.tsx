"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";
import { Arrow } from "./ui";

/**
 * Static-site friendly enquiry form. With no backend, it opens the visitor's mail client
 * with the enquiry pre-filled. Swap `onSubmit` for a POST to your API / form service later.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    if (f.get("website")) return; // honeypot
    const subject = `Enquiry: ${f.get("topic")} from ${f.get("name")}`;
    const body = [
      `Name: ${f.get("name")}`,
      `Email: ${f.get("email")}`,
      `Company: ${f.get("company") || "-"}`,
      `Enquiring about: ${f.get("topic")}`,
      "",
      `${f.get("message")}`,
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <label className="form__honeypot" aria-hidden="true">
        Website
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <div className="form__row">
        <label className="field">
          <span>Your name</span>
          <input name="name" type="text" required autoComplete="name" />
        </label>
        <label className="field">
          <span>Email address</span>
          <input name="email" type="email" required autoComplete="email" />
        </label>
      </div>
      <div className="form__row">
        <label className="field">
          <span>Company</span>
          <input name="company" type="text" autoComplete="organization" />
        </label>
        <label className="field">
          <span>I am enquiring about</span>
          <select name="topic" defaultValue="AssetAdvantage">
            <option>AssetAdvantage</option>
            <option>Navig8</option>
            <option>Proptattva</option>
            <option>Something else</option>
          </select>
        </label>
      </div>
      <label className="field">
        <span>Your requirement</span>
        <textarea name="message" rows={6} required />
      </label>
      <label className="form__consent">
        <input type="checkbox" required />
        <span>
          I agree to Kaspian Partners storing my details to respond to this enquiry, as described in the{" "}
          <a href="/privacy-policy/">privacy policy</a>.
        </span>
      </label>
      <button type="submit" className="btn btn--filled">
        <span>Send enquiry</span>
        <Arrow />
      </button>
      {sent && (
        <p className="form__note" role="status">
          Your email app should open with the enquiry ready to send. If it doesn&apos;t, write to{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      )}
    </form>
  );
}
