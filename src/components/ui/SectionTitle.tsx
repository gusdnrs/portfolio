'use client';

import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionTitle({
  title,
  subtitle,
  align = 'left',
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-12 md:mb-16 ${
        align === 'center' ? 'text-center' : ''
      }`}
    >
      {subtitle && (
        <p className="font-mono-custom text-sm text-text-tertiary
          mb-2 tracking-wider uppercase">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl
        font-bold text-text-primary leading-tight">
        {title}
      </h2>
      <div
        className={`mt-4 h-px w-16 bg-accent ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      />
    </motion.div>
  );
}
