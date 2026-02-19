import { generateOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOgImage(
    "Cargo Airline & Charter Operator Solutions",
    "Part 121 & 135 | HAZMAT | DoD Compliance"
  );
}
