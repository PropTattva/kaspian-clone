import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealOnRoute from "@/components/RevealOnRoute";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kaspianpartners.com"),
  title: {
    default: "Kaspian Partners | Independent Commercial Real Estate Advice",
    template: "%s | Kaspian Partners",
  },
  description:
    "Independent commercial real estate advice. Built without conflict. Commercial real estate expertise for owners and occupiers, carried through to execution.",
  icons: {
    icon: "/logos/kaspian-favicon-32x32.png",
    apple: "/logos/kaspian-favicon-180x180.png",
  },
  openGraph: {
    type: "website",
    siteName: "Kaspian Partners",
    images: ["/images/kaspian-og.jpg"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300..700;1,9..40,400&display=swap"
        />
      </head>
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <RevealOnRoute />
      </body>
    </html>
  );
}
