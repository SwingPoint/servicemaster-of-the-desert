import ReviewStars from "@/components/ReviewStars";
import type { Testimonial } from "@/data/content";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <blockquote className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <ReviewStars className="mb-3" />
      <p className="text-slate-700">&ldquo;{testimonial.quote}&rdquo;</p>
      <footer className="mt-4 text-sm font-medium text-slate-900">
        {testimonial.author}, via {testimonial.source}
      </footer>
    </blockquote>
  );
}
