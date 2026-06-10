import Link from "next/link";
import NapBlock from "@/components/NapBlock";
import {
  AUTHORITY_LINKS,
  getPrimaryBusiness,
  NAV_LINKS,
  SERVICE_AREAS,
  SERVICE_LINKS,
  SITE_URL,
} from "@/data/content";

export default function Footer() {
  const business = getPrimaryBusiness();

  return (
    <footer id="contact" className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">Get in touch</h2>
            <p className="mb-4 text-sm leading-relaxed">{SERVICE_AREAS}</p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/servicemaster.desert"
                className="rounded bg-slate-800 px-3 py-1 text-sm hover:bg-slate-700"
                rel="noopener noreferrer"
                target="_blank"
              >
                Facebook
              </a>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">Services</h2>
            <ul className="space-y-2 text-sm">
              {SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">Company</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#reviews" className="hover:text-white">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white">
                  Our Work
                </Link>
              </li>
              {NAV_LINKS.filter((l) => l.href.startsWith("/")).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={`/business/${business.slug}`}
                  className="hover:text-white"
                >
                  Business Profile
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">Contact</h2>
            <NapBlock business={business} className="text-slate-300 [&_strong]:text-white [&_a]:text-brand-orange-light" />
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-8">
          <h3 className="mb-3 text-sm font-semibold text-white">Trusted resources</h3>
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {AUTHORITY_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-white"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-slate-800 pt-6 text-xs text-slate-500 sm:flex-row sm:justify-between">
          <p>Copyright © {new Date().getFullYear()} ServiceMaster of the Desert</p>
          <p>
            <a href={SITE_URL} className="hover:text-slate-300">
              {SITE_URL.replace("https://", "")}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
