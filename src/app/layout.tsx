import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://lcr.aero"),
  title: {
    default: "LCR Aero Group | Aviation Certification Consulting",
    template: "%s | LCR Aero Group",
  },
  description:
    "Former FAA inspectors delivering AI-enhanced aviation certification consulting. 95%+ first-time DCT acceptance rate. Parts 121, 135, 145, and 137. Since 2013.",
  keywords: [
    "FAA certification",
    "aviation consulting",
    "Part 121 certification",
    "Part 135 certification",
    "Part 145 certification",
    "air carrier certification",
    "SMS implementation",
    "aviation safety",
    "DCT submission",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "LCR Aero Group",
    title: "LCR Aero Group | Aviation Certification Consulting",
    description:
      "Former FAA inspectors delivering AI-enhanced aviation certification consulting. 95%+ first-time DCT acceptance rate.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LCR Aero Group | Aviation Certification Consulting",
    description:
      "Former FAA inspectors delivering AI-enhanced aviation certification consulting.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${sora.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
        <Toaster position="bottom-right" />
        <AnalyticsProvider />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
