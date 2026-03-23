'use client';

import { useRef } from 'react';
import { Github, Mail, FileText, FileUser, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const contactLinks = [
  {
    icon: Github,
    label: '깃허브',
    subLabel: '저장소 보러가기',
    href: 'https://github.com/gusdnrs',
  },
  {
    icon: FileText,
    label: '노션',
    subLabel: '포트폴리오 / 아카이브',
    href: 'https://gusdnrs.notion.site/PORTFOLIO-1288b8f2d57d8063be82ea0f4882ce0d?pvs=4',
  },
  {
    icon: Mail,
    label: '이메일',
    subLabel: 'gusdnrs@naver.com',
    href: 'mailto:gusdnrs@naver.com',
  },
  {
    icon: FileUser,
    label: '이력서',
    subLabel: '상세 이력서 보기',
    href: '/resume_hyunwook.pdf',
  },
];

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Header Animation
      gsap.from('.contact-headline-item', {
        scrollTrigger: {
          trigger: '#contact',
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
      });

      // Link Items Animation
      gsap.fromTo(
        '.contact-link-tile',
        {
          y: 40,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: '#contact',
            start: 'top 80%',
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      id="contact"
      className="py-24 md:py-32 lg:py-48 px-4 bg-white relative overflow-hidden"
      ref={containerRef}
    >
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Side: Impactful Text */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="space-y-8 md:space-y-10">
              <h2 className="contact-headline-item text-3xl lg:text-5xl font-black tracking-tight text-gray-950 leading-tight">
                41건의 프로젝트로 검증된 실무 숙련도, <br />
                기획의 의도를 코드로 잇는 임현욱입니다.
              </h2>
              
              <div className="contact-headline-item space-y-6 md:space-y-8">
                <p className="text-lg font-medium text-gray-600 opacity-80 leading-relaxed max-w-xl">
                  기획의 의도를 정확하게 파악하고, 사용자 경험을 최우선으로 고려하는 견고한 코드를 통해 당신의 비즈니스 가치를 화면 위에 실현하겠습니다. <br /><br />
                  저에게 궁금한 점이 있으시다면 연락해 주세요 :) <br />
                  빠르게 답장 드리겠습니다!
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Links Grid */}
          <div className="lg:col-span-6 flex items-center">
            <div className="contact-links-grid grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
              {contactLinks.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link-tile group relative p-8 md:p-10 rounded-3xl bg-white border border-gray-100 shadow-sm hover:border-brand-blue/20 hover:shadow-[0_20px_40px_-12px_rgba(58,89,209,0.15)] transition-all duration-500 overflow-hidden"
                  >
                    {/* Hover Glow Effect */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-blue/0 group-hover:bg-brand-blue/5 rounded-full blur-3xl transition-all duration-700" />
                    
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-12">
                        <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-brand-blue group-hover:bg-brand-blue/5 transition-all duration-500">
                          <Icon size={24} />
                        </div>
                        <ArrowUpRight className="text-gray-300 group-hover:text-brand-blue group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" size={20} />
                      </div>
                      
                      <div>
                        <span className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-brand-blue/60 transition-colors">
                          {link.label}
                        </span>
                        <p className="text-xl font-bold text-gray-900 tracking-tight mt-1 group-hover:text-brand-blue transition-colors">
                          {link.subLabel}
                        </p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
