import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions"
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "Powerhouse Property Hunter | Specialist Buyers' Agent for Medical Professionals",
  description: "Powerhouse Property Hunter helps doctors and healthcare professionals acquire, develop, and invest in high-growth medical and healthcare properties across Australia and New Zealand. Expert guidance, end-to-end service, and a proven portfolio."
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