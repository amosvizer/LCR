import { generateOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOgImage(
    "Let's Talk About Your Project",
    "Free Consultation | 24-Hour Response | Expert-Matched"
  );
}
