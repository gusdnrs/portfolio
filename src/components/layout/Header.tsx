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

  // 모바일 메뉴 열림 시 스크롤 잠금
  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [mobileOpen]);

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
          className="w-full h-[64px] px-5
            bg-bg-card/75 backdrop-blur-[10px]
            border-b border-border-primary/70
            flex items-center justify-between"
        >
          {/* 좌측: 햄버거 메뉴 버튼 */}
          <button
            onClick={() => setMobileOpen(true)}
            className="w-10 h-10 flex items-center justify-center
              rounded-xl text-text-primary hover:bg-bg-secondary/60 cursor-pointer"
            aria-label="메뉴 열기"
          >
            <Menu size={22} />
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

        {/* 모바일 사이드 메뉴 오버레이 & 펼침 카드 */}
        <AnimatePresence>
          {mobileOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              {/* 백드롭 (배경 블러) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={() => setMobileOpen(false)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              />

              {/* 390px 스타일 사이드메뉴 카드 모달 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 15 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="relative z-10 w-full max-w-[390px] min-h-[540px] p-6
                  bg-bg-card rounded-[24px] border border-border-primary/80
                  shadow-[0_12px_32px_rgba(15,23,42,0.25)]
                  flex flex-col justify-between"
              >
                {/* 상단 맘: 로고 & 닫기 버튼 */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[20px] font-extrabold text-text-primary tracking-tight">
                      HW<span className="text-indigo-500">.</span>
                    </span>

                    {/* 닫기 버튼 */}
                    <button
                      onClick={() => setMobileOpen(false)}
                      className="w-9 h-9 rounded-full bg-bg-secondary
                        border border-border-primary
                        flex items-center justify-center text-text-primary
                        hover:bg-bg-card-hover transition-colors cursor-pointer"
                      aria-label="메뉴 닫기"
                    >
                      <X size={18} />
                    </button>
                  </div>

                  {/* 메뉴 항목 리스트 */}
                  <div className="flex flex-col gap-2">
                    {NAV_ITEMS.map(item => {
                      const isActive = activeId === item.id;
                      return (
                        <button
                          key={item.id}
                          onClick={() => scrollTo(item.id)}
                          className={`w-full px-4 py-[14px] rounded-[12px]
                            flex items-center justify-between
                            transition-all duration-200 cursor-pointer
                            ${
                              isActive
                                ? 'bg-indigo-600/10 dark:bg-indigo-400/15 text-indigo-600 dark:text-indigo-400 font-semibold'
                                : 'text-text-primary font-medium hover:bg-bg-secondary'
                            }`}
                        >
                          <span className="text-[16px]">{item.label}</span>
                          {isActive && (
                            <ChevronRight
                              size={16}
                              className="text-indigo-600 dark:text-indigo-400"
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 하단 영역: CTA 버튼 & 서브설명 */}
                <div className="pt-6 space-y-3">
                  <button
                    onClick={() => scrollTo('contact')}
                    className="w-full py-3.5 px-4 rounded-[12px]
                      bg-indigo-600 hover:bg-indigo-500
                      text-white text-[15px] font-semibold text-center
                      shadow-md shadow-indigo-600/20 transition-all cursor-pointer"
                  >
                    Contact Me
                  </button>
                  <p className="text-center text-[12px] text-text-tertiary">
                    웹 퍼블리셔 &amp; 프론트엔드 개발자 임현욱
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
