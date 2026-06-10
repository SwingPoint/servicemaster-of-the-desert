import Image from "next/image";
import Link from "next/link";

type ServiceBlockProps = {
  id: string;
  title: string;
  intro: string;
  items: {
    heading: string;
    subheading?: string;
    body: string;
    steps: string[];
    cta: string;
    ctaHref: string;
    image: string;
    imageAlt: string;
    imageLeft?: boolean;
  }[];
  testimonialIndex?: number;
};

export default function ServiceBlock({
  id,
  title,
  intro,
  items,
}: ServiceBlockProps) {
  return (
    <section id={id} className="scroll-mt-24 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <h2 className="text-center text-3xl font-bold text-slate-900 lg:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-slate-600">
          {intro}
        </p>

        <div className="mt-12 space-y-16">
          {items.map((item) => (
            <article
              key={item.heading}
              className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
                item.imageLeft ? "" : ""
              }`}
            >
              <div className={item.imageLeft ? "lg:order-2" : ""}>
                <h3 className="text-2xl font-bold text-slate-900">{item.heading}</h3>
                {item.subheading && (
                  <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-brand-blue">
                    {item.subheading}
                  </p>
                )}
                <p className="mt-4 leading-relaxed text-slate-600">{item.body}</p>
                <ul className="mt-6 space-y-2">
                  {item.steps.map((step) => (
                    <li key={step} className="flex gap-2 text-slate-700">
                      <span className="text-brand-green" aria-hidden="true">
                        ✓
                      </span>
                      {step}
                    </li>
                  ))}
                </ul>
                <Link
                  href={item.ctaHref}
                  className="mt-6 inline-block rounded-full bg-brand-orange px-6 py-3 font-semibold text-white hover:bg-brand-orange-dark"
                >
                  {item.cta}
                </Link>
              </div>
              <div className={item.imageLeft ? "lg:order-1" : ""}>
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  width={800}
                  height={600}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
