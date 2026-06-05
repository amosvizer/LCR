export interface Testimonial {
  /** The testimonial body, split into paragraphs for clean rendering. */
  quote: string[];
  name: string;
  title: string;
  company: string;
  /** Short context tag rendered as a chip — frames the engagement at a glance. */
  highlight: string;
}

/**
 * Real, named client testimonials supplied by LCR (change request v1, #13).
 * Quotes are reproduced verbatim with light proofing only (whitespace,
 * capitalization of regulatory parts, and consistent company spelling) —
 * substance is unchanged. Used by TestimonialsSection and the Review JSON-LD.
 */
export const testimonials: Testimonial[] = [
  {
    quote: [
      "LCR Aero Group has been an invaluable partner in our journey to obtain our Part 121 Air Carrier Certificate. From the outset, their team has worked side-by-side with our organization, providing expert guidance, practical solutions, and consistent support throughout every phase of the certification process.",
      "Their deep understanding of FAA requirements, combined with their ability to effectively coordinate with both our team and FAA personnel, has made a complex and demanding process far more manageable. LCR Aero Group's professionalism, responsiveness, and commitment to our success have been evident at every step. We are confident that, with their continued support, we will successfully achieve our Part 121 certification. We highly recommend LCR Aero Group to any organization seeking knowledgeable and dedicated aviation consulting services.",
    ],
    name: "Larry Gregg",
    title: "Accountable Executive",
    company: "Best Jets International",
    highlight: "Part 121 Certification",
  },
  {
    quote: [
      "The LCR Aero Group has provided tremendous support in the implementation of our Repair Station SMS Program. This included manual development along with manager and employee training. I would strongly recommend their services to anyone looking for SMS implementation and training.",
    ],
    name: "Joseph Ng",
    title: "President",
    company: "AVEX",
    highlight: "Repair Station SMS",
  },
  {
    quote: [
      "The LCR Aero Group assisted my company, Asia Pacific Airlines, through some very challenging times with the FAA. Their knowledge, expertise, and professionalism aided greatly in our ongoing dealings with the FAA and helped resolve many crucial issues.",
      "We bring them back every year to accomplish an audit and evaluation to ensure we are staying in total compliance and are operating to the highest degree of safety. Any air carrier would be lucky to have them provide consulting services.",
    ],
    name: "Adam Ferguson",
    title: "President",
    company: "Asia Pacific Airlines",
    highlight: "Annual Compliance Audit",
  },
  {
    quote: [
      "LCR Aero Group provides exceptional services to help navigate the complexities of FAA regulatory compliance and certification. Their team brings a deep level of expertise, professionalism, and practical experience that is truly unmatched in the aviation consulting space. They have a deep understanding of FAA requirements and provided structured, actionable guidance that allowed us to move forward with confidence.",
      "What sets LCR Aero Group apart is their hands-on approach. They work side-by-side with your team, taking the time to understand your operation and tailoring solutions to fit your specific needs.",
      "I highly recommend LCR Aero Group to any organization seeking expert guidance in FAA regulatory compliance, SMS development, or certification support. Their commitment to excellence and client success is evident in everything they do.",
    ],
    name: "John Illson",
    title: "Principal",
    company: "Chief Aviation Advisors",
    highlight: "Compliance & SMS",
  },
  {
    quote: [
      "The LCR Team has been working closely with us to support the reactivation of the Part 121 ExpressJet certificate. This effort has required a substantial amount of work, and the LCR team — particularly its President, Larry Richards — has provided invaluable guidance and effective support in coordinating communications with the FAA.",
      "As the FAA has evolved over time, it has been evident that Larry and his team remain well-informed and proactive in adapting to ongoing regulatory and organizational changes. These developments have a direct impact on air carriers such as ours.",
      "With the continued support and expertise of the LCR Team, I am confident that we will successfully achieve our objective of restoring the Part 121 ExpressJet Air Carrier Certificate.",
    ],
    name: "Vandi Cooyar",
    title: "President",
    company: "ExpressJet Airlines, LLC",
    highlight: "Part 121 Reactivation",
  },
  {
    quote: [
      "I have worked with the LCR team on three projects: obtaining a new Part 137 certificate for the B-747 Global Supertanker, a new Part 145 Repair Station certificate, and currently working with the team to recertify ExpressJet Airlines.",
      "The LCR Team consists primarily of retired FAA personnel with a tremendous amount of experience and expertise. I have found them to always display professionalism, trust, and dedication to whatever project they are working. They have my full support and recommendation.",
    ],
    name: "Scott Olson",
    title: "Director of Maintenance",
    company: "ExpressJet Airlines, LLC",
    highlight: "Part 137 · 145 · 121",
  },
];
