import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-lg px-4 py-24 text-center">
      <h1 className="font-heading text-4xl font-bold text-charcoal">Page not found</h1>
      <p className="mt-4 text-warm-gray">
        The page you requested is not available. ServiceMaster of the Desert serves
        the Coachella Valley with professional cleaning since 1989.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link href="/" className="btn-primary px-6 py-3">
          Go to homepage
        </Link>
        <Link href="/faq" className="btn-secondary px-6 py-3">
          View FAQs
        </Link>
      </div>
    </section>
  );
}
