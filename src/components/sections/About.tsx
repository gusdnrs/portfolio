'use client';

import { motion } from 'framer-motion';
import { Briefcase, Code, FolderOpen } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';

const stats = [
  {
    icon: FolderOpen,
    value: '37+',
    label: '프로젝트',
  },
  {
    icon: Briefcase,
    value: '5년+',
    label: '경력',
  },
  {
    icon: Code,
    value: '2',
    label: '회사',
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' as const },
};

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="section-container">
        <SectionTitle
          title="About Me"
          subtitle="소개"
        />

        <div className="grid md:grid-cols-5 gap-12
          md:gap-16 items-start">
          {/* 텍스트 영역 (3열) */}
          <motion.div
            className="md:col-span-3 space-y-6"
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-text-secondary
              leading-relaxed">
              안녕하세요.{' '}
              <strong className="text-text-primary">
                웹 퍼블리셔 / 프론트엔드 개발자 임현욱
              </strong>
              입니다.
            </p>
            <p className="text-text-tertiary leading-relaxed">
              5년간 병원·기업 웹사이트 37개 이상의 프로젝트를
              퍼블리싱하며, 반응형 레이아웃과 크로스 브라우저
              호환성, 인터랙티브 UI 구현에 깊은 경험을
              쌓았습니다.
            </p>
            <p className="text-text-tertiary leading-relaxed">
              디자인 시안을 정확하게 구현하는 것을 넘어,
              사용자 경험을 고려한 섬세한 인터랙션과
              유지보수 가능한 코드 구조를 지향합니다.
              최근에는 React/Next.js 기반의 모던 프론트엔드
              개발에 집중하고 있습니다.
            </p>
          </motion.div>

          {/* 수치 카드 (2열) */}
          <div className="md:col-span-2 grid grid-cols-3
            md:grid-cols-1 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="p-6 rounded-2xl bg-bg-card
                  border border-border-primary
                  text-center md:text-left
                  hover:border-border-secondary
                  transition-colors"
                {...fadeInUp}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + i * 0.1,
                }}
              >
                <stat.icon
                  size={20}
                  className="text-text-tertiary mb-3
                    mx-auto md:mx-0"
                />
                <p className="font-mono-custom text-2xl
                  md:text-3xl font-bold text-text-primary
                  mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-text-tertiary">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
