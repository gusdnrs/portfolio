'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden hero-gradient pt-20">
      {/* Background Glassmorphism Objects */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute top-1/4 -left-20 w-80 h-80 rounded-full glass blur-3xl pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2.5, ease: 'easeOut', delay: 0.5 }}
        className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full glass blur-3xl pointer-events-none"
      />

      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="font-en text-[clamp(60px,12vw,160px)] font-black leading-[0.9] tracking-tighter text-brand-blue-dark mb-8 select-none">
            IM <br className="sm:hidden" />
            HYUNWOOK
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.8 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="h-[1px] w-20 bg-brand-blue/30 mb-2" />
          <p className="text-lg md:text-2xl font-medium tracking-tight text-gray-700">
            기획의 진심을 기술의 가치로 잇는 <span className="text-brand-blue font-bold">임현욱</span>입니다.
          </p>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-en text-[10px] tracking-[0.2em] uppercase text-gray-400 font-bold">Scroll Down</span>
          <div className="w-[1px] h-12 bg-linear-to-b from-brand-blue/60 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
