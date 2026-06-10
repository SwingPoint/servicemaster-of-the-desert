import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-lg px-4 py-24 text-center">
      <h1 className="text-4xl font-bold text-slate-900">Page not found</h1>
      <p className="mt-4 text-slate-600">
        The page you requested is not available. ServiceMaster of the Desert serves
        the Coachella Valley with professional carpet and floor cleaning.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="rounded-full bg-brand-orange px-6 py-3 font-semibold text-white hover:bg-brand-orange-dark"
        >
          Go to homepage
        </Link>
        <Link
          href="/faq"
          className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-800 hover:bg-slate-50"
        >
          View FAQs
        </Link>
      </div>
    </section>
  );
}
