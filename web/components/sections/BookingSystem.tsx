'use client';

import { bookingSystem } from '@/lib/constants';
import { LinkButton } from '../ui/Button';
import { useInView } from '@/lib/useInView';
import { withHighlight } from '@/lib/highlight';
import BookingWidget from '../ui/BookingWidget';

export default function BookingSystem() {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section ref={ref} data-reveal={inView} className="bg-light-blue py-section-y">
      <div className="section-container">
        <div className="reveal-stagger">
          <div className="mb-10">
            <div className="text-label font-body uppercase tracking-label text-orange-text mb-4">
              {bookingSystem.label}
            </div>
            <h2 className="text-display-md lg:text-display-lg font-display text-navy mb-6 text-balance">
              {bookingSystem.heading}
            </h2>
            <p className="text-body-base font-body text-n-600">
              {withHighlight('Um motor de reservas profissional, integrado no seu site — sem intermediários, sem comissões.', 'sem intermediários')}
            </p>
          </div>

          <BookingWidget />

          <div className="mt-10">
            <LinkButton href="/a-nossa-solucao" variant="primary">
              Ver como funciona
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
