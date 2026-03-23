'use client';

import { useRef } from 'react';
import { Github, Mail, FileText, FileUser, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const contactLinks = [
  {
    icon: Github,
    label: 'GitHub',
    subLabel: '저장소 보러가기',
    href: 'https://github.com/gusdnrs',
  },
  {
    icon: FileText,
    label: 'Notion',
    subLabel: '포트폴리오',
    href: 'https://h-gomi.notion.site/2e0eae09287780078b1bf89ddfae8189?pvs=143',
  },
  {
    icon: Mail,
    label: 'Email',
    subLabel: 'gusdnrs@naver.com',
    href: 'mailto:gusdnrs@naver.com',
  },
  {
    icon: FileUser,
    label: 'Resume',
    subLabel: '상세 이력서 보기',
    href: '/resume_hyunwook.pdf',
  },
];

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Main Block Animation
      gsap.from('.contact-content-block', {
        scrollTrigger: {
          trigger: '#contact',
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
      });

      // Text Header Animation
      gsap.from('.contact-animate-header', {
        scrollTrigger: {
          trigger: '.contact-content-block',
          start: 'top 75%',
        },
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
      });

      // Cards Animation (fromTo for absolute reliability)
      gsap.fromTo(
        '.contact-link-tile',
        {
          y: 40,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: '.contact-links-grid',
            start: 'top 85%',
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
      className="py-24 md:py-32 lg:py-48 px-4 bg-[#F8F9FA] relative overflow-hidden"
      ref={containerRef}
    >
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="contact-content-block max-w-7xl mx-auto bg-white rounded-[48px] md:rounded-[64px] border border-gray-100 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] overflow-hidden">
          <div className="px-8 py-20 md:px-16 md:py-24 lg:py-32 text-center">
            {/* Header Text Section */}
            <div className="mb-20 space-y-10">
              <h2 className="contact-animate-header text-[clamp(2.5rem,6vw,5rem)] font-black tracking-tighter text-gray-900 uppercase leading-[1.05]">
                contact
              </h2>
              <div className="contact-animate-header space-y-6">
                <p className="text-[clamp(1.125rem,2.2vw,1.5rem)] text-gray-600 font-semibold leading-relaxed max-w-2xl mx-auto">
                  41건의 프로젝트로 검증된 실무 숙련도, <br className="hidden md:block" />
                  기획의 의도를 코드로 잇는 임현욱입니다.
                </p>
              </div>
            </div>

            {/* Links Grid Section */}
            <div className="contact-links-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {contactLinks.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link-tile group relative p-8 md:p-10 rounded-3xl bg-gray-50/50 border border-transparent hover:bg-white hover:border-brand-blue/10 hover:shadow-[0_20px_40px_-12px_rgba(58,89,209,0.12)] transition-all duration-500 flex flex-col items-center justify-between min-h-[220px]"
                  >
                    <div className="w-full flex justify-between items-start mb-12">
                      <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-gray-400 group-hover:text-brand-blue group-hover:bg-brand-blue/5 transition-all duration-500">
                        <Icon size={24} />
                      </div>
                      <ArrowUpRight
                        className="text-gray-300 group-hover:text-brand-blue group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500"
                        size={20}
                      />
                    </div>

                    <div className="text-center w-full">
                      <span className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-brand-blue/60 transition-colors block mb-1">
                        {link.label}
                      </span>
                      <p className="text-lg font-bold text-gray-900 tracking-tight group-hover:text-brand-blue transition-colors">
                        {link.subLabel}
                      </p>
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
