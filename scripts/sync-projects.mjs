import { readFile, writeFile } from 'node:fs/promises';

const target = new URL('../src/data/github-projects.json', import.meta.url);
if (process.env.PROJECTS_SYNC_SKIP === '1') process.exit(0);

try {
  const repositories = [];
  for (let page = 1; ; page++) {
    const response = await fetch(`https://api.github.com/users/CastorRise/repos?per_page=100&page=${page}`, {
      headers: {
        Accept: 'application/vnd.github+json',
        ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
      },
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) throw new Error(`GitHub returned ${response.status}`);
    const batch = await response.json();
    if (!Array.isArray(batch)) throw new Error('Invalid repository response');
    repositories.push(...batch);
    if (batch.length < 100) break;
  }
  const projects = repositories
    .filter((repo) => !repo.fork && !repo.archived && !repo.disabled && repo.name.toLowerCase() !== 'castorrise.github.io')
    .map((repo) => {
      if (typeof repo.name !== 'string' || !repo.html_url?.startsWith('https://github.com/CastorRise/') || !Number.isFinite(Date.parse(repo.created_at))) {
        throw new Error('Invalid project metadata');
      }
      return {
        name: repo.name,
        repository: repo.html_url,
        description: typeof repo.description === 'string' ? repo.description : null,
        createdAt: repo.created_at,
        pushedAt: Number.isFinite(Date.parse(repo.pushed_at)) ? repo.pushed_at : repo.created_at,
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name, 'en'));
  if (!projects.length) throw new Error('No public projects returned');
  await writeFile(target, JSON.stringify(projects, null, 2) + '\n');
  console.log(`Synced ${projects.length} public GitHub projects.`);
} catch (error) {
  // Keep a working static site when GitHub is unavailable or rate limited.
  const cached = JSON.parse(await readFile(target, 'utf8'));
  if (!Array.isArray(cached) || !cached.length) throw error;
  console.warn(`Project sync unavailable; using saved metadata. ${error.message}`);
}
