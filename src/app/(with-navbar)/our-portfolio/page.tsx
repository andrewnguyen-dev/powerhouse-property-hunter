'use client'

import Image from "next/image";
import { useAnimationFrame } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { FiExternalLink } from "react-icons/fi";


// Portfolio items: combine image and Instagram link
const portfolioItems = [
  {
    src: "/portfolio/1.png",
    href: "https://instagram.com/thread/1",
  },
  {
    src: "/portfolio/2.png",
    href: "https://instagram.com/thread/2",
  },
  {
    src: "/portfolio/3.png",
    href: "https://instagram.com/thread/3",
  },
  {
    src: "/portfolio/4.png",
    href: "https://instagram.com/thread/4",
  },
  {
    src: "/portfolio/5.png",
    href: "https://instagram.com/thread/5",
  },
  {
    src: "/portfolio/6.png",
    href: "https://instagram.com/thread/6",
  },
  {
    src: "/portfolio/7.png",
    href: "https://instagram.com/thread/7",
  },
  {
    src: "/portfolio/8.png",
    href: "https://instagram.com/thread/8",
  },
];

const CarouselRow = ({ items, direction = 1, speed = 60 }: { items: { src: string; href: string }[]; direction?: 1 | -1; speed?: number }) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const x = useRef(0);
  const initialOffset = useRef(0);
  const [isPaused, setIsPaused] = useState(false);

  // Set initial offset for rightward scroll (direction = -1)
  useEffect(() => {
    if (!rowRef.current) return;
    const totalWidth = rowRef.current.scrollWidth / 2;
    if (direction === -1) {
      x.current = totalWidth;
      initialOffset.current = totalWidth;
      rowRef.current.style.transform = `translateX(${-x.current}px)`;
    } else {
      x.current = 0;
      initialOffset.current = 0;
      rowRef.current.style.transform = `translateX(0px)`;
    }
  }, [direction, items]);

  useAnimationFrame((t, delta) => {
    if (isPaused) return;
    if (!rowRef.current) return;
    const totalWidth = rowRef.current.scrollWidth / 2;
    x.current += (direction * speed * delta) / 1000;
    // Loop logic for both directions
    if (direction === 1 && x.current >= totalWidth) x.current -= totalWidth;
    if (direction === -1 && x.current <= 0) x.current += totalWidth;
    rowRef.current.style.transform = `translateX(${-x.current}px)`;
  });

  // Duplicate items for seamless loop
  return (
    <div className="overflow-hidden w-full">
      <div
        ref={rowRef}
        className="flex flex-row gap-2"
        style={{ willChange: "transform" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {[...items, ...items].map((item, idx) => {
          // Get the correct item for the image (modulo for duplicated items)
          const realIdx = idx % items.length;
          return (
            <a
              key={idx}
              href={items[realIdx].href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group block w-[300px] h-[300px]"
              style={{ minWidth: 300, minHeight: 300 }}
            >
              <Image
                src={items[realIdx].src}
                alt={`Portfolio ${realIdx + 1}`}
                width={300}
                height={300}
                className="object-cover w-full h-full"
                priority={idx === 0}
              />
              {/* Overlay */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                <span className="text-white text-base font-semibold mb-4 drop-shadow-lg flex items-center gap-2">
                  <FiExternalLink className="inline-block" size={16} />
                  View on Instagram
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

const PortfolioSection = () => {
  // Dynamically split items into two rows
  const half = Math.ceil(portfolioItems.length / 2);
  const firstRow = portfolioItems.slice(0, half);
  const secondRow = portfolioItems.slice(half);

  return (
    <section id="portfolio" className="section bg-white text-primary">
      <div className="section-inner">
        <h1>Our Portfolio</h1>
        <div id="portfolio-items" className="flex flex-col gap-4 max-w-full">
          <CarouselRow items={firstRow} direction={1} speed={60} />
          <CarouselRow items={secondRow} direction={-1} speed={60} />
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
