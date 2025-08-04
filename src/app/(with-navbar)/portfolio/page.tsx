'use client'

import Image from "next/image";
import { Marquee } from "@/components/magicui/marquee";


// Portfolio items: combine image and Instagram link
const portfolioItems = [
  {
    src: "/portfolio/02.jpg",
    href: "https://instagram.com/thread/1",
  },
  {
    src: "/portfolio/04.jpg",
    href: "https://instagram.com/thread/3",
  },
  {
    src: "/portfolio/05.jpg",
    href: "https://instagram.com/thread/5",
  },
  {
    src: "/portfolio/06.jpg",
    href: "https://instagram.com/thread/6",
  },
  {
    src: "/portfolio/07.jpg",
    href: "https://instagram.com/thread/7",
  },
  {
    src: "/portfolio/08.jpg",
    href: "https://instagram.com/thread/8",
  },
  {
    src: "/portfolio/09.jpg",
    href: "https://instagram.com/thread/1",
  },
  {
    src: "/portfolio/10.jpg",
    href: "https://instagram.com/thread/2",
  },
  {
    src: "/portfolio/11.jpg",
    href: "https://instagram.com/thread/3",
  },
  {
    src: "/portfolio/12.jpg",
    href: "https://instagram.com/thread/4",
  },
  {
    src: "/portfolio/13.jpg",
    href: "https://instagram.com/thread/5",
  },
  {
    src: "/portfolio/14.jpg",
    href: "https://instagram.com/thread/6",
  },
  {
    src: "/portfolio/15.jpg",
    href: "https://instagram.com/thread/7",
  },
  {
    src: "/portfolio/16.jpg",
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
  {
    src: "/portfolio/19.jpg",
    href: "https://instagram.com/thread/8",
  },
  {
    src: "/portfolio/20.jpg",
    href: "https://instagram.com/thread/8",
  },
  {
    src: "/portfolio/21.jpg",
    href: "https://instagram.com/thread/8",
  },
  {
    src: "/portfolio/22.jpg",
    href: "https://instagram.com/thread/8",
  },
  {
    src: "/portfolio/23.jpg",
    href: "https://instagram.com/thread/8",
  },
  {
    src: "/portfolio/24.jpg",
    href: "https://instagram.com/thread/8",
  },
  {
    src: "/portfolio/25.jpg",
    href: "https://instagram.com/thread/8",
  },
  {
    src: "/portfolio/26.jpg",
    href: "https://instagram.com/thread/8",
  },
  {
    src: "/portfolio/27.jpg",
    href: "https://instagram.com/thread/8",
  },
  {
    src: "/portfolio/28.jpg",
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
              <PortfolioCard key={item.src} src={item.src} href="#" alt={`Portfolio ${idx + 1}`} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:30s] w-full max-w-screen-xl">
            {secondRow.map((item, idx) => (
              <PortfolioCard key={item.src} src={item.src} href="#" alt={`Portfolio ${half + idx + 1}`} />
            ))}
          </Marquee>
          {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/8 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/8 bg-gradient-to-l from-background"></div> */}
        </div>
        <div className="mt-32">
          <h2 className="text-4xl font-bold uppercase mb-6">Past History</h2>
          <ul>
            <li><span className="mr-2">•</span>Paddington House - $2,823,000</li>
            <li><span className="mr-2">•</span>Randwick Medical - $1,407,000</li>
            <li><span className="mr-2">•</span>Point Piper Apartment - $3,212,000</li>
            <li><span className="mr-2">•</span>Edgecliff House - $5,836,000</li>
            <li><span className="mr-2">•</span>45 Industrial Strata Sheds - $33,750,000 (combined)</li>
            <li><span className="mr-2">•</span>Farm - 8,648 acres - $35,653,000</li>
            <li><span className="mr-2">•</span>Land Development - 2,225 lots - $32,200,000</li>
            <li><span className="mr-2">•</span>Winery - Hunter Valley - $15,888,000</li>
            <li><span className="mr-2">•</span>Robertson - 200 acres - $7,212,000</li>
            <li><span className="mr-2">•</span>Luggate – 19 acres - $1,325,000</li>
            <li><span className="mr-2">•</span>Industrial Land - $12,300,120</li>
            <li><span className="mr-2">•</span>Tumut - 300 acres - $1,500,000</li>
            <li><span className="mr-2">•</span>Robertson - 101 acres - $6,130,000</li>
            <li><span className="mr-2">•</span>Orchad Hills - $22,000,000</li>
            <li><span className="mr-2">•</span>Goulburn - 400 acrea - $6,560,000</li>
            <li><span className="mr-2">•</span>Potts Pott - Commercial Fitness - $1,201,000</li>
            <li><span className="mr-2">•</span>Robertson – House Estate - $2,980,000</li>
            <li><span className="mr-2">•</span>Wanaka - Commercial - $350,000</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default PortfolioSection;
