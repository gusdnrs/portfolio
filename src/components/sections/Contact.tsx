'use client';

import { useRef } from 'react';
import { Github, Mail, FileText, FileUser } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

  const snsLinks = [
    {
      id: 1,
      name: 'Github',
      label: 'Repository',
      href: 'https://github.com/gusdnrs',
      icon: <Github size={24} />,
    },
    {
      id: 2,
      name: 'Notion',
      label: 'Portfolio / Archive',
      href: 'https://h-gomi.notion.site/2e0eae09287780078b1bf89ddfae8189?pvs=143',
      icon: <FileText size={24} />,
    },
    {
      id: 3,
      name: 'Email',
      label: 'gusdnrs@naver.com',
      href: 'mailto:gusdnrs@naver.com',
      icon: <Mail size={24} />,
    },
    {
      id: 4,
      name: 'Resume',
      label: 'Curriculum Vitae',
      href: '/documents/resume_hyunwook.pdf',
      icon: <FileUser size={24} />,
    },
  ];

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
      gsap.fromTo('.contact-link-tile', 
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
        }
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
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="contact-headline-item text-[clamp(2.5rem,7vw,5.5rem)] font-black tracking-tighter text-gray-950 uppercase leading-[0.95]">
                  Contact
                </h2>
              </div>

              <div className="contact-headline-item space-y-6">
                <p className="text-[clamp(1.1rem,2.1vw,1.4rem)] text-gray-600 font-semibold leading-relaxed max-w-xl">
                  좋은 기획이 기술을 만나 더 큰 가치를 만들 수 있도록, <br />
                  41건 이상의 프로젝트 경험을 녹여내어 세밀하고 견고한 화면을 그려냅니다. <br /><br />
                  단순한 구현을 넘어 비즈니스의 목적을 함께 고민하는 든든한 파트너가 되어 드릴게요. <br />
                  새로운 시작을 위한 즐거운 대화를 기다립니다.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Links Grid */}
          <div className="lg:col-span-6 flex items-center">
            <div className="contact-links-grid grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
              {snsLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target={link.name !== 'Email' ? '_blank' : undefined}
                  rel={
                    link.name !== 'Email' ? 'noopener noreferrer' : undefined
                  }
                  className="contact-link-tile group relative p-8 md:p-10 rounded-[40px] bg-gray-50/50 border border-transparent hover:border-brand-blue/10 hover:bg-white hover:shadow-[0_32px_64px_-16px_rgba(58,89,209,0.1)] transition-all duration-500 overflow-hidden"
                >
                  {/* Subtle Background Accent */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-blue/0 group-hover:bg-brand-blue/3 rounded-full blur-3xl transition-all duration-700" />

                  <div className="relative z-10 space-y-8">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-gray-400 group-hover:text-brand-blue group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      {link.icon}
                    </div>

                    <div>
                      <span className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-brand-blue/60 transition-colors">
                        {link.name}
                      </span>
                      <p className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight mt-1 group-hover:text-brand-blue transition-colors">
                        {link.label}
                      </p>
                    </div>
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
