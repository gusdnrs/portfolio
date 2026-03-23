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
  const svgRef = useRef<SVGSVGElement>(null);
  const progressPathRef = useRef<SVGPathElement>(null);
  const [pageHeight, setPageHeight] = useState(0);

  // 1. Calculate path points and page height with ResizeObserver
  useEffect(() => {
    if (isSubPage) return;

    const updatePath = () => {
      // Use offsetHeight which is more reliable during layout shifts than scrollHeight
      const bodyHeight = Math.max(
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      );
      setPageHeight(bodyHeight);

      // Updated sections list
      const sections = ['hero', 'identity', 'portfolio', 'portfolio-sub-projects', 'contact-main-card'];
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
          } else if (id === 'contact-main-card') {
            // Contact Card: Center top (connection point)
            xOffset = window.innerWidth * 0.5;
            yOffset = rect.top + scrollY;
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
      
      // 레이아웃 변경 시 ScrollTrigger 갱신 (디바운스 고려 가능하나 여기서는 단순 호출)
      ScrollTrigger.refresh();
    };

    // Initial calculation
    updatePath();

    // ResizeObserver for dynamic height changes (images results, etc.)
    const resizeObserver = new ResizeObserver(() => {
      updatePath();
    });
    resizeObserver.observe(document.body);

    const introTimer = setTimeout(() => setIsVisible(true), 2900);

    const handleResize = () => {
      // Small delay to allow layout to settle (header menu closing, etc.)
      setTimeout(updatePath, 150);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
      clearTimeout(introTimer);
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
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.5,
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
      className={`absolute top-0 left-0 w-full pointer-events-none z-1 overflow-x-hidden transition-opacity duration-700 ${isVisible ? 'opacity-40' : 'opacity-0'}`}
      style={{ height: `${pageHeight}px` }}
    >
      <path
        ref={progressPathRef}
        d={pathData}
        fill="none"
        stroke="#3a59d1"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ filter: 'drop-shadow(0 0 8px rgba(58, 89, 209, 0.4))' }}
      />
    </svg>
  );
}
