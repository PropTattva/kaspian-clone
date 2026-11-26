"use client";

import { usePathname } from "next/navigation";
import Reveal from "./Reveal";

export default function RevealOnRoute() {
  const pathname = usePathname();
  return <Reveal routeKey={pathname ?? ""} />;
}
