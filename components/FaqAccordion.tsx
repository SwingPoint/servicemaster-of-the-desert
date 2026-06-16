import type { FaqItem } from "@/data/content";

type FaqAccordionProps = {
  items: FaqItem[];
};

export default function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <div className="space-y-3">
      {items.map((faq) => (
        <details
          key={faq.question}
          className="group rounded-[12px] border border-desert-sand bg-white p-5 open:shadow-sm"
        >
          <summary className="cursor-pointer list-none font-semibold text-charcoal marker:content-none [&::-webkit-details-marker]:hidden">
            <span className="flex items-start justify-between gap-4">
              {faq.question}
              <span
                className="mt-1 shrink-0 text-brand-blue transition group-open:rotate-45"
                aria-hidden="true"
              >
                +
              </span>
            </span>
          </summary>
          <p className="mt-3 text-warm-gray">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
