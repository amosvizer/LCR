import { generateOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOgImage(
    "Aviation Certification Consulting",
    "Former FAA Inspectors | AI-Enhanced Precision | 95%+ DCT Acceptance"
  );
}
