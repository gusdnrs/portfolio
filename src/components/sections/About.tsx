'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { projects } from '@/utils/projects';

// 전역 초기화에서 처리됨

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isToggled, setIsToggled] = useState(false);

  useGSAP(
    () => {
      // 1. Top Headline Reveal
      gsap.from('.about-headline-line', {
        scrollTrigger: {
          trigger: '.about-top',
          start: 'top 92%',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'back.out(1.7)',
      });

      // 2. Main content area (Image and Right Side)
      gsap.from('.about-image-wrapper', {
        scrollTrigger: {
          trigger: '.about-main',
          start: 'top 92%',
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
      });

      gsap.from('.about-right-side', {
        scrollTrigger: {
          trigger: '.about-main',
          start: 'top 92%',
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
      });

      // History Reveal
      gsap.from('.about-history-col', {
        scrollTrigger: {
          trigger: '.about-history',
          start: 'top 92%',
        },
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'back.out(1.4)',
      });

      // 3. Tech Marquee Logic
      const marqueeInner = containerRef.current?.querySelector(
        '.tech-marquee-inner',
      );
      if (marqueeInner) {
        // Responsive duration based on screen width
        const isMobile = window.innerWidth < 768;
        const duration = isMobile ? 25 : 35; // seconds for one full loop

        // Using 4 sets of clones (-25%) for absolute seamlessness on ultra-wide screens
        gsap.fromTo(
          marqueeInner,
          { xPercent: 0 },
          {
            xPercent: -25,
            repeat: -1,
            duration: duration,
            ease: 'none',
          },
        );
      }
    },
    { scope: containerRef },
  );

  const experiences = [
    {
      date: '2021.11 ~ 2025.11',
      company: '테라기획',
      title: '주임',
    },
    {
      date: '2020.06 ~ 2020.10',
      company: '영림임업',
      title: '사원',
    },
    {
      date: '2019.02 ~ 2019.08',
      company: '한국능률협회컨설팅',
      title: '인턴',
    },
  ];

  const education = [
    {
      date: '2021.06 ~ 2021.12',
      title:
        '(스마트웹&콘텐츠개발) [B.L]웹표준기반 스마트UI/UX디자인콘텐츠제작 수료 - 그린컴퓨터아카데미',
    },
    {
      date: '2011.03 ~ 2019.02',
      title: '한양대학교 (ERICA) 경제학부 학사',
    },
  ];

  const techIcons = [
    { name: 'HTML5', src: '/images/icons/html.svg' },
    { name: 'CSS3', src: '/images/icons/css.svg' },
    { name: 'Tailwind', src: '/images/icons/tailwind.svg' },
    { name: 'SCSS', src: '/images/icons/scss.svg' },
    { name: 'JS', src: '/images/icons/javascript.svg' },
    { name: 'jQuery', src: '/images/icons/jquery.svg' },
    { name: 'Gnuboard', src: '/images/icons/gnuboard.svg' },
    { name: 'PHP', src: '/images/icons/php.svg' },
    { name: 'MySQL', src: '/images/icons/mysql.svg' },
    { name: 'Figma', src: '/images/icons/figma.svg' },
    { name: 'Photoshop', src: '/images/icons/photoshop.svg' },
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-32 lg:py-40 px-4 bg-[#F5F5F7] overflow-hidden relative"
      ref={containerRef}
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-purple-400/10 rounded-full blur-[140px]"></div>
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* TOP: Header Title */}
        <div className="about-top mb-16 md:mb-24 text-center lg:text-left">
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black tracking-tighter text-gray-900 uppercase leading-[1.05]">
            <span className="about-headline-line block mb-2">About Me</span>
          </h2>
        </div>

        {/* ROW 1: Identity & Bio/Features */}
        <div id="identity" className="about-main mb-12 lg:mb-16">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-12">
            {/* Left: Image Container */}
            <div className="w-full lg:w-5/12">
              <div className="about-image-wrapper group relative aspect-video lg:aspect-4/5 rounded-[40px] overflow-hidden shadow-2xl w-full">
                <div
                  className="about-image-inner absolute inset-0 w-full h-full scale-[1.1] cursor-pointer"
                  onClick={() => setIsToggled(!isToggled)}
                >
                  <Image
                    src="/images/hero_bg.png"
                    alt="Im Hyunwook Profile"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className={`object-cover object-[50%_20%] transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:opacity-0 ${isToggled ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
                  />
                  <Image
                    src="/images/hero_bg_hover.jpg"
                    alt="Im Hyunwook Real Profile"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className={`object-cover object-[50%_20%] opacity-0 transition-all duration-700 ease-in-out scale-95 group-hover:scale-100 group-hover:opacity-100 ${isToggled ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                  />
                </div>
              </div>
            </div>

            {/* Right: Bio & Ultra-wide Features */}
            <div className="about-right-side w-full lg:w-7/12 flex flex-col justify-center">
              <div className="text-left space-y-8">
                <h3 className="text-[clamp(1.75rem,4vw,2.5rem)] font-black text-brand-blue tracking-tight leading-[1.2]">
                  Im Hyun-wook
                </h3>
                <div className="space-y-6 text-[clamp(1rem,2vw,1.375rem)] text-gray-600 leading-relaxed font-medium">
                  <p>
                    안녕하세요! 웹 퍼블리셔&nbsp;
                    <span className="font-bold text-brand-blue">임현욱</span>
                    입니다.
                  </p>
                  <p>
                    <span className="font-bold text-brand-blue">
                      {projects.length}건
                    </span>
                    &nbsp; 이상의 병·의원 프로젝트를 완수 했으며, 1건의 협업
                    프로젝트를 제외한&nbsp;
                    <span className="font-bold text-brand-blue">
                      모든 프로젝트의 퍼블리싱을 100% 단독으로 수행
                    </span>
                    했습니다. 이를 통해 쌓은 풍부한 실무 숙련도로 웹 표준과
                    접근성을 준수한 최적의 웹 구조를 지향하고 있습니다.
                  </p>

                  <p>
                    학생회장과 영업 실무로 다진&nbsp;
                    <span className="font-bold text-brand-blue">소통 능력</span>
                    을 바탕으로 기획자와 디자이너의 의도를 명확히 파악하여
                    아이디어를 화면 위에 구현했습니다. 어떤 업무든 강한&nbsp;
                    <span className="font-bold text-brand-blue">책임감</span>
                    으로 완수하며, 단순히 기술을 구현하는 것을 넘어 사용자가
                    마주하는 순간의&nbsp;
                    <span className="font-bold text-brand-blue">
                      경험을 가치 있게 만드는 개발자
                    </span>
                    가 되고자 합니다.
                  </p>
                  <p>감사합니다.</p>
                </div>
              </div>

              {/* Features: Integrated under bio for 1440px+ screens */}
              {/* <div className="hidden xl:grid grid-cols-2 gap-6 mt-12">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col gap-5 p-8 rounded-[40px] bg-gray-50/50 border border-gray-100/50 hover:bg-white hover:shadow-2xl hover:shadow-brand-blue/5 transition-all duration-500 group"
                  >
                    <div className="shrink-0 w-20 h-20 rounded-3xl bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={64}
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-[15px] text-gray-500 leading-relaxed font-medium">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </div>

        {/* ROW 2: Work & Education (Side-by-Side) */}
        <div className="about-history grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 py-12">
          {/* Work Experience */}
          <div className="about-history-col">
            <div className="flex items-center gap-4 mb-10">
              <h3 className="text-[clamp(1.25rem,3vw,1.875rem)] font-black tracking-tight text-gray-900">
                WORK EXPERIENCE
              </h3>
              <div className="h-px bg-gray-200 grow" />
            </div>
            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <span className="text-lg md:text-xl font-bold text-gray-900 tracking-tight">
                      {exp.company}
                    </span>
                    <span className="font-en text-sm font-bold text-gray-400 tracking-widest uppercase tabular-nums opacity-60">
                      {exp.date}
                    </span>
                  </div>
                  {/* <span className="text-gray-500 font-medium">{exp.title}</span> */}
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="about-history-col">
            <div className="flex items-center gap-4 mb-10">
              <h3 className="text-[clamp(1.25rem,3vw,1.875rem)] font-black tracking-tight text-gray-900">
                EDUCATION
              </h3>
              <div className="h-px bg-gray-200 grow" />
            </div>
            <div className="space-y-8">
              {education.map((edu, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <span className="text-lg md:text-xl font-bold text-gray-800 leading-snug tracking-tight">
                      {edu.title}
                    </span>
                    <span className="font-en text-sm font-bold text-gray-400 tracking-widest uppercase whitespace-nowrap tabular-nums opacity-60">
                      {edu.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ROW 3: Tech Marquee (Bottom - Moved outside max-w-1440px for true full-width calculation) */}
      <div className="about-tech relative pt-16 md:pt-24 z-10">
        <div className="overflow-hidden">
          <div className="tech-marquee-inner flex items-center whitespace-nowrap w-max">
            {/* Using 4 sets of clones for absolute seamlessness on ultra-wide screens */}
            {[...techIcons, ...techIcons, ...techIcons, ...techIcons].map(
              (icon, idx) => (
                <div
                  key={idx}
                  className="tech-marquee-item shrink-0 px-4 sm:px-6 md:px-12 lg:px-16 flex items-center justify-center"
                >
                  <div className="relative w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-26 flex items-center justify-center py-4">
                    <Image
                      src={icon.src}
                      alt={icon.name}
                      width={100}
                      height={100}
                      className="object-contain w-auto h-full max-h-[60px] sm:max-h-[80px]"
                    />
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
