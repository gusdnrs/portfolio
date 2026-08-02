'use client';

import { useEffect, useState } from 'react';

// 현재 스크롤 위치에 따른 활성 섹션 감지
export function useScrollSpy(sectionIds: string[]) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.find(e => e.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    );

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
