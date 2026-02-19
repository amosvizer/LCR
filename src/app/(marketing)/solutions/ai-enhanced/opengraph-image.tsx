import { generateOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOgImage(
    "AI-Enhanced Certification: ROI with AI",
    "Automated Guidance Verification | RAG Compliance | Conflict Detection"
  );
}
