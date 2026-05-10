# Reserva Direta — TODO

Backlog of known fixes and follow-ups. Group by priority. Tick as you go.

---

## P0 — Blockers

- [x] **Mobile navigation.** Hamburger button (md:hidden) + drop-down panel below the 72px bar containing the four navItems and the "Agendar Reunião" CTA. `aria-expanded` / `aria-controls`, Escape closes + returns focus to toggle, click-outside closes, body scroll locked while open, panel auto-closes on `pathname` change. Desktop CTA bumped from `sm:` → `md:` so the 640–768 dead zone is gone.

## P1 — High impact

- [x] **`/a-nossa-solucao` repeats the home BookingSystem.** Home `BookingSystem` demoted to a 1-screen teaser (heading + mockup + CTA → `/a-nossa-solucao`). Stats + 6 feature cards live exclusively on the sub-page (`SolucaoStats`, `SolucaoFeatures`).
- [x] **Section pattern monotony.** Declared resolved.
- [x] **Real case-study content.** Declared resolved.
- [x] **Real blog content.** Declared resolved.
- [x] **Real images for new pages.** Declared resolved.
- [x] **`NEXT_PUBLIC_FORMSPREE_ID`** env var — wired in `.env.local` (`mvzloknk`). Also added to Vercel.

## P2 — Polish

- [x] **Form a11y + recovery.** `aria-live="polite"` status region, email fallback (`agenciareservadireta@gmail.com`) in error state, `+351 XXX XXX XXX` mask on phone, orange asterisks on all four required labels, `comentario` now required, Formspree `_gotcha` honeypot. WhatsApp fallback deferred — no number available.
- [~] **CTAs differentiation.** BookingSystem CTA → `/a-nossa-solucao`. Service cards → `/servicos/[slug]` ✓. "Agendar Reunião" → Calendly still blocked: no Calendly URL.
- [x] **Footer Navegação column missing pages.** Added `/a-nossa-solucao` (`/quem-somos` was already present).
- [x] **Footer "Lisboa, Portugal" link is `href="#"`** (dead). Now rendered as plain text via a `text[]` field on the Contacto column.
- [x] **Orange label contrast (systemic).** Introduced `--color-orange-text: #A8580A` (4.95:1 on white, passes WCAG AA). Renamed all `text-orange` → `text-orange-text` site-wide (18 files, includes section eyebrows, navbar active state, link CTAs, checkmark icons, FAQ accordion glyphs, stat cards). Brand `--color-orange` (`bg-orange`) preserved for fills, button surfaces, focus rings, and the `.text-highlight` decorative sweep.
- [x] **Add tooltips/glossary for jargon.** Shipped via `Tooltip` + `lib/glossary.ts` `withGlossary()` helper (PCI Compliant, Channel Manager, OTAs, Premier Connectivity Partner, etc.).
- [x] **Human element before the form.** `FoundersIntro` strip inside `ContactCTA` above the form: João + Sebastião avatars, "respondem pessoalmente em 24 horas", direct mailto link.
- [x] **Card title hierarchy.** `Services.tsx` and `BlogPreview.tsx` card `h3`s bumped to `text-display-xs` (22px) to match CaseStudies cards.
- [x] **Two "Descobre mais…" CTAs.** BookingSystem CTA relabelled to "Falar connosco sobre reservas diretas" so it reads as a contact action distinct from Services' discovery CTA.
- [x] **Footer column titles.** Restored uppercase `tracking-label` on "Contacto" and "Navegação".
- [x] **Hero column balance at `lg`.** Added `shadow-card-hover` to the image.

## P3 — Nice to have

- [x] **`bookingSystem.heading` split via `<br />`** — collapsed to a single string with `text-balance` on the h2.
- [x] **BookingWidget mockup polish.** Check-In `26 Sex 2026` / Check-Out `30 Ter 2026` (PT day abbreviations, 4-night span).
- [x] **`focus-visible` ring on the FAQ trigger button.** Orange ring with white offset.
- [x] **Skip-to-content link in `layout.tsx`.** Targets `#main`; each page's existing `<main>` got `id="main"` + `tabIndex={-1}`.
- [x] **`text-display-xs` double duty** — added `--text-card-title: 19px` token. Card titles in Services/BlogPreview/CaseStudies/AboutValues/AboutTeam/SolucaoFeatures/ServicesPageGrid bumped to `text-card-title`; sub-headings keep `text-display-xs` (22px).
- [x] **Scroll-progress indicator on long sub-pages.** `ScrollProgress` (thin orange bar, top-fixed) wired on `/a-nossa-solucao`.
- [x] **Anchored TOC on long sub-pages.** `PageTOC` (fixed left rail, 2xl-only) wired on `/a-nossa-solucao` with 6 section anchors and active-section highlight.
- [x] **"Expand all" on FAQ.** Multi-open accordion with "Expandir todas / Recolher todas" toggle.
- [x] **`schema.org` markup.** `LocalBusiness` JSON-LD in `app/layout.tsx` (name, url, email, address, areaServed, sameAs socials).
- [x] **OG image set** via `app/opengraph-image.tsx` (1200×630 navy gradient + orange accent, generated with `next/og` `ImageResponse`). `metadata.openGraph` + Twitter card wired in `app/layout.tsx`.
- [x] **Navbar active-section indicator.** Added `useActiveSection` hook + orange underline.
- [x] **Hover translate timidity.** Bumped card hover translates from `-translate-y-0.5` → `-translate-y-1`.

---

## New pages

- [x] `/quem-somos` — about page (AboutHero, AboutTeam, AboutValues, ContactCTA, Footer). Team photos shipped.
- [x] `/servicos` — services overview page (ServicesPageHero, ServicesPageGrid).
- [x] `/a-nossa-solucao` — booking-engine deep dive (SolucaoHero, SolucaoStats, SolucaoSteps, SolucaoFeatures, SolucaoTrust).
- [x] `/casos-de-uso` — real client showcase (UseCasesGoogle 3-col grid + UseCasesBooking vertical stack), each ending in a `StatCard` with count-up stat (−€10 / 1–2 weeks) and `text-highlight` punchline. Uses real screenshots in `public/use-cases/` (compressed to ~280–390 KB).
- [x] `/servicos/[slug]` — 5 service detail pages (branding, website, marketing-digital, tecnologia, fidelizacao). Pattern: hero · what's included · how it works · FAQ · contact CTA.
- [ ] `/blog` — listing page (3-col grid).
- [ ] `/blog/[slug]` — article template.

---

## Phase 2

- [ ] **Storyblok CMS** for blog + case studies. (Two prior scaffolds removed — root-level on 2026-05-08, then a partial `web/` wiring on 2026-05-08. Phase 2 will start fresh.)
- [ ] **Custom domain** on Vercel.
- [ ] **Analytics** (Vercel Analytics or GA).
- [x] **Connect to GitHub.** Repo: `github.com/Daniel-Grita/Reserva-Directa`.
- [x] **Vercel deployment.** Auto-deploys on push to `main`.

---

**Last updated:** 2026-05-08
