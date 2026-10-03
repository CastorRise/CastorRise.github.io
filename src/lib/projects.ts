import githubProjects from '../data/github-projects.json';
import { projects as configuredProjects } from '../data/site';
import type { Locale } from '../i18n';

interface Project {
  slug: string;
  title: string;
  description: Record<Locale, string>;
  imageStem: string;
  repository: string;
  createdAt: string;
  pushedAt: string;
}

// Compare code pushes, not stars or repository settings changes.
export const projectRecency: 'pushedAt' | 'createdAt' = 'pushedAt';

export function getProjects(): Project[] {
  const projects = githubProjects.map((repo) => {
    const configured = configuredProjects.find((project) => project.repository.toLowerCase() === repo.repository.toLowerCase());
    return {
      slug: configured?.slug ?? repo.name.toLowerCase(),
      title: configured?.title ?? repo.name,
      description: configured?.description ?? {
        en: repo.description || 'Explore the source code and documentation on GitHub.',
        zh: repo.description || '在 GitHub 查看源代码与项目说明。',
        'zh-tw': repo.description || '在 GitHub 查看原始碼與專案說明。',
        ja: repo.description || 'ソースコードとプロジェクトの説明は GitHub でご覧いただけます。',
      },
      imageStem: configured?.imageStem ?? repo.name.toLowerCase(),
      repository: repo.repository,
      createdAt: repo.createdAt,
      pushedAt: repo.pushedAt,
    };
  });
  return projects.sort((a, b) => Date.parse(b[projectRecency]) - Date.parse(a[projectRecency]) || a.repository.localeCompare(b.repository, 'en'));
}
