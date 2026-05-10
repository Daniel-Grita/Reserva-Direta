'use client';

import { servicesPage } from '@/lib/constants';
import { useInView } from '@/lib/useInView';

export default function ServicesPageHero() {
  const [ref, inView] = useInView<HTMLElement>();
  const { eyebrow, heading, intro } = servicesPage.hero;
  const tags = servicesPage.cards.map((c) => ({ slug: c.slug, label: c.title.split(' ')[0] }));

  return (
    <section
      ref={ref}
      data-reveal={inView}
      className="relative overflow-hidden bg-cream pt-[112px] pb-section-y"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 w-[36rem] h-[36rem] rounded-full bg-orange/10 blur-3xl"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 w-[32rem] h-[32rem] rounded-full bg-navy/5 blur-3xl"
      />

      <div className="section-container relative">
        <div className="reveal-up max-w-3xl mx-auto text-center space-y-6">
          <p className="text-label font-body uppercase tracking-label text-orange-text">
            {eyebrow}
          </p>
          <h1 className="text-display-md lg:text-display-lg font-display text-navy text-balance">
            {heading}
          </h1>
          <p className="text-body-base font-body text-n-600 max-w-2xl mx-auto">
            {intro}
          </p>

          <ul className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {tags.map((t) => (
              <li key={t.slug}>
                <a
                  href={`#${t.slug}`}
                  className="group inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white/70 backdrop-blur-sm px-4 py-2 text-body-sm font-body text-navy transition-all duration-base hover:border-orange hover:bg-white hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange/60"
                >
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 rounded-full bg-orange transition-transform duration-base group-hover:scale-150"
                  />
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
