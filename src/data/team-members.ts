export interface TeamMember {
  name: string;
  title: string;
  yearsAviation: number;
  yearsFAA: number | null;
  specialties: string[];
  bio: string;
  image?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Lawrence "Larry" Richards',
    title: "President & Program Manager",
    image: "/images/people/larry-richards.jpg",
    yearsAviation: 50,
    yearsFAA: 26,
    specialties: ["Aviation Project Management", "Airworthiness Regulatory & Safety Compliance", "Safety Management Systems (SMS)"],
    bio: "50 years in aviation with 26 years at the FAA. Larry founded LCR Aero Group to bring former FAA inspector-level expertise to operators who need it most. His expertise spans Aviation Project Management, Airworthiness Regulatory and Safety Compliance, and Safety Management Systems (SMS).",
  },
  {
    name: 'William "Jeff" Weber',
    title: "Flight Operations",
    image: "/images/people/jeff-weber.jpg",
    yearsAviation: 50,
    yearsFAA: 24,
    specialties: ["Aviation Project Management", "Regulatory & Safety Compliance", "Flight Operations"],
    bio: "50 years in aviation with 24 years at the FAA. Expertise in Aviation Project Management, Regulatory and Safety Compliance, and Flight Operations.",
  },
  {
    name: "Tom Ronk",
    title: "Maintenance",
    image: "/images/people/tom-ronk.jpg",
    yearsAviation: 42,
    yearsFAA: 29,
    specialties: ["Aviation Airworthiness", "Regulatory & Safety Compliance"],
    bio: "42 years in aviation with 29 years at the FAA. Expertise in Aviation Airworthiness, Regulatory and Safety Compliance.",
  },
  {
    name: "Stefanie Greer",
    title: "LCR Business Accountant",
    image: "/images/people/stefanie-greer.jpg",
    yearsAviation: 16,
    yearsFAA: null,
    specialties: ["Small Business Accounting"],
    bio: "16 years in aviation-related operations. Expertise in small business accounting.",
  },
  {
    name: "Cindy Griffin",
    title: "Cabin Inflight",
    image: "/images/people/cindy-griffin.jpg",
    yearsAviation: 42,
    yearsFAA: 15,
    specialties: ["Cabin Inflight Operations", "Regulatory & Safety Compliance"],
    bio: "42 years in aviation, including 15 years with the FAA. Expertise in Cabin Inflight Operations, Regulatory and Safety Compliance.",
  },
  {
    name: "Lyncca Harvey",
    title: "Technical Publications",
    image: "/images/people/lyncca-harvey.jpg",
    yearsAviation: 26,
    yearsFAA: null,
    specialties: ["Manual System Creation & Revisions", "FrameMaker Specialist"],
    bio: "26 years of aviation publication experience. Expertise in manual system creation and revisions, FrameMaker specialist.",
  },
  {
    name: "Greg Michael",
    title: "Flight Operations",
    image: "/images/people/greg-michael.jpg",
    yearsAviation: 51,
    yearsFAA: 30,
    specialties: ["Flight Operations", "Regulatory & Safety Compliance", "Aviation Project Management"],
    bio: "51 years in aviation, including 30 years with the FAA. Expertise in Flight Operations, Regulatory and Safety Compliance, and Aviation Project Management.",
  },
  {
    name: 'Thomas "Tommy" Clemmons',
    title: "Flight Operations",
    image: "/images/people/thomas-clemmons.jpg",
    yearsAviation: 52,
    yearsFAA: 22,
    specialties: ["Flight Operations", "Regulatory & Safety Compliance", "Aviation Project Management", "Recipient of the Wright Brothers Master Pilot Award"],
    bio: "52 years in aviation, including 22 years with the FAA. Expertise in Flight Operations, Regulatory and Safety Compliance, and Aviation Project Management.",
  },
  {
    name: "Glenn Gosnell",
    title: "Flight Ops, HAZMAT, Dispatch",
    image: "/images/people/glenn-gosnell.jpg",
    yearsAviation: 40,
    yearsFAA: 16,
    specialties: ["Flight Operations", "Dispatch & Flight Following", "Regulatory & Safety Compliance"],
    bio: "40 years in aviation, including 16 years with the FAA. Expertise in Flight Operations, Dispatch, Flight Following, Regulatory and Safety Compliance, and Aviation Project Management.",
  },
  {
    name: "Steve Jenkinson",
    title: "Dispatch / Flight Following",
    image: "/images/people/steve-jenkinson.jpg",
    yearsAviation: 28,
    yearsFAA: null,
    specialties: ["Dispatch & Flight Following", "Regulatory & Safety Compliance", "Aviation Project Management"],
    bio: "28 years in aviation. Expertise in Dispatch and Flight Following, Regulatory and Safety Compliance, and Aviation Project Management.",
  },
  {
    name: "Phil Bolyard",
    title: "Maintenance",
    image: "/images/people/phil-bolyard.jpg",
    yearsAviation: 28,
    yearsFAA: 19,
    specialties: ["Airworthiness Regulatory & Safety Compliance", "Aviation Project Management", "Safety Management Systems (SMS)"],
    bio: "28 years in aviation, including 19 years with the FAA. Expertise in Airworthiness Regulatory and Safety Compliance, Aviation Project Management, and Safety Management Systems (SMS).",
  },
  {
    name: "Pete Yiakos",
    title: "Maintenance",
    image: "/images/people/pete-yiakos.jpg",
    yearsAviation: 51,
    yearsFAA: 31,
    specialties: ["Airworthiness Regulatory & Safety Compliance", "Aviation Project Management"],
    bio: "51 years in aviation, including 31 years with the FAA. Expertise in Airworthiness Regulatory and Safety Compliance and Aviation Project Management.",
  },
];

export const teamStats = {
  combinedYearsAviation: "400+",
  combinedYearsFAA: "230+",
  totalExperts: "14",
  disciplinesCovered: "All Operational Disciplines",
};
