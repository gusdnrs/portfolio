'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { Github, ArrowUpRight, ExternalLink } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Client-side registration
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// ── Types ──
interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  updated_at: string;
  stargazers_count: number;
  fork: boolean;
}

// ── Constants ──
const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: '#3178C6',
  JavaScript: '#F7DF1E',
  HTML: '#E34F26',
  CSS: '#1572B6',
  Python: '#3776AB',
};

const REPO_DISPLAY_NAMES: Record<string, string> = {
  'portfolio': '✨ Hyunwook Portfolio',
  'rolling-paper': '💌 Rolling Paper',
  'clamp-calculator': '📐 Clamp Calculator',
  'interview-recoder': '📝 Interview Recorder',
  'oci-gemini-ai-stack': '☁️ OCI Gemini AI Stack',
  'react-netflix-app': '🎬 Netflix Clone',
  'todo-app': '✅ Todo App',
  'tic_tac_toe': '🎮 Tic Tac Toe',
  'filter-table': '🔍 Filter Table',
  'react-button-app': '🔘 React Button App',
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'short',
  });
}

function RepoCard({ repo }: { repo: GitHubRepo }) {
  // 포트폴리오 레포는 무조건 GitHub 링크만 사용 (사용자 요청)
  const isPortfolioRepo = repo.name === 'portfolio';
  const isVercel = !isPortfolioRepo && !!repo.homepage;
  const displayUrl = isVercel ? (repo.homepage as string) : repo.html_url;
  const langColor = repo.language
    ? (LANGUAGE_COLORS[repo.language] ?? '#6b7280')
    : '#6b7280';
  const displayName = REPO_DISPLAY_NAMES[repo.name] ?? repo.name;

  return (
    <a
      href={displayUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="github-item group flex flex-col bg-white/5 border border-white/10 rounded-3xl p-7 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] hover:-translate-y-1"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center group-hover:bg-brand-blue/30 group-hover:border-brand-blue/40 transition-all duration-500">
          <Github className="w-5 h-5 text-white/60 group-hover:text-white transition-colors duration-500" />
        </div>
        <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-blue group-hover:border-brand-blue transition-all duration-500">
          <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white transition-colors duration-500" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 mb-6">
        <h3 className="text-lg font-bold text-white/90 mb-2 group-hover:text-white transition-colors duration-300 leading-tight">
          {displayName}
        </h3>
        <p className="text-sm text-white/40 leading-relaxed line-clamp-2 group-hover:text-white/60 transition-colors duration-300">
          {repo.description || '설명이 없습니다.'}
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-5 border-t border-white/8">
        <div className="flex items-center gap-3">
          {repo.language && (
            <span className="flex items-center gap-1.5 text-xs font-bold text-white/50">
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: langColor }}
              />
              {repo.language}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
              isVercel
                ? 'bg-brand-blue/20 text-brand-blue border border-brand-blue/30'
                : 'bg-white/8 text-white/40 border border-white/10'
            }`}
          >
            {isVercel ? 'Live' : 'GitHub'}
          </span>
          <span className="text-[11px] text-white/30 tabular-nums">
            {formatDate(repo.updated_at)}
          </span>
        </div>
      </div>
    </a>
  );
}

export default function GithubProjectsClient({ repos }: { repos: GitHubRepo[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(max-width: 768px)', () => {
        // Mobile Animation
        gsap.fromTo(
          '.github-header',
          { y: 10, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            scrollTrigger: {
              trigger: '.github-header',
              start: 'top 98%',
              once: true,
            },
          }
        );

        gsap.fromTo(
          '.github-item',
          { y: 10, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.03,
            scrollTrigger: {
              trigger: '.github-grid',
              start: 'top 95%',
              once: true,
            },
          }
        );
      });

      mm.add('(min-width: 769px)', () => {
        // Desktop Animation
        gsap.fromTo(
          '.github-header',
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.github-header',
              start: 'top 95%',
              once: true,
            },
          }
        );

        const items = gsap.utils.toArray('.github-item');
        if (items.length > 0) {
          gsap.fromTo(
            items,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              stagger: 0.1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: '.github-grid',
                start: 'top 90%',
                once: true,
              },
            }
          );
        }
      });

      // Cleanup & Refresh
      ScrollTrigger.refresh();
      return () => mm.revert();
    },
    { scope: containerRef, dependencies: [repos] },
  );

  return (
    <section
      ref={containerRef}
      id="github"
      className="py-20 md:py-32 lg:py-40 px-4 bg-[#0e1117] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-brand-blue/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-brand-blue/4 blur-3xl" />
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Header */}
        <div className="github-header pt-8 pb-6 mb-10 md:mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/10 text-white/50 text-sm font-bold mb-6">
                <Github className="w-4 h-4" />
                <span>gusdnrs</span>
              </div>
              <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tighter text-white uppercase leading-[1.05]">
                GitHub
              </h2>
            </div>
            <p className="text-lg text-white/40 font-medium max-w-md leading-relaxed lg:text-right">
              개인 프로젝트 및 학습 결과물입니다.
              <br className="hidden lg:block" />
              클릭하면 라이브 데모로 이동합니다.
            </p>
          </div>
          <div className="h-px bg-white/8" />
        </div>

        {/* Grid */}
        <div className="github-grid">
          {repos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {repos.map((repo) => (
                <RepoCard key={repo.id} repo={repo} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center text-white/30">
              <Github className="w-12 h-12 mx-auto mb-4 opacity-30" />
              <p className="text-lg font-bold">프로젝트를 불러올 수 없습니다.</p>
            </div>
          )}
        </div>

        {/* Profile link */}
        <div className="mt-16 flex justify-center">
          <Link
            href="https://github.com/gusdnrs"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 rounded-full border border-white/15 text-white/60 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300 font-bold text-base"
          >
            <Github className="w-5 h-5" />
            <span>GitHub 프로필 보기</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
