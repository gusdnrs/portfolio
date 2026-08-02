'use client';

import { ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border-primary
      bg-bg-secondary">
      <div className="section-container py-8 flex items-center
        justify-between">
        <p className="text-sm text-text-tertiary">
          © 2024 임현욱.{' '}
          <span className="hidden sm:inline">
            Built with Next.js & TailwindCSS
          </span>
        </p>
        <button
          onClick={() =>
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }
          className="p-2 rounded-full border
            border-border-primary hover:border-border-secondary
            text-text-tertiary hover:text-text-primary
            transition-all cursor-pointer"
          aria-label="맨 위로 스크롤"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
}
