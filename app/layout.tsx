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
    "Commercially minded B2B marketing manager turning brand, web, and campaigns into measurable growth for trade, distribution, and live-events businesses across Scotland.",
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
