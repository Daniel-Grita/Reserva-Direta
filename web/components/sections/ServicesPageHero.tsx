'use client';

import { servicesPage } from '@/lib/constants';
import { useInView } from '@/lib/useInView';

export default function ServicesPageHero() {
  const [ref, inView] = useInView<HTMLElement>();
  const { eyebrow, heading, intro } = servicesPage.hero;

  return (
    <section ref={ref} data-reveal={inView} className="bg-cream pt-[112px] pb-section-y">
      <div className="section-container">
        <div className="reveal-up max-w-3xl mx-auto text-center space-y-5">
          <p className="text-body-base font-body text-n-600">{eyebrow}</p>
          <h1 className="text-display-md lg:text-display-lg font-display text-navy text-balance">
            {heading}
          </h1>
          <p className="text-body-base font-body text-n-600 max-w-2xl mx-auto">
            {intro}
          </p>
        </div>
      </div>
    </section>
  );
}
