import { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Shield,
  Search,
  Users,
  UserCheck,
  ClipboardList,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Aviation Training Courses — CASS, SMS, Auditing & Investigation",
  description:
    "Professional aviation training courses taught by former FAA inspectors. CASS training, SMS training for managers and employees, auditing techniques, and interview and investigation methods.",
  alternates: { canonical: "/solutions/training" },
};

const TRAINING_FAQS = [
  {
    question: "Who teaches LCR's training courses?",
    answer:
      "All courses are taught by LCR's team of former FAA Aviation Safety Inspectors with over 400 combined years of aviation and FAA experience. Our instructors bring real-world regulatory enforcement, certification, and surveillance experience to every session — not textbook theory.",
  },
  {
    question: "What is CASS and why does it matter?",
    answer:
      "CASS — the Continuing Analysis and Surveillance System — is a required internal monitoring program for aviation operators under 14 CFR. It establishes the framework for continuously evaluating the performance and effectiveness of your operational and maintenance programs. An effective CASS program identifies trends and deficiencies before they become regulatory findings or safety events.",
  },
  {
    question: "Are these courses available on-site at our facility?",
    answer:
      "Yes. LCR delivers all training courses on-site at your facility, tailored to your operation's specific certificate type, fleet, and regulatory environment. On-site delivery allows us to incorporate your actual manuals, procedures, and operational context into the training — making every session immediately applicable to your team's daily responsibilities.",
  },
  {
    question:
      "Can courses be customized for our specific operation?",
    answer:
      "Absolutely. Every course is adapted to your certificate type (Part 121, 135, 145, or 137), operational complexity, and organizational structure. We reference your actual manuals, procedures, and regulatory requirements so that participants leave with knowledge they can apply immediately — not generic content they have to translate to their own environment.",
  },
  {
    question: "What is the difference between the Basic and Advanced Interview and Investigation courses?",
    answer:
      "The Basic course covers foundational interview planning, questioning techniques, evidence gathering, and investigation documentation methods. The Advanced course builds on these skills with complex scenario analysis, multi-party investigations, root cause analysis methodologies, human factors considerations, and regulatory enforcement investigation procedures. We recommend completing Basic before enrolling in the Advanced course.",
  },
];

const COURSE_CATEGORIES = [
  {
    category: "CASS Training",
    description:
      "Continuing Analysis and Surveillance System — the foundation of your internal compliance monitoring program.",
    icon: Shield,
    courses: [
      {
        title: "CASS Training for Managers and Employees",
        audience: "Managers & Employees",
        description:
          "Comprehensive training on the Continuing Analysis and Surveillance System (CASS) required under 14 CFR. This course covers the design, implementation, and management of your internal monitoring program — including how to establish audit schedules, develop surveillance plans, analyze trends, document findings, and drive corrective actions. Managers learn program oversight and accountability responsibilities, while operational employees learn their role in the surveillance process and how to participate effectively in internal evaluations.",
        topics: [
          "CASS regulatory requirements and FAA expectations",
          "Internal audit program design and scheduling",
          "Surveillance plan development and execution",
          "Trend analysis and performance monitoring",
          "Corrective action tracking and closure",
          "Management oversight and accountability",
          "Employee roles in surveillance and reporting",
        ],
      },
    ],
  },
  {
    category: "SMS Training",
    description:
      "Safety Management Systems training tailored to the specific responsibilities of managers and front-line employees.",
    icon: ClipboardList,
    courses: [
      {
        title: "SMS Training for Managers",
        audience: "Managers & Leadership",
        description:
          "Designed for operational leaders and management personnel responsible for SMS oversight, resource allocation, and safety accountability. This course covers the ICAO four-pillar SMS framework from a management perspective — including safety policy development, risk acceptance decisions, safety performance monitoring, and building a safety reporting culture. Participants learn how to integrate SMS into operational decision-making, fulfill their accountable executive responsibilities, and demonstrate SMS effectiveness to the FAA.",
        topics: [
          "ICAO four-pillar SMS framework — management perspective",
          "14 CFR Part 5 regulatory requirements",
          "Safety policy development and organizational commitment",
          "Safety Risk Management — hazard identification and risk acceptance",
          "Safety Assurance — performance monitoring and metrics",
          "Safety Promotion — building a reporting culture",
          "Accountable executive responsibilities",
          "SMS documentation and FAA demonstration",
        ],
      },
      {
        title: "SMS Training for Employees",
        audience: "Front-Line Employees",
        description:
          "Designed for front-line operational personnel across all disciplines — flight operations, maintenance, dispatch, cabin safety, and ground handling. This course provides practical, role-specific SMS training that empowers employees to identify hazards, report safety concerns through proper channels, participate in risk assessments, and understand how their daily actions contribute to organizational safety performance. The focus is on practical application, not theory.",
        topics: [
          "SMS fundamentals — what it is and why it matters",
          "Hazard identification in daily operations",
          "Safety reporting — how, when, and what to report",
          "Understanding risk assessments and mitigations",
          "Non-punitive reporting culture and just culture principles",
          "Your role in Safety Assurance activities",
          "Real-world case studies and scenario exercises",
        ],
      },
    ],
  },
  {
    category: "Auditing & Investigation Techniques",
    description:
      "Progressive skill-building courses from foundational auditing methods through advanced investigation techniques.",
    icon: Search,
    courses: [
      {
        title: "Basic Auditing and Evaluation Techniques",
        audience: "Auditors & Evaluators",
        description:
          "Foundation course for personnel conducting internal audits, evaluations, and compliance assessments. Covers the entire audit lifecycle — from planning and scope definition through execution, evidence gathering, findings documentation, and corrective action follow-up. Participants learn how to develop audit checklists, conduct structured evaluations, identify regulatory non-conformances, and write findings that are specific, defensible, and actionable.",
        topics: [
          "Audit planning and scope definition",
          "Developing effective audit checklists",
          "Evidence gathering and sampling methods",
          "Identifying regulatory non-conformances",
          "Writing clear, defensible audit findings",
          "Corrective action recommendations",
          "Follow-up verification and closure",
        ],
      },
      {
        title: "Basic Interview and Investigation Techniques",
        audience: "Investigators & Safety Personnel",
        description:
          "Foundation course for personnel involved in safety investigations, incident analysis, and regulatory inquiries. Covers the principles of effective interviewing — including preparation, questioning strategies, active listening, documentation, and maintaining objectivity. Participants learn how to plan and conduct structured interviews, gather reliable information from witnesses, and compile investigation findings into clear, factual reports.",
        topics: [
          "Investigation planning and preparation",
          "Interview structure and questioning techniques",
          "Active listening and observation skills",
          "Evidence documentation and chain of custody",
          "Witness statement collection and verification",
          "Investigation report writing",
          "Maintaining objectivity and avoiding bias",
        ],
      },
      {
        title: "Advanced Interview and Investigation Techniques",
        audience: "Senior Investigators & Managers",
        description:
          "Advanced course building on the fundamentals covered in the Basic course. Designed for experienced investigators and safety managers who handle complex, multi-party investigations involving human factors, organizational contributors, and regulatory implications. Covers advanced root cause analysis methodologies, cognitive interviewing techniques, human factors analysis frameworks, and how to manage investigations that may involve regulatory enforcement considerations.",
        topics: [
          "Complex multi-party investigation management",
          "Advanced root cause analysis methodologies",
          "Cognitive interviewing techniques",
          "Human factors analysis (HFACS framework)",
          "Organizational and systemic failure analysis",
          "Regulatory enforcement investigation procedures",
          "Expert witness preparation and testimony",
          "Case study analysis — real-world complex investigations",
        ],
      },
    ],
  },
] as const;

const WHY_LCR_TRAINING = [
  {
    title: "Former FAA Inspectors",
    text: "Every course is taught by instructors who conducted FAA surveillance, certification, and enforcement actions. We teach what the FAA expects because we used to be the ones enforcing it.",
  },
  {
    title: "Operationally Relevant",
    text: "We customize every course to your certificate type, fleet, and regulatory environment. Your actual manuals and procedures become part of the training materials — not generic examples from a textbook.",
  },
  {
    title: "Practical, Not Academic",
    text: "Our training emphasizes real-world application over theory. Participants work through scenarios drawn from actual regulatory events, investigations, and compliance findings to build skills they can use immediately.",
  },
  {
    title: "Proven Expertise",
    text: "With 400+ combined years of aviation experience and over 230 years of FAA service, our instructors bring a depth of knowledge that cannot be replicated by general training providers.",
  },
] as const;

export default function TrainingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Solutions", href: "/solutions" },
          { name: "Training Courses", href: "/solutions/training" },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "Aviation Training Courses",
          description:
            "Professional aviation training courses taught by former FAA inspectors. CASS, SMS, auditing, and investigation techniques.",
          url: "/solutions/training",
        })}
      />
      <JsonLd data={faqSchema(TRAINING_FAQS)} />

      <PageHero
        eyebrow="Training Courses"
        title="Professional Aviation Training Courses"
        description="Effective training is not a slide deck — it is the transfer of real operational knowledge from experienced practitioners to the people responsible for safety and compliance every day. LCR Aero Group delivers professional training courses taught exclusively by former FAA Aviation Safety Inspectors, covering CASS, Safety Management Systems, auditing techniques, and investigation methods. Every course is customized to your operation and delivered by instructors who bring decades of regulatory and operational experience to the classroom."
      />

      {/* Course Categories */}
      {COURSE_CATEGORIES.map((category, catIndex) => {
        const CategoryIcon = category.icon;
        return (
          <section
            key={category.category}
            className={
              catIndex % 2 === 1
                ? "bg-aero-silver/10 py-20 sm:py-24"
                : "py-20 sm:py-24"
            }
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <FadeIn>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-deep-blue/5">
                    <CategoryIcon className="h-5 w-5 text-cyan" />
                  </div>
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-cyan sm:text-sm">
                    {category.category}
                  </p>
                </div>
                <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-deep-blue sm:text-4xl">
                  {category.category}
                </h2>
                <p className="mb-12 max-w-2xl font-body text-base leading-relaxed text-slate sm:text-lg">
                  {category.description}
                </p>
              </FadeIn>

              <div className="grid gap-8 lg:grid-cols-1">
                {category.courses.map((course, courseIndex) => (
                  <FadeIn key={course.title} delay={courseIndex * 0.1}>
                    <div className="rounded-2xl border border-aero-silver bg-white p-8 transition-all duration-300 hover:border-cyan/30 hover:shadow-lg sm:p-10">
                      <div className="mb-2 flex items-center gap-3">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan/10 px-3 py-1 text-xs font-medium text-cyan">
                          <Users className="h-3 w-3" />
                          {course.audience}
                        </span>
                      </div>

                      <h3 className="mb-4 font-heading text-xl font-semibold text-deep-blue sm:text-2xl">
                        {course.title}
                      </h3>

                      <p className="mb-8 font-body text-base leading-relaxed text-slate">
                        {course.description}
                      </p>

                      <div>
                        <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-deep-blue/70">
                          Key Topics Covered
                        </h4>
                        <ul className="grid gap-3 sm:grid-cols-2">
                          {course.topics.map((topic) => (
                            <li
                              key={topic}
                              className="flex items-start gap-2.5"
                            >
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                              <span className="font-body text-sm text-slate">
                                {topic}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Why LCR Training — Dark Callout */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <div className="rounded-2xl bg-deep-blue p-8 sm:p-12">
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.15em] text-cyan sm:text-sm">
                What Sets Us Apart
              </p>
              <h2 className="mb-6 font-heading text-2xl font-bold text-white sm:text-3xl">
                The LCR Training Difference
              </h2>
              <p className="mb-6 font-body text-base leading-relaxed text-aero-silver/70 sm:text-lg">
                Most aviation training is taught by instructors who learned from
                a manual. Ours is taught by the people who enforced the
                regulations, conducted the audits, and led the investigations.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                {WHY_LCR_TRAINING.map((item, index) => (
                  <FadeIn key={item.title} delay={index * 0.1}>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                      <h3 className="mb-2 font-heading text-base font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-aero-silver/60">
                        {item.text}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Instructor Callout */}
      <section className="bg-aero-silver/10 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <div className="rounded-2xl border border-cyan/20 bg-cyan/5 p-8 sm:p-12">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cyan/10">
                  <UserCheck className="h-8 w-8 text-cyan" />
                </div>
                <p className="mb-2 font-heading text-5xl font-bold text-cyan sm:text-6xl">
                  400+
                </p>
                <p className="mb-4 font-heading text-xl font-semibold text-deep-blue sm:text-2xl">
                  Combined Years of Aviation & FAA Experience
                </p>
                <p className="max-w-2xl font-body text-base leading-relaxed text-slate sm:text-lg">
                  Every LCR training course is delivered by former FAA Aviation
                  Safety Inspectors who bring decades of hands-on regulatory and
                  operational experience. Our instructors do not teach from
                  theory — they teach from experience conducting real
                  certifications, audits, and investigations.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <div className="rounded-2xl bg-aero-silver/30 p-8 text-center sm:p-12">
              <h2 className="mb-4 font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
                Ready to elevate your team&apos;s capabilities?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl font-body text-base leading-relaxed text-slate sm:text-lg">
                Whether you need CASS training for your compliance team, SMS
                training for your entire organization, or advanced investigation
                skills for your safety department — LCR delivers courses
                customized to your operation and taught by the most experienced
                instructors in the industry.
              </p>
              <Button
                asChild
                size="lg"
                className="group rounded-full bg-cyan px-8 py-6 text-base font-semibold text-deep-blue transition-all hover:scale-[1.02] hover:bg-cyan-dark hover:shadow-lg hover:shadow-cyan/20"
              >
                <Link href="/contact">
                  Request Training Information
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
