"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { trackCTAClick } from "@/lib/analytics";

type NavChild = {
  readonly label: string;
  readonly href: string;
  readonly description: string;
};

type NavItem = {
  readonly label: string;
  readonly href: string;
  readonly children?: readonly NavChild[];
};

function DesktopDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 150);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className="relative px-4 py-2 text-sm font-medium text-aero-silver/90 transition-colors duration-200 hover:text-white"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={item.href}
        className="group flex items-center gap-1 px-4 py-2 text-sm font-medium text-aero-silver/90 transition-colors duration-200 hover:text-white"
      >
        {item.label}
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </Link>

      <div
        className={cn(
          "absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 transition-all duration-200",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        )}
      >
        <div className="glass w-[420px] rounded-xl p-2 shadow-2xl shadow-black/20">
          <div className="grid gap-0.5">
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="group/item rounded-lg px-4 py-3 transition-colors duration-150 hover:bg-white/5"
              >
                <div className="text-sm font-medium text-white transition-colors duration-150 group-hover/item:text-cyan">
                  {child.label}
                </div>
                <div className="mt-0.5 text-xs leading-relaxed text-aero-silver/60">
                  {child.description}
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-1 border-t border-white/5 pt-1">
            <Link
              href={item.href}
              className="flex items-center rounded-lg px-4 py-2.5 text-xs font-medium text-cyan transition-colors duration-150 hover:bg-white/5"
            >
              View all {item.label.toLowerCase()}
              <ChevronDown className="ml-1 h-3 w-3 -rotate-90" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileNavItem({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        onClick={onNavigate}
        className="block border-b border-white/5 px-2 py-4 text-base font-medium text-white transition-colors hover:text-cyan"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-white/5">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center justify-between px-2 py-4 text-base font-medium text-white transition-colors hover:text-cyan"
        aria-expanded={expanded}
      >
        {item.label}
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            expanded && "rotate-180"
          )}
        />
      </button>

      <div
        className={cn(
          "grid transition-all duration-300",
          expanded ? "grid-rows-[1fr] pb-3" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="space-y-1 pl-4">
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                onClick={onNavigate}
                className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-white/5"
              >
                <div className="text-sm font-medium text-aero-silver">
                  {child.label}
                </div>
                <div className="mt-0.5 text-xs text-aero-silver/50">
                  {child.description}
                </div>
              </Link>
            ))}
            <Link
              href={item.href}
              onClick={onNavigate}
              className="block rounded-lg px-3 py-2 text-xs font-medium text-cyan transition-colors hover:bg-white/5"
            >
              View all {item.label.toLowerCase()}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "glass py-3 shadow-lg shadow-black/10"
          : "bg-transparent py-6"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="relative z-10 flex-shrink-0">
          <Image
            src="/images/logo/lcr-logo.png"
            alt="LCR Aero Group"
            width={140}
            height={40}
            className={cn(
              "h-auto transition-all duration-300",
              scrolled ? "w-[120px]" : "w-[140px]"
            )}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center lg:flex" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <DesktopDropdown key={item.label} item={item as NavItem} />
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            onClick={() => trackCTAClick("request_consultation", "header")}
            className="inline-flex items-center rounded-full bg-cyan px-6 py-2.5 text-sm font-semibold text-deep-blue transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan/25 active:scale-[0.98]"
          >
            Request Consultation
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                className="relative z-10 flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              showCloseButton={false}
              className="w-full border-l-white/5 bg-deep-blue sm:max-w-md"
            >
              {/* Sheet header with close button */}
              <div className="flex items-center justify-between border-b border-white/5 px-6 pb-4 pt-2">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <Image
                  src="/images/logo/lcr-logo.png"
                  alt="LCR Aero Group"
                  width={120}
                  height={34}
                  className="h-auto w-[120px]"
                />
                <button
                  onClick={closeMobile}
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Mobile nav items */}
              <div className="flex-1 overflow-y-auto px-6 py-4">
                {NAV_ITEMS.map((item) => (
                  <MobileNavItem
                    key={item.label}
                    item={item as NavItem}
                    onNavigate={closeMobile}
                  />
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="border-t border-white/5 p-6">
                <Link
                  href="/contact"
                  onClick={() => { trackCTAClick("request_consultation", "mobile_menu"); closeMobile(); }}
                  className="flex w-full items-center justify-center rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-deep-blue transition-all duration-200 hover:shadow-lg hover:shadow-cyan/25"
                >
                  Request Consultation
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
