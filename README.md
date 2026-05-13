# Kevin Wang Personal Website

This repository contains my bilingual personal website built with [Astro](https://astro.build/). The site is designed as an academic-style engineering homepage with English and Chinese routes.

## Stack

- Astro
- TypeScript
- Static deployment friendly structure

## Local development

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Build the static site:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Main structure

- `src/pages/en/` and `src/pages/zh/`: bilingual routes
- `src/i18n/en.ts` and `src/i18n/zh.ts`: editable content source
- `src/components/`: reusable UI sections
- `public/images/`: banner, logos, and project images
- `public/reports/`: preserved PDF report files

## Content editing

Most text content can be updated directly in:

- `src/i18n/en.ts`
- `src/i18n/zh.ts`

Replace placeholder assets here:

- `public/images/banner.jpg`
- `public/images/logos/`
- `public/images/projects/`

## Deployment

The repository includes GitHub Actions workflows for:

- build verification on push and pull request
- deployment to GitHub Pages from the `main` branch
