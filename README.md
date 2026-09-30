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

Place your own images in `public/images/`; see [the image guide](public/images/README.md) for names and recommendations. The site builds without any images and displays placeholders. Gallery pages automatically include supported images in their respective folders, sorted by filename. The image dimensions are read at build time, so rebuild after adding or replacing images.

Edit work categories and project details in `src/data/site.ts`. The Notes page is a small placeholder; it can later be expanded with Astro Content Collections and Markdown content.

## Deployment

The workflow at `.github/workflows/deploy.yml` installs dependencies, checks and builds the static site, then deploys `dist/` when `main` is pushed. In repository **Settings → Pages**, select **GitHub Actions** as the build and deployment source. This is a user Pages repository, so Astro uses `https://castorrise.github.io` as `site` and root-relative paths without a project `base`.
