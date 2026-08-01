# cgreen.lol

Personal site for Chris Green, built with Astro and deployed on Cloudflare Pages.

## Local development

```sh
npm install
npm run dev
```

Production build:

```sh
npm run build
```

Cloudflare Pages should use the repository root, `npm run build` as the build command, and `dist` as the output directory.

## Add a talk

Copy any file in `src/content/talks/`, rename it with a short URL-friendly name, and edit the frontmatter:

```yaml
---
title: "Session title"
date: 2026-09-15
summary: "One sentence shown on the homepage and talks page."
event: "Conference name"
location: "City, State"
slides: "/slides/my-slides.pdf"
topics:
  - PCI DSS
  - Zero trust
draft: false
---
```

Put slide files in `public/slides/`. Talks are automatically sorted newest-first and the three newest appear on the homepage. Use `draft: true` to hide an unfinished talk.

## Add a blog post

Copy `src/content/blog/welcome.md`, rename it, then update the title, date, summary, topics, and body. Keep `draft: true` while writing and switch it to `false` to publish.

The Writing navigation item appears automatically as soon as the first post is published. No page or component edits are needed.
