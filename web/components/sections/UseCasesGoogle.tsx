'use client';

import { useCasesPage } from '@/lib/constants';
import { useInView } from '@/lib/useInView';
import { useCountUp } from '@/lib/useCountUp';
import { withHighlight } from '@/lib/highlight';
import SectionHeader from '../ui/SectionHeader';
import UseCaseCard from './UseCaseCard';

export default function UseCasesGoogle() {
  const [ref, inView] = useInView<HTMLElement>();
  const { google, properties } = useCasesPage;
  const savings = useCountUp(10, inView, { duration: 1100, startDelay: 250 });

  return (
    <section ref={ref} data-reveal={inView} className="bg-n-150 pt-[112px] pb-section-y">
      <div className="section-container">

        <div className="reveal-up">
          <SectionHeader label={google.label} heading={google.heading} intro={google.intro} />
        </div>

        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {properties.map((p) => (
            <UseCaseCard
              key={p.label}
              label={p.label}
              image={p.googleImage}
              imageAlt={`Comparação de preços no Google — ${p.label}`}
            />
          ))}
        </div>

        <div className="reveal-up bg-white rounded-card-lg border border-n-200 shadow-card hover:shadow-card-hover transition-all duration-slow p-8 lg:p-10 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-10 items-center">
          <div className="md:border-r md:border-n-200 md:pr-10">
            <p className="text-display-lg font-display text-navy leading-none tabular-nums">
              <span className="text-orange">−</span>€{savings}
            </p>
            <p className="text-label font-body uppercase tracking-label text-orange mt-3">
              em média, por estadia
            </p>
          </div>
          <p className="text-body-base font-body text-n-600 leading-relaxed">
            {withHighlight(google.callout, 'o seu preço ganha')}
          </p>
        </div>

      </div>
    </section>
  );
}
