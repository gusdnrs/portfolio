'use client';

import { motion } from 'framer-motion';
import { ChartBar, Clock, Lightbulb, Users } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  const features = [
    {
      icon: <ChartBar className="w-6 h-6 text-brand-blue" />,
      title: '분석적 사고',
      description:
        '경제학 전공 기반의 데이터 최적화 및 논리적 컴포넌트 설계 역량',
    },
    {
      icon: <Clock className="w-6 h-6 text-brand-blue" />,
      title: '실무 숙련도',
      description: '4년 1개월의 실무 경험과 41건 이상의 다양한 프로젝트 완수',
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-brand-blue" />,
      title: '기획 최적화',
      description: '기획서의 의도를 깊이 이해하고 기술적 구현 가능성으로 번역',
    },
    {
      icon: <Users className="w-6 h-6 text-brand-blue" />,
      title: '협업 중심',
      description: '기획자, 디자이너와 원활한 소통을 통한 디자인 정밀 구현',
    },
  ];

  return (
    <section
      id="about"
      className="py-24 px-4 bg-white overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto relative z-11">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: Headline & Narrative (Column 7) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <span className="font-en text-sm font-bold tracking-widest text-brand-blue uppercase mb-4 block">
              01. The Logic
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
              Logic & Practice:
              <br />
              <span className="text-gray-400 text-xl">
                기획의 언어를 기술의 가치로 번역합니다.
              </span>
            </h2>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-12">
              <p>
                경제학을 전공하며 습득한{' '}
                <strong className="text-brand-blue-dark">‘최적화’</strong>와{' '}
                <strong className="text-brand-blue-dark">‘구조적 분석’</strong>
                의 습관은 웹 퍼블리셔로서 저의 가장 큰 무기입니다. 단순히 화면을
                그리는 것을 넘어, 데이터의 흐름과 컴포넌트의 논리적 구조를 먼저
                설계합니다.
              </p>
              <p>
                복잡한 기획안을 효율적인 코드 구조로 분해하고 재조립하는
                과정에서 기술적 즐거움을 느끼며, 4년이 넘는 시간 동안{' '}
                <strong className="text-brand-blue-dark">
                  41건 이상의 프로젝트
                </strong>
                를 수행하며 완성도를 증명해 왔습니다.
              </p>
            </div>

            {/* Feature Cards Grid within Logic side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-brand-blue/30 transition-all group"
                >
                  <div className="mb-4 p-3 w-fit rounded-xl bg-white shadow-sm group-hover:bg-brand-blue/10 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-snug">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Personal Image (Column 5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative aspect-4/5 rounded-[40px] overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/hero_bg.png"
              alt="Im Hyunwook Profile"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
