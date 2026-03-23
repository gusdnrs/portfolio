'use client';

import React, { useState, useRef } from 'react';
import {
  Mail,
  Github,
  FileText,
  CheckCircle,
  ExternalLink,
  BookOpen,
} from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const emailAddress = 'gusdnrs@naver.com';

const contactLinks = [
  {
    name: 'GitHub',
    icon: <Github className="w-6 h-6" />,
    url: 'https://github.com/gusdnrs',
    color: 'from-[#24292F] to-[#444d56]',
    desc: '코드 저장소 및 오픈소스 활동',
  },
  {
    name: 'Notion',
    icon: <BookOpen className="w-6 h-6" />,
    url: 'https://h-gomi.notion.site/2e0eae09287780078b1bf89ddfae8189?pvs=143',
    color: 'from-[#000000] to-[#37352F]',
    desc: '기술 블로그 및 프로젝트 아카이브',
  },
  {
    name: 'Email',
    icon: <Mail className="w-6 h-6" />,
    url: `mailto:${emailAddress}`,
    color: 'from-[#007AFF] to-[#5AC8FA]',
    desc: '협업 및 채용 관련 문의',
    isCopy: true,
  },
  {
    name: 'Resume',
    icon: <FileText className="w-6 h-6" />,
    url: '/resume_hyunwook.pdf',
    color: 'from-[#5856D6] to-[#AF52DE]',
    desc: '상세 경력기술서 확인하기',
    isPrimary: true,
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(emailAddress).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  useGSAP(
    () => {
      // 1. Title Reveal
      gsap.from('.contact-title-animate', {
        scrollTrigger: {
          trigger: '.contact-top',
          start: 'top 92%',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'back.out(1.7)',
      });

      // 2. Main content area (Left and Right)
      gsap.from('.contact-left-animate', {
        scrollTrigger: {
          trigger: '.contact-main-card',
          start: 'top 85%',
        },
        x: -40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power4.out',
      });

      gsap.from('.contact-card-animate', {
        scrollTrigger: {
          trigger: '.contact-main-card',
          start: 'top 85%',
        },
        x: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
      });

      // Connecting Line Animation
      gsap.from('.contact-line', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 95%',
        },
        scaleY: 0,
        transformOrigin: 'top',
        duration: 1.5,
        ease: 'power3.inOut',
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      id="contact"
      ref={containerRef}
      className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] selection:bg-blue-100 overflow-hidden relative flex items-center justify-center py-24 md:py-32 lg:py-40"
    >
      {/* 1. 배경 요소: CONTACT 텍스트 & 컬러 블롭 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[30%] left-[20%] w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[15%] w-[600px] h-[600px] bg-purple-400/10 rounded-full blur-[140px]"></div>
      </div>

      {/* 2. 연결 선 (About으로부터 섹션으로 이어짐) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-linear-to-b from-transparent to-[#007AFF] contact-line origin-top"></div>
      <div className="absolute top-32 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border border-[#007AFF]/30 flex items-center justify-center">
        <div className="w-2 h-2 bg-[#007AFF] rounded-full animate-ping"></div>
      </div>

      {/* 3. 메인 와이드 카드 (Split Layout) */}
      <section className="relative z-10 w-full max-w-[1440px] px-8">
        {/* TOP: Header Title - Added to match About Me style */}
        <div className="contact-top mb-16 md:mb-24 text-center lg:text-left">
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black tracking-tighter text-gray-900 uppercase leading-[1.05]">
            <span className="contact-title-animate block mb-2">Contact</span>
          </h2>
        </div>

        <div className="contact-main-card bg-white/10 backdrop-blur-2xl backdrop-saturate-180 rounded-[48px] md:rounded-[60px] border border-white/40 shadow-[0_40px_100px_rgba(0,0,0,0.05)] overflow-hidden">
          <div className="grid lg:grid-cols-10 items-stretch min-h-[600px] md:min-h-[700px]">
            {/* 왼쪽 영역: 강력한 헤드라인 (60%) */}
            <div className="lg:col-span-6 p-10 md:p-16 lg:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/20">
              <div className="contact-left-animate flex items-center gap-3 mb-8">
                <span className="w-12 h-px bg-[#007AFF]"></span>
                <span className="text-[#007AFF] font-bold tracking-[0.3em] text-sm uppercase">
                  Get in Touch
                </span>
              </div>
              <h2 className="contact-left-animate text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight mb-10 text-[#1D1D1F]">
                41건의 프로젝트로 검증된 <br />
                실무 숙련도, <br />
                기획의 의도를 코드로 잇는 <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#007AFF] to-[#5AC8FA]">
                  임현욱입니다.
                </span>
              </h2>
              <p className="contact-left-animate text-[#48484a] text-xl font-medium leading-relaxed max-w-xl opacity-80">
                사용자 경험을 최우선으로 생각하며, <br />
                디자인과 개발 사이의 간극을 완벽하게 메우는 <br />
                프론트엔드 퍼블리셔를 지향합니다.
              </p>
            </div>

            {/* 오른쪽 영역: 링크 카드 보드 (40%) */}
            <div className="contact-cards-container lg:col-span-4 p-8 md:p-12 bg-white/5 flex flex-col justify-center">
              <div className="grid grid-cols-1 gap-4">
                {contactLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.isCopy ? undefined : link.url}
                    onClick={link.isCopy ? handleCopyEmail : undefined}
                    target={link.isCopy ? undefined : '_blank'}
                    rel={link.isCopy ? undefined : 'noopener noreferrer'}
                    className={`contact-card-animate group relative flex items-center justify-between p-6 rounded-[32px] bg-white/40 border border-white/60 backdrop-blur-md transition-all duration-500 hover:bg-white/60 hover:shadow-xl hover:-translate-x-2 cursor-pointer ${link.isPrimary ? 'ring-2 ring-[#007AFF]/10' : ''}`}
                  >
                    <div className="flex items-center gap-5">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-linear-to-br ${link.color} flex items-center justify-center text-white shadow-lg shadow-blue-500/10 group-hover:scale-110 transition-transform duration-500`}
                      >
                        {link.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#1D1D1F] group-hover:text-[#007AFF] transition-colors tracking-tight">
                          {link.name}
                        </h4>
                        <p className="text-xs text-[#86868B] font-medium leading-none mt-1">
                          {link.desc}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {link.isCopy && copied ? (
                        <div className="text-green-500 flex items-center gap-1 text-sm font-bold animate-in fade-in zoom-in">
                          <CheckCircle className="w-4 h-4" /> Copied
                        </div>
                      ) : (
                        <div className="p-2 rounded-full bg-black/5 text-[#1D1D1F] opacity-0 group-hover:opacity-100 transition-all">
                          <ExternalLink className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
