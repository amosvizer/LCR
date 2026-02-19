import { generateOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOgImage(
    "Regulatory Compliance Auditing",
    "FAA | IATA/IOSA | DoD Evaluations by Former FAA Inspectors"
  );
}
