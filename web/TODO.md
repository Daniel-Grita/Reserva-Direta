# Reserva Direta — TODO

Backlog of known fixes and follow-ups. Group by priority. Tick as you go.

---

## P0 — Blockers

- [ ] **Mobile navigation is broken.** `Navbar.tsx` uses `hidden md:flex` for nav links and `hidden sm:inline-block` for the CTA, with no hamburger fallback. Below 768px users see only the logo. Add a Disclosure-pattern hamburger with `aria-expanded`, slide-down panel containing navItems + the "Agendar Reunião" CTA.

## P1 — High impact

- [ ] **`/a-nossa-solucao` repeats the home BookingSystem.** `SolucaoStats` reuses `bookingSystem.trustBadges`, `SolucaoFeatures` reuses `bookingSystem.features.cards`, `SolucaoSteps` reuses `bookingSystem.process.steps`. Demote home `BookingSystem` to a 1-screen teaser linking to `/a-nossa-solucao`; move stats + 6 feature cards exclusively to the sub-page.
- [ ] **Section pattern monotony.** Six sections (Services, AboutValues, SolucaoFeatures, BlogPreview, CaseStudies, ServicesPageGrid) all run the same icon-square-title-body recipe in `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`. Differentiate at least two with asymmetric/editorial layouts (e.g. AboutValues as a horizontal row of icon+text without tinted cards; SolucaoFeatures as a 2-col split with a featured first card; BlogPreview as featured article + 2 secondaries).
- [ ] **Real case-study content.** Replace the anonymous "Quinta no Norte / Apartamento Urbano / Hotel de Charme" titles + teaser copy with real per-property descriptions and metrics once the client provides them.
- [ ] **Real blog content.** Replace `picsum.photos` blog images and placeholder titles with actual articles when ready.
- [ ] **Real images for new pages.** Swap picsum/Unsplash placeholders in `servicesPage.cards[].image`, `solucaoPage.hero.image`, `aboutPage.hero.image` with real photos when client delivers.
- [x] **`NEXT_PUBLIC_FORMSPREE_ID`** env var — wired in `.env.local` (`mvzloknk`). Also added to Vercel.

## P2 — Polish

- [ ] **Form a11y + recovery is thin.** `ContactCTA.tsx` shows generic error with no fallback channel. Add `aria-live="polite"` on status region, surface email + WhatsApp fallback in the error state, mask `+351 ___ ___ ___` on the phone field, add visual asterisks on required fields, make `comentário` required, add a honeypot.
- [ ] **Multiple CTAs all collapse to `#contacto`.** Hero, BookingSystem, Services Descobre-mais, ServicesPageGrid Saber-mais, navbar Agendar Reunião all → same anchor. Differentiate intent: BookingSystem CTA → `/a-nossa-solucao#contacto`; Service "Saber mais" → eventual `/servicos/[slug]`; reserve "Agendar Reunião" for a real calendar link (Calendly).
- [ ] **Footer Navegação column missing pages.** Add `/quem-somos` and `/a-nossa-solucao` (currently absent).
- [ ] **Footer "Lisboa, Portugal" link is `href="#"`** (dead). Either remove the link wrapper or make it a real maps URL.
- [ ] **Add tooltips/glossary for jargon.** "PCI Compliant", "Channel Manager", "OTAs", "Premier Connectivity Partner" need translation for non-technical owners (Sofia persona).
- [ ] **No human element before the form.** Surface a face/name/phone/WhatsApp on the landing page before the contact section. Sofia's biggest fear is "another vendor that doesn't return calls".
- [x] **Card title hierarchy.** `Services.tsx` and `BlogPreview.tsx` card `h3`s bumped to `text-display-xs` (22px) to match CaseStudies cards.
- [x] **Two "Descobre mais…" CTAs.** BookingSystem CTA relabelled to "Falar connosco sobre reservas diretas" so it reads as a contact action distinct from Services' discovery CTA.
- [x] **Footer column titles.** Restored uppercase `tracking-label` on "Contacto" and "Navegação".
- [x] **Hero column balance at `lg`.** Added `shadow-card-hover` to the image.

## P3 — Nice to have

- [ ] **`bookingSystem.heading` split via `<br />`** is fragile on mobile and breaks `text-balance`. Use a CSS approach or non-breaking spaces instead.
- [ ] **BookingWidget mockup polish.** `DateField` shows `26 Sun 2026` for both check-in and check-out (same date) and `Sun` is in English on a PT site. Make check-out a later date and translate the day abbreviation.
- [ ] **No `focus-visible` ring on the FAQ trigger button.** Add one for keyboard users.
- [ ] **No skip-to-content link in `layout.tsx`.** Add one for screen-reader users.
- [ ] **`text-display-xs` (22px) double duty** as both card title and section sub-heading. Introduce a distinct token or bump cards down a step.
- [ ] **No scroll-progress indicator on long sub-pages** (`/a-nossa-solucao` is ~6 sections).
- [ ] **No anchored TOC on long sub-pages.**
- [ ] **No "expand all" on FAQ.**
- [ ] **`schema.org` markup missing.** Add `LocalBusiness` / `Service` JSON-LD for SEO.
- [ ] **OG image not set** in `layout.tsx`. Add for social sharing previews.
- [x] **Navbar active-section indicator.** Added `useActiveSection` hook + orange underline.
- [x] **Hover translate timidity.** Bumped card hover translates from `-translate-y-0.5` → `-translate-y-1`.

---

## New pages

- [x] `/quem-somos` — about page (AboutHero, AboutTeam, AboutValues, ContactCTA, Footer). Team photos shipped.
- [x] `/servicos` — services overview page (ServicesPageHero, ServicesPageGrid).
- [x] `/a-nossa-solucao` — booking-engine deep dive (SolucaoHero, SolucaoStats, SolucaoSteps, SolucaoFeatures, SolucaoTrust).
- [ ] `/servicos/[slug]` — 5 service detail pages (branding, website, marketing-digital, tecnologia, fidelizacao). Pattern: hero · what's included · how it works · pricing (if applicable) · FAQ · contact CTA.
- [ ] `/blog` — listing page (3-col grid).
- [ ] `/blog/[slug]` — article template.

---

## Phase 2

- [ ] **Sanity CMS** for blog + case studies.
- [ ] **Custom domain** on Vercel.
- [ ] **Analytics** (Vercel Analytics or GA).
- [x] **Connect to GitHub.** Repo: `github.com/Daniel-Grita/Reserva-Directa`.
- [x] **Vercel deployment.** Auto-deploys on push to `main`.

---

**Last updated:** 2026-04-30
