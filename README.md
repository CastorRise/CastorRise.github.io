# CastorRise personal website

Built with Astro. Hosted on GitHub Pages at [castorrise.github.io](https://castorrise.github.io/).

## Local development

```sh
npm install
npm run dev
```

Open the local URL printed by Astro. Before publishing, run:

```sh
npm run check
npm run build
npm run preview
```

## Images and content

Place your own images in `public/images/`. The home hero automatically reads every supported image in `public/images/hero/`, randomly picks up to three distinct images on each page load, and displays them vertically as you scroll with the title held in the center. Originals are kept; Astro generates responsive WebP previews (quality 78, up to 1920 px wide); the browser selects a size suited to the display width and pixel density. With JavaScript disabled, the first three images are shown in filename order. See [the image guide](public/images/README.md) for names and recommendations. The site builds without any images and displays placeholders. Gallery pages automatically include supported images in their respective folders, sorted by filename, and use optimized WebP versions while preserving the original aspect ratios. The image dimensions are read at build time, so rebuild after adding or replacing images.

Edit work categories and project details in `src/data/site.ts`. The Notes page is a small placeholder; it can later be expanded with Astro Content Collections and Markdown content.

The home project card selects the most recently pushed public GitHub project. Each build runs `npm run sync:projects`, saving public repository metadata in `src/data/github-projects.json`; the Pages workflow also rebuilds daily at 09:23 Asia/Shanghai (GitHub may delay scheduled runs). Forks, archived or disabled repositories, and this website repository are excluded. If GitHub is unavailable, the saved metadata is used. `src/lib/projects.ts` controls the comparison (`pushedAt`, or `createdAt` to select the newest repository instead). The Projects page lists all discovered projects in the same order. Existing descriptions and cover filenames in `src/data/site.ts` take precedence. A new repository without custom content uses its GitHub description or a localized link to its source code and documentation, plus a placeholder cover. Add its cover using the lowercase repository name in `public/images/projects/`, or configure an alternate filename in `src/data/site.ts`.

Optional gallery descriptions live in `src/data/image-descriptions.ts`, grouped by category and image filename without the extension. Edit Simplified Chinese only; ask Codex to translate into English, Traditional Chinese (Taiwan), and Japanese before publishing. AI translations are maintained separately in `src/data/image-description-translations.ts` and tied to the exact source text. Empty or missing entries leave the lower-left caption blank. Upload dates live in `src/data/image-upload-dates.ts`. See the image guide for examples.

The About page includes a changelog. Edit `src/data/changelog.ts` to add a date (`YYYY-MM-DD`) and a title and change list for all four languages. Entries are displayed with the latest date first. Rebuild and deploy to publish updates.

The Illustration page has a Coming Soon section. Put preview images in `public/images/illustration/coming-soon/`; move them to `public/images/illustration/` when published. Gallery images keep their original aspect ratios, without background frames, and stack independently in each column. Illustration category covers remain square. Rebuild and deploy after changes.

## Languages

The header offers English, Simplified Chinese, Traditional Chinese (Taiwan) and Japanese. English keeps the original root URLs; Simplified Chinese uses `/zh/`, Traditional Chinese (Taiwan) uses `/zh-tw/` and Japanese uses `/ja/`. Switching languages keeps the current page and saves the choice locally for future visits. Each language has static HTML, localized metadata and `hreflang` links. Edit translations in `src/i18n/index.ts`; edit shared page templates in `src/components/pages/`. Project descriptions live alongside project data in `src/data/site.ts`.

## Deployment

The workflow at `.github/workflows/deploy.yml` installs dependencies, checks and builds the static site, then deploys `dist/` when `main` is pushed. In repository **Settings → Pages**, select **GitHub Actions** as the build and deployment source. This is a user Pages repository, so Astro uses `https://castorrise.github.io` as `site` and root-relative paths without a project `base`.
