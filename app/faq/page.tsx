import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import FaqAccordion from "@/components/FaqAccordion";
import BookNowButton from "@/components/BookNowButton";
import { FAQS, SITE_URL } from "@/data/content";
import { buildFaqPageJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about carpet, tile, upholstery, commercial floor care, and solar panel cleaning from ServiceMaster of the Desert in Palm Desert, CA.",
  alternates: { canonical: `${SITE_URL}/faq` },
  openGraph: {
    title: "FAQ | ServiceMaster of the Desert",
    description:
      "Residential and commercial cleaning FAQs for carpet, tile, grout, upholstery, and more in the Coachella Valley.",
    url: `${SITE_URL}/faq`,
  },
};

export default function FaqPage() {
  const residential = FAQS.filter((f) => f.category === "residential");
  const commercial = FAQS.filter((f) => f.category === "commercial");

  return (
    <>
      <JsonLd data={buildFaqPageJsonLd()} />

      <article className="mx-auto max-w-4xl px-4 py-12 lg:px-6 lg:py-16">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-charcoal">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-warm-gray">
            We&apos;re here to help! Find answers about residential and commercial
            cleaning services in the Coachella Valley.
          </p>
          <p className="mt-4">
            <Link href="/" className="text-brand-blue hover:underline">
              ← Back to homepage
            </Link>
          </p>
        </header>

        <nav
          aria-label="FAQ sections"
          className="mb-10 flex flex-wrap justify-center gap-3"
        >
          <a href="#residential" className="btn-secondary px-5 py-2 text-sm">
            Residential FAQs
          </a>
          <a href="#commercial" className="btn-secondary px-5 py-2 text-sm">
            Commercial FAQs
          </a>
        </nav>

        <section id="residential" className="scroll-mt-24" aria-labelledby="residential-faq">
          <h2 id="residential-faq" className="mb-6 text-2xl font-bold text-charcoal">
            Residential Cleaning Questions
          </h2>
          <FaqAccordion items={residential} />
        </section>

        <section
          id="commercial"
          className="mt-12 scroll-mt-24"
          aria-labelledby="commercial-faq"
        >
          <h2 id="commercial-faq" className="mb-6 text-2xl font-bold text-charcoal">
            Commercial Cleaning Questions
          </h2>
          <FaqAccordion items={commercial} />
        </section>

        <section className="mt-12 rounded-xl bg-brand-blue p-8 text-center text-white">
          <h2 className="text-xl font-bold">Still have questions?</h2>
          <p className="mt-2 text-white/85">
            Book online or call ServiceMaster of the Desert for a free estimate.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <BookNowButton className="btn-primary px-8 py-3">Book Online</BookNowButton>
            <a href="tel:+14422273064" className="rounded-[10px] border border-white px-8 py-3 font-semibold hover:bg-white/10">
              Call (442) 227-3064
            </a>
          </div>
        </section>
      </article>
    </>
  );
}
