'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText } from 'lucide-react';
import ScrollIndicator from '@/components/ui/ScrollIndicator';

// 타이핑 애니메이션 훅
function useTypingEffect(
  texts: string[],
  speed = 80,
  pause = 2000,
) {
  const [display, setDisplay] = useState('');
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[idx];

    if (!deleting && charIdx < current.length) {
      const t = setTimeout(
        () => {
          setDisplay(current.slice(0, charIdx + 1));
          setCharIdx(c => c + 1);
        },
        speed,
      );
      return () => clearTimeout(t);
    }

    if (!deleting && charIdx === current.length) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }

    if (deleting && charIdx > 0) {
      const t = setTimeout(
        () => {
          setDisplay(current.slice(0, charIdx - 1));
          setCharIdx(c => c - 1);
        },
        speed / 2,
      );
      return () => clearTimeout(t);
    }

    if (deleting && charIdx === 0) {
      setDeleting(false);
      setIdx(i => (i + 1) % texts.length);
    }
  }, [charIdx, deleting, idx, texts, speed, pause]);

  return display;
}

export default function Hero() {
  const typed = useTypingEffect([
    '웹 퍼블리셔',
    '프론트엔드 개발자',
    'UI 엔지니어',
  ]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center
        justify-center overflow-hidden noise-overlay"
    >
      {/* 그리드 패턴 배경 */}
      <div className="absolute inset-0 grid-pattern" />

      {/* 그라데이션 오브 */}
      <div
        className="absolute top-1/4 left-1/2
          -translate-x-1/2 -translate-y-1/2
          w-[600px] h-[600px] rounded-full
          bg-accent/5 blur-[120px]
          pointer-events-none"
      />

      {/* 콘텐츠 */}
      <div className="relative z-10 section-container
        text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* 인사 */}
          <motion.p
            className="font-mono-custom text-sm md:text-base
              text-text-tertiary mb-4 tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            안녕하세요, 저는
          </motion.p>

          {/* 이름 */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl
              font-bold text-text-primary mb-4
              leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            임현욱
          </motion.h1>

          {/* 타이핑 직무 */}
          <motion.div
            className="h-12 md:h-14 flex items-center
              justify-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <span className="font-mono-custom text-xl
              md:text-2xl lg:text-3xl text-text-secondary">
              {typed}
              <span className="inline-block w-[2px] h-[1em]
                bg-accent ml-1 animate-pulse" />
            </span>
          </motion.div>

          {/* 소개 카피 */}
          <motion.p
            className="text-text-tertiary text-base
              md:text-lg max-w-xl mx-auto mb-10
              leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            5년간 37개+ 프로젝트를 통해 쌓은 퍼블리싱 역량으로,
            <br className="hidden md:block" />
            픽셀 하나까지 섬세하게 구현합니다.
          </motion.p>

          {/* CTA 버튼 */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4
              justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <button
              onClick={() =>
                document
                  .getElementById('projects')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-8 py-3.5 rounded-full bg-accent
                text-bg-primary font-semibold text-sm
                hover:opacity-90 transition-opacity
                flex items-center justify-center gap-2
                cursor-pointer"
            >
              <ArrowDown size={16} />
              프로젝트 보기
            </button>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full
                border border-border-secondary
                text-text-secondary font-semibold text-sm
                hover:border-accent hover:text-text-primary
                transition-all
                flex items-center justify-center gap-2"
            >
              <FileText size={16} />
              연락하기
            </a>
          </motion.div>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
