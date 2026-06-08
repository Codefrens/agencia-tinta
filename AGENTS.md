# tinta-web

Next.js 15 App Router site for Agencia Tinta, a creative/marketing agency. Bilingual (es/en) with locale-based routing.

## Commands

```bash
npm run dev      # dev server
npm run build    # production build
npm run lint     # eslint
```

No test suite is configured.

## Architecture

### Locale routing

- Middleware (`middleware.ts`) redirects bare paths to `/[lang]/...` via `Accept-Language` negotiation. Default locale is `es`.
- All pages live under `app/[lang]/`.
- Two route groups:
  - `(home)` — main site pages (home, agency, portfolio, contact, foodar, legal, etc.). Uses `Navbar` + `Footer` layout.
  - `(landings)` — SEO landing pages (production, video, fotografia, aesthetic, dental forms/calls, thank-you). Uses `LandingNavbar` + `LandingFooter` layout. **Different layout from main site.**

### Translations

- JSON files in `/translations/`. Loaded server-side via dynamic imports in `app/[lang]/translations.ts` using `"server-only"`.
- Type definitions in `translations/types.ts` (`Translations` interface).
- **Portfolio detail pages are NOT from Contentful** — their content comes from local JSON files in `translations/portfolio/{lang}/{slug}.json`, read via `loadLocalContent()` in `content/fetch.ts`.

### Contentful (not in use for now)

- GraphQL fetcher exists in `content/fetch.ts` (`fetchContent`), but `content/queries.ts` is empty. Contentful integration appears unused or legacy.
- Required env vars listed in `.env.local`: `CONTENTFUL_SPACE_ID`, `CONTENTFUL_ACCESS_TOKEN`, `CONTENTFUL_PREVIEW_ACCESS_TOKEN`, `CONTENTFUL_PREVIEW_SECRET`.

### API routes

- `api/contact` — sends email via Resend. Accepts name, email, message. **Does NOT verify reCAPTCHA though the Form component sends a token.**
- `api/landing-contact` — sends email via Resend with full reCAPTCHA v3 verification (score >= 0.5). Accepts additional fields: phone, projectType, source.

### Forms

- The main contact form (`components/Form/Form.tsx`) is a client component using `react-google-recaptcha-v3` and `RecaptchaProvider` (wraps the entire layout).
- On success, redirects to `/[lang]/thank-you?origin=home`.

### Styling

- **PostCSS plugins** require specific setup: `postcss-mixins` loads from `styles/helpers/mixins/`, `postcss-functions` provides `pxToRem()`, `postcss-nested` for nesting.
- `next.config.ts` patches webpack to set `exportLocalsConvention: "camelCase"` on CSS modules. This means `my-class` in a `.module.css` becomes `styles.myClass` in JS.
- Global CSS in `styles/index.css` (imports base, globals, helpers). Component-scoped styles use `.module.css` files.
- Custom media query mixins (`@mixin mediaMin768 {}`, etc.) defined in `styles/helpers/mixins/_media.css`.

### Third-party integrations

- **Google Tag Manager**: `@next/third-parties/google` in root layout + custom `gtm.ts` helpers + `PageViewTracker` client component.
- **Cloudinary** for all images. Remote pattern allowed in `next.config.ts`.
- **Lenis** (`lenis/react`) for smooth scrolling; wraps all pages via `LenisProvider`.
- **CookieYes** script loaded via `<Script>` in root `<head>`.
- **`model-viewer`** (Google) used via custom JSX element declared in `globals.d.ts`.

## Environment variables

All required vars are in `.env.local`. Key ones for the app to function:

- `RESEND_API_KEY` — contact form emails
- `BASE_URL` — used in metadata and sitemap (defaults to `https://agenciatinta.com`)
- `NEXT_PUBLIC_GTM_ID` — Google Tag Manager
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` + `RECAPTCHA_SECRET_KEY` — reCAPTCHA v3
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` — image delivery

## TypeScript

`tsconfig.json` has `strict: false` and `noImplicitAny: false`. Path alias `@/*` maps to root. Do not enforce strict types unless told to.

## SEO

- Per-page metadata from `utils/SEOmetadata.ts` via `generateSEOMetadataPortfolioDetailPage()` for portfolio details, and `SEO_METADATA` object for other pages.
- Static `sitemap.xml` at `app/[lang]/sitemap.xml`. Not dynamically generated — needs manual updates when adding pages.
- `robots.ts` per locale.
- Schema.org JSON-LD in root layout `<head>`.
