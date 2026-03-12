'use client';

import Link from 'next/link';
import Logo from '../common/Logo';

export default function Header() {
  const navItems = [
    { id: 1, title: 'identity', href: '#identity' },
    { id: 2, title: 'skills', href: '#skills' },
    { id: 3, title: 'portfolio', href: '#portfolio' },
    { id: 4, title: 'contact', href: '#contact' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-100 mix-blend-difference text-white">
      <header className="p-6 md:p-10 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>
        <nav>
          <ul className="flex gap-3">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link href={item.href}>
                  <span className="font-en capitalize font-medium text-sm">
                    {item.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
}
