'use client';

import { motion } from 'framer-motion';
import HeroBackground from './HeroBackground';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white pt-20"
    >
      <HeroBackground />
      <div className="relative z-10 text-center px-4 max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="font-en text-[clamp(2.5rem,12.5vw,10rem)] xl:text-[10rem] font-black leading-[0.9] tracking-tighter text-brand-blue-dark mb-8 select-none">
            <span className="text-brand-blue">IM</span> HYUNWOOK
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          className="flex flex-col items-center gap-4"
        >
          <p className="text-lg md:text-2xl pt-2 font-medium tracking-tight text-gray-700">
            기획의 아이디어와 사용자의 경험을 코드로 잇는&nbsp;
            <span>
              <span className="text-brand-blue font-bold">임현욱</span>입니다.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
