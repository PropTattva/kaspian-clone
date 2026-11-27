import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { assetHref, assets, assetsByStatus, getAsset, statusLabels } from "@/lib/assets";
import AssetSwitcher from "@/components/assets/AssetSwitcher";
import AssetDetails from "@/components/assets/AssetDetails";
import { ClosingCta } from "@/components/sections";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return assets.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const asset = getAsset((await params).slug);
  if (!asset) return {};
  return {
    title: `${asset.name}, ${asset.location} | AssetAdvantage`,
    description: asset.description,
    openGraph: { images: [asset.image] },
  };
}

export default async function AssetPage({ params }: Props) {
  const asset = getAsset((await params).slug);
  if (!asset) notFound();

  const siblings = assetsByStatus(asset.status);
  const idx = siblings.findIndex((a) => a.slug === asset.slug);
  const prev = siblings.length > 2 ? siblings[(idx - 1 + siblings.length) % siblings.length] : null;
  const next = siblings.length > 1 ? siblings[(idx + 1) % siblings.length] : null;

  return (
    <>
      <section className="asset-hero">
        <div className="asset-hero__pattern" aria-hidden="true" />
        <div className="container asset-hero__inner">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/assetadvantage/">AssetAdvantage</Link>
            <span aria-hidden="true">/</span>
            <Link href="/assetadvantage/#assets-under-management">Managed assets</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{asset.name}</span>
          </nav>
          <p className="eyebrow eyebrow--light">
            {statusLabels[asset.status].title} · {asset.category}
          </p>
          <h1 className="asset-hero__title">{asset.name}</h1>
          <p className="asset-hero__sub">
            {asset.location} · {asset.address}
          </p>
        </div>
      </section>

      <AssetSwitcher currentSlug={asset.slug} currentStatus={asset.status} />

      <section className="section asset-page">
        <div className="container">
          <article className="asset-feature">
            <div className="asset-feature__media">
              <img src={asset.image} alt={asset.imageAlt} style={{ objectPosition: asset.imagePosition }} />
              <span className={`asset-card__status asset-card__status--${asset.status}`}>
                {asset.status === "active" ? "Currently managing" : "Delivered"}
              </span>
            </div>
            <div className="asset-feature__info">
              <p className="eyebrow">{asset.location}</p>
              <h2 className="asset-feature__name">{asset.name}</h2>
              <p className="asset-feature__addr">
                <a href={asset.mapsUrl} target="_blank" rel="noopener noreferrer">
                  {asset.address}
                </a>
              </p>
              <p className="asset-feature__desc">{asset.description}</p>
              <dl className="facts">
                {asset.facts.map((f) => (
                  <div key={f.label}>
                    <dt>{f.label}</dt>
                    <dd>{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </article>

          <AssetDetails key={asset.slug} asset={asset} />

          {next && (
            <nav className="asset-pager" aria-label="More assets">
              {prev ? (
                <Link href={assetHref(prev)} className="asset-pager__link">
                  <span className="asset-pager__dir">← Previous asset</span>
                  <span className="asset-pager__name">{prev.name}</span>
                </Link>
              ) : (
                <Link href="/assetadvantage/#assets-under-management" className="asset-pager__link">
                  <span className="asset-pager__dir">← All assets</span>
                  <span className="asset-pager__name">Managed assets</span>
                </Link>
              )}
              <Link href={assetHref(next)} className="asset-pager__link asset-pager__link--next">
                <span className="asset-pager__dir">Next asset →</span>
                <span className="asset-pager__name">{next.name}</span>
              </Link>
            </nav>
          )}
        </div>
      </section>

      <ClosingCta
        eyebrow="Let’s connect"
        first={`Interested in ${asset.name}?`}
        second="Speak to the asset team."
        copy="Tell us your requirement and we’ll share availability, terms and the latest plans."
        image={asset.image}
        imageAlt={asset.imageAlt}
      />
    </>
  );
}
