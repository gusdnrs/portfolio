'use client';

import { useState, useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { projects } from '@/utils/projects';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const categories = ['All', 'New Launch', 'UI/UX Renewal', 'Maintenance'];

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  useGSAP(
    () => {
      // 1. Headline Reveal
      gsap.from('.portfolio-headline-line', {
        scrollTrigger: {
          trigger: '.portfolio-top',
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      });

      // 2. Filter Bar Stagger
      gsap.from('.filter-btn', {
        scrollTrigger: {
          trigger: '.portfolio-filters',
          start: 'top 90%',
        },
        scale: 0.9,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: 'back.out(1.7)',
      });

      // 3. Grid Entry
      gsap.from('.project-card', {
        scrollTrigger: {
          trigger: '.portfolio-grid',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
      });

      // 4. Stats Stagger
      gsap.from('.stat-item', {
        scrollTrigger: {
          trigger: '.portfolio-stats',
          start: 'top 90%',
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power2.out',
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      id="portfolio"
      className="py-20 md:py-32 lg:py-48 px-4 bg-white min-h-screen overflow-hidden relative"
      ref={containerRef}
    >
      <div className="max-w-[1440px] mx-auto relative z-11">
        {/* TOP: Headline Section */}
        <div className="portfolio-top mb-12 md:mb-20 lg:mb-28 text-center">
          <span className="portfolio-headline-line font-en text-xs md:text-sm font-black tracking-[0.2em] text-brand-blue uppercase mb-6 block">
            03. The Evidence
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] mb-8">
            <div className="overflow-hidden pb-1">
              <div className="portfolio-headline-line text-gray-900">
                실무로 증명하는
              </div>
            </div>
            <div className="overflow-hidden pb-1">
              <div className="portfolio-headline-line text-brand-blue">
                퍼블리싱의 정수
              </div>
            </div>
          </h2>
          <p className="portfolio-headline-line text-base md:text-lg font-medium text-gray-600 max-w-2xl mx-auto leading-relaxed">
            41건 이상의 프로젝트 데이터 중 핵심적인 성과를 선별했습니다. 각 카테고리를 클릭하여 상세 전문성을 확인해 보세요.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="portfolio-filters flex flex-wrap justify-center gap-3 mb-16 px-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`filter-btn px-6 py-2 rounded-full text-sm font-bold transition-all border cursor-pointer ${
                activeCategory === cat
                  ? 'bg-brand-blue text-white border-brand-blue shadow-lg shadow-brand-blue/20'
                  : 'bg-white text-gray-400 border-gray-100 hover:border-brand-blue/30 hover:text-brand-blue'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="portfolio-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card group relative aspect-4/5 rounded-[40px] overflow-hidden bg-gray-100 shadow-sm"
            >
              <Link href={`/work/${project.id}`} className="block w-full h-full">
                {/* Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
                
                <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 flex flex-col justify-end text-white">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                    <span className="inline-block px-3 py-1 bg-brand-blue rounded-lg text-[10px] font-bold uppercase tracking-wider mb-4">
                      {project.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-white/70 text-sm md:text-base font-normal mb-6 line-clamp-1 group-hover:line-clamp-none transition-all duration-700">
                      {project.contribution}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-[10px] bg-white/10 backdrop-blur-md px-2 py-1 rounded-sm border border-white/10"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-sm font-bold border-b border-white/30 pb-1 w-fit opacity-0 group-hover:opacity-100 group-hover:border-brand-blue transition-all duration-700 delay-200">
                      View Project <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Analytics Counter Footer */}
        <div className="portfolio-stats mt-20 md:mt-32 lg:mt-48 p-10 md:p-16 lg:p-20 rounded-[48px] bg-gray-50 border border-gray-100 text-center">
          <div className="flex flex-col md:flex-row items-center justify-evenly gap-12 md:gap-8">
            <div className="stat-item">
              <div className="text-5xl md:text-6xl font-black text-brand-blue mb-4 font-en tracking-tighter">
                41+
              </div>
              <div className="text-xs md:text-sm font-black text-gray-400 uppercase tracking-[0.2em]">
                Total Projects
              </div>
            </div>
            <div className="w-px h-16 bg-gray-200 hidden md:block opacity-50" />
            <div className="stat-item">
              <div className="text-5xl md:text-6xl font-black text-brand-blue mb-4 font-en tracking-tighter">
                4Y 1M
              </div>
              <div className="text-xs md:text-sm font-black text-gray-400 uppercase tracking-[0.2em]">
                Experience
              </div>
            </div>
            <div className="w-px h-16 bg-gray-200 hidden md:block opacity-50" />
            <div className="stat-item">
              <div className="text-5xl md:text-6xl font-black text-brand-blue mb-4 font-en tracking-tighter">
                100%
              </div>
              <div className="text-xs md:text-sm font-black text-gray-400 uppercase tracking-[0.2em]">
                Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
