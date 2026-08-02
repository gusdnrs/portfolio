import type { Career } from '@/types';

export const careers: Career[] = [
  {
    company: '파인애플피티엘',
    position: '웹 퍼블리셔',
    period: '2024 — 현재',
    startDate: '2024-01',
    endDate: 'present',
    isCurrent: true,
    description: [
      '반응형 웹사이트 퍼블리싱 및 유지보수',
      '프론트엔드 인터랙션 개발',
      '크로스 브라우저 호환성 최적화',
    ],
  },
  {
    company: '테라기획',
    position: '웹 퍼블리셔',
    period: '2021 — 2024',
    startDate: '2021-01',
    endDate: '2024-12',
    isCurrent: false,
    description: [
      '병원 웹사이트 신규 구축 및 리뉴얼 퍼블리싱',
      '37개+ 프로젝트 퍼블리싱 전담',
      '스타일 가이드 수립 및 유지보수 체계 구축',
      'Gnuboard(PHP CMS) 기반 템플릿 커스터마이징',
    ],
  },
];
