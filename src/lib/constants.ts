export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://lcr.aero";
export const SITE_NAME = "LCR Aero Group";
export const SITE_DESCRIPTION =
  "Former FAA inspectors delivering AI-enhanced aviation certification consulting. 95%+ first-time DCT acceptance rate. Since 2013.";

export const NAV_ITEMS = [
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Certification Services", href: "/solutions/certification", description: "Initial certifications for Parts 121, 135, 145, and 137" },
      { label: "Operational Expansion", href: "/solutions/expansion", description: "New aircraft types, ETOPS, flag carrier transitions" },
      { label: "Safety & SMS", href: "/solutions/safety-sms", description: "SMS implementation, auditing, and compliance programs" },
      { label: "Compliance Auditing", href: "/solutions/compliance-auditing", description: "FAA, IATA, and DoD independent compliance evaluations" },
      { label: "Technical Publications", href: "/solutions/publications", description: "Aviation manual development and revisions" },
      { label: "AI-Enhanced Services", href: "/solutions/ai-enhanced", description: "ROI with AI — automated compliance verification" },
      { label: "Technology Solutions", href: "/solutions/technology", description: "Technology selection, implementation, and lifecycle support" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Commercial Airlines", href: "/industries/commercial", description: "Part 121 domestic, flag, and supplemental operations" },
      { label: "Cargo & Charter", href: "/industries/cargo-charter", description: "Cargo carriers and charter operator solutions" },
      { label: "Repair Stations (MRO)", href: "/industries/mro", description: "Part 145 certification and compliance" },
      { label: "Agricultural Aviation", href: "/industries/agricultural", description: "Part 137 aerial application operations" },
    ],
  },
  {
    label: "Knowledge Hub",
    href: "/knowledge",
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about", description: "Learn about LCR Aero Group's history and mission" },
      { label: "Expert Team", href: "/about/team", description: "Meet our former FAA inspectors and industry leaders" },
      { label: "Case Studies", href: "/about/case-studies", description: "Client success stories and proven results" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
] as const;

export const TRUST_STATS = [
  { value: 400, suffix: "+", label: "Combined Years of FAA & Aviation Experience" },
  { value: 95, suffix: "%+", label: "First-Time DCT Acceptance Rate" },
  { value: 50, suffix: "+", label: "Air Carrier & Air Agency Clients Served" },
  { value: 2013, suffix: "", label: "Serving Aviation Since", isYear: true },
] as const;

export const SERVICE_CATEGORIES = [
  {
    title: "Certification Services",
    href: "/solutions/certification",
    description: "Initial certifications for Parts 121, 135, 145, and 137. We manage the entire 5-Phase FAA process from pre-application through certificate issuance.",
    icon: "ShieldCheck",
    subServices: ["Part 121 Certification", "Part 135 Certification", "Part 145 Certification", "Part 137 Certification"],
  },
  {
    title: "Operational Expansion",
    href: "/solutions/expansion",
    description: "New aircraft types, ETOPS, extended overwater, CPDLC, flag carrier transitions, and additional repair station ratings.",
    icon: "TrendingUp",
    subServices: ["New Aircraft Types", "ETOPS Implementation", "Flag Carrier Transition", "Additional Ratings"],
  },
  {
    title: "Safety & SMS",
    href: "/solutions/safety-sms",
    description: "SMS manual development, SMS Data Collection Tool and SMS Statement of Compliance completions for parts 121, 135 and 145.",
    icon: "Activity",
    subServices: ["SMS Implementation", "Gap Analysis", "IOSA Audit Prep", "Safety Culture Assessment"],
  },
  {
    title: "Regulatory Compliance Auditing",
    href: "/solutions/compliance-auditing",
    description: "FAA, IATA, and DOD regulatory compliance auditing. Independent customized evaluations.",
    icon: "Scale",
    subServices: ["FAA Compliance Audits", "IOSA Preparation", "DoD Evaluations", "Custom Audit Programs"],
  },
  {
    title: "Technical Publications",
    href: "/solutions/publications",
    description: "Air operator and agency manual development and revisions. SAS Data Collection Tool preparation and support.",
    icon: "FileText",
    subServices: ["Manual Development", "DCT Preparation", "Compliance Matrices", "Ongoing Revisions"],
  },
  {
    title: "AI-Enhanced Services",
    href: "/solutions/ai-enhanced",
    description: "ROI with AI. Automated guidance verification, precision compliance quoting, and AI-driven documentation quality assurance.",
    icon: "Brain",
    subServices: ["Regulatory Verification", "RAG Compliance", "Automated QA", "Conflict Detection"],
  },
  {
    title: "Technology Solutions",
    href: "/solutions/technology",
    description: "End-to-end technology consulting: selection, implementation, training, and ongoing support for your entire operational stack.",
    icon: "Monitor",
    subServices: ["Technology Selection", "System Implementation", "Training & OJT", "Ongoing Support"],
  },
] as const;

export const CERTIFICATION_PHASES = [
  {
    phase: 1,
    title: "Discovery & Pre-Application",
    shortDescription: "We assess your readiness, identify gaps, and develop a realistic project plan.",
    fullDescription: "This phase begins when you first contact the FAA about certification. LCR conducts a comprehensive readiness assessment of your organization, identifies gaps in personnel, manuals, training programs, and operational infrastructure, and develops a detailed Schedule of Events. We prepare you to make a strong first impression at the pre-application meeting with your assigned Flight Standards District Office (FSDO).",
  },
  {
    phase: 2,
    title: "Formal Application",
    shortDescription: "We prepare and review your complete application package to meet all FAA formal requirements.",
    fullDescription: "We compile and review your formal application package, ensuring all required documents are present, properly formatted, and compliant. This includes management resumes, organizational charts, compliance statements, and preliminary manual drafts. We coordinate with the Certification Project Manager (CPM) and Certification Project Team (CPT) to ensure your package is accepted without revision.",
  },
  {
    phase: 3,
    title: "Design Assessment",
    shortDescription: "We develop and verify all manuals, training programs, and procedures. Our AI tools cross-reference every citation.",
    fullDescription: "This is the most labor-intensive phase. The FAA evaluates the design of your operating systems to ensure regulatory compliance. LCR develops and prepares all required manuals, training curricula, and safety programs. Our AI-powered compliance tools verify every regulatory citation against the current 14 CFR and FAA guidance. We prepare all Data Collection Tool (DCT) submissions — and our 95%+ first-time acceptance rate means you move to Phase 4 faster than the industry average.",
  },
  {
    phase: 4,
    title: "Performance Assessment",
    shortDescription: "We support proving runs, demonstration flights, and operational evaluations.",
    fullDescription: "The FAA observes your operations in action to confirm your systems perform as designed. LCR supports you through proving tests, demonstration flights, emergency evacuation demonstrations, and operational evaluations. We ensure your team is prepared, your processes are executed correctly, and the FAA's Element Performance Assessment (EPA) observations reflect a well-run operation.",
  },
  {
    phase: 5,
    title: "Certificate Issuance",
    shortDescription: "Administrative completion, OpSpecs issuance, and transition to ongoing compliance support.",
    fullDescription: "The final phase: the FAA issues your Air Carrier or Operating Certificate and Operations Specifications (OpSpecs). LCR ensures all administrative requirements are met, all documentation is finalized, and your transition to ongoing operations is seamless.",
  },
] as const;
