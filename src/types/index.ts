// 프로젝트 타입
export interface Project {
  id: number;
  title: string;
  slug: string;
  category: ProjectCategory[];
  contribution: string;
  shortDescription: string;
  longDescription: string;
  featured: boolean;
  images: string[];
  techStack?: string[];
  url?: string;
}

export type ProjectCategory =
  | 'new'
  | 'renewal'
  | 'maintenance';

// 기술 스택 타입
export interface Skill {
  name: string;
  icon: string;
  category: SkillCategory;
}

export type SkillCategory =
  | 'markup'
  | 'script'
  | 'framework'
  | 'motion'
  | 'tool'
  | 'etc';

export const SKILL_CATEGORY_LABELS: Record<SkillCategory, string> = {
  markup: '마크업',
  script: '스크립트',
  framework: '프레임워크',
  motion: '모션/애니메이션',
  tool: '도구',
  etc: '기타',
};

// 경력 타입
export interface Career {
  company: string;
  position: string;
  period: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  description: string[];
}

// 테마 타입
export type Theme = 'dark' | 'light';

// 네비게이션 타입
export interface NavItem {
  id: string;
  label: string;
}
