'use client';

import { useRef, useState, useEffect } from 'react';
import { Github, Mail, FileText, FileUser } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // IntersectionObserver for reliable reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const snsLinks = [
    {
      id: 1,
      name: 'Github',
      label: 'Repository',
      href: 'https://github.com/gusdnrs',
      icon: <Github size={20} />,
    },
    {
      id: 2,
      name: 'Notion',
      label: 'Portfolio / Archive',
      href: 'https://h-gomi.notion.site/2e0eae09287780078b1bf89ddfae8189?pvs=143',
      icon: <FileText size={20} />,
    },
    {
      id: 3,
      name: 'Email',
      label: 'gusdnrs@naver.com',
      href: 'mailto:gusdnrs@naver.com',
      icon: <Mail size={20} />,
    },
    {
      id: 4,
      name: 'Resume',
      label: 'Curriculum Vitae',
      href: '/documents/resume_hyunwook.pdf',
      icon: <FileUser size={20} />,
    },
  ];

  useGSAP(
    () => {
      // Header Animation
      gsap.from('.contact-header-block', {
        scrollTrigger: {
          trigger: '.contact-header-block',
          start: 'top 92%',
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'back.out(1.7)',
      });

      // Footer Note Animation
      gsap.from('.contact-footer-note', {
        scrollTrigger: {
          trigger: '.contact-footer-note',
          start: 'top 95%',
        },
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      id="contact"
      className="py-20 md:py-32 lg:py-40 px-4 bg-white overflow-hidden relative border-t border-gray-50"
      ref={containerRef}
    >
      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* ── Header ── */}
        <div className="contact-header-block mb-16 md:mb-24">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black tracking-tighter text-gray-900 uppercase leading-[1.05]">
              Contact
            </h2>
            <div className="flex flex-col gap-2 lg:text-right">
              <p className="text-[clamp(1rem,2vw,1.375rem)] font-medium text-gray-500 leading-relaxed max-w-xl lg:ml-auto">
                새로운 기회와 성장을 위한 연결을 환영합니다.
                <br />
                기획의 진심을 기술의 가치로 번역합니다.
              </p>
            </div>
          </div>
          <div className="h-px bg-gray-100" />
        </div>

        {/* ── Unified Contact Card ── */}
        <div
          id="contact-main-card"
          ref={cardRef}
          className={`relative max-w-5xl mx-auto rounded-[48px] p-10 md:p-20 border-2 transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0 border-brand-blue/30 shadow-2xl shadow-brand-blue/5'
              : 'opacity-0 translate-y-16 border-gray-100 shadow-none'
          } bg-white/80 backdrop-blur-sm shadow-2xl`}
          style={{
            boxShadow:
              '0 40px 100px -20px rgba(58, 89, 209, 0.08), 0 0 1px rgba(0,0,0,0.1)',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            <div className="space-y-8">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-blue mb-2 block">
                  Connect
                </span>
                <h3 className="text-[clamp(1.75rem,4vw,2.5rem)] font-black text-gray-900 leading-tight tracking-tight">
                  Let&apos;s create <br />
                  something great.
                </h3>
              </div>
              <p className="text-[clamp(1.125rem,2.2vw,1.5rem)] text-gray-500 font-medium leading-relaxed">
                진정성 있는 기획과 탄탄한 퍼블리싱 기술로{' '}
                <br className="hidden md:block" />
                함께 성장할 수 있는 파트너를 찾습니다.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {snsLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target={link.name !== 'Email' ? '_blank' : undefined}
                  rel={
                    link.name !== 'Email' ? 'noopener noreferrer' : undefined
                  }
                  className="contact-link-item group p-8 rounded-[32px] bg-gray-50 hover:bg-brand-blue/5 transition-all duration-500 flex flex-col gap-5 border border-transparent hover:border-brand-blue/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-gray-400 group-hover:text-brand-blue transition-colors shadow-sm">
                    {link.icon}
                  </div>
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-[0.15em] text-gray-400 group-hover:text-brand-blue/50">
                      {link.name}
                    </span>
                    <p className="text-lg font-bold text-gray-900 truncate">
                      {link.label}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
