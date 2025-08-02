/* eslint-disable @next/next/no-img-element */
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
  const [loading, setLoading] = useState(false);
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    // Only show preloader if not visited before
    const hasVisited = typeof window !== 'undefined' && localStorage.getItem('hasVisited');
    if (!hasVisited) {
      setLoading(true);
      setShowPreloader(true);
      const timer = setTimeout(() => setLoading(false), 1000);
      return () => clearTimeout(timer);
    }
    // If already visited, skip preloader
    setLoading(false);
    setShowPreloader(false);
  }, []);

  // When loading becomes false, wait for fade-out before unmounting Preloader
  useEffect(() => {
    if (!loading && showPreloader) {
      // Set flag so preloader won't show again
      if (typeof window !== 'undefined') {
        localStorage.setItem('hasVisited', 'true');
      }
      const timeout = setTimeout(() => setShowPreloader(false), 1000); // match fade duration
      return () => clearTimeout(timeout);
    }
  }, [loading, showPreloader]);

  return (
    <>
      {showPreloader && <Preloader fadeOut={!loading} />}
      <section
        id="hero"
        className="relative h-screen text-white"
        style={{
          backgroundImage: 'url(/bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 pointer-events-none z-0" />

        {/* Logo at top left */}
        <div className='flex pt-12 pl-12'>
          <div className="flex items-center justify-center overflow-hidden z-10">
            <img
              src="/logo-pph-with-text.png"
              alt="PPH Logo"
              style={{ objectFit: 'contain' }}
              className="h-24"
            />
          </div>
        </div>

        {/* Nav at bottom left */}
        <nav className={`absolute bottom-12 left-12 ${oswald.className} font-bold z-10`}>
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