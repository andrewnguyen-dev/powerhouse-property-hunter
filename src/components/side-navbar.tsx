'use client';

import { navLinks } from '@/constants/navLinks';
import { Oswald } from "next/font/google";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const oswald = Oswald({ subsets: ["latin"] });

const SideNavbar = () => {
  const pathname = usePathname();
  return (
    <ul className={`${oswald.className} font-medium text-xl w-0 opacity-0 sm:opacity-100 sm:w-40 sm:pl-5 sm:pb-12 md:text-2xl md:w-64 md:pl-12 uppercase transition-all duration-300`}>
      <li>
        <Link href="/" className='text-white opacity-50 hover:opacity-80 text-[18px]'>{`<`} Back</Link>
      </li>
      {navLinks.map((link) => {
        // For hash links, check window.location.hash if on client, else fallback to pathname
        let isActive = false;
        // Remove '#' from link.href for pathname check
        const hrefNoHash = link.href.startsWith('#') ? link.href.slice(1) : link.href;
        isActive = pathname.includes(hrefNoHash) || (typeof window !== 'undefined' && window.location.hash === link.href);
        return (
          <li key={link.href}>
            <a
              href={link.href}
              className={`text-white transition-opacity duration-200 ${isActive ? 'opacity-100' : 'opacity-50 hover:opacity-80'}`}
            >
              {link.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default SideNavbar;