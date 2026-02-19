import { generateOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOgImage(
    "Expert Team — Former FAA Inspectors",
    "14 Subject Matter Experts | 400+ Years Aviation | 230+ Years FAA Service"
  );
}
