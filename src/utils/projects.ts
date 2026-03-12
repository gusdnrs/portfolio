export interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  contribution: string;
  period: string;
  role: string;
  tools: string[];
  image: string;
  detailImages: string[];
  longDescription: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: '글로벌 테크 기업 리뉴얼',
    category: 'New Launch',
    tags: ['WordPress', 'React', 'SEO'],
    contribution: '초도 구축 100% 퍼블리싱',
    period: '2025.01 - 2025.03',
    role: 'Lead Publisher',
    tools: ['WordPress', 'SCSS', 'Next.js'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    detailImages: [
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1200',
    ],
    longDescription: '기존의 노후화된 글로벌 테크 기업의 웹사이트를 최신 트렌드에 맞춰 전면 리뉴얼한 프로젝트입니다. 경제학적 관점의 데이터 최적화 기법을 적용하여 로딩 속도를 40% 개선하였으며, CMS 연동을 통해 관리자 편의성을 극대화했습니다.',
  },
  {
    id: '2',
    title: '금융 대시보드 UI 시스템',
    category: 'UI/UX Renewal',
    tags: ['Tailwind', 'Next.js', 'Chart.js'],
    contribution: 'UI 정밀 구현 및 데이터 시각화',
    period: '2024.10 - 2024.12',
    role: 'Publisher & UI Developer',
    tools: ['Next.js', 'TailwindCSS', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    detailImages: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    ],
    longDescription: '복잡한 금융 정보를 한눈에 파악할 수 있도록 정밀한 인터페이스를 구축한 프로젝트입니다. 차트 라이브러리와 연동하여 실시간 데이터 변화를 유려한 애니메이션으로 표현했으며, 일관된 UI 시스템을 구축하여 확장성을 확보했습니다.',
  },
  {
    id: '3',
    title: '이커머스 운영 유지보수',
    category: 'Maintenance',
    tags: ['JavaScript', 'CMS', 'Optimization'],
    contribution: '정기 운영 및 파트 리뉴얼',
    period: '2024.01 - 2024.09',
    role: 'Maintenance Specialist',
    tools: ['JavaScript', 'Prestyled CSS', 'Git'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1200',
    detailImages: [
      'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1200',
    ],
    longDescription: '대규모 이커머스 플랫폼의 안정적인 운영과 정기적인 기능 고도화를 담당했습니다. 코드 리뷰 루틴을 도입하여 팀 내 개발 생산성을 높였으며, 접근성 준수 프로젝트를 병행하여 검색 엔진 최적화 점수를 향상시켰습니다.',
  },
  {
    id: '4',
    title: '신규 플랫폼 런칭 프로젝트',
    category: 'New Launch',
    tags: ['TypeScript', 'RWD', 'Accessibility'],
    contribution: '초도 구축 100%',
    period: '2023.08 - 2023.12',
    role: 'Frontend Publisher',
    tools: ['TypeScript', 'Tailwind', 'Motion'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200',
    detailImages: [
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200',
    ],
    longDescription: '스타트업의 신규 서비스 런칭을 위한 초도 구축을 총괄했습니다. 모바일 우선(Mobile First) 전략을 통해 다양한 디바이스 대응력을 높였으며, 웹 접근성 지침을 100% 준수하여 정보 접근성을 평등하게 구현했습니다.',
  },
];
