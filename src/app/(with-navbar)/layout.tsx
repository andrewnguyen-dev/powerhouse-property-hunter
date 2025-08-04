import { Open_Sans } from "next/font/google";
import { Geologica } from "next/font/google";
import "../globals.css";
import SideNavbar from "@/components/side-navbar";
import BottomNavbar from "@/components/bottom-navbar";

const openSans = Open_Sans({ subsets: ["latin"] });
const geologica = Geologica({ subsets: ["latin"], variable: "--font-geologica" });

export default function WithNavbarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${openSans.className} antialiased flex flex-col sm:flex-row`}>
        {/* Side navbar for desktop/tablet */}
        <nav className="hidden sm:flex flex-col justify-end h-full bg-black/90 sticky top-0 left-0 z-30 min-h-screen">
          <SideNavbar />
        </nav>
        {/* Bottom navbar for mobile */}
        <BottomNavbar />
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}
