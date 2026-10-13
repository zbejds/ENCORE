import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Providers } from "@/components/Providers";
import { StatusBanner } from "@/components/StatusBanner";
import "./globals.css";

// Fonts load from Google Fonts in the browser (not at build time), so a
// font-server hiccup can never fail the Vercel build.
const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=Unbounded:wght@500;700;900&display=swap";

export const metadata: Metadata = {
  title: { default: "ENCORE — Every legend gets an encore", template: "%s · ENCORE" },
  description: "Call forgotten Solana memecoins back on stage: vote for the legends you want back, inspect live charts and trade with Phantom.",
};

export const viewport: Viewport = {
  themeColor: "#0D0E13",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href={FONTS_URL} />
      </head>
      <body className="min-h-dvh font-sans">
        <Providers>
          <div className="relative z-10 flex min-h-dvh flex-col">
            <Header />
            <StatusBanner />
            <main className="mx-auto w-full max-w-[1440px] flex-1 px-4 pb-16 sm:px-6">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
