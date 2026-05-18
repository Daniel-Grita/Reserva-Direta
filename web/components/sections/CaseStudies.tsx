'use client';

import { caseStudies } from '@/lib/constants';
import SectionHeader from '../ui/SectionHeader';
import { LinkButton } from '../ui/Button';
import { useInView } from '@/lib/useInView';

export default function CaseStudies() {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section ref={ref} data-reveal={inView} id="casos-estudo" className="bg-light-blue py-section-y">
      <div className="section-container">
        <div className="reveal-up">
          <SectionHeader
            label={caseStudies.label}
            heading={caseStudies.heading}
            intro={<>Trabalhamos com propriedades de diferentes dimensões por todo o país.<br />Aqui estão alguns exemplos do que implementámos.</>}
          />
        </div>

        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {caseStudies.cases.map((caseItem) => (
            <article
              key={caseItem.title}
              className="group bg-white rounded-card overflow-hidden shadow-card sm:hover:shadow-card-hover sm:hover:-translate-y-1 sm:hover:scale-[1.02] transition-[transform,box-shadow] duration-slow ease-in-out flex flex-col"
            >
              <div className="relative aspect-[4/3] bg-n-200 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={caseItem.image}
                  alt={caseItem.title}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full h-full object-cover transition-transform duration-slow sm:group-hover:scale-[1.03]"
                />
                <span className="absolute top-3 left-3 inline-flex items-center bg-white/95 backdrop-blur-sm text-navy text-label font-body font-bold uppercase tracking-label px-3 py-1.5 rounded-card">
                  {caseItem.category}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-card-title font-display font-bold text-navy mb-2 leading-tight">
                  {caseItem.title}
                </h3>
                <p className="text-body-sm font-body text-n-600 flex-1">
                  {caseItem.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal-up">
          <LinkButton href="/casos-de-uso" variant="dark">
            Ver todos os casos de uso
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
