'use client';

import { useCallback } from 'react';
import { ArrowUp, Github, Mail, Sparkles, Send, ExternalLink } from 'lucide-react';

export default function Footer() {
  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <footer className="w-full bg-[#0B0F1E] border-t border-white/10 text-white pt-20 pb-12">
      <div className="section-container space-y-16">
        {/* ─── 1. 상단 CTA 배너 카드 (Ready to get started?) ─── */}
        <div className="w-full p-8 md:p-12 rounded-[24px] bg-white/[0.02] border border-white/[0.08] backdrop-blur-[10px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-2">
            <h3 className="text-2xl md:text-3xl font-bold font-heading text-white tracking-tight">
              Ready to work together?
            </h3>
            <p className="text-[#94A3B8] text-sm md:text-base leading-relaxed">
              새로운 프로젝트나 완성도 높은 반응형 웹 퍼블리싱이 필요하신가요?
              언제든 편하게 연락 주세요.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="mailto:gusdnrs@naver.com"
              className="px-6 py-3 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.1] text-white text-sm font-semibold transition-all flex items-center gap-2"
            >
              <Mail size={16} />
              <span>이메일 문의</span>
            </a>
            <button
              onClick={() => scrollTo('contact')}
              className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold shadow-lg shadow-indigo-600/25 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Contact Me</span>
              <Send size={14} />
            </button>
          </div>
        </div>

        {/* ─── 2. 메인 푸터 링크 그리드 (Company / Product / Resources / Legal 스타일) ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pt-4">
          {/* 브랜드 컬럼 (2열 차지) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
                <Sparkles size={16} className="fill-white/20" />
              </div>
              <span className="text-2xl font-extrabold text-white tracking-tight">
                HW<span className="text-indigo-500">.</span>
              </span>
            </div>
            <p className="text-[#94A3B8] text-sm leading-relaxed max-w-sm">
              5년차 웹 퍼블리셔 / 프론트엔드 개발자 임현욱입니다.
              37개 이상의 실무 프로젝트 구축 및 리뉴얼 경험을 바탕으로 픽셀 단위의 섬세한 UI 구현을 지향합니다.
            </p>
          </div>

          {/* Navigation 컬럼 */}
          <div className="space-y-4">
            <h4 className="text-white text-base font-bold tracking-tight">Navigation</h4>
            <ul className="space-y-2.5 text-sm text-[#94A3B8]">
              {['about', 'career', 'skills', 'projects', 'contact'].map(id => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="hover:text-white transition-colors capitalize cursor-pointer"
                  >
                    {id}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Major Projects 컬럼 */}
          <div className="space-y-4">
            <h4 className="text-white text-base font-bold tracking-tight">Featured Projects</h4>
            <ul className="space-y-2.5 text-sm text-[#94A3B8]">
              <li>
                <button onClick={() => scrollTo('projects')} className="hover:text-white transition-colors cursor-pointer text-left">
                  기운찬한방병원
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('projects')} className="hover:text-white transition-colors cursor-pointer text-left">
                  주연여성의원
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('projects')} className="hover:text-white transition-colors cursor-pointer text-left">
                  베스트연합의원
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('projects')} className="hover:text-white transition-colors cursor-pointer text-left">
                  성남센트럴안과
                </button>
              </li>
            </ul>
          </div>

          {/* Tech & Contact 컬럼 */}
          <div className="space-y-4">
            <h4 className="text-white text-base font-bold tracking-tight">Contact Info</h4>
            <ul className="space-y-2.5 text-sm text-[#94A3B8]">
              <li>
                <a href="mailto:gusdnrs@naver.com" className="hover:text-white transition-colors block truncate">
                  gusdnrs@naver.com
                </a>
              </li>
              <li>
                <a href="https://github.com/gusdnrs" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>github.com/gusdnrs</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li className="text-xs text-slate-500 pt-1">
                서울, 대한민국
              </li>
            </ul>
          </div>
        </div>

        {/* ─── 3. 하단 구분선 & 카피라이트 & 소셜 ─── */}
        <div className="space-y-6 pt-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#64748B]">
              © 2026 임현욱. All rights reserved. Built with Next.js &amp; TailwindCSS.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/gusdnrs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.03] hover:bg-white/[0.1] border border-white/[0.08] hover:border-white/20 flex items-center justify-center text-[#94A3B8] hover:text-white transition-all"
                aria-label="GitHub Profile"
              >
                <Github size={16} />
              </a>
              <a
                href="mailto:gusdnrs@naver.com"
                className="w-9 h-9 rounded-full bg-white/[0.03] hover:bg-white/[0.1] border border-white/[0.08] hover:border-white/20 flex items-center justify-center text-[#94A3B8] hover:text-white transition-all"
                aria-label="Send Email"
              >
                <Mail size={16} />
              </a>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-9 h-9 rounded-full bg-white/[0.03] hover:bg-white/[0.1] border border-white/[0.08] hover:border-white/20 flex items-center justify-center text-[#94A3B8] hover:text-white transition-all cursor-pointer"
                aria-label="Scroll to top"
              >
                <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
