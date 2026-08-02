'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import ProjectModal from '@/components/ui/ProjectModal';
import {
  featuredProjects,
  otherProjects,
  categoryLabels,
} from '@/data/projects';
import type { Project } from '@/types';

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(
    null,
  );

  return (
    <section
      id="projects"
      className="py-24 md:py-32 bg-bg-secondary"
    >
      <div className="section-container">
        <SectionTitle
          title="Projects"
          subtitle="프로젝트"
        />

        {/* 대표 프로젝트 카드 그리드 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3
          gap-6 mb-16">
          {featuredProjects.map((project, i) => (
            <motion.article
              key={project.id}
              className="group rounded-2xl bg-bg-card
                border border-border-primary
                overflow-hidden cursor-pointer
                hover:border-border-secondary
                transition-all duration-300
                hover:shadow-lg hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
              }}
              onClick={() => setSelected(project)}
            >
              {/* 썸네일 */}
              <div className="relative aspect-[16/10]
                overflow-hidden bg-bg-secondary">
                {project.images.length > 0 ? (
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover object-top
                      group-hover:scale-105
                      transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw, 400px"
                  />
                ) : (
                  <div className="w-full h-full flex
                    items-center justify-center
                    text-text-tertiary text-sm">
                    No Image
                  </div>
                )}
                {/* 호버 오버레이 */}
                <div
                  className="absolute inset-0
                    bg-black/0 group-hover:bg-black/20
                    transition-colors duration-300
                    flex items-center justify-center"
                >
                  <motion.div
                    className="opacity-0
                      group-hover:opacity-100
                      transition-opacity duration-300"
                  >
                    <div className="p-3 rounded-full
                      bg-white/20 backdrop-blur-md">
                      <ArrowUpRight
                        size={20}
                        className="text-white"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* 정보 */}
              <div className="p-5">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.category.map(cat => (
                    <span
                      key={cat}
                      className="px-2 py-0.5 text-[11px]
                        font-mono-custom rounded-full
                        bg-bg-secondary text-text-tertiary
                        border border-border-primary"
                    >
                      {categoryLabels[cat]}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-bold
                  text-text-primary mb-2 leading-snug
                  group-hover:text-accent
                  transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-text-tertiary
                  leading-relaxed line-clamp-2">
                  {project.shortDescription}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* 나머지 프로젝트 요약 리스트 */}
        <div>
          <h3 className="font-mono-custom text-xs
            text-text-tertiary uppercase tracking-wider
            mb-6">
            기타 프로젝트 ({otherProjects.length})
          </h3>
          <div className="space-y-2">
            {otherProjects.map((project, i) => (
              <motion.button
                key={project.id}
                className="w-full text-left py-4 px-5
                  rounded-xl bg-bg-card
                  border border-border-primary
                  hover:border-border-secondary
                  hover:bg-bg-card-hover
                  transition-all cursor-pointer
                  flex items-center justify-between gap-4
                  group"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.3,
                  delay: i * 0.03,
                }}
                onClick={() => setSelected(project)}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3
                    mb-1">
                    <h4 className="text-sm font-semibold
                      text-text-primary
                      group-hover:text-accent
                      transition-colors truncate">
                      {project.title}
                    </h4>
                    <div className="flex gap-1.5 shrink-0">
                      {project.category.map(cat => (
                        <span
                          key={cat}
                          className="px-2 py-0.5
                            text-[10px] font-mono-custom
                            rounded-full bg-bg-secondary
                            text-text-tertiary"
                        >
                          {categoryLabels[cat]}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-text-tertiary
                    truncate">
                    {project.shortDescription}
                  </p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-text-tertiary shrink-0
                    group-hover:text-accent
                    transition-colors"
                />
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* 프로젝트 상세 모달 */}
      <ProjectModal
        project={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
