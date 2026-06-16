import Image from "next/image";
import Link from "next/link";
import BookNowButton from "@/components/BookNowButton";
import FacebookTrust from "@/components/FacebookTrust";
import JsonLd from "@/components/JsonLd";
import ReviewStars from "@/components/ReviewStars";
import ServiceBlock from "@/components/ServiceBlock";
import TestimonialCard from "@/components/TestimonialCard";
import {
  GALLERY_ITEMS,
  getPrimaryBusiness,
  IMAGES,
  SITE_URL,
  TESTIMONIALS,
  TRUST_POINTS,
} from "@/data/content";
import { buildFaqPageJsonLd, buildLocalBusinessJsonLd } from "@/lib/schema";

const business = getPrimaryBusiness();

const serviceCards = [
  { label: "Carpet Cleaning", href: "#carpet-cleaning", icon: "🧹" },
  { label: "Tile and Grout Cleaning", href: "#tile-stone", icon: "◫" },
  { label: "Natural Stone Cleaning", href: "#tile-stone", icon: "◆" },
  { label: "Upholstery Cleaning", href: "#upholstery", icon: "🛋" },
  { label: "Window and Exterior Cleaning", href: "#exterior", icon: "🪟" },
  { label: "Solar Panel Cleaning", href: "#solar-cleaning", icon: "☀️" },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={buildLocalBusinessJsonLd(business)} />
      <JsonLd data={buildFaqPageJsonLd()} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-desert-sand">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-16 lg:grid-cols-2 lg:px-6 lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-warm-gray">
              Professional Carpet Cleaning in Palm Desert, CA
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-charcoal lg:text-5xl">
              The clean{" "}
              <span className="text-brand-blue">you expect</span>, the service{" "}
              <span className="text-brand-blue">you deserve.</span>
            </h1>
            <p className="mt-6 leading-relaxed text-warm-gray">
              With over 30 years of trusted service in the Coachella Valley,
              ServiceMaster of the Desert is your go-to for unparalleled
              cleanliness. Our dedicated team specializes in carpet, furniture,
              window, and floor cleaning services, ensuring your space is not
              only clean but also comfortable.
            </p>
            <BookNowButton className="btn-primary mt-8 px-8 py-3 text-lg">
              Clean My Space
            </BookNowButton>
          </div>
          <div className="mx-auto w-full max-w-md lg:max-w-none">
            <div className="aspect-square overflow-hidden rounded-full shadow-xl">
              <Image
                src={IMAGES.heroTruck}
                alt="ServiceMaster Clean van parked at a Coachella Valley residence"
                width={1080}
                height={1080}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hero testimonials */}
      <section className="bg-brand-blue py-14 text-white" id="reviews">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-6">
          <ReviewStars className="mb-6 justify-center" />
          <blockquote>
            <p className="font-heading text-xl leading-relaxed lg:text-2xl">
              &ldquo;{TESTIMONIALS[0].quote}&rdquo;
            </p>
            <footer className="mt-6 text-sm font-medium text-white/90">
              {TESTIMONIALS[0].author}, via {TESTIMONIALS[0].source}
            </footer>
          </blockquote>
          <p className="mt-6">
            <Link href="/reviews" className="font-semibold text-white hover:underline">
              Read more reviews →
            </Link>
          </p>
        </div>
      </section>

      {/* Trust section */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <h2 className="text-center text-3xl font-bold text-charcoal lg:text-4xl">
            Your dependable Palm Desert cleaners.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-warm-gray">
            At ServiceMaster of the Desert, we&apos;re committed to ensuring both
            your home and business look their best. With{" "}
            <strong>over three decades of experience</strong>, our professional
            cleaning technicians use <strong>top-of-the-line equipment</strong>{" "}
            and <strong>eco-friendly products</strong> to deeply cleanse
            surfaces, restoring their beauty and ensuring a healthier
            environment.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {TRUST_POINTS.map((point) => (
              <article
                key={point.title}
                className="rounded-xl border border-desert-sand bg-white p-6 text-center shadow-sm"
              >
                <ReviewStars className="mb-4 justify-center" />
                <h3 className="text-lg font-bold text-charcoal">{point.title}</h3>
                <p className="mt-3 text-warm-gray">{point.description}</p>
              </article>
            ))}
          </div>
          <FacebookTrust className="mx-auto mt-10 max-w-xl" />
        </div>
      </section>

      {/* Service cards */}
      <section id="services" className="scroll-mt-24 bg-off-white py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <h2 className="text-center text-3xl font-bold text-charcoal">
            How can we help?
          </h2>
          <nav
            aria-label="Service categories"
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {serviceCards.map((card) => (
              <Link
                key={card.label}
                href={card.href}
                className="flex flex-col items-center rounded-xl border border-desert-sand bg-white p-6 text-center shadow-sm transition hover:border-brand-blue hover:shadow-md"
              >
                <span className="text-3xl" aria-hidden="true">
                  {card.icon}
                </span>
                <span className="mt-3 font-semibold text-charcoal">{card.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </section>

      {/* Carpet cleaning */}
      <ServiceBlock
        id="carpet-cleaning"
        title="Carpet Cleaning Services"
        intro="Don't let dirty carpets dim the sparkle of your home or office! Unlock the true potential of your spaces with ServiceMaster of the Desert's professional residential and commercial carpet cleaning services."
        items={[
          {
            heading: "Residential Carpet Cleaning Services",
            body: "Despite regular vacuuming and care, carpets can still hold on to deep-seated dirt, allergens, and stains that standard home cleaning methods cannot tackle. At ServiceMaster of the Desert, our thorough carpet cleaning process involves pre-spotting, specially formulated cleaning agents, bonnet shampoo for heavily soiled areas, and hot water extraction using a truck mount. We groom the carpet to enhance drying time and lift the fibers.",
            steps: [
              "Inspect areas to determine the most effective cleaning process.",
              "Pre-treat spots and stains.",
              "Apply a cleaning agent to loosen the soil.",
              "If required, shampoo the bonnet for heavily soiled areas.",
              "Hot water extraction using a truck mount.",
              "Groom carpet to expedite drying time.",
              "Apply a protectant to seal fibers.",
              "Move/replace casual furniture.",
            ],
            cta: "Transform My Carpets",
            image: IMAGES.residentialCarpet,
            imageAlt: "Freshly cleaned residential carpet with visible grooming lines in a Palm Desert living room",
          },
          {
            heading: "Commercial Carpet Cleaning Services",
            body: "Commercial spaces experience high foot traffic and rapidly accumulating dirt, grime, and stains on carpets. ServiceMaster of the Desert provides specialized commercial carpet cleaning services designed for businesses like yours, utilizing advanced techniques and eco-friendly solutions.",
            steps: [
              "A thorough evaluation to target dirt at its source.",
              "Hot water extraction for a deep clean.",
              "A quick drying process to minimize disruption to your business operations.",
            ],
            cta: "Clean My Carpets",
            image: IMAGES.commercialCarpet,
            imageAlt: "Commercial carpets after cleaning in Palm Desert, CA",
            imageLeft: true,
          },
        ]}
      />

      {/* Client logos */}
      <section className="border-y border-desert-sand bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-4 lg:px-6">
          {[
            { src: IMAGES.thermalClub, alt: "The Thermal Club logo" },
            { src: IMAGES.southwestChurch, alt: "Southwest Church logo" },
            { src: IMAGES.mccallum, alt: "McCallum Theatre logo" },
            { src: IMAGES.springsClub, alt: "The Springs Country Club logo" },
          ].map((logo) => (
            <Image
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={60}
              className="h-12 w-auto opacity-70 grayscale"
            />
          ))}
        </div>
      </section>

      <section className="bg-off-white py-12">
        <div className="mx-auto max-w-xl px-4">
          <TestimonialCard testimonial={TESTIMONIALS[3]} />
          <p className="mt-6 text-center">
            <Link href="/#reviews" className="font-semibold text-brand-blue hover:underline">
              Read More Reviews ΓåÆ
            </Link>
          </p>
        </div>
      </section>

      {/* Tile and stone */}
      <ServiceBlock
        id="tile-stone"
        title="Tile and Stone Cleaning Services"
        intro="Transform your tiles and natural stone into a testament of timeless beauty! ServiceMaster of the Desert offers specialized tile cleaning and natural stone cleaning services that rejuvenate your flooring, making it shine like new."
        items={[
          {
            heading: "Tile and Grout Cleaning",
            body: "Maintaining the cleanliness of grout poses a significant challenge when it comes to tiles. At ServiceMaster of the Desert, our cleaning process ensures your tile and grout's cleanliness and optimal appearance. Our method suits ceramic and porcelain tiles. Due to the many variables involved in tile cleaning, an in-person estimate is required.",
            steps: [
              "Apply tile and grout cleaning solutions to begin loosening the soil.",
              "Machine and hand scrub of both tile and grout.",
              "Utilize appropriate brushes or pads to achieve optimal cleaning.",
              "Steam cleaning rinse to remove all soil and residue.",
              "Seal grout to protect from spills and stains.",
              "Move and replace all furnishings.",
            ],
            cta: "Refresh My Tiles",
            image: IMAGES.tileGrout,
            imageAlt: "Polished tile and grout floor after professional cleaning in Palm Desert, CA",
          },
          {
            heading: "Natural Stone Cleaning",
            subheading: "Travertine, Marble, Quartzite, Terrazzo, Limestone, Slate, Granite",
            body: "ServiceMaster of the Desert offers a complete solution to enhance and protect your natural stone's visual appeal. We can bring your natural stone back to its desired finish and apply an impregnating sealer to protect your stone and prolong its beauty.",
            steps: [
              "Apply a cleaning agent to loosen the soil.",
              "Machine and hand scrub stone and grout for deep cleaning.",
              "Repair any holes, missing grout, or etch marks.",
              "Employ diamond pads to achieve the desired finish.",
              "Apply penetrating sealer to create a protective layer.",
              "Move and replace all furnishings.",
            ],
            cta: "Restore My Natural Stone",
            image: IMAGES.naturalStone,
            imageAlt: "Residential natural stone floor cleaning in Palm Desert, CA",
            imageLeft: true,
          },
        ]}
      />

      <section className="bg-off-white py-12">
        <div className="mx-auto max-w-xl px-4">
          <TestimonialCard testimonial={TESTIMONIALS[4]} />
        </div>
      </section>

      {/* Upholstery */}
      <ServiceBlock
        id="upholstery"
        title="Upholstery Cleaning"
        intro="Premature wear and tear on upholstery often result from the accumulation of oils and dirt from our bodies. At ServiceMaster, we prioritize carefully handling your belongings and specialize in various types of upholstery fabric, including silk, ultra suede, and velvet."
        items={[
          {
            heading: "Professional Upholstery Cleaning",
            body: "We start by removing loose dirt and hair through vacuuming, then meticulously clean all surfaces including folds and crevices. Witness the rapid drying of your upholstery, leaving behind furniture that regains a new and refreshed appearance.",
            steps: [
              "Vacuum surfaces.",
              "Pre-treat spots and stains.",
              "Apply a cleaning agent to loosen the soil.",
              "If required, brush heavily soiled areas.",
              "Hot water extraction using a truck mount.",
              "Groom fabric for a uniform appearance and to expedite drying time.",
              "Apply protectant to seal fibers.",
            ],
            cta: "Clean My Upholstery",
            image: IMAGES.upholstery,
            imageAlt: "Professional upholstery cleaning in progress",
          },
        ]}
      />

      <section className="bg-off-white py-12">
        <div className="mx-auto max-w-xl px-4">
          <TestimonialCard testimonial={TESTIMONIALS[5]} />
        </div>
      </section>

      {/* Exterior */}
      <ServiceBlock
        id="exterior"
        title="Exterior Cleaning Services"
        intro="Elevate your property's appeal with ServiceMaster of the Desert's top-tier window cleaning and pressure washing services! Commercial and residential spaces alike can shine brighter and stand out."
        items={[
          {
            heading: "Window Cleaning",
            subheading: "Windows, Skylights, Mirrors, Glass, Shower Doors",
            body: "ServiceMaster of the Desert employs an advanced purified pressure washing system to clean your exterior windows, screens, and frames effectively. Internally, we use squeegees to clean the glass and vacuum the tracks.",
            steps: [
              "Remove screens and clean (exterior).",
              "Apply detergent to windows and brush.",
              "Treat hard water stains if necessary.",
              "Rinse windows, frames, and tracks with purified water.",
              "Squeegee interior glass and vacuum tracks.",
            ],
            cta: "Let The Light In",
            image: IMAGES.window,
            imageAlt: "Professional window cleaning in Palm Desert, CA",
          },
          {
            heading: "Pressure Washing",
            body: "Our desert environment can be harsh. Contact ServiceMaster of the Desert and give it a refresh with our pressure washing service. We can pressure wash stucco, patios, and driveways.",
            steps: [
              "Evaluate surfaces and select appropriate pressure settings.",
              "Remove built-up dirt, sediment, and debris.",
              "Restore curb appeal to patios, driveways, and stucco.",
            ],
            cta: "Boost My Curb Appeal",
            image: IMAGES.pressure,
            imageAlt: "Professional pressure washing a driveway in Palm Desert",
            imageLeft: true,
          },
        ]}
      />

      {/* Solar panel cleaning */}
      <ServiceBlock
        id="solar-cleaning"
        title="Solar Panel Cleaning"
        intro="Desert dust and debris reduce solar efficiency over time. ServiceMaster of the Desert safely cleans residential and commercial solar arrays to help your system perform at its best."
        items={[
          {
            heading: "Professional Solar Panel Cleaning",
            body: "Our team uses purified water and appropriate pressure methods designed for solar panels. We remove buildup that blocks sunlight without damaging panels, frames, or roof surfaces.",
            steps: [
              "Inspect roof access and panel condition.",
              "Remove loose dust and debris safely.",
              "Clean panels with purified water methods.",
              "Rinse and verify a streak-free finish.",
              "Help maintain long-term system efficiency.",
            ],
            cta: "Boost My Solar Efficiency",
            image: IMAGES.solar,
            imageAlt: "Clean solar panels reflecting the sky after professional cleaning in Palm Desert, CA",
          },
        ]}
      />

      <section className="bg-off-white py-12">
        <div className="mx-auto max-w-xl px-4">
          <TestimonialCard testimonial={TESTIMONIALS[6]} />
        </div>
      </section>

      {/* Our Work preview */}
      <section className="border-y border-desert-sand bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-charcoal">Our Work</h2>
            <p className="mx-auto mt-3 max-w-2xl text-warm-gray">
              See recent carpet, tile, upholstery, exterior, and solar cleaning
              results across the Coachella Valley.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {GALLERY_ITEMS.slice(0, 4).map((item) => (
              <li
                key={item.title}
                className="overflow-hidden rounded-[12px] border border-desert-sand bg-off-white"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <p className="p-3 text-sm font-semibold text-charcoal">{item.title}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center">
            <Link href="/our-work" className="font-semibold text-brand-blue hover:underline">
              View full project gallery →
            </Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-blue py-16 text-white lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 lg:grid-cols-2 lg:px-6">
          <div>
            <h2 className="text-3xl font-bold lg:text-4xl">
              The carpet cleaner you can trust.
            </h2>
            <p className="mt-4 text-lg text-white/85">
              From spotless floors and furniture with our carpet and upholstery
              cleaning to gleaming windows with professional window cleaning, let
              ServiceMaster of the Desert elevate your home or business
              environment with unparalleled cleaning services.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <BookNowButton className="btn-primary px-8 py-3">
                Get Started
              </BookNowButton>
              <Link
                href="/faq"
                className="rounded-[10px] border border-white px-8 py-3 font-semibold hover:bg-white/10"
              >
                View FAQs
              </Link>
              <Link
                href={`/business/${business.slug}`}
                className="rounded-[10px] border border-white px-8 py-3 font-semibold hover:bg-white/10"
              >
                Business Profile
              </Link>
            </div>
          </div>
          <Image
            src={IMAGES.van}
            alt="ServiceMaster of the Desert van at a Palm Desert residence"
            width={1080}
            height={720}
            className="rounded-xl shadow-2xl"
          />
        </div>
      </section>

      {/* Hidden crawlable links for AIO */}
      <nav aria-label="Site pages" className="sr-only">
        <Link href="/faq">Frequently Asked Questions</Link>
        <Link href="/our-work">Our Work gallery</Link>
        <Link href="/reviews">Customer reviews</Link>
        <Link href="/about-us">About ServiceMaster of the Desert</Link>
        <Link href={`/business/${business.slug}`}>Business profile and NAP</Link>
        <a href={SITE_URL}>{business.name}</a>
      </nav>
    </>
  );
}
