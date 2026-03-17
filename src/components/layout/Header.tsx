'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Logo from '../common/Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isSubPage = pathname.startsWith('/work/');

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
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 0, title: 'Home', href: '/#hero' },
    { id: 1, title: 'About', href: '/#about' },
    { id: 2, title: 'Core Skills', href: '/#core-skills' },
    { id: 3, title: 'Portfolio', href: '/#portfolio' },
    { id: 4, title: 'Contact', href: '/#contact' },
  ];

  return (
    <>
      <div
        className={`${
          isScrolled
            ? 'fixed bg-black/80 backdrop-blur-[20px] backdrop-saturate-[180%] border-b border-white/10 h-[60px] text-white'
            : isSubPage
              ? 'absolute text-white'
              : 'absolute'
        } top-0 left-0 w-full z-100 h-20 transition-all duration-300`}
      >
        <header className="h-full px-6 md:px-10 flex items-center justify-between relative">
          <Link href="/" className="whitespace-nowrap">
            <Logo isScrolled={isScrolled || isSubPage} />
          </Link>
          <nav className="hidden md:block">
            <ul className="flex gap-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={`transition-colors ${
                      isScrolled || isSubPage
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

          {/* Right Spacer / Mobile Button */}
          <div
            className={`flex items-center transition-all duration-500 md:hidden ${
              isScrolled
                ? 'max-w-0 opacity-0 overflow-hidden'
                : 'max-w-[100px] opacity-100'
            }`}
          >
            {/* Desktop에서는 우측 여백을 위해 빈 공간 유지, 모바일에서만 버튼 활성화 */}
            <div className="w-10 md:w-0" />
          </div>

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
                isScrolled || isSubPage ? 'bg-white' : 'bg-gray-950'
              }`}
            />
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''} ${
                isScrolled || isSubPage ? 'bg-white' : 'bg-gray-950'
              }`}
            />
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''} ${
                isScrolled || isSubPage ? 'bg-white' : 'bg-gray-950'
              }`}
            />
          </button>
        </header>
      </div>

      {/* Mobile Overlay Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white text-gray-950 transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 invisible'
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

          <div className="absolute bottom-12 text-center">
            <p className="font-num text-lg font-semibold">gusdnrs@naver.com</p>
          </div>
        </nav>
      </div>
    </>
  );
}
