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

The Illustration page has a Coming Soon section. Put preview images in `public/images/illustration/coming-soon/`; move them to `public/images/illustration/` when published. Gallery images keep their original aspect ratios, without background frames, and stack independently in each column. Illustration category covers remain square. Rebuild and deploy after changes.

## Languages

The header offers English, Simplified Chinese, Traditional Chinese (Taiwan) and Japanese. English keeps the original root URLs; Simplified Chinese uses `/zh/`, Traditional Chinese (Taiwan) uses `/zh-tw/` and Japanese uses `/ja/`. Switching languages keeps the current page and saves the choice locally for future visits. Each language has static HTML, localized metadata and `hreflang` links. Edit translations in `src/i18n/index.ts`; edit shared page templates in `src/components/pages/`. Project descriptions live alongside project data in `src/data/site.ts`.

## Deployment

The workflow at `.github/workflows/deploy.yml` installs dependencies, checks and builds the static site, then deploys `dist/` when `main` is pushed. In repository **Settings → Pages**, select **GitHub Actions** as the build and deployment source. This is a user Pages repository, so Astro uses `https://castorrise.github.io` as `site` and root-relative paths without a project `base`.
