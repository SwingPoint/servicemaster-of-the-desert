import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { FAQS, PHONE_LINK, SITE_URL } from "@/data/content";
import { buildFaqPageJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about carpet, tile, upholstery, and commercial cleaning from ServiceMaster of the Desert in Palm Desert, CA.",
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

        <section aria-labelledby="residential-faq">
          <h2 id="residential-faq" className="mb-6 text-2xl font-bold text-charcoal">
            Residential Cleaning Questions
          </h2>
          <dl className="space-y-6">
            {residential.map((faq) => (
              <div key={faq.question} className="rounded-lg border border-desert-sand p-5">
                <dt className="text-lg font-semibold text-charcoal">{faq.question}</dt>
                <dd className="mt-2 text-warm-gray">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="commercial-faq" className="mt-12">
          <h2 id="commercial-faq" className="mb-6 text-2xl font-bold text-charcoal">
            Commercial Cleaning Questions
          </h2>
          <dl className="space-y-6">
            {commercial.map((faq) => (
              <div key={faq.question} className="rounded-lg border border-desert-sand p-5">
                <dt className="text-lg font-semibold text-charcoal">{faq.question}</dt>
                <dd className="mt-2 text-warm-gray">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-12 rounded-xl bg-brand-blue p-8 text-center text-white">
          <h2 className="text-xl font-bold">Still have questions?</h2>
          <p className="mt-2 text-white/85">
            Call ServiceMaster of the Desert for a free estimate or to schedule service.
          </p>
          <a
            href={PHONE_LINK}
            className="btn-primary mt-4 inline-block"
          >
            Call (442) 227-3064
          </a>
        </section>
      </article>
    </>
  );
}
