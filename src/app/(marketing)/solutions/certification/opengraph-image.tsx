import { generateOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOgImage(
    "FAA Air Carrier & Air Agency Certification",
    "Expert 5-Phase Certification Management | Parts 121, 135, 145, 137"
  );
}
