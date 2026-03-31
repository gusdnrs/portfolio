'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight, Plus } from 'lucide-react';
import { projects, Project } from '@/utils/projects';

// ── Types ──
// ProjectCategory was used for filtering but is now removed.

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);

  // ── States ──
  const [visibleCount, setVisibleCount] = useState(6);

  // ── Data Processing ──
  const featured = projects.filter((p) => p.featured);
  const subProjects = projects.filter((p) => !p.featured);
  const displayedProjects = subProjects.slice(0, visibleCount);


  // ── Animation ──
  useGSAP(
    () => {
      // Main Entrance
      gsap.from('.portfolio-header-block', {
        scrollTrigger: {
          trigger: '.portfolio-header-block',
          start: 'top 98%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      });

      // Featured Cards Reveal
      gsap.fromTo(
        '.featured-project-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.portfolio-grid-container',
            start: 'top 95%',
            toggleActions: 'play none none none',
            once: true,
          },
        },
      );

      // Projects Grid Animation (triggered on change)
      const cards = gsap.utils.toArray('.sub-project-card');
      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.05,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '#portfolio-sub-projects',
              start: 'top 95%',
            },
          },
        );
      }
    },
    { scope: containerRef, dependencies: [visibleCount] },
  );

  return (
    <section
      id="portfolio"
      className="py-20 md:py-32 lg:py-40 px-4 bg-white relative"
      ref={containerRef}
    >
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="portfolio-header-block pt-8 pb-6 mb-10 md:mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 pb-6">
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black tracking-tighter text-gray-900 uppercase leading-[1.05]">
              Portfolio
            </h2>

          </div>
        </div>

        {/* ── 대표작 그리드 레이아웃 6개 ── */}
        <div className="portfolio-grid-container grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 mb-32 md:mb-48">
          {featured.map((project) => (
            <Link
              key={project.id}
              href={`/project/${project.id}`}
              className="featured-project-card group block bg-white border border-[#f2f4f6] rounded-[32px] overflow-hidden transition-all duration-500 hover:shadow-[0_32px_64px_rgba(0,0,0,0.08)] hover:-translate-y-2"
            >
              {/* Image Section */}
              <div className="relative aspect-16/10 w-full overflow-hidden bg-[#f9fafb]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/2 transition-colors duration-500" />
              </div>

              {/* Content Section */}
              <div className="p-8 md:p-12">
                <div className="flex flex-col gap-5">
                  <div className="flex items-center justify-between">
                    <span className="text-[14px] font-bold text-blue-600 tracking-tight">
                      {project.category
                        .map((cat) =>
                          cat === 'new'
                            ? 'New Launch'
                            : cat === 'renewal'
                              ? 'UI/UX Renewal'
                              : 'Maintenance',
                        )
                        .join(' / ')}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-[32px] font-bold text-gray-900 tracking-tight leading-tight group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-lg md:text-xl text-gray-400 font-medium line-clamp-2 leading-relaxed">
                    {project.longDescription.slice(0, 95)}...
                  </p>

                  <div className="mt-4 pt-6 border-t border-[#f2f4f6] flex items-center justify-between">
                    <span className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      자세히보기
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#f9fafb] border border-gray-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-500">
                      <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-500" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ── Sub Projects Showcase (Redesigned) ── */}
        <div id="portfolio-sub-projects" className="mt-24 mb-32">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12 px-4">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tighter">
                유지보수 및 전체 프로젝트
              </h3>
              <p className="text-gray-400 font-medium">
                총&nbsp;
                <span className="text-blue-600 font-bold tabular-nums">
                  {projects.length}
                </span>
                &nbsp;개의 프로젝트가 진행되었습니다
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2 px-4 border-t border-gray-100/50">
            {displayedProjects.map((item) => (
              <div
                key={item.id}
                className="sub-project-card border-b border-gray-100/50"
              >
                <ProjectSmallCard item={item as Project} />
              </div>
            ))}
          </div>
          {visibleCount < subProjects.length && (
            <div className="mt-16 flex justify-center">
              <button
                onClick={() => setVisibleCount((prev) => prev + 6)}
                className="group flex items-center gap-3 px-8 py-4 bg-gray-50 hover:bg-gray-100 text-gray-600 rounded-full text-base font-black transition-all duration-300 border border-gray-100 hover:border-gray-200"
              >
                <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" />
                더 많은 프로젝트 보기
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ProjectSmallCard({ item }: { item: Project }) {
  const thumbnail =
    item.logo ||
    (Array.isArray(item.detailImages) ? item.detailImages[0] : item.image);

  return (
    <Link
      href={`/project/${item.id}`}
      className="group flex items-center bg-white border-[#f2f4f6] gap-4 py-5 px-3 -mx-3 rounded-2xl border hover:border-blue-600 hover:bg-blue-600 transition-all duration-500 hover:shadow-xl hover:shadow-blue-600/20"
    >
      {/* Micro-Thumbnail */}
      <div className="relative w-14 h-14 shrink-0 bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 group-hover:bg-white group-hover:border-transparent transition-all duration-500">
        <Image
          src={thumbnail}
          alt={item.title}
          width={56}
          height={56}
          className="object-contain w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
        />
      </div>

      {/* Info Area */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="text-lg font-bold text-gray-900 truncate group-hover:text-white transition-colors duration-500">
            {item.title}
          </h4>
          <span className="shrink-0 px-2 py-0.5 rounded-md bg-blue-50 text-blue-600 text-[9px] font-black uppercase tracking-wider group-hover:bg-white group-hover:text-blue-600 transition-all duration-500 hidden sm:inline-block">
            {item.category
              .map((cat) =>
                cat === 'new'
                  ? 'New Launch'
                  : cat === 'renewal'
                    ? 'UI/UX Renewal'
                    : 'Maintenance',
              )
              .join(' / ')}
          </span>
        </div>

        <div className="flex items-center gap-3 text-sm sm:text-base text-gray-400 font-medium whitespace-nowrap overflow-hidden group-hover:text-white/70 transition-colors duration-500">
          <span className="shrink-0 font-num tabular-nums text-blue-500/50 group-hover:text-white/40 transition-colors duration-500">
            {(item.period.project?.[0] || item.period.maintenance)?.split(' - ')[0]}
          </span>
          <span className="truncate">{item.shortDescription}</span>
        </div>
      </div>

      {/* Action */}
      <div className="shrink-0 w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-white transition-all duration-500">
        <ArrowUpRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-blue-600 transition-colors duration-500" />
      </div>
    </Link>
  );
}
