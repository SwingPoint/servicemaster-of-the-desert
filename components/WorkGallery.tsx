"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { GalleryCategory, GalleryItem } from "@/data/content";

type WorkGalleryProps = {
  items: GalleryItem[];
};

export default function WorkGallery({ items }: WorkGalleryProps) {
  const categories = useMemo(() => {
    const unique = Array.from(new Set(items.map((item) => item.category)));
    return ["All", ...unique] as const;
  }, [items]);

  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered =
    active === "All" ? items : items.filter((item) => item.category === active);

  return (
    <div>
      <div
        className="mb-8 flex flex-wrap justify-center gap-2"
        role="tablist"
        aria-label="Filter gallery by service"
      >
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={active === category}
            onClick={() => setActive(category)}
            className={`rounded-[10px] px-4 py-2 text-sm font-semibold transition ${
              active === category
                ? "bg-brand-blue text-white"
                : "border border-desert-sand bg-white text-charcoal hover:border-brand-blue"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <li
            key={`${item.title}-${item.image}`}
            className="group overflow-hidden rounded-[12px] border border-desert-sand bg-white shadow-sm"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-blue">
                {item.category}
              </p>
              <p className="mt-1 font-semibold text-charcoal">{item.title}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export type { GalleryCategory };
