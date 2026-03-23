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
type ProjectCategory = 'All' | 'new' | 'renewal' | 'Maintenance';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);

  // ── States ──
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [visibleCount, setVisibleCount] = useState(6);

  // ── Data Processing ──
  const featured = projects.filter((p) => p.featured);

  const subProjects = projects.filter((p) => !p.featured);

  // Filtered List
  const filteredProjects = subProjects.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  // ── Animation ──
  useGSAP(
    () => {
      // Main Entrance
      gsap.from('.portfolio-header-block', {
        scrollTrigger: {
          trigger: '.portfolio-header-block',
          start: 'top 92%',
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'back.out(1.7)',
      });

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
              start: 'top 85%',
            },
          },
        );
      }
    },
    { scope: containerRef, dependencies: [activeCategory, visibleCount] },
  );

  const categories: ProjectCategory[] = [
    'All',
    'new',
    'renewal',
    'Maintenance',
  ];

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
            <div className="flex flex-wrap gap-3 md:gap-5 mb-2">
              <div className="flex items-center gap-2.5 bg-gray-50/80 px-5 py-2.5 rounded-2xl border border-gray-100/50">
                <span className="text-brand-blue font-black text-xl md:text-2xl leading-none">
                  22
                </span>
                <span className="text-gray-500 font-bold text-[10px] md:text-xs uppercase tracking-wider">
                  신규 런칭
                </span>
              </div>
              <div className="flex items-center gap-2.5 bg-gray-50/80 px-5 py-2.5 rounded-2xl border border-gray-100/50">
                <span className="text-brand-blue font-black text-xl md:text-2xl leading-none">
                  19
                </span>
                <span className="text-gray-500 font-bold text-[10px] md:text-xs uppercase tracking-wider">
                  리뉴얼
                </span>
              </div>
              <div className="flex items-center gap-2.5 bg-gray-50/80 px-5 py-2.5 rounded-2xl border border-gray-100/50">
                <span className="text-gray-500 font-bold text-[10px] md:text-xs uppercase tracking-wider">
                  유지보수
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── 대표작 그리드 레이아웃 8개 ── */}
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
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/2 transition-colors duration-500" />
              </div>

              {/* Content Section */}
              <div className="p-8 md:p-12">
                <div className="flex flex-col gap-5">
                  <div className="flex items-center justify-between">
                    <span className="text-[14px] font-bold text-blue-600 tracking-tight">
                      {project.category === 'new'
                        ? 'New Launch'
                        : project.category === 'renewal'
                          ? 'UI/UX Renewal'
                          : project.category}
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
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12 px-4">
            <div className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tighter">
                유지보수 및 전체 프로젝트
              </h3>
              <p className="text-gray-400 font-medium">
                총&nbsp;
                <span className="text-blue-600 font-bold tabular-nums">
                  {filteredProjects.length}
                </span>
                &nbsp;개의 프로젝트가 진행되었습니다
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="filter-tabs flex flex-wrap gap-2 p-1.5 bg-gray-50 rounded-2xl border border-gray-100">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setVisibleCount(6);
                  }}
                  className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-white text-blue-600 shadow-sm ring-1 ring-black/5'
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {cat === 'new'
                    ? 'New Launch'
                    : cat === 'renewal'
                      ? 'UI/UX Renewal'
                      : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {displayedProjects.map((item) => (
              <div key={item.id} className="sub-project-card">
                <ProjectSmallCard item={item as Project} />
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < filteredProjects.length && (
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
  const isMaintenance = item.category === 'Maintenance';
  const thumbnail = item.logo || item.image;

  const content = (
    <div className="flex flex-col gap-6">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span
              className={`text-[10px] font-black tracking-wider px-2 py-0.5 rounded-md capitalize ${
                isMaintenance
                  ? 'bg-gray-100 text-gray-500'
                  : 'bg-blue-50 text-blue-600'
              }`}
            >
              {item.category}
            </span>
            <span className="text-[10px] font-bold text-gray-400 tabular-nums">
              {item.period}
            </span>
          </div>
          <h4 className="text-xl font-bold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
            {item.title}
          </h4>
        </div>

        <div className="w-12 h-12 shrink-0 rounded-2xl overflow-hidden bg-gray-100 shadow-inner group-hover:shadow-md transition-all duration-500">
          <Image
            src={thumbnail}
            alt={item.title}
            width={48}
            height={48}
            className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
          />
        </div>
      </div>

      <div className="flex items-center justify-between text-xs font-bold text-gray-400 pt-4 border-t border-gray-50 group-hover:border-blue-100 transition-colors">
        <span>Show Details</span>
        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
      </div>
    </div>
  );

  const cardClassName =
    'group p-7 rounded-[32px] bg-white border border-gray-100 hover:border-blue-500/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-all duration-500 h-full flex flex-col justify-between';

  if (isMaintenance) {
    return <div className={`${cardClassName} cursor-default`}>{content}</div>;
  }

  return (
    <Link href={`/project/${item.id}`} className={cardClassName}>
      {content}
    </Link>
  );
}
