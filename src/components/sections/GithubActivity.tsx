'use client';

import { motion } from 'framer-motion';
import {
  Github,
  ExternalLink,
  GitBranch,
  Star,
} from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';

// GitHub 프로필 데이터 (정적)
const GITHUB_USERNAME = 'gusdnrs';
const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}`;

export default function GithubActivity() {
  return (
    <section id="github" className="py-24 md:py-32">
      <div className="section-container">
        <SectionTitle
          title="GitHub"
          subtitle="오픈소스 활동"
        />

        <motion.div
          className="p-8 md:p-10 rounded-2xl bg-bg-card
            border border-border-primary
            hover:border-border-secondary transition-colors"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row
            items-start md:items-center
            justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Github
                  size={28}
                  className="text-text-primary"
                />
                <h3 className="text-xl font-bold
                  text-text-primary">
                  @{GITHUB_USERNAME}
                </h3>
              </div>
              <p className="text-sm text-text-tertiary
                leading-relaxed max-w-md">
                포트폴리오 코드와 개인 프로젝트를 관리하고
                있습니다. 코드 품질과 유지보수 가능한 구조를
                지향합니다.
              </p>
            </div>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2
                px-6 py-3 rounded-full
                border border-border-secondary
                text-text-secondary text-sm font-medium
                hover:border-accent hover:text-text-primary
                transition-all shrink-0"
            >
              <ExternalLink size={16} />
              GitHub 방문
            </a>
          </div>

          {/* 기여 그래프 이미지 (GitHub 제공) */}
          <div className="mt-8 rounded-xl overflow-hidden
            bg-bg-secondary border border-border-primary
            p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://ghchart.rshah.org/666666/${GITHUB_USERNAME}`}
              alt="GitHub 기여 그래프"
              className="w-full opacity-70
                hover:opacity-100 transition-opacity"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
