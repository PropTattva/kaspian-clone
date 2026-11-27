"use client";

import { useEffect, useState } from "react";
import { enquiryHref, type Asset, type Block, type Inline } from "@/lib/assets";
import { Arrow } from "@/components/ui";

function InlineText({ item }: { item: Inline }) {
  return (
    <>
      {item.lead && <strong>{item.lead}: </strong>}
      {item.text}
      {item.link && (
        <>
          {item.text ? " " : ""}
          <a href={item.link.href} {...(item.link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
            {item.link.label}
          </a>
        </>
      )}
    </>
  );
}

function BlockView({ block }: { block: Block }) {
  if (block.type === "p")
    return (
      <p>
        <InlineText item={block} />
      </p>
    );
  if (block.type === "ul")
    return (
      <ul>
        {block.items.map((it, i) => (
          <li key={i}>
            <InlineText item={it} />
          </li>
        ))}
      </ul>
    );
  return (
    <figure className="plan">
      <a href={block.src} target="_blank" rel="noopener">
        <img src={block.src} alt={block.alt} loading="lazy" />
      </a>
      <figcaption>
        {block.caption}{" "}
        <a href={block.src} download={block.downloadName}>
          {block.downloadLabel}
        </a>
        {block.extra && (
          <>
            {" "}or <a href={block.extra.href}>{block.extra.label.toLowerCase()}</a>
          </>
        )}
        .
      </figcaption>
    </figure>
  );
}

/** Quick-link buttons + accordion of an asset's detail sections. Buttons open and scroll to their section. */
export default function AssetDetails({ asset }: { asset: Asset }) {
  const [open, setOpen] = useState<Set<string>>(() => new Set([asset.sections[0]?.id]));

  useEffect(() => {
    const fromHash = () => {
      const id = decodeURIComponent(location.hash.slice(1));
      if (asset.sections.some((s) => s.id === id)) setOpen((o) => new Set(o).add(id));
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [asset.sections]);

  function toggle(id: string) {
    setOpen((o) => {
      const n = new Set(o);
      if (n.has(id)) n.delete(id);
      else n.add(id);
      return n;
    });
  }

  function jump(id: string) {
    setOpen((o) => new Set(o).add(id));
    history.replaceState(null, "", `#${id}`);
    requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }

  return (
    <>
      <div className="asset-actions">
        {asset.sections.map((s) => (
          <button key={s.id} type="button" className="chip" onClick={() => jump(s.id)}>
            {s.button}
          </button>
        ))}
        <a className="btn btn--filled" href={enquiryHref(asset)}>
          <span>Enquire about leasing</span>
          <Arrow />
        </a>
      </div>

      <section className="asset-resources" aria-labelledby="explore-heading">
        <h2 id="explore-heading" className="asset-resources__title">
          Explore {asset.name}
        </h2>
        {asset.sections.map((s) => {
          const isOpen = open.has(s.id);
          return (
            <div key={s.id} id={s.id} className={`acc${isOpen ? " is-open" : ""}`}>
              <h3>
                <button type="button" aria-expanded={isOpen} aria-controls={`${s.id}-body`} onClick={() => toggle(s.id)}>
                  {s.title}
                  <span className="acc__icon" aria-hidden="true" />
                </button>
              </h3>
              <div id={`${s.id}-body`} className="acc__body" hidden={!isOpen}>
                {s.blocks.map((b, i) => (
                  <BlockView key={i} block={b} />
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
