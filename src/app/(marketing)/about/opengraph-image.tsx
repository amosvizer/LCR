import { generateOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOgImage(
    "About LCR Aero Group",
    "Since 2013 | Former FAA Inspectors | 400+ Combined Years Experience"
  );
}
