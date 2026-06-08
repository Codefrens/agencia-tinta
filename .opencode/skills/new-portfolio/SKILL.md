---
name: new-portfolio
description: Creates a complete new portfolio entry for a client. Use when the user provides content (text, images, videos URLs) for a new portfolio project. Handles creating translation JSON files (es/en), SEO metadata, portfolio grid entries, and sitemap updates.
---

## What this does

Creates all files needed to add a new portfolio detail page. Five locations must be updated:

1. `translations/portfolio/es/{slug}.json` — Spanish content
2. `translations/portfolio/en/{slug}.json` — English content
3. `utils/SEOmetadata.ts` — 4 objects (CLIENTS, CLIENTS_DESCRIPTIONS_ES, CLIENTS_DESCRIPTIONS_EN, CLIENTS_IMAGES)
4. `translations/es.json` + `translations/en.json` — `common.portfolioGrid` array
5. `app/[lang]/sitemap.xml` — new `<url>` entries for both locales

## How to use

The user provides:

- **Slug**: kebab-case identifier (e.g. `mi-cliente`)
- **Client name**: display name (e.g. `Mi Cliente`)
- **Year**: e.g. `"2026"`
- **Sector**: in Spanish (e.g. `"Gastronomía"`, `"Hotelería"`, `"Moda"`)
- **Categories**: array of `"Identidad Visual"`, `"Fotografía"`, `"Video"` — same in both languages in the JSON files but IN SPANISH. The en-translation JSON files use the **same Spanish categories** (e.g. `["Fotografía", "Video"]`, never `["Photography", "Video"]`).
- **Hero image URL + alt**: banner/cover image
- **Hero subtitle ES**: short description in Spanish (used for SEO desc too)
- **Hero subtitle EN**: short description in English (used for SEO desc too)
- **Sections**: ordered list defining the page layout. Each section has a type.
- **Related projects**: 2 related portfolio entries (title, categories, imageUrl, imageAlt, slug) — can be copied from existing entries in `common.portfolioGrid`.

### Section types

Each section has a `type` and type-specific fields. All image/video media comes as Cloudinary URLs.

**`paragraph`** — Text block

```json
{ "type": "paragraph", "title": "Estrategia", "description": "Texto..." }
```

**`oneImage`** — Single full-width image. Optional `aspectRatio` (e.g. `"16/9"`, `"12/8"`), optional `centered: true`.

```json
{
  "type": "oneImage",
  "imageUrl": "...",
  "imageAlt": "...",
  "centered": true,
  "aspectRatio": "12/8"
}
```

**`twoImages`** — Side-by-side image pair

```json
{
  "type": "twoImages",
  "images": [
    { "imageUrl": "...", "imageAlt": "..." },
    { "imageUrl": "...", "imageAlt": "..." }
  ]
}
```

**`imagesInRow`** — 2-4 images in a row

```json
{ "type": "imagesInRow", "images": [{ "imageUrl": "...", "imageAlt": "..." }, ...] }
```

**`video`** — Single video player. Requires a poster image. Generate the poster URL from the video URL by replacing `video/upload/v` with `video/upload/w_800,so_2/v` and changing `.mp4` to `.jpg`.

```json
{
  "type": "video",
  "videoUrl": "...mp4",
  "videoAlt": "...",
  "posterSrc": "...jpg"
}
```

**`uniqueReel`** — Scrollable reel with 3+ videos. Videos have poster URLs. Generate poster from video URL by replacing `video/upload/v` with `video/upload/w_600,so_2/v` and `.mp4` → `.jpg`.

```json
{ "type": "uniqueReel", "backText": "CLIENT NAME", "videos": [
  { "videoUrl": "...mp4", "videoAlt": "...", "posterSrc": "...jpg" },
  ...
]}
```

### Related projects

Pick 2 existing portfolio entries. Copy them verbatim from `translations/es.json` → `common.portfolioGrid` (they have `title`, `categories`, `imageUrl`, `imageAlt`, `slug`). Use the same entries in both lang files.

## Files to create/modify

### 1. `translations/portfolio/es/{slug}.json`

```json
{
  "hero": {
    "title": "CLIENT NAME",
    "subtitle": "Spanish subtitle / short description",
    "imageUrl": "https://res.cloudinary.com/.../hero.webp",
    "imageAlt": "Alt text",
    "sector": "Gastronomía",
    "categories": ["Fotografía", "Video"],
    "client": "CLIENT NAME"
  },
  "sections": [ ... ],
  "related": [ ... ]
}
```

### 2. `translations/portfolio/en/{slug}.json`

Same structure as ES but with English text in `hero.subtitle` and section `description` fields. `hero.title`, `sector`, `categories` stay in Spanish. Section `title` fields keep the same titles as ES (they're section labels, not locale-specific). `hero.client` is optional for EN — can omit it.

### 3. `utils/SEOmetadata.ts`

Add entries to these 4 objects (alphabetical position within the object):

- `CLIENTS`: `"slug": "Client Name"`
- `CLIENTS_DESCRIPTIONS_ES`: `"slug": "Spanish subtitle (same as hero.subtitle ES)"`
- `CLIENTS_DESCRIPTIONS_EN`: `"slug": "English subtitle (same as hero.subtitle EN)"`
- `CLIENTS_IMAGES`: `"slug": "https://res.cloudinary.com/.../hero.webp"`

### 4. `translations/es.json` and `translations/en.json`

Add to `common.portfolioGrid` array (prepend or append, following existing order):

```json
{
  "title": "Client Name",
  "categories": ["Identidad Visual", "Fotografía"],
  "imageUrl": "https://res.cloudinary.com/.../hero.webp",
  "imageAlt": "Alt text",
  "slug": "mi-cliente"
}
```

### 5. `app/[lang]/sitemap.xml`

Add two `<url>` blocks (one for `/es/portfolio/{slug}`, one for `/en/portfolio/{slug}`) following the existing pattern with `xhtml:link` alternates and today's date as `<lastmod>`.

## Verification

After creating/modifying all files, run:

```bash
npm run build
```

to verify no build errors. If the build fails, fix the issue before handing off.
