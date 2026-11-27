import { asset } from "@/lib/base";
import type { Metadata } from "next";
import { ComingSoon } from "@/components/sections";

export const metadata: Metadata = {
  title: "Navig8: Occupier Real Estate Advisory",
  description: "Navig8: independent occupier advisory from Kaspian Partners. Coming soon.",
};

export default function Navig8Page() {
  return <ComingSoon logo={asset("/logos/navig8-logo.svg")} name="Navig8" line="Independent occupier advisory" />;
}
