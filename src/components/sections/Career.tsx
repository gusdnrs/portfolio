'use client';

import { motion } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';
import { careers } from '@/data/career';

export default function Career() {
  return (
    <section
      id="career"
      className="py-24 md:py-32 bg-bg-secondary"
    >
      <div className="section-container">
        <SectionTitle title="Career" subtitle="경력사항" />

        <div className="relative">
          {/* 세로 타임라인 선 */}
          <div
            className="absolute left-4 md:left-8 top-0
              bottom-0 w-px bg-border-primary"
          />

          <div className="space-y-12">
            {careers.map((career, i) => (
              <motion.div
                key={career.company}
                className="relative pl-12 md:pl-20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.2,
                }}
              >
                {/* 타임라인 도트 */}
                <div
                  className={`absolute left-4 md:left-8
                    top-2 -translate-x-1/2 w-3 h-3
                    rounded-full border-2
                    ${
                      career.isCurrent
                        ? 'bg-accent border-accent'
                        : 'bg-bg-secondary border-border-secondary'
                    }`}
                />

                {/* 현재 뱃지 */}
                {career.isCurrent && (
                  <span
                    className="inline-block mb-2 px-3 py-1
                      text-xs font-mono-custom font-medium
                      rounded-full bg-accent/10 text-accent
                      border border-accent/20"
                  >
                    현재 재직 중
                  </span>
                )}

                {/* 회사 정보 */}
                <h3 className="text-xl md:text-2xl font-bold
                  text-text-primary mb-1">
                  {career.company}
                </h3>
                <p className="font-mono-custom text-sm
                  text-text-tertiary mb-4">
                  {career.position} · {career.period}
                </p>

                {/* 업무 목록 */}
                <ul className="space-y-2">
                  {career.description.map(desc => (
                    <li
                      key={desc}
                      className="flex items-start gap-3
                        text-text-secondary text-sm
                        leading-relaxed"
                    >
                      <span
                        className="mt-2 w-1 h-1
                          rounded-full bg-text-tertiary
                          shrink-0"
                      />
                      {desc}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
