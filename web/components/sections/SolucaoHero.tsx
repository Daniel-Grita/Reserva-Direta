'use client';

import { solucaoPage } from '@/lib/constants';
import { useInView } from '@/lib/useInView';
import BookingWidget from '../ui/BookingWidget';

export default function SolucaoHero() {
  const [ref, inView] = useInView<HTMLElement>();
  const { heading, image, tagline, intro } = solucaoPage.hero;

  return (
    <section ref={ref} data-reveal={inView} id="hero" className="bg-light-blue pt-24 lg:pt-28 pb-section-y-sm">
      <div className="section-container">
        <div className="reveal-up max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-display-md lg:text-display-lg font-display text-navy text-balance">
            {heading}
          </h1>

          <div className="relative max-w-4xl mx-auto">
            <div className="relative aspect-[16/9] md:aspect-[21/9] w-full rounded-card-lg overflow-hidden bg-n-300 shadow-card-hover">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.src}
                alt={image.alt}
                loading="eager"
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="hero-photo w-full h-full object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy/55 via-navy/15 to-transparent pointer-events-none"
              />
            </div>

            <div className="hero-widget mt-6 md:mt-0 md:absolute md:left-1/2 md:bottom-0 md:-translate-x-1/2 md:translate-y-1/2 md:w-[min(640px,calc(100%-3rem))] z-10">
              <BookingWidget />
            </div>
          </div>

          {/* Reserve space for the widget overhang on desktop */}
          <div className="hidden md:block md:h-14 lg:h-16" aria-hidden />

          <p className="text-display-xs font-display text-orange-text">{tagline}</p>

          <p className="text-body-base font-body text-n-600 max-w-3xl mx-auto text-balance">{intro}</p>
        </div>
      </div>
    </section>
  );
}
