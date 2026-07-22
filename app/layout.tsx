import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Cormorant_Garamond, Outfit } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Analytics } from "@/components/Analytics";
import { LocaleDocumentSync } from "@/components/LocaleDocumentSync";
import { LocaleProvider } from "@/lib/i18n";
import { site } from "@/lib/content";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

/** Original hero display face (Latin brand) */
const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

/** Display serif with Cyrillic for BG UI */
const display = Cormorant_Garamond({
  variable: "--font-display-serif",
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#d9e6e8",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
    openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "bg_BG",
    alternateLocale: ["en_US"],
    type: "website",
    images: [{ url: "/images/og.svg", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/images/og.svg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg">
      <body
        className={`${outfit.variable} ${bodoni.variable} ${display.variable} flex min-h-dvh flex-col antialiased`}
      >
        <LocaleProvider>
          <LocaleDocumentSync />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LocaleProvider>
        <Analytics />
      </body>
    </html>
  );
}
