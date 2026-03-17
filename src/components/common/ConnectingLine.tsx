'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function ConnectingLine() {
  const [pathData, setPathData] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);
  const progressPathRef = useRef<SVGPathElement>(null);

  const [pageHeight, setPageHeight] = useState(0);

  // 1. Calculate path points and page height
  useEffect(() => {
    const updatePath = () => {
      setPageHeight(document.documentElement.scrollHeight);
      const sections = ['hero', 'identity', 'core-skills', 'portfolio', 'contact'];
      const points: { x: number; y: number }[] = [];

      sections.forEach((id, index) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const scrollY = window.scrollY;
          
          let xOffset;
          let yOffset;

          if (index === 0) {
            // Start point: Exactly matching HeroBackground exit (offsetWidth/2, bottom)
            xOffset = el.offsetWidth * 0.5;
            yOffset = rect.bottom + scrollY;
          } else if (index === sections.length - 1) {
            // End point: Center of Footer/Contact
            xOffset = el.offsetWidth * 0.5;
            yOffset = rect.top + scrollY + rect.height / 2;
          } else {
            // Alternate intermediate points
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
    };

    updatePath();
    const timer = setTimeout(updatePath, 1000); // More time for full layout stability
    
    // Show the line with a delay constant with Hero intro (3s)
    const introTimer = setTimeout(() => setIsVisible(true), 2900);

    window.addEventListener('resize', updatePath);
    return () => {
      window.removeEventListener('resize', updatePath);
      clearTimeout(timer);
      clearTimeout(introTimer);
    };
  }, []);

  // 2. Animate progress path on scroll
  useGSAP(
    () => {
      if (!pathData || !progressPathRef.current || !isVisible) return;

      const path = progressPathRef.current;
      const length = path.getTotalLength();

      // Initial state
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
        opacity: 0
      });

      // Drawing animation tied to scroll
      gsap.to(path, {
        strokeDashoffset: 0,
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.5,
        },
      });

      ScrollTrigger.refresh();
    },
    { dependencies: [pathData, isVisible], scope: svgRef },
  );

  return (
    <svg
      ref={svgRef}
      className={`absolute top-0 left-0 w-full pointer-events-none z-10 overflow-x-hidden transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
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
