export interface Client {
  name: string;
  category: "carrier" | "agency";
}

export const airCarrierClients: Client[] = [
  { name: "Asia Pacific Airlines", category: "carrier" },
  { name: "Via Airlines", category: "carrier" },
  { name: "Hillwood Airlines", category: "carrier" },
  { name: "Eastern Airlines", category: "carrier" },
  { name: "Zoom Airlines", category: "carrier" },
  { name: "Northern Air Cargo", category: "carrier" },
  { name: "Sterling Airlines", category: "carrier" },
  { name: "Berry Aviation", category: "carrier" },
  { name: "Best Jets International", category: "carrier" },
  { name: "ExpressJet", category: "carrier" },
  { name: "7 Air Cargo", category: "carrier" },
  { name: "AmeriJet", category: "carrier" },
  { name: "Silver Airways", category: "carrier" },
  { name: "CommutAir", category: "carrier" },
  { name: "Global SuperTanker", category: "carrier" },
  { name: "Swift Air", category: "carrier" },
];

export const airAgencyClients: Client[] = [
  { name: "Flightstar", category: "agency" },
  { name: "TechOps Mexico", category: "agency" },
  { name: "AAR", category: "agency" },
  { name: "AVEX", category: "agency" },
  { name: "Aeroman", category: "agency" },
  { name: "ATS", category: "agency" },
];

export const allClients = [...airCarrierClients, ...airAgencyClients];
