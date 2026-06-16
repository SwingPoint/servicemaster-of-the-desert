import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { getPrimaryBusiness, SITE_URL } from "@/data/content";
import { buildWebSiteJsonLd } from "@/lib/schema";
import "./globals.css";

const business = getPrimaryBusiness();

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Professional Carpet Cleaning in Palm Desert, CA | ServiceMaster of the Desert",
    template: "%s | ServiceMaster of the Desert",
  },
  description:
    "Over 30 years of trusted carpet, tile, upholstery, and window cleaning in the Coachella Valley. Residential and commercial. Satisfaction guaranteed. Call (442) 227-3064.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: business.name,
    title: "Professional Carpet Cleaning in Palm Desert, CA | ServiceMaster of the Desert",
    description:
      "The clean you expect, the service you deserve. Carpet, tile, stone, upholstery, and exterior cleaning across the Coachella Valley.",
    images: [{ url: business.images.hero, width: 1080, height: 720, alt: business.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ServiceMaster of the Desert — Palm Desert Cleaning",
    description: business.description,
    images: [business.images.hero],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "https://cdn.prod.website-files.com/65f356ec7415593fe8a16928/65f4796ab553fca0ec2eb740_favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <JsonLd data={buildWebSiteJsonLd(business)} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
