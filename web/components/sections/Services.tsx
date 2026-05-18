'use client';

import Link from 'next/link';
import { services } from '@/lib/constants';
import SectionHeader from '../ui/SectionHeader';
import ServiceIcon from '../ui/ServiceIcon';
import { useInView } from '@/lib/useInView';

export default function Services() {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section ref={ref} data-reveal={inView} id="servicos" className="bg-navy sm:bg-cream py-section-y">
      <div className="section-container">
        <div className="reveal-up sm:hidden max-w-3xl mb-16">
          <div className="text-label font-body uppercase tracking-label mb-4 text-orange">
            {services.heading}
          </div>
          <h2 className="text-display-md font-display text-white mb-6">
            {services.label}
          </h2>
          <p className="text-body-base font-body text-white/70">
            {services.intro}
          </p>
        </div>

        <div className="reveal-up hidden sm:block">
          <SectionHeader
            label={services.label}
            heading={<>Tudo o que precisa para<br />crescer online</>}
            intro={<>Cada serviço funciona de forma independente, ou em conjunto para resultados máximos.<br /> Escolha o que faz sentido para o seu alojamento.</>}
          />
        </div>

        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.cards.map((card) => (
            <div
              key={card.slug}
              className="bg-white border border-n-200 rounded-card p-6 shadow-card sm:hover:shadow-card-hover sm:hover:-translate-y-1 sm:hover:scale-[1.02] transition-[transform,box-shadow] duration-slow ease-in-out flex flex-col"
            >
              <div className="w-10 h-10 rounded-card bg-navy/10 sm:bg-cream flex items-center justify-center mb-4 text-navy">
                <ServiceIcon name={card.icon} className="w-5 h-5" />
              </div>
              <h3 className="text-card-title font-display text-navy mb-2 leading-tight">
                {card.title}
              </h3>
              <p className="text-body-sm font-body text-n-600 flex-1">
                {card.description}
              </p>
            </div>
          ))}

          <Link
            href="/servicos"
            className="group bg-orange sm:bg-navy rounded-card p-6 shadow-cta sm:shadow-card sm:hover:shadow-card-hover sm:hover:-translate-y-1 sm:hover:scale-[1.02] transition-[transform,box-shadow] duration-slow ease-in-out flex flex-col justify-between min-h-[180px]"
          >
            <div className="w-10 h-10 rounded-card bg-navy/10 sm:bg-orange/15 flex items-center justify-center mb-4 text-navy sm:text-orange-text">
              <ArrowRightIcon />
            </div>
            <div>
              <h3 className="text-card-title font-display text-navy sm:text-white mb-2 leading-tight">
                Descobre mais sobre os nossos serviços
              </h3>
              <span className="text-button font-body font-bold text-navy sm:text-orange inline-flex items-center gap-1.5 sm:group-hover:gap-2.5 transition-[gap] duration-base">
                Ver todos
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ArrowRightIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
