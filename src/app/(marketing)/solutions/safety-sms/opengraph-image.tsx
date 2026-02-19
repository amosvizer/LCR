import { generateOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOgImage(
    "Safety Management Systems & Compliance",
    "SMS Implementation | IOSA Audit Prep | Gap Analysis | Safety Culture"
  );
}
