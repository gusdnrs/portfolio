// src/data/projects.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  skills?: string[];
  liveUrl?: string;
  githubUrl?: string;
  date?: string;
}

export const projects: Project[] = [
  {
    id: "hospital-system",
    title: "병원 관리 시스템",
    description: "환자 정보 관리 및 예약 시스템을 구축했습니다. React와 TypeScript를 활용하여 사용자 친화적인 인터페이스를 제공합니다.",
    imageUrl: "/images/project/nice_hospital.jpg",
    skills: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    liveUrl: "https://demo.example.com/hospital",
    githubUrl: "https://github.com/hyeonwook/hospital-system",
    date: "2024.10 - 2024.12"
  },
  {
    id: "portfolio-site",
    title: "개인 포트폴리오 웹사이트",
    description: "React + Vite + Tailwind CSS로 제작한 반응형 포트폴리오 사이트입니다. 모던한 UI/UX와 성능 최적화에 중점을 두었습니다.",
    imageUrl: "/images/portfolio-site.png",
    skills: ["React", "Vite", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://hyeonwook-portfolio.netlify.app",
    githubUrl: "https://github.com/hyeonwook/portfolio",
    date: "2024.11 - 현재"
  },
  {
    id: "todo-app",
    title: "할 일 관리 앱",
    description: "사용자가 효율적으로 업무를 관리할 수 있는 Todo 애플리케이션입니다. 드래그 앤 드롭과 필터링 기능을 포함합니다.",
    imageUrl: "/images/portfolio-site.png",
    skills: ["React", "JavaScript", "CSS3", "Local Storage"],
    githubUrl: "https://github.com/hyeonwook/todo-app",
    date: "2024.09"
  },
];
