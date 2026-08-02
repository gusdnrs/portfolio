'use client';

import { motion } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';
import { skills } from '@/data/skills';
import { SKILL_CATEGORY_LABELS } from '@/types';
import type { SkillCategory } from '@/types';

// 카테고리 순서 정의
const categoryOrder: SkillCategory[] = [
  'markup',
  'script',
  'framework',
  'motion',
  'tool',
  'etc',
];

// 스킬 아이콘 SVG 매핑 (인라인 방식)
function SkillIcon({ icon }: { icon: string }) {
  const iconMap: Record<string, string> = {
    html5: '🟧',
    css3: '🟦',
    sass: '🩷',
    javascript: '🟨',
    typescript: '🔷',
    jquery: '📘',
    react: '⚛️',
    nextjs: '▲',
    tailwindcss: '🌊',
    gsap: '🟢',
    framer: '🎞️',
    github: '🐙',
    figma: '🎨',
    photoshop: '🖼️',
    responsive: '📱',
    browser: '🌐',
    seo: '🔍',
    gnuboard: '🛠️',
  };
  return (
    <span className="text-xl" role="img" aria-label={icon}>
      {iconMap[icon] || '💻'}
    </span>
  );
}

export default function Skills() {
  // 카테고리별 그룹화
  const grouped = categoryOrder.map(cat => ({
    category: cat,
    label: SKILL_CATEGORY_LABELS[cat],
    items: skills.filter(s => s.category === cat),
  }));

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="section-container">
        <SectionTitle
          title="Skills"
          subtitle="기술 스택"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3
          gap-6">
          {grouped.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              className="p-6 rounded-2xl bg-bg-card
                border border-border-primary
                hover:border-border-secondary
                transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.5,
                delay: groupIdx * 0.1,
              }}
            >
              <h3 className="font-mono-custom text-xs
                text-text-tertiary uppercase tracking-wider
                mb-4">
                {group.label}
              </h3>
              <div className="space-y-3">
                {group.items.map(skill => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center gap-3
                      py-2 px-3 rounded-lg
                      hover:bg-bg-card-hover
                      transition-colors group"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <SkillIcon icon={skill.icon} />
                    <span className="text-sm text-text-secondary
                      group-hover:text-text-primary
                      transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
