import { asset } from "@/lib/base";
import type { Metadata } from "next";
import { ComingSoon } from "@/components/sections";

export const metadata: Metadata = {
  title: "Proptattva: Property Intelligence",
  description: "Proptattva: Kaspian's proprietary data platform for evidence-based decisions. Coming soon.",
};

export default function ProptattvaPage() {
  return (
    <ComingSoon
      logo={asset("/logos/proptattva-logo.svg")}
      name="Proptattva"
      line="Kaspian’s proprietary data platform for evidence based decisions"
    />
  );
}
