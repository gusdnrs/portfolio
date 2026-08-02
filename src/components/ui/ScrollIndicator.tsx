'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function ScrollIndicator() {
  return (
    <motion.button
      onClick={() => {
        document
          .getElementById('about')
          ?.scrollIntoView({ behavior: 'smooth' });
      }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2
        flex flex-col items-center gap-2 cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 0.6 }}
    >
      <span className="font-mono-custom text-xs
        text-text-tertiary tracking-widest uppercase">
        scroll
      </span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <ChevronDown
          size={20}
          className="text-text-tertiary"
        />
      </motion.div>
    </motion.button>
  );
}
