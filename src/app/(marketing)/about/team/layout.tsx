import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expert Team — Former FAA Inspectors",
  description:
    "Meet the LCR Aero Group team: 12 subject matter experts with 400+ combined years of aviation experience, including 230+ years of direct FAA service.",
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
