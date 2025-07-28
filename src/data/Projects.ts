// src/data/Projects.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  skills?: string[];
  liveUrl?: string;
  githubUrl?: string;
  date?: string;
  // 상세 페이지용 추가 데이터
  detailImages?: string[];
  fullDescription?: string;
  challenges?: string[];
  solutions?: string[];
  features?: string[];
  techStack?: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    deployment?: string[];
  };
  duration?: string;
  teamSize?: string;
}

export const projects: Project[] = [
  {
    id: "hospital-system",
    title: "Nice Hospital 관리 시스템",
    description: "환자 정보 관리 및 예약 시스템을 구축했습니다.",
    imageUrl: "/images/projects/nice_hospital.jpg",
    skills: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    liveUrl: "https://demo.example.com/hospital",
    date: "2024.10 - 2024.12",
    
    // 상세 페이지 데이터
    detailImages: [
      "/images/projects/hospital-detail-1.jpg",
      "/images/projects/hospital-detail-2.jpg",
      "/images/projects/hospital-detail-3.jpg"
    ],
    fullDescription: "병원의 환자 관리, 예약 시스템, 의료진 관리를 종합적으로 다루는 웹 애플리케이션입니다. 사용자 친화적인 인터페이스와 효율적인 데이터 관리를 통해 병원 업무의 디지털화를 실현했습니다.",
    challenges: [
      "복잡한 환자 데이터 구조 설계",
      "실시간 예약 시스템 구현",
      "의료진과 환자 간의 권한 관리",
      "대용량 의료 데이터 처리"
    ],
    solutions: [
      "정규화된 데이터베이스 설계로 데이터 무결성 확보",
      "WebSocket을 활용한 실시간 예약 상태 업데이트",
      "JWT 기반 권한 시스템 구축",
      "페이지네이션과 검색 최적화로 성능 개선"
    ],
    features: [
      "환자 정보 등록 및 관리",
      "실시간 예약 시스템",
      "의료진 스케줄 관리",
      "처방전 관리",
      "통계 및 리포트 기능"
    ],
    techStack: {
      frontend: ["React", "TypeScript", "Tailwind CSS", "React Query"],
      backend: ["Node.js", "Express", "JWT"],
      database: ["MySQL", "Redis"],
      deployment: ["Netlify", "Heroku"]
    },
    duration: "3개월",
    teamSize: "개인 프로젝트"
  },
  {
    id: "portfolio-site",
    title: "개인 포트폴리오 웹사이트",
    description: "React + Vite + Tailwind CSS로 제작한 포트폴리오",
    imageUrl: "/images/projects/portfolio_site.jpg",
    skills: ["React", "Vite", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://hyeonwook-portfolio.netlify.app",
    date: "2024.11 - 현재",
    
    detailImages: [
      "/images/projects/portfolio-detail-1.jpg",
      "/images/projects/portfolio-detail-2.jpg"
    ],
    fullDescription: "개인 브랜딩과 프로젝트 소개를 위한 현대적이고 반응형 포트폴리오 웹사이트입니다. 성능 최적화와 SEO를 중점으로 개발했습니다.",
    challenges: [
      "브랜드 아이덴티티 확립",
      "성능 최적화",
      "SEO 최적화",
      "다양한 디바이스 대응"
    ],
    solutions: [
      "일관된 디자인 시스템 구축",
      "이미지 최적화 및 레이지 로딩",
      "메타 태그 및 구조화된 데이터 적용",
      "Tailwind CSS로 반응형 디자인"
    ],
    features: [
      "반응형 디자인",
      "다크모드 지원",
      "프로젝트 상세 페이지",
      "연락처 폼",
      "SEO 최적화"
    ],
    techStack: {
      frontend: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      deployment: ["Netlify", "GitHub Actions"]
    },
    duration: "2개월",
    teamSize: "개인 프로젝트"
  }
];
