import type { Business } from "@/data/content";
import { FAQS, SITE_URL } from "@/data/content";

export function buildLocalBusinessJsonLd(business: Business) {
  const address = business.address;
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", business.schemaType],
    "@id": `${SITE_URL}/business/${business.slug}`,
    name: business.name,
    description: business.description,
    url: SITE_URL,
    telephone: business.telephone,
    email: business.email,
    image: business.images.logo,
    logo: business.images.logo,
    priceRange: business.priceRange,
    foundingDate: business.foundingDate,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.streetAddress,
      addressLocality: address.addressLocality,
      addressRegion: address.addressRegion,
      postalCode: address.postalCode,
      addressCountry: address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    areaServed: business.areaServed.map((city) => ({
      "@type": "City",
      name: city,
    })),
    sameAs: business.sameAs,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cleaning Services",
      itemListElement: business.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
          provider: { "@type": "LocalBusiness", name: business.name },
        },
      })),
    },
  };
}

export function buildFaqPageJsonLd(faqs = FAQS) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildWebSiteJsonLd(business: Business) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: business.name,
    url: SITE_URL,
    description: business.description,
    publisher: {
      "@type": "Organization",
      name: business.name,
      logo: business.images.logo,
    },
  };
}
