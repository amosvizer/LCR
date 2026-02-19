import { generateOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOgImage(
    "Agricultural Aviation — Part 137",
    "Aerial Application | Congested Area Waivers"
  );
}
