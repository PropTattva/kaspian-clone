"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { assetHref, assetsByStatus, statusLabels, type AssetStatus } from "@/lib/assets";
import { Eyebrow, Title } from "@/components/ui";
import StatusTabs from "./StatusTabs";

/** "Assets under management" block: status switch + scroll-snap carousel of asset cards. */
export default function AssetsShowcase() {
  const [status, setStatus] = useState<AssetStatus>("active");
  const trackRef = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: true });
  const list = assetsByStatus(status);

  const updateEdges = useCallback(() => {
    const t = trackRef.current;
    if (!t) return;
    setEdges({ start: t.scrollLeft <= 4, end: t.scrollLeft + t.clientWidth >= t.scrollWidth - 4 });
  }, []);

  useEffect(() => {
    const t = trackRef.current;
    if (!t) return;
    t.scrollTo({ left: 0 });
    updateEdges();
    t.addEventListener("scroll", updateEdges, { passive: true });
    window.addEventListener("resize", updateEdges);
    return () => {
      t.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
    };
  }, [status, updateEdges]);

  function scroll(dir: 1 | -1) {
    const t = trackRef.current;
    const card = t?.querySelector<HTMLElement>(".asset-card");
    if (!t || !card) return;
    const gap = parseFloat(getComputedStyle(t).columnGap || "0") || 0;
    t.scrollBy({ left: dir * (card.offsetWidth + gap), behavior: "smooth" });
  }

  const showArrows = list.length > 0 && !(edges.start && edges.end);

  return (
    <section className="section aum" id="assets-under-management">
      <div className="container">
        <div className="aum__head reveal">
          <div>
            <Eyebrow>Assets under management</Eyebrow>
            <Title first="Assets we manage." second="One team per asset." className="title--xl" />
          </div>
          <div className="aum__controls">
            <StatusTabs value={status} onChange={setStatus} idPrefix="aum" />
          </div>
        </div>

        <div id="aum-panel" role="tabpanel" aria-labelledby={`aum-tab-${status}`} className="reveal">
          <div className="aum__bar">
            <p className="aum__blurb">{statusLabels[status].blurb}</p>
            {showArrows && (
              <div className="carousel-arrows">
                <button type="button" aria-label="Previous assets" onClick={() => scroll(-1)} disabled={edges.start}>
                  ←
                </button>
                <button type="button" aria-label="Next assets" onClick={() => scroll(1)} disabled={edges.end}>
                  →
                </button>
              </div>
            )}
          </div>

          {list.length === 0 ? (
            <div className="aum__empty">
              <p>{statusLabels[status].empty}</p>
              <Link href="/get-in-touch/" className="btn btn--outline">
                <span>Talk to us about your asset</span>
              </Link>
            </div>
          ) : (
            <div className="carousel" ref={trackRef} key={status}>
              {list.map((a, i) => (
                <Link key={a.slug} href={assetHref(a)} className="asset-card" style={{ animationDelay: `${i * 80}ms` }}>
                  <div className="asset-card__media">
                    <img src={a.image} alt={a.imageAlt} loading="lazy" style={{ objectPosition: a.imagePosition }} />
                    <span className={`asset-card__status asset-card__status--${a.status}`}>
                      {a.status === "active" ? "Currently managing" : "Delivered"}
                    </span>
                  </div>
                  <div className="asset-card__body">
                    <p className="asset-card__loc">{a.location}</p>
                    <h3 className="asset-card__name">{a.name}</h3>
                    <p className="asset-card__addr">{a.address}</p>
                    <dl className="asset-card__facts">
                      {a.facts.slice(0, 2).map((f) => (
                        <div key={f.label}>
                          <dt>{f.label}</dt>
                          <dd>{f.value}</dd>
                        </div>
                      ))}
                    </dl>
                    <span className="asset-card__cta">
                      View asset <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
