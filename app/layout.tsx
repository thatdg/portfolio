import type { Metadata } from "next";
import { Fraunces, Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

// Display: editorial serif with real personality (soft + wonk axes).
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
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

export const metadata: Metadata = {
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
      className={`${fraunces.variable} ${spaceGrotesk.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
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
