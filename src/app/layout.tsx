import { ViewTransitions } from "next-view-transitions"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      {children}
    </ViewTransitions>
  );
}