import type { Business } from "@/data/content";
import { PHONE, PHONE_LINK } from "@/data/content";

type NapBlockProps = {
  business: Business;
  showMapLink?: boolean;
  className?: string;
};

export default function NapBlock({
  business,
  showMapLink = true,
  className = "",
}: NapBlockProps) {
  const { address } = business;

  return (
    <address className={`not-italic text-sm leading-relaxed text-warm-gray ${className}`}>
      <strong className="block text-base text-charcoal">{business.name}</strong>
      <span className="block">
        {address.streetAddress}
        <br />
        {address.addressLocality}, {address.addressRegion} {address.postalCode}
      </span>
      <a
        href={PHONE_LINK}
        className="mt-2 block font-semibold text-brand-blue hover:underline"
      >
        {PHONE}
      </a>
      {business.email && (
        <a
          href={`mailto:${business.email}?subject=Website%20Inquiry`}
          className="mt-1 block text-brand-blue hover:underline"
        >
          {business.email}
        </a>
      )}
      {showMapLink && (
        <a
          href={business.mapUrl}
          className="mt-2 inline-block text-brand-blue hover:underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          View on Google Maps
        </a>
      )}
    </address>
  );
}
