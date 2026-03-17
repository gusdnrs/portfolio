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

      // 2. Middle Section (Image and Text Parallax/Fade)
      gsap.from('.about-image-wrapper', {
        scrollTrigger: {
          trigger: '.about-middle',
          start: 'top 80%',
        },
        scale: 0.95,
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
      });

      // Image inner parallax scrub
      gsap.to('.about-image-inner', {
        scrollTrigger: {
          trigger: '.about-middle',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
        y: 30,
        ease: 'none',
      });

      // Text stagger reveal
      gsap.from('.about-text-p', {
        scrollTrigger: {
          trigger: '.about-middle',
          start: 'top 75%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
      });

      // 3. Bottom Features Stagger
      gsap.from('.about-feature-card', {
        scrollTrigger: {
          trigger: '.about-middle', // 바로 위 섹션을 트리거로 잡아 무조건 발동되도록 안전장치 강화
          start: 'bottom 90%',
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
      });
    },
    { scope: containerRef },
  );

  const features = [
    {
      icon: <ChartBar className="w-6 h-6 text-brand-blue" />,
      title: '원활한 소통과 협업',
      description:
        '학생회장 및 영업 실무 경험을 바탕으로 기획자와 디자이너의 의도를 명확히 파악하며 팀과 적극적으로 소통합니다.',
    },
    {
      icon: <Clock className="w-6 h-6 text-brand-blue" />,
      title: '41건의 프로젝트 경험',
      description:
        '4년간 41건 이상의 병·의원 신규 구축 및 리뉴얼 프로젝트를 완수하며 검증된 실무 경험을 보유하고 있습니다.',
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-brand-blue" />,
      title: '효율적인 구조 설계',
      description:
        '반복되는 UI 요소를 컴포넌트화하여 제작 시간을 단축하고 유지보수가 용이한 웹 환경을 만듭니다.',
    },
    {
      icon: <Users className="w-6 h-6 text-brand-blue" />,
      title: '웹 표준 및 최적화',
      description:
        '웹 표준 준수와 이미지 경량화, SEO 작업을 통해 사이트의 접근성을 높이고 사용자 유입 환경을 개선합니다.',
    },
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-32 lg:py-48 px-4 bg-white overflow-hidden relative"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto relative z-11">
        {/* TOP: Headline Section */}
        <div className="about-top mb-12 md:mb-20 lg:mb-28 text-center lg:text-left">
          <span className="about-headline-line font-en text-xs md:text-sm font-black tracking-[0.2em] text-brand-blue uppercase mb-6 block">
            01. About
          </span>
          <h2 className="text-[clamp(1.125rem,2.2321vw+0.6786rem,1.75rem)] md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
            <div className="overflow-hidden pb-2">
              <div className="about-headline-line">
                아이디어를 유연하게 연결하여
              </div>
            </div>
            <div className="overflow-hidden pb-2">
              <div className="about-headline-line">
                가치 있는 경험을 만드는&nbsp;
                <span className="text-brand-blue relative inline-block">
                  임현욱
                  <span className="absolute bottom-0 left-0 w-full h-3 bg-brand-blue/20 -z-10" />
                </span>
                입니다.
              </div>
            </div>
          </h2>
        </div>

        {/* MIDDLE: Image & Narrative (Balanced Layout) */}
        <div className="about-middle flex flex-col lg:flex-row gap-10 md:gap-16 items-center mb-12 md:mb-20 lg:mb-28">
          {/* Left/Top: Image Container */}
          <div className="w-full lg:w-5/12">
            {/* Added group and cursor-pointer to the wrapper */}
            <div className="about-image-wrapper group relative aspect-3/2 md:aspect-video lg:aspect-4/5 rounded-[40px] overflow-hidden shadow-2xl w-full max-w-none cursor-pointer">
              <div className="about-image-inner absolute inset-0 w-full h-full scale-[1.2]">
                {/* Default Image */}
                <Image
                  src="/images/hero_bg.png"
                  alt="Im Hyunwook Profile"
                  fill
                  className="object-cover object-center md:object-[80%_center] transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:opacity-0"
                />

                {/* Hover Image (Original Photo) */}
                <Image
                  src="/images/hero_bg_hover.jpg"
                  alt="Im Hyunwook Real Profile"
                  fill
                  className="object-cover object-center md:object-[80%_center] opacity-0 transition-all duration-700 ease-in-out scale-95 group-hover:scale-100 group-hover:opacity-100"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none" />
              </div>

              {/* Hover Cue / Indicator */}
              <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 lg:bottom-10 lg:right-10 px-4 py-2 bg-white/30 backdrop-blur-md rounded-full shadow-lg border border-white/40 flex items-center gap-2.5 transition-all duration-500 transform group-hover:opacity-0 group-hover:translate-y-4">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75 ring-1 ring-white"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white shadow-sm ring-1 ring-white/50"></span>
                </span>
                <span className="text-white text-sm font-bold tracking-wide drop-shadow-sm">
                  Hover Me
                </span>
              </div>
            </div>
          </div>

          {/* Right/Bottom: Text Narrative */}
          <div className="w-full lg:w-7/12 space-y-8 text-base md:text-lg text-gray-600 font-medium leading-relaxed">
            <p className="about-text-p text-xl md:text-3xl font-extrabold text-gray-900 mb-6 tracking-tight leading-snug">
              자유로운 소통으로 기획의 본질을 찾고,
              <br className="hidden xl:block" /> 단단한 코드로 안정적인 웹
              환경을 구축합니다.
            </p>
            <p className="about-text-p">
              학생회장과 영업관리 실무를 거치며 다양한 이해관계자와&nbsp;
              <span className="font-bold text-brand-blue">소통하는 방법</span>을
              익혔습니다. 이 경험을 바탕으로 기획자와 디자이너의 의도를 명확히
              파악하여, 기획서 속 아이디어를 사용자가 체감할 수 있도록 화면으로
              구현합니다.
            </p>
            <p className="about-text-p">
              4년간&nbsp;
              <span className="font-bold text-brand-blue">
                41건 이상의 병·의원 웹 프로젝트를 완수
              </span>
              하며 실무 숙련도를 쌓았습니다. 유지보수 효율을 높이는 모듈화
              작업이나 검색 엔진 최적화(SEO) 등 사이트의 목적에 맞는 구조를
              제안하며 프로젝트의 완성도를 높이는 데 강점이 있습니다.
            </p>
          </div>
        </div>

        {/* BOTTOM: Features Grid */}
        <div className="about-features grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="about-feature-card p-6 md:p-8 lg:p-10 rounded-3xl bg-gray-50 border border-gray-100/50"
            >
              <div className="mb-8 p-4 w-fit rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 ring-inset">
                {feature.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base font-normal leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
