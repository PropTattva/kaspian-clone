"use client";

import Link from "next/link";
import { useState } from "react";
import { assetHref, assetsByStatus, statusLabels, type AssetStatus } from "@/lib/assets";
import StatusTabs from "./StatusTabs";

/** Sticky bar on an asset page: switch asset type, then jump to any asset of that type. */
export default function AssetSwitcher({ currentSlug, currentStatus }: { currentSlug: string; currentStatus: AssetStatus }) {
  const [status, setStatus] = useState<AssetStatus>(currentStatus);
  const list = assetsByStatus(status);

  return (
    <div className="asset-switcher">
      <div className="container asset-switcher__inner">
        <StatusTabs value={status} onChange={setStatus} idPrefix="switcher" />
        <nav id="switcher-panel" role="tabpanel" aria-labelledby={`switcher-tab-${status}`} className="asset-switcher__list" aria-label={`${statusLabels[status].title}`}>
          {list.length === 0 ? (
            <span className="asset-switcher__empty">{statusLabels[status].empty}</span>
          ) : (
            list.map((a) => (
              <Link
                key={a.slug}
                href={assetHref(a)}
                className={`asset-pill${a.slug === currentSlug ? " is-current" : ""}`}
                aria-current={a.slug === currentSlug ? "page" : undefined}
              >
                {a.name}
              </Link>
            ))
          )}
        </nav>
      </div>
    </div>
  );
}
