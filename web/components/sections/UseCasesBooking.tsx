'use client';

import { useCasesPage } from '@/lib/constants';
import { useInView } from '@/lib/useInView';
import { useCountUp } from '@/lib/useCountUp';
import { withHighlight } from '@/lib/highlight';
import SectionHeader from '../ui/SectionHeader';
import UseCaseCard from './UseCaseCard';

export default function UseCasesBooking() {
  const [ref, inView] = useInView<HTMLElement>();
  const { booking, properties } = useCasesPage;
  const weeks = useCountUp(2, inView, { duration: 1100, startDelay: 250 });

  return (
    <section ref={ref} data-reveal={inView} className="bg-white py-section-y">
      <div className="section-container">

        <div className="reveal-up">
          <SectionHeader label={booking.label} heading={booking.heading} intro={booking.intro} />
        </div>

        <div className="reveal-stagger flex flex-col gap-6 mb-12">
          {properties.map((p) => (
            <UseCaseCard
              key={p.label}
              label={p.label}
              image={p.bookingImage}
              imageAlt={`Motor de reservas — ${p.label}`}
            />
          ))}
        </div>

        <div className="reveal-up bg-white rounded-card-lg border border-n-200 shadow-card hover:shadow-card-hover transition-all duration-slow p-8 lg:p-10 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-10 items-center">
          <div className="md:border-r md:border-n-200 md:pr-10">
            <p className="text-display-lg font-display text-navy leading-none tabular-nums">
              {weeks >= 2 ? '1–2' : weeks}
            </p>
            <p className="text-label font-body uppercase tracking-label text-orange mt-3">
              semanas até estar online
            </p>
          </div>
          <p className="text-body-base font-body text-n-600 leading-relaxed">
            {withHighlight(booking.callout, '1 a 2 semanas')}
          </p>
        </div>

      </div>
    </section>
  );
}
