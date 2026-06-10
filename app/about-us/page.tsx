import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import {
  AUTHORITY_LINKS,
  getPrimaryBusiness,
  IMAGES,
  PHONE_LINK,
  SITE_URL,
} from "@/data/content";
import { buildLocalBusinessJsonLd } from "@/lib/schema";

const business = getPrimaryBusiness();

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Family-owned since 1989, ServiceMaster of the Desert has served the Coachella Valley for over 30 years with guaranteed satisfaction and professional cleaning.",
  alternates: { canonical: `${SITE_URL}/about-us` },
  openGraph: {
    title: "About Us | ServiceMaster of the Desert",
    url: `${SITE_URL}/about-us`,
    images: [{ url: IMAGES.owners, alt: "Steve and Lesli Reiter, owners" }],
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={buildLocalBusinessJsonLd(business)} />

      <article className="mx-auto max-w-4xl px-4 py-12 lg:px-6 lg:py-16">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-slate-900">About us</h1>
          <p className="mt-2 text-xl text-brand-blue">Let&apos;s work together!</p>
          <p className="mt-4">
            <Link href="/" className="text-brand-blue hover:underline">
              ← Back to homepage
            </Link>
          </p>
        </header>

        <figure className="mb-10 overflow-hidden rounded-xl">
          <Image
            src={IMAGES.owners}
            alt="Steve and Lesli Reiter, owners of ServiceMaster of the Desert"
            width={800}
            height={500}
            className="w-full object-cover"
          />
        </figure>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">
            Why has the Coachella Valley trusted us for over 30 years?
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            ServiceMaster of the Desert stands as an independently owned franchise
            supported by a national network comprising over 3,200 franchises in
            the United States. Since 1989, it has been under the ownership and
            operation of Steve and Lesli Reiter, embodying a family-centric
            approach. Our unwavering commitment is to provide customers with
            reliable and knowledgeable technicians who arrive punctually and
            handle their tasks with efficiency and professionalism.
          </p>
          <p className="mt-4 leading-relaxed text-slate-600">
            Our satisfaction guarantee backs every job: if you&apos;re dissatisfied,
            we redo the job at no extra cost. Transparent and straightforward, we
            aim to offer you the most seamless cleaning experience, free from
            hidden costs or deceptive charges. Much of our business stems from
            repeat customers and referrals, and we hope to become your trusted
            choice more than once!
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-slate-900">
            Would you recommend us?
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            If you&apos;ve enjoyed our services, would you kindly share your positive
            experience with your family and friends? We greatly value
            word-of-mouth recommendations as they play a crucial role in expanding
            our business.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-slate-900">Trusted resources</h2>
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
          <a
            href={PHONE_LINK}
            className="inline-block rounded-full bg-brand-orange px-8 py-3 font-semibold text-white hover:bg-brand-orange-dark"
          >
            Book Online — Call (442) 227-3064
          </a>
        </div>
      </article>
    </>
  );
}
