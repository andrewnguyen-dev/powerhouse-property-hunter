import { ViewTransitions } from "next-view-transitions"
import { Analytics } from "@vercel/analytics/next"

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