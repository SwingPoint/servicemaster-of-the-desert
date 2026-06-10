import Link from "next/link";
import Image from "next/image";
import { IMAGES, NAV_LINKS, PHONE, PHONE_LINK, SERVICE_LINKS } from "@/data/content";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-6">
        <Link href="/" className="shrink-0">
          <Image
            src={IMAGES.logo}
            alt="ServiceMaster of the Desert logo"
            width={180}
            height={48}
            priority
            className="h-10 w-auto lg:h-12"
          />
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 xl:flex">
          <div className="group relative">
            <span className="cursor-default font-medium text-slate-800">Our Services</span>
            <div className="invisible absolute left-0 top-full z-50 min-w-[220px] rounded-md border border-slate-200 bg-white py-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
              {SERVICE_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-blue"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-medium text-slate-800 hover:text-brand-blue"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={PHONE_LINK}
            className="hidden text-sm font-semibold text-brand-blue sm:inline"
          >
            {PHONE}
          </a>
          <a
            href={PHONE_LINK}
            className="rounded-full bg-brand-orange px-4 py-2 text-sm font-semibold text-white hover:bg-brand-orange-dark"
          >
            Book Now
          </a>

          <details className="relative xl:hidden">
            <summary className="cursor-pointer list-none rounded-md border border-slate-200 px-3 py-2 text-sm font-medium text-slate-800 [&::-webkit-details-marker]:hidden">
              Menu
            </summary>
            <nav
              aria-label="Mobile navigation"
              className="absolute right-0 top-full z-50 mt-2 min-w-[240px] rounded-md border border-slate-200 bg-white py-2 shadow-lg"
            >
              <p className="px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Services
              </p>
              {SERVICE_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
                >
                  {link.label}
                </Link>
              ))}
              <hr className="my-2 border-slate-100" />
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50"
                >
                  {link.label}
                </Link>
              ))}
              <hr className="my-2 border-slate-100" />
              <Link
                href={`/business/servicemaster-of-the-desert`}
                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
              >
                Business Profile
              </Link>
              <a
                href={PHONE_LINK}
                className="block px-4 py-2 text-sm font-semibold text-brand-blue"
              >
                {PHONE}
              </a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
