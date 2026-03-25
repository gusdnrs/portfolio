'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export default function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [introPath, setIntroPath] = useState<string>('');

  useEffect(() => {
    if (!containerRef.current) return;

    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();
    const observer = new ResizeObserver(updateDimensions);
    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const { width, height } = dimensions;
    if (width === 0 || height === 0) return;

    const points: [number, number][] = [];
    const numPoints = 8;
    
    // 1. Start: Randomly from top
    points.push([100 + Math.random() * (width - 200), -50]);
    
    // 2. Intermediate points
    for (let i = 0; i < numPoints; i++) {
        points.push([
            50 + Math.random() * (width - 100),
            Math.random() * (height * 0.8)
        ]);
    }
    
    // 3. Final points: Precise exit (Center Bottom)
    points.push([width / 2, height * 0.9]);
    points.push([width / 2, height]);

    let d = `M ${points[0][0]},${points[0][1]}`;
    for (let i = 0; i < points.length - 1; i++) {
      const curr = points[i];
      const next = points[i + 1];
      const dist = Math.sqrt(Math.pow(next[0] - curr[0], 2) + Math.pow(next[1] - curr[1], 2));
      const cpDist = dist * 0.5;
      
      const cp1x = curr[0];
      const cp1y = curr[1] + cpDist; 
      const cp2x = next[0];
      const cp2y = next[1] - cpDist;

      d += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${next[0]},${next[1]}`;
    }
    
    // Use requestAnimationFrame to avoid synchronous cascading render warning in React 19
    const frame = requestAnimationFrame(() => {
      setIntroPath(d);
    });
    return () => cancelAnimationFrame(frame);
  }, [dimensions]);

  if (!introPath) return <div ref={containerRef} className="absolute inset-0 pointer-events-none" />;

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <svg
        className="w-full h-full opacity-[0.6] overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
      >
        <defs>
          <linearGradient id="intro-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3a59d1" stopOpacity="0" />
            <stop offset="10%" stopColor="#3a59d1" stopOpacity="0.4" />
            <stop offset="90%" stopColor="#3a59d1" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#3a59d1" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Outer glow for neon effect */}
        <motion.path
          d={introPath}
          fill="none"
          stroke="#3a59d1"
          strokeWidth="10"
          strokeLinecap="round"
          className="blur-xl opacity-20"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: 'easeInOut' }}
        />

        {/* Middle glow */}
        <motion.path
          d={introPath}
          fill="none"
          stroke="#3a59d1"
          strokeWidth="4"
          strokeLinecap="round"
          className="blur-md opacity-40"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: 'easeInOut' }}
        />

        {/* The Core Intro Line */}
        <motion.path
          d={introPath}
          fill="none"
          stroke="url(#intro-gradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
}
