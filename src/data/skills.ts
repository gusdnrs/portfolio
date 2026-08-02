import type { Skill } from '@/types';

export const skills: Skill[] = [
  // 마크업
  { name: 'HTML5', icon: 'html5', category: 'markup' },
  { name: 'CSS3', icon: 'css3', category: 'markup' },
  { name: 'SCSS/SASS', icon: 'sass', category: 'markup' },

  // 스크립트
  { name: 'JavaScript', icon: 'javascript', category: 'script' },
  { name: 'TypeScript', icon: 'typescript', category: 'script' },
  { name: 'jQuery', icon: 'jquery', category: 'script' },

  // 프레임워크
  { name: 'React', icon: 'react', category: 'framework' },
  { name: 'Next.js', icon: 'nextjs', category: 'framework' },
  { name: 'TailwindCSS', icon: 'tailwindcss', category: 'framework' },

  // 모션/애니메이션
  { name: 'GSAP', icon: 'gsap', category: 'motion' },
  { name: 'Framer Motion', icon: 'framer', category: 'motion' },

  // 도구
  { name: 'Git / GitHub', icon: 'github', category: 'tool' },
  { name: 'Figma', icon: 'figma', category: 'tool' },
  { name: 'Photoshop', icon: 'photoshop', category: 'tool' },

  // 기타
  { name: 'Responsive Web', icon: 'responsive', category: 'etc' },
  { name: 'Cross-browser', icon: 'browser', category: 'etc' },
  { name: 'SEO', icon: 'seo', category: 'etc' },
  { name: 'Gnuboard', icon: 'gnuboard', category: 'etc' },
];
