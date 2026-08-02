'use client';

import { useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import type { Project } from '@/types';
import { categoryLabels } from '@/data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  onClose,
}: ProjectModalProps) {
  // body 스크롤 잠금
  useEffect(() => {
    if (project) {
      document.body.classList.add('modal-open');
    }
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [project]);

  // ESC 키로 닫기
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () =>
      window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex
            items-end md:items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* 백드롭 */}
          <motion.div
            className="absolute inset-0 bg-black/60
              backdrop-blur-sm"
            onClick={onClose}
          />

          {/* 모달 시트 */}
          <motion.div
            className="relative z-10 w-full
              max-w-3xl max-h-[90vh]
              bg-bg-card border border-border-primary
              rounded-t-3xl md:rounded-2xl
              overflow-y-auto custom-scrollbar"
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{
              type: 'spring',
              damping: 30,
              stiffness: 300,
            }}
          >
            {/* 닫기 버튼 */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20
                p-2 rounded-full bg-bg-card/80
                backdrop-blur-md border border-border-primary
                text-text-secondary hover:text-text-primary
                transition-colors cursor-pointer"
              aria-label="닫기"
            >
              <X size={20} />
            </button>

            {/* 메인 이미지 */}
            {project.images.length > 0 && (
              <div className="relative w-full aspect-[16/9]
                bg-bg-secondary overflow-hidden">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
            )}

            {/* 콘텐츠 */}
            <div className="p-6 md:p-8 space-y-6">
              {/* 카테고리 태그 */}
              <div className="flex flex-wrap gap-2">
                {project.category.map(cat => (
                  <span
                    key={cat}
                    className="px-3 py-1 text-xs
                      font-mono-custom rounded-full
                      bg-bg-secondary
                      border border-border-primary
                      text-text-tertiary"
                  >
                    {categoryLabels[cat]}
                  </span>
                ))}
              </div>

              {/* 타이틀 */}
              <h3 className="text-2xl md:text-3xl font-bold
                text-text-primary leading-tight">
                {project.title}
              </h3>

              {/* 짧은 설명 */}
              <p className="text-text-secondary
                leading-relaxed">
                {project.shortDescription}
              </p>

              {/* 상세 설명 */}
              <div className="pt-4 border-t
                border-border-primary">
                <h4 className="font-mono-custom text-xs
                  text-text-tertiary uppercase
                  tracking-wider mb-3">
                  상세 설명
                </h4>
                <p className="text-sm text-text-secondary
                  leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              {/* 기여도 */}
              <div className="pt-4 border-t
                border-border-primary">
                <h4 className="font-mono-custom text-xs
                  text-text-tertiary uppercase
                  tracking-wider mb-3">
                  기여도
                </h4>
                <p className="text-sm text-text-secondary
                  leading-relaxed">
                  {project.contribution}
                </p>
              </div>

              {/* 스크린샷 갤러리 */}
              {project.images.length > 1 && (
                <div className="pt-4 border-t
                  border-border-primary">
                  <h4 className="font-mono-custom text-xs
                    text-text-tertiary uppercase
                    tracking-wider mb-4">
                    스크린샷
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {project.images.slice(1).map(
                      (img, idx) => (
                        <div
                          key={idx}
                          className="relative aspect-[4/3]
                            rounded-lg overflow-hidden
                            bg-bg-secondary
                            border border-border-primary"
                        >
                          <Image
                            src={img}
                            alt={`${project.title} 스크린샷 ${idx + 1}`}
                            fill
                            className="object-cover
                              object-top"
                            sizes="(max-width: 768px) 50vw, 350px"
                          />
                        </div>
                      ),
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
