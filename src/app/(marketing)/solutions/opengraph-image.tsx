import { generateOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOgImage(
    "Aviation Certification & Compliance Solutions",
    "7 Specialized Service Areas | Former FAA Inspectors"
  );
}
