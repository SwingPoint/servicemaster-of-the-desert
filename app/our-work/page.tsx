import type { Metadata } from "next";
import Link from "next/link";
import BookNowButton from "@/components/BookNowButton";
import WorkGallery from "@/components/WorkGallery";
import { GALLERY_ITEMS, SITE_URL } from "@/data/content";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "See carpet, tile, upholstery, exterior, and solar panel cleaning projects from ServiceMaster of the Desert in Palm Desert and the Coachella Valley.",
  alternates: { canonical: `${SITE_URL}/our-work` },
  openGraph: {
    title: "Our Work | ServiceMaster of the Desert",
    description:
      "Residential and commercial cleaning project gallery for Palm Desert and the Coachella Valley.",
    url: `${SITE_URL}/our-work`,
  },
};

export default function OurWorkPage() {
  return (
    <article className="mx-auto max-w-7xl px-4 py-12 lg:px-6 lg:py-16">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-charcoal">
          Carpet Cleaning Projects and More
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-warm-gray">
          See the results of our carpet, tile, upholstery, exterior, and solar
          panel cleaning services for residential and commercial customers in
          and around Palm Desert, CA.
        </p>
        <p className="mt-4">
          <Link href="/" className="text-brand-blue hover:underline">
            ← Back to homepage
          </Link>
        </p>
      </header>

      <WorkGallery items={GALLERY_ITEMS} />

      <section className="mt-12 text-center">
        <BookNowButton className="btn-primary inline-block px-8 py-3">
          Book Online
        </BookNowButton>
      </section>
    </article>
  );
}
