import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions"
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "Powerhouse Property Hunter",
  description: "Professional property hunting and real estate services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      {children}
      <Analytics />
    </ViewTransitions>
  );
}