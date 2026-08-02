'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Sparkles, Send, ChevronRight } from 'lucide-react';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import type { NavItem } from '@/types';

const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'career', label: 'Career' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const sectionIds = useMemo(
    () => NAV_ITEMS.map(item => item.id),
    [],
  );
  const activeId = useScrollSpy(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, {
      passive: true,
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = useCallback((id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  }, []);

  return (
    <>
      {/* ─── 1. 데스크톱 전용 헤더 (md 이상) ─── */}
      <header className="hidden md:block fixed top-4 left-0 right-0 z-50 px-6">
        <div
          className={`mx-auto max-w-[1200px] h-20 px-8
            rounded-[20px] backdrop-blur-[12px]
            flex items-center justify-between
            transition-all duration-300
            border border-border-primary/60
            ${
              scrolled
                ? 'glass shadow-lg bg-bg-card/75 border-border-secondary'
                : 'bg-bg-card/50 shadow-md'
            }`}
        >
          {/* 로고 영역 */}
          <button
            onClick={() =>
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
            className="flex items-center gap-2.5 group text-left cursor-pointer"
          >
            <div
              className="w-9 h-9 rounded-xl bg-indigo-600
                flex items-center justify-center text-white
                shadow-md shadow-indigo-500/20
                group-hover:scale-105 transition-transform duration-200"
            >
              <Sparkles size={18} className="fill-white/20" />
            </div>
            <span className="text-xl font-extrabold text-text-primary tracking-tight">
              HW<span className="text-indigo-500">.</span>
            </span>
          </button>

          {/* 메뉴 영역 */}
          <nav className="flex items-center gap-2">
            {NAV_ITEMS.map(item => {
              const isActive = activeId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-4 py-2 rounded-full text-[15px] font-medium
                    transition-all duration-200 cursor-pointer
                    ${
                      isActive
                        ? 'bg-indigo-600/10 dark:bg-indigo-400/15 text-indigo-600 dark:text-indigo-400 font-semibold'
                        : 'text-slate-600 dark:text-zinc-400 hover:bg-indigo-600/10 dark:hover:bg-indigo-400/15 hover:text-indigo-600 dark:hover:text-indigo-400'
                    }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* 우측 컨트롤 / CTA */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-1.5
                px-5 py-2.5 rounded-xl
                bg-indigo-600 hover:bg-indigo-500
                text-white text-sm font-semibold
                shadow-md shadow-indigo-600/20
                hover:shadow-indigo-500/30 hover:-translate-y-0.5
                transition-all cursor-pointer"
            >
              <Send size={14} />
              <span>Contact</span>
            </button>
          </div>
        </div>
      </header>

      {/* ─── 2. 모바일 전용 헤더 (md 미만) ─── */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50">
        <div
          className="w-full h-[60px] md:h-[64px] px-5
            bg-bg-card/90 backdrop-blur-[12px]
            border-b border-border-primary/70
            flex items-center justify-between"
        >
          {/* 좌측: 햄버거 메뉴 버튼 */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-10 h-10 flex items-center justify-center
              rounded-xl text-text-primary hover:bg-bg-secondary/60 cursor-pointer"
            aria-label="메뉴 토글"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* 중앙: 로고 */}
          <button
            onClick={() =>
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
            className="text-[18px] font-extrabold text-text-primary tracking-tight cursor-pointer"
          >
            HW<span className="text-indigo-500">.</span>
          </button>

          {/* 우측: 컨트롤 (테마 토글) */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
          </div>
        </div>

        {/* 모바일 상단 슬라이드다운 아코디언 드로어 */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="bg-bg-card/95 backdrop-blur-xl border-b border-border-primary shadow-2xl overflow-hidden"
            >
              <div className="px-6 py-3 flex flex-col">
                {NAV_ITEMS.map(item => {
                  const isActive = activeId === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollTo(item.id)}
                      className="w-full py-[18px] border-b border-border-primary/60
                        flex items-center justify-between text-left cursor-pointer
                        last:border-b-0 group transition-colors"
                    >
                      <span
                        className={`text-[16px] font-semibold transition-colors
                          ${
                            isActive
                              ? 'text-indigo-600 dark:text-indigo-400'
                              : 'text-text-primary group-hover:text-indigo-500'
                          }`}
                      >
                        {item.label}
                      </span>
                      <ChevronRight
                        size={16}
                        className={`transition-colors ${
                          isActive
                            ? 'text-indigo-600 dark:text-indigo-400'
                            : 'text-text-tertiary group-hover:text-indigo-500'
                        }`}
                      />
                    </button>
                  );
                })}

                {/* 하단 Contact 버튼 */}
                <div className="pt-5 pb-3">
                  <button
                    onClick={() => scrollTo('contact')}
                    className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500
                      text-white text-[15px] font-semibold text-center
                      shadow-md shadow-indigo-600/20 transition-all cursor-pointer"
                  >
                    Contact Me
                  </button>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
