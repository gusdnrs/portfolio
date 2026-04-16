import GithubProjectsClient from './GithubProjectsClient';

// ── Types ──
interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  updated_at: string;
  stargazers_count: number;
  fork: boolean;
}

// ── Constants ──
const EXCLUDED_REPOS: string[] = []; // 포트폴리오 포함을 위해 비움
const REPO_ORDER = [
  'portfolio',
  'oci-gemini-ai-stack',
  'clamp-calculator',
  'interview-recoder',
  'react-netflix-app',
  'tic_tac_toe',
  'filter-table',
  'todo-app',
];

// ── Data fetching ──
async function getGithubRepos(): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      'https://api.github.com/users/gusdnrs/repos?sort=updated&per_page=30',
      { next: { revalidate: 3600 } },
    );
    if (!res.ok) return [];
    
    const data: GitHubRepo[] = await res.json();
    
    // 1. 필터링 및 정렬
    const filteredRepos = data.filter(
      (repo) => !repo.fork && !EXCLUDED_REPOS.includes(repo.name)
    );

    // 2. 사용자가 지정한 순서대로 정렬 (목록에 없는 건 뒤로 보냄)
    return filteredRepos.sort((a, b) => {
      const indexA = REPO_ORDER.indexOf(a.name);
      const indexB = REPO_ORDER.indexOf(b.name);
      
      if (indexA === -1 && indexB === -1) return 0;
      if (indexA === -1) return 1;
      if (indexB === -1) return -1;
      return indexA - indexB;
    });
  } catch {
    return [];
  }
}

// ── Main Component (Server) ──
export default async function GithubProjects() {
  const repos = await getGithubRepos();

  return <GithubProjectsClient repos={repos} />;
}
