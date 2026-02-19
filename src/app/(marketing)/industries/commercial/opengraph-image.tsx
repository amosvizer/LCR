import { generateOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOgImage(
    "Commercial Airline Certification",
    "Part 121 Certification | Fleet Expansion | ETOPS"
  );
}
