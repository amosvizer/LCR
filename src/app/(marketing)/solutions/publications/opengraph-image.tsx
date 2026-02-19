import { generateOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOgImage(
    "Aviation Manual Development & Technical Publications",
    "GOM | FOM | GMM | Training Manuals | DCT Preparation"
  );
}
