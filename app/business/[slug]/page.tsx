import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BookNowButton from "@/components/BookNowButton";
import JsonLd from "@/components/JsonLd";
import NapBlock from "@/components/NapBlock";
import {
  AUTHORITY_LINKS,
  FAQS,
  getAllBusinessSlugs,
  getBusiness,
  PHONE_LINK,
  SITE_URL,
} from "@/data/content";
import { buildFaqPageJsonLd, buildLocalBusinessJsonLd } from "@/lib/schema";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllBusinessSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const business = getBusiness(slug);
  if (!business) return {};

  const title = `${business.name} — ${business.address.addressLocality}, CA`;
  const description = business.description;

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/business/${slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/business/${slug}`,
      images: [{ url: business.images.logo, alt: business.name }],
    },
  };
}

export default async function BusinessProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const business = getBusiness(slug);

  if (!business) notFound();

  const profileFaqs = FAQS.slice(0, 6);

  return (
    <>
      <JsonLd data={buildLocalBusinessJsonLd(business)} />
      <JsonLd data={buildFaqPageJsonLd(profileFaqs)} />

      <article className="mx-auto max-w-4xl px-4 py-12 lg:px-6 lg:py-16">
        <header className="mb-8">
          <p className="text-sm font-medium text-brand-blue">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            {" / "}
            Business Profile
          </p>
          <h1 className="mt-2 font-heading text-4xl font-bold text-charcoal">
            {business.name} — {business.address.addressLocality},{" "}
            {business.address.addressRegion}
          </h1>
          <p className="mt-2 text-xl text-warm-gray">{business.tagline}</p>
        </header>

        <div className="mb-10 flex justify-center">
          <Image
            src={business.images.logo}
            alt={`${business.name} logo`}
            width={240}
            height={64}
            className="h-16 w-auto"
          />
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <section aria-labelledby="nap-heading">
            <h2 id="nap-heading" className="font-heading text-xl font-bold text-charcoal">
              Contact &amp; Location
            </h2>
            <NapBlock business={business} className="mt-4" />
          </section>

          <section aria-labelledby="about-heading">
            <h2 id="about-heading" className="font-heading text-xl font-bold text-charcoal">
              About
            </h2>
            <p className="mt-4 leading-relaxed text-warm-gray">{business.description}</p>
            <p className="mt-4 text-warm-gray">
              <strong className="text-charcoal">Owners:</strong> {business.owners} (since{" "}
              {business.foundingDate})
            </p>
            <p className="mt-4 text-warm-gray">
              <strong className="text-charcoal">Areas served:</strong>{" "}
              {business.areaServed.join(", ")}
            </p>
          </section>
        </div>

        <section className="mt-10" aria-labelledby="services-heading">
          <h2 id="services-heading" className="font-heading text-xl font-bold text-charcoal">
            Services
          </h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {business.services.map((service) => (
              <li key={service} className="flex gap-2 text-warm-gray">
                <span className="font-bold text-brand-blue" aria-hidden="true">
                  ✓
                </span>
                {service}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="font-heading text-xl font-bold text-charcoal">
            Frequently Asked Questions
          </h2>
          <dl className="mt-4 space-y-4">
            {profileFaqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-[12px] border border-desert-sand bg-white p-4"
              >
                <dt className="font-semibold text-charcoal">{faq.question}</dt>
                <dd className="mt-2 text-warm-gray">{faq.answer}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4">
            <Link href="/faq" className="font-semibold text-brand-blue hover:underline">
              View all FAQs →
            </Link>
          </p>
        </section>

        <section className="mt-10" aria-labelledby="authority-heading">
          <h2 id="authority-heading" className="font-heading text-xl font-bold text-charcoal">
            Trusted resources
          </h2>
          <ul className="mt-3 space-y-2">
            {AUTHORITY_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-brand-blue hover:underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-10 text-center">
          <BookNowButton className="btn-primary inline-block px-8 py-3">
            Schedule Service
          </BookNowButton>
          <p className="mt-3 text-sm text-warm-gray">
            Or call{" "}
            <a href={PHONE_LINK} className="font-semibold text-brand-blue hover:underline">
              (442) 227-3064
            </a>
          </p>
        </div>
      </article>
    </>
  );
}
