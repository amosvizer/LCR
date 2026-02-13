export interface IndustryPage {
  slug: string;
  title: string;
  h1: string;
  description: string;
  content: string;
  services: string[];
  clients: string[];
  image: string;
}

export const industryPages: IndustryPage[] = [
  {
    slug: "commercial",
    title: "Commercial Airlines",
    h1: "Commercial Airline Certification & Compliance",
    description: "Deep regulatory expertise and AI-enhanced documentation precision for commercial airlines.",
    content: "From startups seeking their first Part 121 certificate to established carriers expanding their route authority, LCR provides the deep regulatory expertise and AI-enhanced documentation precision that commercial airlines need. We have supported domestic, flag, and supplemental operations for airlines including Eastern Airlines, Silver Airways, CommutAir, ExpressJet, and Swift Air.",
    services: [
      "Initial Part 121 Certification",
      "Fleet Type Additions",
      "Flag Carrier Authorization",
      "ETOPS Implementation",
      "Extended Overwater Operations",
      "SMS Implementation",
      "IATA/IOSA Compliance",
      "Ongoing Manual Management",
    ],
    clients: ["Eastern Airlines", "Silver Airways", "CommutAir", "ExpressJet", "Swift Air"],
    image: "/images/aviation/aircraft-takeoff.jpg",
  },
  {
    slug: "cargo-charter",
    title: "Cargo & Charter",
    h1: "Cargo Airline & Charter Operator Solutions",
    description: "Specialized solutions for cargo carriers and charter operators with unique regulatory needs.",
    content: "Cargo carriers and charter operators face unique regulatory requirements around payload handling, security programs, and operational flexibility. LCR has supported cargo certification for operators including Northern Air Cargo, 7 Air Cargo, AmeriJet, and Asia Pacific Airlines.",
    services: [
      "Part 121 and Part 135 Certification",
      "HAZMAT Program Development",
      "Cargo Handling Procedures",
      "Security Program Documentation",
      "DoD Compliance Preparation",
    ],
    clients: ["Northern Air Cargo", "7 Air Cargo", "AmeriJet", "Asia Pacific Airlines"],
    image: "/images/aviation/ground-services.jpg",
  },
  {
    slug: "mro",
    title: "Repair Stations (MRO)",
    h1: "Repair Station Certification & Compliance",
    description: "Robust documentation systems and quality control programs for Part 145 certification.",
    content: "Maintenance, Repair, and Overhaul organizations need robust documentation systems and quality control programs to earn and maintain Part 145 certification. LCR has supported repair stations including Flightstar, TechOps Mexico, AAR, AVEX, Aeroman, and ATS.",
    services: [
      "Repair Station Manual Development",
      "Quality Control Manual Development",
      "Capability List Preparation",
      "Additional Rating Applications",
      "Dual FAA/EASA Certification Support",
    ],
    clients: ["Flightstar", "TechOps Mexico", "AAR", "AVEX", "Aeroman", "ATS"],
    image: "/images/aviation/aircraft-prop.jpg",
  },
  {
    slug: "agricultural",
    title: "Agricultural Aviation",
    h1: "Agricultural Aircraft Operations (Part 137)",
    description: "Specialized certification consulting for aerial application operations.",
    content: "Agricultural aviation operators face specialized certification requirements for aerial application operations. LCR provides Part 137 certification consulting, operational manual development, congested area waiver support, and specialized equipment documentation.",
    services: [
      "Part 137 Certification Consulting",
      "Operational Manual Development",
      "Congested Area Waiver Support",
      "Specialized Equipment Documentation",
    ],
    clients: [],
    image: "/images/aviation/runway-from-air.jpg",
  },
];

export const caseStudies = [
  {
    id: "part-121-startup",
    title: "Initial Part 121 Certification",
    category: "Initial Certification",
    certType: "Part 121",
    challenge: "A startup cargo airline needed to obtain their Part 121 certificate on an aggressive timeline to meet contractual obligations.",
    approach: "LCR deployed a team of 4 SMEs (flight operations, maintenance, dispatch, HAZMAT) and used AI-enhanced documentation tools to develop the complete manual system and DCT submissions. All documentation was verified against current 14 CFR Part 121 requirements.",
    result: "Certificate issued ahead of schedule. All DCT submissions accepted on initial review.",
    image: "/images/aviation/aircraft-at-gate.jpg",
  },
  {
    id: "fleet-addition",
    title: "New Aircraft Type Addition",
    category: "Fleet Addition",
    certType: "Part 121",
    challenge: "An established carrier needed to add a new fleet type to their OpSpecs within 90 days to meet seasonal demand.",
    approach: "LCR managed the MCPD process, updated all affected manuals, developed crew training curricula, and coordinated with the FSDO.",
    result: "New type approved 2 weeks ahead of schedule.",
    image: "/images/aviation/aircraft-in-air.jpg",
  },
  {
    id: "part-145-mro",
    title: "Part 145 Repair Station",
    category: "Initial Certification",
    certType: "Part 145",
    challenge: "An MRO organization needed FAA Part 145 certification to expand their service offerings.",
    approach: "LCR developed the complete RSM, QCM, and capability list, and managed the FAA evaluation process.",
    result: "Certification achieved with zero findings.",
    image: "/images/aviation/aircraft-prop.jpg",
  },
];
