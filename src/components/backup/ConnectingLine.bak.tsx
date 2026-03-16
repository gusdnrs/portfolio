'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function ConnectingLine() {
  const [pathData, setPathData] = useState<string>('');
  const svgRef = useRef<SVGSVGElement>(null);
  const bgPathRef = useRef<SVGPathElement>(null);
  const progressPathRef = useRef<SVGPathElement>(null);

  // 1. Calculate path points
  useEffect(() => {
    const updatePath = () => {
      const sections = ['hero', 'about', 'expertise', 'work', 'contact'];
      const points: { x: number; y: number }[] = [];

      sections.forEach((id, index) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const scrollY = window.scrollY;
          
          let xOffset;
          if (index === 0 || index === sections.length - 1) {
            // Center start and end points
            xOffset = window.innerWidth * 0.5;
          } else {
            // Alternate intermediate points
            const isEven = index % 2 === 0;
            xOffset = isEven
              ? window.innerWidth * 0.15
              : window.innerWidth * 0.85;
          }

          points.push({
            x: xOffset,
            y: rect.top + scrollY + rect.height / 2,
          });
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
    const timer = setTimeout(updatePath, 500); // Wait for potential layout shifts
    window.addEventListener('resize', updatePath);
    return () => {
      window.removeEventListener('resize', updatePath);
      clearTimeout(timer);
    };
  }, []);

  // 2. Animate progress path on scroll
  useGSAP(
    () => {
      if (!pathData || !progressPathRef.current) return;

      const path = progressPathRef.current;
      const length = path.getTotalLength();

      // Initial state
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      // Drawing animation
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.5, // Faster scrub for direct feedback
          onUpdate: (self) => {
            // Add gradual opacity fade as a bonus "painting" feel
            // The line gets more "intense" as it's drawn
            gsap.set(path, { opacity: Math.min(1, self.progress * 1.5) });
          },
        },
      });

      // Refresh ScrollTrigger to ensure lengths are matched
      ScrollTrigger.refresh();
    },
    { dependencies: [pathData], scope: svgRef },
  );

  return (
    <svg
      ref={svgRef}
      className="absolute top-0 left-0 w-full pointer-events-none z-10"
      style={{ height: '100%' }}
    >
      <defs>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      {/* Blueprint background path (faint) */}
      <path
        ref={bgPathRef}
        d={pathData}
        fill="none"
        stroke="#3a59d1"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="opacity-0"
      />
      {/* Progress path (painted) */}
      <path
        ref={progressPathRef}
        d={pathData}
        fill="none"
        stroke="#3a59d1"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ filter: 'drop-shadow(0 0 8px rgba(58, 89, 209, 0.4))' }}
      />
    </svg>
  );
}
