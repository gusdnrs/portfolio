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
  'portfolio': 'Hyunwook Portfolio',
  'rolling-paper': 'Rolling Paper',
  'clamp-calculator': 'Clamp Calculator',
  'interview-recoder': 'Interview Recorder',
  'oci-gemini-ai-stack': 'OCI Gemini AI Stack',
  'react-netflix-app': 'Netflix Clone',
  'todo-app': 'Todo App',
  'tic_tac_toe': 'Tic Tac Toe',
  'filter-table': 'Filter Table',
  'react-button-app': 'React Button App',
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'short',
  });
}

function RepoCard({ repo }: { repo: GitHubRepo }) {
  const isPortfolioRepo = repo.name === 'portfolio';
  const isVercel = !isPortfolioRepo && !!repo.homepage;
  const displayUrl = isVercel ? (repo.homepage as string) : repo.html_url;
  const displayName = REPO_DISPLAY_NAMES[repo.name] ?? repo.name;

  return (
    <a
      href={displayUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="github-item group flex flex-col bg-white border border-gray-100 rounded-[32px] p-8 hover:border-blue-600/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:-translate-y-1"
    >
      {/* Content */}
      <div className="flex-1 mb-8">
        <h3 className="text-2xl md:text-[32px] font-bold text-gray-900 mb-3 group-hover:text-brand-blue transition-colors duration-300 leading-tight">
          {displayName}
        </h3>
        <p className="text-lg md:text-xl text-gray-500 leading-relaxed line-clamp-3 group-hover:text-gray-600 transition-colors duration-300">
          {repo.description || '설명이 없습니다.'}
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-6 border-t border-gray-50">
        <span
          className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-wider ${
            isVercel
              ? 'bg-blue-600/10 text-blue-600 border border-blue-600/20'
              : 'bg-gray-100 text-gray-400 border border-gray-200 shadow-sm'
          }`}
        >
          {isVercel ? 'Live' : 'GitHub'}
        </span>
        <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-brand-blue group-hover:border-brand-blue transition-all duration-500">
          <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-500" />
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
      className="py-20 md:py-32 lg:py-40 px-4 bg-[#F5F5F7] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-brand-blue/[0.03] blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-brand-blue/[0.02] blur-3xl" />
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Header */}
        <div className="github-header pt-8 pb-6 mb-10 md:mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 pb-6">
            <div>
              <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tighter text-gray-900 uppercase leading-[1.05]">
                GitHub
              </h2>
            </div>
            <p className="text-lg text-gray-500 font-medium max-w-md leading-relaxed lg:text-right">
              개인 프로젝트 및 학습 결과물입니다.
              <br className="hidden lg:block" />
              클릭하면 해당 링크로 이동합니다.
            </p>
          </div>
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
            className="group flex items-center gap-3 px-8 py-4 rounded-full border border-gray-200 bg-white text-gray-900 hover:text-brand-blue hover:border-brand-blue shadow-sm hover:shadow-md transition-all duration-300 font-bold text-base"
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
