'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

export default function HeroBackground() {
  const particles = useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      id: i,
      cx: Math.random() * 1000,
      cy: Math.random() * 1000,
      r: Math.random() * 2 + 1,
      duration: Math.random() * 5 + 5,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <svg
        className="w-full h-full opacity-[0.4]"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="line-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor="var(--color-brand-blue)"
              stopOpacity="0.2"
            />
            <stop
              offset="50%"
              stopColor="var(--color-brand-blue)"
              stopOpacity="0.5"
            />
            <stop
              offset="100%"
              stopColor="var(--color-brand-blue)"
              stopOpacity="0.2"
            />
          </linearGradient>
        </defs>

        {/* Flowing Lines inspired by the image */}
        <motion.path
          d="M-100,200 C150,150 350,450 600,300 C850,150 1100,400 1100,400"
          fill="none"
          stroke="url(#line-gradient)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, ease: 'easeInOut' }}
        />

        <motion.path
          d="M-50,600 C200,500 400,800 650,550 C900,300 1050,600 1150,500"
          fill="none"
          stroke="url(#line-gradient)"
          strokeWidth="1.2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3.5, ease: 'easeInOut', delay: 0.5 }}
        />

        <motion.path
          d="M200,-100 C150,200 450,400 300,650 C150,900 400,1150 400,1150"
          fill="none"
          stroke="url(#line-gradient)"
          strokeWidth="1.2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 4, ease: 'easeInOut', delay: 1 }}
        />

        <motion.path
          d="M800,-50 C700,250 1000,450 750,700 C500,950 800,1100 800,1100"
          fill="none"
          stroke="url(#line-gradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 4.5, ease: 'easeInOut', delay: 1.5 }}
        />
      </svg>
    </div>
  );
}
