import { generateOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOgImage(
    "Pilot Schools — Part 141 & 142",
    "Training Course Outlines | Check Airman Programs | SMS"
  );
}
