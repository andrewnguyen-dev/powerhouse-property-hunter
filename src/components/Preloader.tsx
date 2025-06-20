
import Image from 'next/image';

import { useEffect, useState } from 'react';

const Preloader = ({ fadeOut = false }: { fadeOut?: boolean }) => {
  const [percent, setPercent] = useState(1);

  useEffect(() => {
    if (fadeOut) return;
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev < 100) {
          return prev + 1;
        }
        clearInterval(interval);
        return 100;
      });
    }, 10); // 100 * 10ms = 1s
    return () => clearInterval(interval);
  }, [fadeOut]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-1000 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      aria-label="Loading"
    >
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/logo-pph.png"
          alt="PPH Logo"
          width={120}
          height={120}
          className="breathing-logo select-none"
          draggable={false}
          priority
        />
        <span className="mt-6 text-white text-lg font-semibold tracking-widest animate-pulse">Loading {percent}%</span>
      </div>
      <style jsx global>{`
        .breathing-logo {
          animation: breathing 2.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        @keyframes breathing {
          0% { transform: scale(1); opacity: 0.90; }
          30% { transform: scale(1.06); opacity: 0.72; }
          50% { transform: scale(0.98); opacity: 0.50; }
          70% { transform: scale(1.08); opacity: 0.80; }
          100% { transform: scale(1); opacity: 1.00; }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
