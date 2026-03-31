'use client';

import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// 전역 초기화(GSAPInitializer)에서 처리되므로 registerPlugin 생략

export default function ConnectingLine() {
  const pathname = usePathname();
  const isSubPage = pathname.startsWith('/project/');

  const [pathData, setPathData] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);
  const progressPathRef = useRef<SVGPathElement>(null);

  // Check for mobile on mount
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 1. Calculate path points with ResizeObserver
  useEffect(() => {
    if (isSubPage) return;

    let timeoutId: NodeJS.Timeout;
    const updatePath = () => {
      // Updated sections list
      const sections = ['hero', 'identity', 'portfolio', 'contact'];
      const points: { x: number; y: number }[] = [];

      sections.forEach((id, index) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const scrollY = window.scrollY;

          let xOffset;
          let yOffset;

          if (index === 0) {
            // Hero: Center bottom
            xOffset = el.offsetWidth * 0.5;
            yOffset = rect.bottom + scrollY;
          } else if (index === sections.length - 1) {
            // Last Section (Contact): Target a point deep enough to be behind the card
            xOffset = window.innerWidth * 0.5;
            yOffset = rect.top + scrollY + 500;
          } else {
            // Middle sections: Alternating sides
            const isEven = index % 2 === 0;
            xOffset = isEven
              ? window.innerWidth * 0.15
              : window.innerWidth * 0.85;
            yOffset = rect.top + scrollY + rect.height / 2;
          }

          points.push({ x: xOffset, y: yOffset });
        }
      });

      if (points.length > 1) {
        let d = `M ${points[0].x} ${points[0].y}`;
        for (let i = 0; i < points.length - 1; i++) {
          const p0 = points[i];
          const p1 = points[i + 1];
          const midY = (p0.y + p1.y) / 2;
          d += ` C ${p0.x} ${midY}, ${p1.x} ${midY}, ${p1.x} ${p1.y}`;
        }
        setPathData(d);
      }

      // Debounce ScrollTrigger.refresh()
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    };

    // Initial calculation
    updatePath();

    // ResizeObserver for dynamic height changes
    const resizeObserver = new ResizeObserver(() => {
      updatePath();
    });
    resizeObserver.observe(document.body);

    const introTimer = setTimeout(() => setIsVisible(true), 2900);

    return () => {
      resizeObserver.disconnect();
      clearTimeout(introTimer);
      clearTimeout(timeoutId);
    };
  }, [isSubPage]);

  // 2. Animate progress path on scroll
  useGSAP(
    () => {
      if (!pathData || !progressPathRef.current || !isVisible) return;

      const path = progressPathRef.current;
      const length = path.getTotalLength();

      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
        opacity: 0,
      });

      gsap.to(path, {
        strokeDashoffset: 0,
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: typeof document !== 'undefined' ? document.documentElement : 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.1,
          invalidateOnRefresh: true,
        },
      });
    },
    { dependencies: [pathData, isVisible], scope: svgRef },
  );

  if (isSubPage) return null;

  return (
    <svg
      ref={svgRef}
      className={`absolute top-0 left-0 w-full h-full pointer-events-none z-1 overflow-x-hidden transition-opacity duration-700 ${isVisible ? 'opacity-40' : 'opacity-0'}`}
    >
      <path
        ref={progressPathRef}
        d={pathData}
        fill="none"
        stroke="#3a59d1"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          filter: isMobile
            ? 'none'
            : 'drop-shadow(0 0 8px rgba(58, 89, 209, 0.4))',
          willChange: 'stroke-dashoffset',
        }}
      />
    </svg>
  );
}
