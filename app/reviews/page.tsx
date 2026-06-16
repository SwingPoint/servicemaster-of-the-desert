import type { Metadata } from "next";
import Link from "next/link";
import BookNowButton from "@/components/BookNowButton";
import HousecallProReviews from "@/components/HousecallProReviews";
import FacebookTrust from "@/components/FacebookTrust";
import { HOUSECALL_PRO } from "@/data/integrations";
import { SITE_URL } from "@/data/content";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Read customer reviews for ServiceMaster of the Desert carpet, tile, upholstery, and exterior cleaning in Palm Desert, CA.",
  alternates: { canonical: `${SITE_URL}/reviews` },
  openGraph: {
    title: "Reviews | ServiceMaster of the Desert",
    description: "Customer reviews for ServiceMaster of the Desert in the Coachella Valley.",
    url: `${SITE_URL}/reviews`,
  },
};

export default function ReviewsPage() {
  return (
    <article className="mx-auto max-w-5xl px-4 py-12 lg:px-6 lg:py-16">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-charcoal">Customer Reviews</h1>
        <p className="mt-4 text-lg text-warm-gray">
          See what Coachella Valley customers say about ServiceMaster of the
          Desert.
        </p>
        <p className="mt-4">
          <Link href="/" className="text-brand-blue hover:underline">
            ← Back to homepage
          </Link>
        </p>
      </header>

      <FacebookTrust className="mb-8" />

      <HousecallProReviews />

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <BookNowButton className="btn-primary px-8 py-3">Book Online</BookNowButton>
        <a
          href={HOUSECALL_PRO.reviewsPageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary px-8 py-3"
        >
          Leave Feedback
        </a>
      </div>
    </article>
  );
}
