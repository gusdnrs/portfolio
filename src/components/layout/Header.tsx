'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
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
    const onScroll = () => setScrolled(window.scrollY > 50);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${scrolled ? 'glass shadow-sm' : 'bg-transparent'}`}
    >
      <div className="section-container flex items-center
        justify-between h-16 md:h-20">
        {/* 로고 */}
        <button
          onClick={() => window.scrollTo({
            top: 0, behavior: 'smooth',
          })}
          className="font-mono-custom text-lg font-bold
            text-text-primary tracking-tight cursor-pointer"
        >
          HW<span className="text-text-tertiary">.</span>
        </button>

        {/* 데스크톱 네비게이션 */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`px-4 py-2 rounded-lg text-sm
                font-medium transition-colors duration-200
                cursor-pointer
                ${
                  activeId === item.id
                    ? 'text-text-primary bg-bg-card'
                    : 'text-text-tertiary hover:text-text-secondary'
                }`}
            >
              {item.label}
            </button>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </nav>

        {/* 모바일 메뉴 버튼 */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg text-text-secondary
              hover:text-text-primary cursor-pointer"
            aria-label="메뉴 열기"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* 모바일 드로어 */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden glass border-t
              border-border-primary overflow-hidden"
          >
            <div className="section-container py-4 flex
              flex-col gap-1">
              {NAV_ITEMS.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`py-3 px-4 rounded-lg text-left
                    text-sm font-medium transition-colors
                    cursor-pointer
                    ${
                      activeId === item.id
                        ? 'text-text-primary bg-bg-card'
                        : 'text-text-tertiary'
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
