'use client';

import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full
        flex items-center justify-center
        border border-border-primary
        hover:border-border-secondary
        bg-bg-card hover:bg-bg-card-hover
        transition-all duration-300 cursor-pointer"
      aria-label="테마 전환"
    >
      <motion.div
        key={theme}
        initial={{ scale: 0, rotate: -90 }}
        animate={{ scale: 1, rotate: 0 }}
        exit={{ scale: 0, rotate: 90 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {theme === 'dark' ? (
          <Sun size={18} className="text-text-secondary" />
        ) : (
          <Moon size={18} className="text-text-secondary" />
        )}
      </motion.div>
    </button>
  );
}
