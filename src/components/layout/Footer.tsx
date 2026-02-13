import Image from "next/image";
import Link from "next/link";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

const QUICK_LINKS = [
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/about/team" },
  { label: "Case Studies", href: "/about/case-studies" },
  { label: "Contact", href: "/contact" },
  { label: "Knowledge Hub", href: "/knowledge" },
] as const;

const SERVICE_LINKS = [
  { label: "Certification Services", href: "/solutions/certification" },
  { label: "Operational Expansion", href: "/solutions/expansion" },
  { label: "Safety & SMS", href: "/solutions/safety-sms" },
  { label: "Technical Publications", href: "/solutions/publications" },
  { label: "AI-Enhanced Services", href: "/solutions/ai-enhanced" },
  { label: "Technology Solutions", href: "/solutions/technology" },
] as const;

export function Footer() {
  return (
    <footer className="bg-deep-blue" role="contentinfo">
      {/* Newsletter Section */}
      <div className="border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <div>
              <h3 className="font-heading text-lg font-semibold text-white">
                Stay current with aviation compliance
              </h3>
              <p className="mt-1 text-sm text-aero-silver/60">
                Expert insights on FAA regulations, certification updates, and
                industry best practices.
              </p>
            </div>
            <div className="w-full max-w-md sm:w-auto">
              <NewsletterForm variant="dark" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Column 1: Brand */}
          <div className="lg:pr-8">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo/lcr-logo.png"
                alt="LCR Aero Group"
                width={130}
                height={38}
                className="h-auto w-[130px]"
              />
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-aero-silver/70">
              Former FAA inspectors. AI-enhanced precision. Certification
              certainty.
            </p>
            <a
              href="mailto:info@lcr.aero"
              className="mt-4 inline-block text-sm text-aero-silver/50 transition-colors duration-200 hover:text-cyan"
            >
              info@lcr.aero
            </a>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <nav className="mt-5 space-y-3" aria-label="Quick links">
              {QUICK_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-aero-silver/60 transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h4>
            <nav className="mt-5 space-y-3" aria-label="Services">
              {SERVICE_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-aero-silver/60 transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row lg:px-8">
          <p className="text-xs text-aero-silver/40">
            &copy; {new Date().getFullYear()} LCR Aero Group. All rights
            reserved.
          </p>
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-cyan" />
            <span className="text-xs font-medium text-aero-silver/60">
              Since 2013
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
