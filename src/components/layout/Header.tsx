'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Sparkles, Send } from 'lucide-react';
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
    <header className="fixed top-4 left-0 right-0 z-50 px-4 md:px-6">
      {/* 플로팅 헤더 바 */}
      <div
        className={`mx-auto max-w-[1200px] h-16 md:h-20 px-6 md:px-8
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
            className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-indigo-600
              flex items-center justify-center text-white
              shadow-md shadow-indigo-500/20
              group-hover:scale-105 transition-transform duration-200"
          >
            <Sparkles size={18} className="fill-white/20" />
          </div>
          <span className="text-lg md:text-xl font-extrabold text-text-primary tracking-tight">
            HW<span className="text-indigo-500">.</span>
          </span>
        </button>

        {/* 데스크톱 메뉴 영역 */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
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
                      ? 'text-text-primary bg-bg-secondary shadow-xs font-semibold'
                      : 'text-text-secondary hover:text-text-primary hover:bg-bg-secondary/50'
                  }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* 우측 컨트롤 / CTA 영역 */}
        <div className="flex items-center gap-3 md:gap-4">
          <ThemeToggle />

          {/* Contact CTA 버튼 (데스크톱) */}
          <button
            onClick={() => scrollTo('contact')}
            className="hidden sm:inline-flex items-center gap-1.5
              px-4 py-2 md:px-5 md:py-2.5 rounded-xl
              bg-indigo-600 hover:bg-indigo-500
              text-white text-xs md:text-sm font-semibold
              shadow-md shadow-indigo-600/20
              hover:shadow-indigo-500/30 hover:-translate-y-0.5
              transition-all cursor-pointer"
          >
            <Send size={14} />
            <span>Contact</span>
          </button>

          {/* 모바일 햄버거 메뉴 버튼 */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl text-text-secondary
              hover:text-text-primary bg-bg-secondary/60 cursor-pointer"
            aria-label="메뉴 열기"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* 모바일 드로어 (플로팅 스타일 하단 연결) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mx-auto max-w-[1200px] mt-2
              rounded-2xl glass border border-border-primary
              p-3 bg-bg-card/90 backdrop-blur-xl shadow-xl overflow-hidden"
          >
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`py-3 px-4 rounded-xl text-left
                    text-sm font-medium transition-colors cursor-pointer
                    ${
                      activeId === item.id
                        ? 'text-text-primary bg-bg-secondary font-semibold'
                        : 'text-text-secondary hover:bg-bg-secondary/50'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
