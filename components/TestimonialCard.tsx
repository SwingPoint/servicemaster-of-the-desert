import ReviewStars from "@/components/ReviewStars";
import type { Testimonial } from "@/data/content";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <blockquote className="rounded-[12px] border border-desert-sand bg-white p-6 shadow-sm">
      <ReviewStars className="mb-3" />
      <p className="text-warm-gray">&ldquo;{testimonial.quote}&rdquo;</p>
      <footer className="mt-4 text-sm font-medium text-charcoal">
        {testimonial.author}, via {testimonial.source}
      </footer>
    </blockquote>
  );
}
