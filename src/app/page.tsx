'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SplashScreen = () => {
  const router = useRouter();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeOut(true), 2000); // Start fade-out after 2s
    setTimeout(() => router.push('/home'), 2500); // Navigate to home after 2.5s
  }, [router]);

  return (
    <div className={`flex justify-center items-center h-screen bg-black transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <Image 
        src="/images/playhamster.png"
        alt="PlayHamster logo"
        width={200} 
        height={200} 
        className="neon-glow"
      />

      {/* Custom CSS for Neon Glow Animation */}
      <style jsx>{`
        @keyframes neonPulse {
          0% { filter: drop-shadow(0px 0px 5px red); }
          50% { filter: drop-shadow(0px 0px 15px red); }
          100% { filter: drop-shadow(0px 0px 5px red); }
        }

        .neon-glow {
          animation: neonPulse 1.5s infinite alternate;
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
