import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-deep-blue px-6 text-center">
      <p className="font-mono text-sm font-medium uppercase tracking-widest text-cyan">
        404 — Page Not Found
      </p>
      <h1 className="mt-4 font-heading text-4xl font-bold text-white sm:text-5xl">
        We couldn&apos;t find that page
      </h1>
      <p className="mt-4 max-w-md font-body text-base leading-relaxed text-aero-silver/70">
        The page you&apos;re looking for may have been moved or doesn&apos;t exist.
        Let&apos;s get you back on course.
      </p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/"
          className="rounded-full bg-cyan px-8 py-3 text-sm font-semibold text-deep-blue transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan/20"
        >
          Back to Homepage
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
