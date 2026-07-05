import type { Metadata } from "next";
import { Newsreader, Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

// Display: a warm editorial serif built for reading — bold presence, easy to
// read at large sizes, with a real italic for the gradient headline words.
const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  style: ["normal", "italic"],
  display: "swap",
});

// Utility: grotesque for labels, nav, metrics — the "campaign report" voice.
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

// Body: quiet and legible.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Base URL for resolving OG / Twitter image paths. Set NEXT_PUBLIC_SITE_URL in
// production; Vercel exposes VERCEL_URL automatically; falls back to localhost.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tony Syme — B2B Marketing Manager",
    template: "%s — Tony Syme",
  },
  description:
    "B2B marketing manager, available now for an immediate start. Brand, web, and campaigns that drove +249% turnover growth and +40% lead conversion for trade, distribution, and live-events businesses across Scotland.",
  openGraph: {
    title: "Tony Syme — B2B Marketing Manager",
    description:
      "Marketing that moves the numbers: +249% turnover growth, +40% lead conversion. Available now for an immediate start.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tony Syme — B2B Marketing Manager",
    description:
      "Marketing that moves the numbers: +249% turnover growth, +40% lead conversion. Available now.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${spaceGrotesk.variable} ${inter.variable} h-full`}
    >
      <body
        className="min-h-full flex flex-col bg-paper text-ink"
        suppressHydrationWarning
      >
        {/* Keep reveal content visible if JavaScript never loads. */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
