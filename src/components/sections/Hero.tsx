'use client';

import { useRef } from 'react';
import HeroBackground from './HeroBackground';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.from('.hero-title-main', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
      }).from(
        '.hero-subtitle',
        {
          y: 20,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        },
        '-=0.8',
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white pt-20"
      ref={containerRef}
    >
      <HeroBackground />
      
      <div className="relative z-10 text-center px-4 max-w-[1440px] mx-auto">
        <div className="hero-title-wrapper mb-8 md:mb-12">
          <h1 className="hero-title-main font-en text-[clamp(2.5rem,11vw,9rem)] xl:text-[9.5rem] font-black leading-[0.85] tracking-tighter text-brand-blue-dark select-none uppercase">
            <span className="text-brand-blue">IM</span> HYUNWOOK
          </h1>
        </div>

        <div className="hero-subtitle-wrapper flex flex-col items-center gap-4">
          <p className="hero-subtitle text-lg md:text-2xl pt-2 font-medium tracking-tight text-gray-700 leading-relaxed">
            기획의 아이디어와 사용자의 경험을 코드로 잇는&nbsp;
            <span className="inline-block">
              <span className="text-brand-blue font-bold">임현욱</span>입니다.
            </span>
          </p>
        </div>
      </div>

      {/* Scroll indicator - Removed for minimalist aesthetic */}
    </section>
  );
}
