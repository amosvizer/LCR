import { generateOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOgImage(
    "Industries We Serve",
    "Commercial Airlines | Cargo & Charter | MRO | Agricultural Aviation"
  );
}
