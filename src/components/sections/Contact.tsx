'use client';

import React, { useState, useRef } from 'react';
import { Mail, Github, FileText, CheckCircle, ChevronRight, BookOpen } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const emailAddress = "gusdnrs@naver.com";

const contactLinks = [
  { 
    name: 'GitHub', 
    desc: '코드 저장소 및 오픈소스 활동',
    icon: <Github className="w-6 h-6" />, 
    url: 'https://github.com/gusdnrs', 
    color: 'from-gray-800 to-gray-600',
    isPrimary: false
  },
  { 
    name: 'Notion', 
    desc: '기술 블로그 및 프로젝트 아카이브',
    icon: <BookOpen className="w-6 h-6" />, 
    url: 'https://h-gomi.notion.site/2e0eae09287780078b1bf89ddfae8189?pvs=143', 
    color: 'from-blue-500 to-indigo-500',
    isPrimary: false
  },
  { 
    name: 'Email', 
    desc: '협업 및 채용 관련 문의',
    icon: <Mail className="w-6 h-6" />, 
    url: `mailto:${emailAddress}`, 
    color: 'from-cyan-500 to-blue-500',
    isPrimary: false
  },
  { 
    name: 'Resume', 
    desc: '상세 경력기술서 확인하기',
    icon: <FileText className="w-6 h-6" />, 
    url: '/resume_hyunwook.pdf', 
    color: 'from-blue-600 to-blue-800',
    isPrimary: true
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
      // Header Animation
      gsap.from('.contact-header-animate', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power4.out',
      });

      // Cards Animation
      gsap.from('.contact-card-animate', {
        scrollTrigger: {
          trigger: '.contact-cards-grid',
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
      });
    },
    { scope: containerRef },
  );

  return (
    <div id="contact" ref={containerRef} className="bg-[#f8f9fa] text-[#191f28] selection:bg-blue-100 overflow-hidden relative">
      
      {/* 배경 장식 (글래스모피즘 극대화를 위한 소프트 그라데이션) */}
      <div className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] -right-[5%] w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-[100px] pointer-events-none"></div>

      <section className="relative pt-40 pb-24 px-8 max-w-[1440px] mx-auto z-10">
        
        {/* 헤더 섹션 */}
        <div className="flex flex-col items-center text-center mb-24">
          <span className="contact-header-animate text-[#3182f6] font-bold tracking-[0.2em] mb-6 text-sm uppercase">Contact</span>
          <h2 className="contact-header-animate text-5xl md:text-7xl font-extrabold mb-10 tracking-tight leading-[1.1]">
            기획의 의도를 코드로 잇는<br/>
            임현욱입니다.
          </h2>
          <div className="contact-header-animate h-[2px] w-20 bg-[#3182f6] mb-10"></div>
          <p className="contact-header-animate text-[#4e5968] text-xl md:text-2xl font-medium max-w-3xl leading-relaxed">
            41건의 프로젝트로 검증된 실무 숙련도,<br className="hidden md:block"/>
            사용자 경험을 최우선으로 생각하는 프론트엔드 퍼블리셔입니다.
          </p>
        </div>

        {/* 카드 그리드 영역 (글래스모피즘 스타일) */}
        <div className="contact-cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactLinks.map((link, idx) => (
            <a 
              key={idx}
              href={link.name === 'Email' ? undefined : link.url}
              onClick={link.name === 'Email' ? handleCopyEmail : undefined}
              target={link.name === 'Email' ? undefined : "_blank"}
              rel={link.name === 'Email' ? undefined : "noopener noreferrer"}
              className={`contact-card-animate relative group p-8 rounded-[40px] border border-white/60 bg-white/40 backdrop-blur-2xl transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] hover:-translate-y-3 overflow-hidden ${link.isPrimary ? 'ring-2 ring-blue-500/20' : ''} cursor-pointer block`}
            >
              {/* 카드 내부 장식 */}
              <div className={`absolute -right-8 -top-8 w-24 h-24 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full`}></div>
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${link.color} flex items-center justify-center text-white mb-8 shadow-lg shadow-blue-500/10`}>
                    {link.icon}
                  </div>
                  <h4 className="text-2xl font-bold mb-3">{link.name}</h4>
                  <p className="text-[#4e5968] text-sm font-medium leading-relaxed mb-8">
                    {link.desc}
                  </p>
                </div>
                
                <div className="flex items-center text-[#3182f6] font-bold text-sm">
                  {link.name === 'Email' && copied ? (
                    <span className="flex items-center gap-2 text-green-500 transition-all">
                      <CheckCircle className="w-4 h-4" /> 복사 완료
                    </span>
                  ) : (
                    <span className="flex items-center gap-2 group-hover:gap-3 transition-all">
                      {link.name === 'Email' ? '이메일 주소 복사하기' : '보러가기'} <ChevronRight className="w-4 h-4" />
                    </span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* 하단 추가 안내 문구 */}
        <div className="contact-card-animate mt-20 p-8 rounded-[32px] bg-white/30 backdrop-blur-md border border-white/50 text-center max-w-2xl mx-auto">
          <p className="text-[#8b95a1] text-sm font-medium">
            비즈니스 파트너십, 프로젝트 의뢰, 또는 단순한 커피 챗도 환영합니다. <br/>
            빠른 시일 내에 회신드리겠습니다.
          </p>
        </div>
      </section>

      {/* 푸터 영역: 선이 마지막으로 마감되는 지점 */}
      <footer className="mt-12 py-16 text-center border-t border-gray-100/50 relative z-10">
        <div className="w-[4px] h-20 bg-gradient-to-b from-[#3182f6] to-transparent mx-auto mb-12"></div>
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-6 mb-2">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse delay-75"></span>
            <span className="w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse delay-150"></span>
          </div>
          <p className="text-[#191f28] font-bold text-lg tracking-tight">Hyunwook Lim</p>
          <p className="text-[#8b95a1] text-xs font-medium tracking-widest uppercase">© 2026 Design & Built by Hyunwook</p>
        </div>
      </footer>
    </div>
  );
}
