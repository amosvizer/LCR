"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import {
  Plane,
  Package,
  Wrench,
  Radar,
  GraduationCap,
  Building2,
  BadgeCheck,
  Eye,
  ShieldCheck,
  Scale,
  BookOpen,
  type LucideIcon,
} from "lucide-react";

interface ListItem {
  icon: LucideIcon;
  label: string;
}

const OPERATORS: ListItem[] = [
  { icon: Plane, label: "Part 121 & 135 Scheduled Passenger Operators" },
  { icon: Package, label: "Supplemental & Cargo Carriers" },
  { icon: Wrench, label: "Repair Stations" },
  { icon: Radar, label: "Advanced Air Mobility (AAM & UAS) Organizations" },
  { icon: GraduationCap, label: "Pilot Schools" },
  { icon: Building2, label: "And other aviation entities" },
];

const SERVICES: ListItem[] = [
  { icon: BadgeCheck, label: "Initial Certification Support" },
  { icon: Eye, label: "Continuous Operational Safety Oversight" },
  {
    icon: ShieldCheck,
    label: "Safety Management System (SMS) Development & Implementation",
  },
  { icon: Scale, label: "Regulatory Compliance Assistance" },
  { icon: BookOpen, label: "Specialized Training Programs" },
];

function ServeColumn({
  heading,
  items,
}: {
  heading: string;
  items: ListItem[];
}) {
  return (
    <div className="h-full rounded-2xl border border-aero-silver bg-white p-8 shadow-sm sm:p-10">
      <h3 className="font-heading text-xl font-semibold text-deep-blue sm:text-2xl">
        {heading}
      </h3>
      <ul className="mt-7 space-y-4">
        {items.map(({ icon: Icon, label }) => (
          <li key={label} className="flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan/10">
              <Icon className="h-5 w-5 text-cyan" />
            </span>
            <span className="pt-2 text-sm font-medium leading-snug text-deep-blue sm:text-base">
              {label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function WhoWeServe() {
  return (
    <section className="bg-aero-silver/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-cyan sm:text-sm">
            Who We Serve
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-deep-blue sm:text-4xl lg:text-5xl">
            End-to-End Support for the Entire Operation
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate sm:text-lg">
            Accelerate your aviation safety and operational success with LCR Aero
            Group. We partner with operators across the National Airspace System
            through every phase of certification, operational compliance, and
            safety management.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <FadeIn direction="left">
            <ServeColumn heading="Operators We Partner With" items={OPERATORS} />
          </FadeIn>
          <FadeIn direction="right">
            <ServeColumn heading="Services We Provide" items={SERVICES} />
          </FadeIn>
        </div>

        <FadeIn
          className="mx-auto mt-10 max-w-3xl text-center"
          delay={0.15}
        >
          <p className="text-base leading-relaxed text-slate sm:text-lg">
            We are committed to helping aviation organizations successfully
            navigate today&apos;s increasingly complex National Airspace System
            (NAS) and evolving regulatory environment — strengthening both safety
            performance and operational efficiency.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
