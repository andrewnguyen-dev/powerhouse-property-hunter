'use client'

import { navLinks } from '@/constants/navLinks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const BottomNavbar = () => {
  const pathname = usePathname();
  return (
    <nav className="sm:hidden fixed bottom-0 left-0 w-full bg-gray-200 z-40 flex justify-around items-center py-2 border-t border-gray-300">
      {navLinks.map((link) => {
        // Remove '#' from link.href for pathname check
        const hrefNoHash = link.href.startsWith('#') ? link.href.slice(1) : link.href;
        const isActive = pathname.includes(hrefNoHash) || (typeof window !== 'undefined' && window.location.hash === link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`flex-1 text-center font-bold uppercase px-2 transition-opacity ${isActive ? 'text-black opacity-100' : 'text-black/60 hover:opacity-100'}`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default BottomNavbar;
