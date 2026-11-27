"use client";

import { assetsByStatus, statusLabels, type AssetStatus } from "@/lib/assets";

const order: AssetStatus[] = ["active", "delivered"];

/** Segmented switch between "Currently managing" and "Delivered assets". */
export default function StatusTabs({
  value,
  onChange,
  idPrefix,
  dark = false,
}: {
  value: AssetStatus;
  onChange: (s: AssetStatus) => void;
  idPrefix: string;
  dark?: boolean;
}) {
  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = order[(order.indexOf(value) + 1) % order.length];
    onChange(next);
    document.getElementById(`${idPrefix}-tab-${next}`)?.focus();
  }

  return (
    <div className={`status-tabs${dark ? " status-tabs--dark" : ""}`} role="tablist" aria-label="Asset type" onKeyDown={onKeyDown}>
      {order.map((s) => {
        const selected = s === value;
        return (
          <button
            key={s}
            id={`${idPrefix}-tab-${s}`}
            type="button"
            role="tab"
            aria-selected={selected}
            aria-controls={`${idPrefix}-panel`}
            tabIndex={selected ? 0 : -1}
            className={`status-tabs__tab${selected ? " is-active" : ""}`}
            onClick={() => onChange(s)}
          >
            {s === "active" && <span className="status-dot" aria-hidden="true" />}
            {statusLabels[s].tab}
            <span className="status-tabs__count">{assetsByStatus(s).length}</span>
          </button>
        );
      })}
    </div>
  );
}
