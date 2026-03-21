# tasks.md

## Atoms
- [x] Define Tailwind v4 tokens and global utilities (`app/globals.css`).
- [x] Establish typography and color primitives via `@theme`.
- [x] Create common CTA button style pattern and shared section typography utilities.

## Molecules
- [x] Build responsive header navigation with desktop dropdowns and mobile drawer.
- [x] Build reusable footer and footer CTA banner.
- [x] Build reusable card/list patterns for products, industries, and metrics.

## Sections
- [x] Homepage hero carousel (Swiper), hardware block, metrics, products, industries, install section.
- [x] Solution detail sections (hero, intro, key-factor cards).
- [x] Product detail sections (hero, overview, component/detail, tabs, slider, optional video).
- [x] Industry detail sections (hero, intro, devices, advantages cards).
- [x] Software page sections (hero, intro, feature cards).
- [x] Contact page sections (banner, info, form, support box).

## Pages and Routes
- [x] Implement canonical pages and dynamic routes in App Router.
- [x] Implement metadata generation via `generateMetadata` + shared helper.
- [x] Add route-level loading and not-found states for dynamic routes.
- [x] Add redirects from legacy URL shapes to canonical live shapes.

## Data / Types / Validation
- [x] Add typed content contracts (`SolutionContent`, `ProductContent`, `IndustryContent`, `SeoMeta`, `PolicyPageContent`).
- [x] Add Zod parsing for normalized content datasets.
- [x] Add contact form schema and result contract.

## SEO / Performance / Platform
- [x] Add GTM via `next/script` and noscript fallback in root layout.
- [x] Add sitemap and robots routes with canonical + noindex-aware output.
- [x] Use `next/image` with fixed rendering containers to reduce CLS.

## Form Migration
- [x] Implement Server Action proxy (`app/contact/actions.ts`) to external endpoint.
- [x] Connect client form to Server Action with validation feedback.

## Verification
- [x] Run `npm run typecheck`.
- [x] Run `npm run build`.
- [x] Resolve any remaining compile/runtime issues.

## Notes
- Final production verification executed with `NODE_ENV=production`.
