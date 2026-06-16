import Link from "next/link";
import Image from "next/image";
import BookNowButton from "@/components/BookNowButton";
import { IMAGES, NAV_LINKS, PHONE, PHONE_LINK, SERVICE_LINKS } from "@/data/content";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-desert-sand bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 lg:px-8 lg:py-5">
        <Link href="/" className="shrink-0">
          <Image
            src={IMAGES.logo}
            alt="ServiceMaster of the Desert logo"
            width={200}
            height={56}
            priority
            className="h-12 w-auto lg:h-14"
          />
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 xl:flex">
          <div className="group relative">
            <span className="cursor-default text-lg font-semibold text-charcoal xl:text-xl">
              Our Services
            </span>
            <div className="invisible absolute left-0 top-full z-50 min-w-[220px] rounded-[12px] border border-desert-sand bg-white py-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
              {SERVICE_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block px-4 py-2 text-sm text-warm-gray hover:bg-off-white hover:text-brand-blue"
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
              className="text-lg font-semibold text-charcoal hover:text-brand-blue xl:text-xl"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={PHONE_LINK}
            className="hidden text-lg font-semibold text-brand-blue sm:inline xl:text-xl"
          >
            {PHONE}
          </a>
          <BookNowButton className="btn-primary px-6 py-3 text-lg xl:px-7 xl:py-3.5 xl:text-xl">
            Book Now
          </BookNowButton>

          <details className="relative xl:hidden">
            <summary className="cursor-pointer list-none rounded-[10px] border border-desert-sand px-3 py-2 text-sm font-medium text-charcoal [&::-webkit-details-marker]:hidden">
              Menu
            </summary>
            <nav
              aria-label="Mobile navigation"
              className="absolute right-0 top-full z-50 mt-2 min-w-[240px] rounded-[12px] border border-desert-sand bg-white py-2 shadow-lg"
            >
              <p className="px-4 py-2 text-xs font-semibold uppercase tracking-wide text-warm-gray">
                Services
              </p>
              {SERVICE_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block px-4 py-2 text-sm text-warm-gray hover:bg-off-white"
                >
                  {link.label}
                </Link>
              ))}
              <hr className="my-2 border-desert-sand" />
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2 text-sm font-medium text-charcoal hover:bg-off-white"
                >
                  {link.label}
                </Link>
              ))}
              <hr className="my-2 border-desert-sand" />
              <Link
                href="/business/servicemaster-of-the-desert"
                className="block px-4 py-2 text-sm text-warm-gray hover:bg-off-white"
              >
                Business Profile
              </Link>
              <BookNowButton className="block w-full px-4 py-2 text-left text-sm font-semibold text-brand-blue">
                Book Online
              </BookNowButton>
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
