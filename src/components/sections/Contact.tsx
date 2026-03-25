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
    desc: '채용 관련 문의',
    isCopy: true,
  },
  {
    name: 'Resume',
    icon: <FileText className="w-6 h-6" />,
    url: '/documents/resume_hyunwook.pdf',
    color: 'from-[#5856D6] to-[#AF52DE]',
    desc: '상세 경력기술서 확인하기',
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
          trigger: containerRef.current,
          start: 'top 92%',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      // 2. Main content area (Left and Right)
      gsap.from('.contact-left-animate', {
        scrollTrigger: {
          trigger: '.contact-main-card',
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from('.contact-card-animate', {
        scrollTrigger: {
          trigger: '.contact-cards-container',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        y: 20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: 'power2.out',
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
              <h2 className="contact-left-animate text-[clamp(1.75rem,5vw,3rem)] md:text-4xl lg:text-5xl font-bold leading-[1.3] md:leading-[1.2] tracking-tight text-[#1D1D1F] max-w-2xl break-keep">
                기획의 아이디어와 <br />
                사용자의 경험을 <br className="md:hidden" />
                코드로 잇는 <br className="md:hidden" />
                <span className="text-brand-blue">임현욱</span>
                입니다.
              </h2>
            </div>

            {/* 오른쪽 영역: 링크 카드 보드 (40%) */}
            <div className="contact-cards-container lg:col-span-4 p-8 pb-16 md:p-12 bg-white/5 flex flex-col justify-start lg:justify-center">
              <div className="grid grid-cols-1 gap-4">
                {contactLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.isCopy ? undefined : link.url}
                    onClick={link.isCopy ? handleCopyEmail : undefined}
                    target={link.isCopy ? undefined : '_blank'}
                    rel={link.isCopy ? undefined : 'noopener noreferrer'}
                    className={`contact-card-animate group relative flex items-center justify-between p-6 rounded-[32px] bg-white/40 border border-white/60 backdrop-blur-md transition-[box-shadow,transform,background-color] duration-500 hover:bg-white/60 hover:shadow-xl hover:-translate-x-2 cursor-pointer`}
                  >
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-5">
                      <div
                        className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-linear-to-br ${link.color} flex items-center justify-center text-white shadow-lg shadow-blue-500/10 group-hover:scale-110 transition-transform duration-500`}
                      >
                        {link.icon}
                      </div>
                      <div className="flex flex-col">
                        <h4 className="text-lg font-bold text-[#1D1D1F] group-hover:text-[#007AFF] transition-colors tracking-tight">
                          {link.name}
                        </h4>
                        <p className="text-sm md:text-base text-[#86868B] font-medium leading-relaxed mt-1">
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
