import { generateOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOgImage(
    "Operational Expansion & Major Change Projects",
    "New Aircraft Types | ETOPS | Extended Overwater | CPDLC | Transitions"
  );
}
