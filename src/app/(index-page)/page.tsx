'use client';
import { useEffect, useState } from 'react';
import Preloader from '@/components/Preloader';
import Image from 'next/image';
import { Oswald } from "next/font/google";
import { navLinks } from '@/constants/navLinks';
import { useTransitionRouter } from "next-view-transitions";

const oswald = Oswald({ subsets: ["latin"] });

const HeroSection = () => {
  const router = useTransitionRouter();
  const [loading, setLoading] = useState(true);
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // When loading becomes false, wait for fade-out before unmounting Preloader
  useEffect(() => {
    if (!loading) {
      const timeout = setTimeout(() => setShowPreloader(false), 1000); // match fade duration
      return () => clearTimeout(timeout);
    } else {
      setShowPreloader(true);
    }
  }, [loading]);

  return (
    <>
      {showPreloader && <Preloader fadeOut={!loading} />}
      <section id="hero" className="bg-black/90 text-white h-screen relative">
        {/* Logo at top left */}
        <div className="w-24 h-24 flex items-center justify-center absolute top-12 left-12 overflow-hidden">
          <Image
            src="/logo-pph.png"
            alt="PPH Logo"
            fill
            style={{ objectFit: 'contain' }}
            draggable={false}
            priority
          />
        </div>

        {/* Nav at bottom left */}
        <nav className={`absolute bottom-12 left-12 ${oswald.className} font-bold`}>
          <ul className="flex flex-col w-full">
            {navLinks.map((link) => (
              <li key={link.href} className="w-full">
                <a
                  href={link.href}
                  className="nav-link text-white mix-blend-difference uppercase text-[clamp(2rem,15vw,10rem)] leading-none tracking-tight font-extrabold hover:font-medium hover:tracking-wide transform transition-all duration-300 ease-in-out"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push(link.href, {
                      onTransitionReady: pageAnimation,
                    });
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </>
  );
}

const pageAnimation = () => {
  document.documentElement.animate(
    [
      { 
        opacity: 1,
        scale: 1,
        transform: 'translateX(0px)'
      },
      {
        opacity: 0.5,
        scale: 1,
        transform: 'translateX(-100px)'
      }
    ],
    {
      duration: 1000,
      easing: 'cubic-bezier(0.76, 0, 0.24, 1)',
      fill: 'forwards',
      pseudoElement: '::view-transition-old(root)',
    }
  )

  document.documentElement.animate(
    [
      { 
        transform: 'translateX(100%)'
      },
      {
        transform: 'translateX(0)'
      }
    ],
    {
      duration: 1000,
      easing: 'cubic-bezier(0.76, 0, 0.24, 1)',
      fill: 'forwards',
      pseudoElement: '::view-transition-new(root)',
    }
  )
};

export default HeroSection