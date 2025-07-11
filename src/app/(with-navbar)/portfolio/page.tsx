'use client'

import Image from "next/image";
import { Marquee } from "@/components/magicui/marquee";


// Portfolio items: combine image and Instagram link
const portfolioItems = [
  {
    src: "/portfolio/01.jpg",
    href: "https://instagram.com/thread/1",
  },
  {
    src: "/portfolio/02.jpg",
    href: "https://instagram.com/thread/2",
  },
  {
    src: "/portfolio/03.jpg",
    href: "https://instagram.com/thread/3",
  },
  {
    src: "/portfolio/04.jpg",
    href: "https://instagram.com/thread/4",
  },
  {
    src: "/portfolio/05.png",
    href: "https://instagram.com/thread/5",
  },
  {
    src: "/portfolio/06.png",
    href: "https://instagram.com/thread/6",
  },
  {
    src: "/portfolio/07.png",
    href: "https://instagram.com/thread/7",
  },
  {
    src: "/portfolio/08.png",
    href: "https://instagram.com/thread/8",
  },
  {
    src: "/portfolio/09.png",
    href: "https://instagram.com/thread/1",
  },
  {
    src: "/portfolio/10.png",
    href: "https://instagram.com/thread/2",
  },
  {
    src: "/portfolio/11.png",
    href: "https://instagram.com/thread/3",
  },
  {
    src: "/portfolio/12.png",
    href: "https://instagram.com/thread/4",
  },
  {
    src: "/portfolio/13.png",
    href: "https://instagram.com/thread/5",
  },
  {
    src: "/portfolio/14.png",
    href: "https://instagram.com/thread/6",
  },
  {
    src: "/portfolio/15.png",
    href: "https://instagram.com/thread/7",
  },
  {
    src: "/portfolio/16.png",
    href: "https://instagram.com/thread/8",
  },
  {
    src: "/portfolio/17.jpg",
    href: "https://instagram.com/thread/7",
  },
  {
    src: "/portfolio/18.jpg",
    href: "https://instagram.com/thread/8",
  },
];


const PortfolioCard = ({ src, href, alt }: { src: string; href: string; alt: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="relative block w-[300px] h-[300px] cursor-pointer overflow-hidden rounded-xs border"
    style={{ minWidth: 300, minHeight: 300 }}
  >
    <Image
      src={src}
      alt={alt}
      width={300}
      height={300}
      className="object-cover w-full h-full transition-all duration-300 hover:scale-105"
      priority={false}
    />
  </a>
);


const PortfolioSection = () => {
  // Dynamically split items into two rows
  const half = Math.ceil(portfolioItems.length / 2);
  const firstRow = portfolioItems.slice(0, half);
  const secondRow = portfolioItems.slice(half);

  return (
    <main id="portfolio" className="section bg-white text-primary">
      <div className="section-inner">
        <h1>Portfolio</h1>
        <div className="relative flex w-full max-w-screen overflow-x-hidden flex-col items-center justify-center gap-4">
          <Marquee pauseOnHover className="[--duration:30s] w-full max-w-screen-xl">
            {firstRow.map((item, idx) => (
              <PortfolioCard key={item.src} src={item.src} href={item.href} alt={`Portfolio ${idx + 1}`} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:30s] w-full max-w-screen-xl">
            {secondRow.map((item, idx) => (
              <PortfolioCard key={item.src} src={item.src} href={item.href} alt={`Portfolio ${half + idx + 1}`} />
            ))}
          </Marquee>
          {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/8 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/8 bg-gradient-to-l from-background"></div> */}
        </div>
      </div>
    </main>
  );
};

export default PortfolioSection;
