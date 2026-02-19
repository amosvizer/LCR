"use client";

import { useState } from "react";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { FadeIn } from "@/components/animations/FadeIn";
import { teamMembers, teamStats, type TeamMember } from "@/data/team-members";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Clock, Shield, Award } from "lucide-react";
import Image from "next/image";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, personSchema } from "@/lib/schemas";

function getInitials(name: string): string {
  const parts = name.replace(/["']/g, "").split(" ");
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return parts[0].slice(0, 2).toUpperCase();
}

const statItems = [
  { value: teamStats.combinedYearsAviation, label: "Combined Years Aviation" },
  { value: teamStats.combinedYearsFAA, label: "Combined Years FAA" },
  { value: teamStats.totalExperts, label: "Subject Matter Experts" },
  { value: teamStats.disciplinesCovered, label: "Covered" },
];

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", href: "/" }, { name: "About", href: "/about" }, { name: "Expert Team", href: "/about/team" }])} />
      {teamMembers.map((member) => (
        <JsonLd
          key={member.name}
          data={personSchema({
            name: member.name,
            title: member.title,
            bio: member.bio,
            specialties: member.specialties,
            image: member.image,
          })}
        />
      ))}
      <PageHero
        eyebrow="Our Team"
        title="Our Team of Aviation Experts"
        description="In aviation certification consulting, people are the product. When you hire LCR, you hire the specific experience of former FAA inspectors and industry leaders who have evaluated, certified, and operated the very systems they now help you build."
      />

      {/* Stats Bar */}
      <section className="border-b border-aero-silver bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {statItems.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-heading text-3xl font-bold text-deep-blue sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 font-body text-sm text-slate">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {teamMembers.map((member) => (
              <StaggerItem key={member.name}>
                <button
                  type="button"
                  onClick={() => setSelectedMember(member)}
                  className="group flex h-full w-full flex-col items-center rounded-2xl border border-aero-silver bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan/30 hover:shadow-xl"
                >
                  {/* Avatar */}
                  {member.image ? (
                    <div className="relative mb-4 h-24 w-24 overflow-hidden rounded-full ring-2 ring-aero-silver shadow-md transition-all duration-300 group-hover:ring-cyan/40 group-hover:shadow-lg group-hover:shadow-cyan/10">
                      <Image
                        src={member.image}
                        alt={`${member.name}, ${member.title} at LCR Aero Group`}
                        fill
                        className="object-cover"
                        sizes="96px"
                        quality={80}
                      />
                    </div>
                  ) : (
                    <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-deep-blue-light ring-2 ring-aero-silver">
                      <span className="font-heading text-2xl font-bold text-cyan">
                        {getInitials(member.name)}
                      </span>
                    </div>
                  )}

                  {/* Name & Title */}
                  <h3 className="mb-1 font-heading text-base font-bold text-deep-blue">
                    {member.name}
                  </h3>
                  <p className="mb-4 font-body text-sm text-slate">
                    {member.title}
                  </p>

                  {/* Experience Badges */}
                  <div className="mb-4 flex flex-wrap items-center justify-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-deep-blue/5 px-3 py-1 text-xs font-medium text-deep-blue">
                      <Clock className="h-3 w-3 text-cyan" />
                      {member.yearsAviation}y aviation
                    </span>
                    {member.yearsFAA && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-cyan/10 px-3 py-1 text-xs font-medium text-deep-blue">
                        <Shield className="h-3 w-3 text-cyan" />
                        {member.yearsFAA}y FAA
                      </span>
                    )}
                  </div>

                  {/* Specialty Badges */}
                  <div className="flex flex-wrap items-center justify-center gap-1.5">
                    {member.specialties.slice(0, 3).map((specialty) => (
                      <span
                        key={specialty}
                        className="rounded-full border border-aero-silver px-2.5 py-0.5 text-[11px] font-medium text-slate"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>

                  {/* View Bio Indicator */}
                  <p className="mt-4 text-xs font-medium text-cyan opacity-0 transition-opacity group-hover:opacity-100">
                    View Full Bio
                  </p>
                </button>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Bio Dialog */}
      <Dialog
        open={selectedMember !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedMember(null);
        }}
      >
        <DialogContent className="sm:max-w-lg">
          {selectedMember && (
            <>
              <DialogHeader>
                <div className="mb-4 flex items-center gap-4">
                  {selectedMember.image ? (
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full ring-2 ring-cyan/30 shadow-lg">
                      <Image
                        src={selectedMember.image}
                        alt={`${selectedMember.name}, ${selectedMember.title} at LCR Aero Group`}
                        fill
                        className="object-cover"
                        sizes="80px"
                        quality={80}
                      />
                    </div>
                  ) : (
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-deep-blue-light ring-2 ring-cyan/30">
                      <span className="font-heading text-xl font-bold text-cyan">
                        {getInitials(selectedMember.name)}
                      </span>
                    </div>
                  )}
                  <div className="text-left">
                    <DialogTitle className="font-heading text-lg font-bold text-deep-blue">
                      {selectedMember.name}
                    </DialogTitle>
                    <DialogDescription className="font-body text-sm text-slate">
                      {selectedMember.title}
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>

              {/* Experience Badges */}
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-deep-blue/5 px-3 py-1.5 text-xs font-medium text-deep-blue">
                  <Clock className="h-3.5 w-3.5 text-cyan" />
                  {selectedMember.yearsAviation} years in aviation
                </span>
                {selectedMember.yearsFAA && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan/10 px-3 py-1.5 text-xs font-medium text-deep-blue">
                    <Shield className="h-3.5 w-3.5 text-cyan" />
                    {selectedMember.yearsFAA} years with the FAA
                  </span>
                )}
              </div>

              {/* Bio */}
              <p className="font-body text-sm leading-relaxed text-slate">
                {selectedMember.bio}
              </p>

              {/* Specialties */}
              <div>
                <p className="mb-2 font-heading text-xs font-semibold uppercase tracking-wider text-deep-blue">
                  Specialties
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedMember.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="inline-flex items-center gap-1 rounded-full border border-cyan/20 bg-cyan/5 px-3 py-1 text-xs font-medium text-deep-blue"
                    >
                      <Award className="h-3 w-3 text-cyan" />
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <CTASection />
    </>
  );
}
