'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Logo from '../common/Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isSubPage = pathname.startsWith('/project/');

  // Handle manual scroll to hash when navigating from other pages
  useEffect(() => {
    if (pathname === '/' && window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        // Delay slightly for content to settle
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setIsScrolled(true);
      } else if (scrollY < 30) {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Previous width for resize tracking
  const prevWidthRef = useRef<number>(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    prevWidthRef.current = window.innerWidth;

    const handleResize = () => {
      const currentWidth = window.innerWidth;
      const prevWidth = prevWidthRef.current;

      // Force reload when crossing from mobile to desktop
      if (prevWidth < 768 && currentWidth >= 768) {
        window.location.reload();
      }

      // Sync menu and body scroll
      if (currentWidth >= 768) {
        setIsMenuOpen(false);
        document.body.style.overflow = '';
      }

      prevWidthRef.current = currentWidth;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle body scroll lock
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navItems = [
    { id: 0, title: 'Home', href: '/#hero' },
    { id: 1, title: 'About Me', href: '/#about' },
    { id: 2, title: 'Portfolio', href: '/#portfolio' },
    { id: 3, title: 'Contact', href: '/#contact' },
  ];

  return (
    <>
      <div
        className={`${
          isScrolled
            ? 'fixed bg-white/20 backdrop-blur-md backdrop-saturate-180 border-b border-white/30 h-[80px] text-gray-900 shadow-[0_2px_30px_0_rgba(0,0,0,0.08)]'
            : isSubPage
              ? 'absolute text-white'
              : 'absolute text-gray-950'
        } top-0 left-0 w-full z-100 h-20 transition-all duration-300`}
      >
        <header className="h-full px-6 md:px-10 flex items-center justify-between relative">
          <Link href="/" className="whitespace-nowrap">
            <Logo isScrolled={isScrolled} isWhite={!isScrolled && isSubPage} />
          </Link>
          <nav className="hidden md:block">
            <ul className="flex gap-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    onClick={(e) => {
                      // 같은 페이지(/)에서 클릭 시 JS smooth scroll 처리
                      if (pathname === '/') {
                        e.preventDefault();
                        const id = item.href.replace('/#', '');
                        const el = document.getElementById(id);
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className={`transition-colors ${
                      !isScrolled && isSubPage
                        ? 'text-white/70 hover:text-white'
                        : 'text-gray-950/70 hover:text-gray-950'
                    }`}
                  >
                    <span className="font-en capitalize font-semibold text-base tracking-tight">
                      {item.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Nav Toggle */}
          <button
            className={`md:hidden flex flex-col gap-1.5 p-2 cursor-pointer focus:outline-none ${
              isScrolled ? 'absolute right-6' : ''
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isMenuOpen}
          >
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''} ${
                isScrolled || (!isScrolled && !isSubPage) ? 'bg-gray-950' : 'bg-white'
              }`}
            />
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''} ${
                isScrolled || (!isScrolled && !isSubPage) ? 'bg-gray-950' : 'bg-white'
              }`}
            />
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''} ${
                isScrolled || (!isScrolled && !isSubPage) ? 'bg-gray-950' : 'bg-white'
              }`}
            />
          </button>
        </header>
      </div>

      {/* Mobile Overlay Menu */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-200 transition-all duration-500 ease-portfolio ${
          isMenuOpen
            ? 'translate-x-0 opacity-100'
            : 'translate-x-full opacity-0 invisible'
        } md:hidden`}
      >
        <nav className="flex h-full flex-col justify-center items-center px-10">
          <ul className="flex flex-col gap-10 text-center">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-en text-4xl font-bold capitalize hover:text-brand-blue transition-colors"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="absolute bottom-12 text-center">
            <p className="font-num text-lg font-semibold">gusdnrs@naver.com</p>
          </div>
        </nav>
      </div>
    </>
  );
}
