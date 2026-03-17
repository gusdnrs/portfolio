'use client';

import { motion } from 'framer-motion';
import { Layout, Search, Settings, Zap } from 'lucide-react';

export default function Expertise() {
  const skills = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'CMS 최적화',
      desc: 'WordPress, Strapi 등 다양한 CMS 환경에 최적화된 테마 제작 및 데이터 매핑',
      tags: ['Theme Dev', 'API Integration', 'Performance'],
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: '반응형 웹 (RWD)',
      desc: 'Modern CSS(Grid, Flex)와 미디어 쿼리를 활용한 완벽한 크로스 브라우징 구현',
      tags: ['Mobile First', 'Cross-Browsing', 'Grid/Flex'],
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'SEO & 웹 접근성',
      desc: 'Sementic Markup과 ARIA를 통한 검색 엔진 최적화 및 정보 접근성 강화',
      tags: ['Semantic HTML', 'WCAG', 'Meta Tags'],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: '운영 안정성',
      desc: '유지보수가 용이한 모듈형 코드 구조 설계 및 정밀한 퍼블리싱 가이드 구축',
      tags: ['Refactoring', 'Documentation', 'Stability'],
    },
  ];

  return (
    <section id="core-skills" className="py-24 px-4 bg-bg-gray overflow-hidden">
      <div className="max-w-6xl mx-auto  relative z-11">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-en text-sm font-bold tracking-widest text-brand-blue uppercase mb-4 block">
            02. The Mastery
          </span>
          <h2 className="text-4xl font-bold mb-4">Core Specialist</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            4년 이상의 실무를 통해 정립한 4대 핵심 역량을 바탕으로
            <br className="hidden md:block" />
            단순 브라우징을 넘어선 사용자 경험의 완성도를 추구합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-10 rounded-3xl glass border border-white/40 overflow-hidden hover:shadow-2xl hover:shadow-brand-blue/10 transition-all duration-500"
            >
              {/* Hover Glow Effect */}
              <div className="absolute -inset-1 bg-linear-to-r from-brand-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />

              <div className="relative z-10">
                <div className="text-brand-blue mb-6 p-4 w-fit rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 ring-inset">
                  {skill.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-blue transition-colors">
                  {skill.title}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {skill.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tag, tIndex) => (
                    <span
                      key={tIndex}
                      className="px-3 py-1 bg-white/50 border border-white text-[11px] font-bold text-gray-400 rounded-full font-en uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
