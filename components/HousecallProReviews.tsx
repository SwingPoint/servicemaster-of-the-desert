import { HOUSECALL_PRO } from "@/data/integrations";

type HousecallProReviewsProps = {
  className?: string;
  title?: string;
};

export default function HousecallProReviews({
  className = "",
  title = "Customer reviews",
}: HousecallProReviewsProps) {
  return (
    <section className={className} aria-label={title}>
      <iframe
        src={HOUSECALL_PRO.reviewsWidgetUrl}
        title={title}
        className="h-[640px] w-full rounded-[12px] border border-desert-sand bg-white"
        loading="lazy"
      />
    </section>
  );
}
