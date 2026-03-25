'use client';

import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function GSAPProvider({ children }: { children: React.ReactNode }) {
  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      // 디버깅을 위해 전역 노출
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).gsap = gsap;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).ScrollTrigger = ScrollTrigger;

      // 초기 리프레시
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, []);

  return <>{children}</>;
}
