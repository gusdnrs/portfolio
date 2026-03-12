'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from '../common/Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 1, title: 'About', href: '/#about' },
    { id: 2, title: 'Expertise', href: '/#expertise' },
    { id: 3, title: 'Work', href: '/#work' },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-100 mix-blend-difference text-white">
        <header className="p-6 md:p-10 flex justify-between items-center transition-all">
          <Link href="/" className="flex items-center gap-2">
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex gap-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="hover:opacity-50 transition-opacity"
                  >
                    <span className="font-en capitalize font-medium text-sm tracking-tight">
                      {item.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Nav */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isMenuOpen}
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </header>
      </div>

      {/* Mobile Overlay Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white text-gray-950 transition-transform duration-500 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <nav className="flex h-full flex-col justify-center items-center px-10">
          <ul className="flex flex-col gap-10 text-center">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-en text-4xl font-black capitalize hover:text-brand-blue transition-colors"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* 모바일 메뉴 하단 연락처 정보 (기획 반영) */}
          <div className="absolute bottom-12 text-center">
            <p className="font-num text-lg font-semibold">gusdnrs@naver.com</p>
          </div>
        </nav>
      </div>
    </>
  );
}
