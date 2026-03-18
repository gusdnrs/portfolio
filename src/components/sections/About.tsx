'use client';

import { useRef } from 'react';
import { ChartBar, Clock, Lightbulb, Users } from 'lucide-react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Top Headline Reveal
      gsap.from('.about-headline-line', {
        scrollTrigger: {
          trigger: '.about-top',
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      });

      // 2. Main content area (Image and Right Side)
      gsap.from('.about-image-wrapper', {
        scrollTrigger: {
          trigger: '.about-main',
          start: 'top 80%',
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
      });

      gsap.from('.about-right-side', {
        scrollTrigger: {
          trigger: '.about-main',
          start: 'top 80%',
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
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
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
    { name: 'Figma', src: '/images/icons/figma.svg' },
    { name: 'Photoshop', src: '/images/icons/photoshop.svg' },
  ];

  const features = [
    {
      icon: <ChartBar className="w-5 h-5 text-brand-blue" />,
      title: '원활한 소통과 협업',
      description:
        '다양한 이해관계자와 소통해온 경험을 바탕으로 기획자와 디자이너의 의도를 명확히 파악하며, 팀과 적극적으로 소통합니다.',
    },
    {
      icon: <Clock className="w-5 h-5 text-brand-blue" />,
      title: '41건의 프로젝트 경험',
      description:
        '4년간 41건 이상의 병·의원 신규 구축 및 리뉴얼 프로젝트를 완수하며 검증된 실무 경험을 보유하고 있습니다.',
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-brand-blue" />,
      title: '효율적인 구조 설계',
      description:
        '반복되는 UI 요소를 컴포넌트화하여 제작 공수를 줄이고, 유지보수가 용이한 웹 환경을 설계하는 것이 강점입니다.',
    },
    {
      icon: <Users className="w-5 h-5 text-brand-blue" />,
      title: '웹 표준 및 최적화',
      description:
        '웹 표준 준수와 성능 최적화를 통해 사이트의 접근성을 높이고, 사용자 유입에 최적화된 환경을 구축합니다.',
    },
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-32 lg:py-40 px-4 bg-white overflow-hidden relative"
      ref={containerRef}
    >
      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* TOP: Header Title */}
        <div className="about-top mb-16 md:mb-24 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900">
            <span className="about-headline-line block mb-2 opacity-100 uppercase">
              About Me
            </span>
          </h2>
        </div>

        {/* ROW 1: Identity & Bio/Features */}
        <div id="identity" className="about-main mb-12 lg:mb-16">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-12">
            {/* Left: Image Container */}
            <div className="w-full lg:w-5/12">
              <div className="about-image-wrapper group relative aspect-video lg:aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl w-full">
                <div className="about-image-inner absolute inset-0 w-full h-full scale-[1.1] cursor-pointer">
                  <Image
                    src="/images/hero_bg.png"
                    alt="Im Hyunwook Profile"
                    fill
                    className="object-cover object-[50%_20%] transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:opacity-0"
                  />
                  <Image
                    src="/images/hero_bg_hover.jpg"
                    alt="Im Hyunwook Real Profile"
                    fill
                    className="object-cover object-[50%_20%] opacity-0 transition-all duration-700 ease-in-out scale-95 group-hover:scale-100 group-hover:opacity-100"
                  />
                </div>
              </div>
            </div>

            {/* Right: Bio & Ultra-wide Features */}
            <div className="about-right-side w-full lg:w-7/12 flex flex-col justify-center">
              <div className="text-left space-y-6">
                <h3 className="text-3xl md:text-4xl font-black text-brand-blue">
                  Im Hyun-wook
                </h3>
                <div className="space-y-4 text-base md:text-lg text-gray-600 leading-relaxed font-medium">
                  <p>
                    안녕하세요! 웹 퍼블리셔&nbsp;
                    <span className="font-bold text-brand-blue">임현욱</span>
                    입니다.
                  </p>
                  <p>
                    <span className="font-bold text-brand-blue">
                      41건 이상의 병·의원 프로젝트를 완수
                    </span>
                    하며 쌓은 숙련도로 웹 표준과 접근성을 준수한 최적의 웹
                    구조를 설계합니다. 단순한 코딩을 넘어 프로젝트의 비즈니스
                    목적을 깊이 이해하고 실현하는 데 집중하고 있습니다.
                  </p>
                  <p>
                    학생회장과 영업 실무로 다진&nbsp;
                    <span className="font-bold text-brand-blue">소통 능력</span>
                    을 바탕으로 기획자와 디자이너의 의도를 명확히 파악하여
                    아이디어를 화면 위에 구현합니다. 어떤 업무든 강한&nbsp;
                    <span className="font-bold text-brand-blue">책임감</span>
                    으로 완수하며, 단순히 기술을 구현하는 것을 넘어 사용자가
                    마주하는 순간의&nbsp;
                    <span className="font-bold text-brand-blue">
                      경험을 가치 있게 만드는 개발자
                    </span>
                    가 되고자 합니다.
                  </p>
                </div>
              </div>

              {/* Features: Integrated under bio for 1440px+ screens */}
              <div className="hidden xl:grid grid-cols-2 gap-6 mt-12">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 p-5 rounded-3xl bg-gray-50 border border-gray-100"
                  >
                    <div className="shrink-0 w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1.5">
                        {feature.title}
                      </h4>
                      <p className="text-base text-gray-500 leading-normal">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features: Standard full-width row for screens below 1440px (using xl:hidden as proxy) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:hidden">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex flex-row lg:flex-col xl:flex-row gap-4 p-5 rounded-3xl bg-gray-50 border border-gray-100"
              >
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1.5">
                    {feature.title}
                  </h4>
                  <p className="text-base text-gray-500 leading-normal">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Work & Education (Side-by-Side) */}
        <div className="about-history grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 py-12 border-t border-gray-100">
          {/* Work Experience */}
          <div className="about-history-col">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-xl font-black tracking-tight text-gray-900">
                WORK EXPERIENCE
              </h3>
              <div className="h-px bg-gray-200 grow" />
            </div>
            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <span className="text-lg font-bold text-gray-900">
                      {exp.company}
                    </span>
                    <span className="font-en text-xs font-bold text-gray-400 tracking-widest uppercase tabular-nums">
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
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-xl font-black tracking-tight text-gray-900">
                EDUCATION
              </h3>
              <div className="h-px bg-gray-200 grow" />
            </div>
            <div className="space-y-8">
              {education.map((edu, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <span className="text-lg font-bold text-gray-800 leading-snug">
                      {edu.title}
                    </span>
                    <span className="font-en text-xs font-bold text-gray-400 tracking-widest uppercase whitespace-nowrap tabular-nums">
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
                  className="tech-marquee-item shrink-0 px-6 sm:px-8 md:px-12 lg:px-16 flex items-center justify-center"
                >
                  <div className="relative w-24 h-24 md:w-32 md:h-26 flex items-center justify-center py-4">
                    <Image
                      src={icon.src}
                      alt={icon.name}
                      width={100}
                      height={100}
                      className="object-contain w-auto h-full max-h-[80px]"
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
