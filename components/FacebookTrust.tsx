import Link from "next/link";
import ReviewStars from "@/components/ReviewStars";
import { FACEBOOK_REVIEWS } from "@/data/integrations";

type FacebookTrustProps = {
  variant?: "banner" | "compact";
  className?: string;
};

export default function FacebookTrust({
  variant = "banner",
  className = "",
}: FacebookTrustProps) {
  if (variant === "compact") {
    return (
      <p className={`text-sm text-warm-gray ${className}`}>
        <Link
          href={FACEBOOK_REVIEWS.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-brand-blue hover:underline"
        >
          {FACEBOOK_REVIEWS.shortLabel}
        </Link>
      </p>
    );
  }

  return (
    <aside
      className={`rounded-[12px] border border-desert-sand bg-white p-6 text-center shadow-sm ${className}`}
      aria-label="Facebook review trust indicators"
    >
      <ReviewStars className="mb-3 justify-center" />
      <p className="font-heading text-lg font-bold text-charcoal">
        Trusted by Coachella Valley homeowners &amp; businesses
      </p>
      <p className="mt-2 text-warm-gray">
        Join customers who rate ServiceMaster of the Desert on Facebook.
      </p>
      <Link
        href={FACEBOOK_REVIEWS.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block font-semibold text-brand-blue hover:underline"
      >
        Read {FACEBOOK_REVIEWS.label} →
      </Link>
    </aside>
  );
}
