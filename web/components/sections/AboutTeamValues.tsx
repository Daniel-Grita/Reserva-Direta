'use client';

import { useState } from 'react';
import { aboutPage } from '@/lib/constants';
import { useInView } from '@/lib/useInView';
import SectionHeader from '../ui/SectionHeader';
import ServiceIcon, { type IconName } from '../ui/ServiceIcon';

type AuthorKey = 'joao' | 'sebastiao' | 'equipa';

const VALUE_AUTHOR: Record<string, AuthorKey> = {
  Transparência: 'joao',
  Resultados: 'sebastiao',
  Parceria: 'equipa',
};

const FOUNDER_KEY: Record<string, AuthorKey> = {
  'João Brazão': 'joao',
  'Sebastião Gomes': 'sebastiao',
};

export default function AboutTeamValues() {
  const [ref, inView] = useInView<HTMLElement>();
  const { team, values } = aboutPage;
  const [hovered, setHovered] = useState<AuthorKey | null>(null);

  const isFounderActive = (founder: AuthorKey) =>
    hovered !== null && (hovered === founder || hovered === 'equipa');

  return (
    <section ref={ref} data-reveal={inView} className="bg-cream py-section-y-lg">
      <div className="section-container">
        <SectionHeader
          label={team.label}
          heading={team.heading}
          intro="Dois fundadores, três princípios. É isto que nos guia em cada projeto."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="reveal-stagger lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
            {team.members.map((m) => {
              const key = FOUNDER_KEY[m.name];
              const active = isFounderActive(key);
              return (
                <figure key={m.name} className="group">
                  <div
                    className={[
                      'relative aspect-[4/5] rounded-card-lg overflow-hidden bg-n-200 transition-all duration-slow',
                      active
                        ? 'ring-2 ring-orange ring-offset-4 ring-offset-cream -translate-y-1 shadow-card-hover'
                        : 'shadow-card',
                    ].join(' ')}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={m.photo.src}
                      alt={m.photo.alt}
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                      className="w-full h-full object-cover transition-transform duration-slow group-hover:scale-[1.03]"
                    />
                  </div>
                  <figcaption className="mt-5">
                    <div className="text-display-xs font-display text-navy">{m.name}</div>
                    <div className="text-label font-body uppercase tracking-label text-orange-text mt-1">
                      {m.role}
                    </div>
                  </figcaption>
                </figure>
              );
            })}
          </div>

          <div className="reveal-stagger lg:col-span-7">
            <div className="text-label font-body uppercase tracking-label text-orange-text mb-8">
              {values.label}
            </div>

            <ol className="divide-y divide-navy/10 border-y border-navy/10">
              {values.items.map((v, i) => {
                const author = VALUE_AUTHOR[v.title];
                const active = hovered === author;
                return (
                  <li
                    key={v.title}
                    onMouseEnter={() => setHovered(author)}
                    onMouseLeave={() => setHovered(null)}
                    onFocus={() => setHovered(author)}
                    onBlur={() => setHovered(null)}
                    tabIndex={0}
                    className={[
                      'relative grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 py-7 lg:py-9 transition-colors duration-base cursor-default',
                      'focus:outline-none focus-visible:ring-2 focus-visible:ring-orange/60 focus-visible:rounded-card',
                    ].join(' ')}
                  >
                    <span
                      aria-hidden
                      className={[
                        'absolute left-0 top-0 bottom-0 w-[3px] bg-orange origin-top transition-transform duration-slow',
                        active ? 'scale-y-100' : 'scale-y-0',
                      ].join(' ')}
                    />
                    <div
                      className={[
                        'row-span-2 flex items-center justify-center w-14 h-14 rounded-card transition-colors duration-base',
                        active ? 'bg-orange text-white' : 'bg-navy/5 text-orange-text',
                      ].join(' ')}
                    >
                      <ServiceIcon name={v.icon as IconName} className="w-6 h-6" />
                    </div>

                    <div className="flex items-baseline gap-3 min-w-0">
                      <span className="text-label font-body font-bold text-navy/40 tabular-nums">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-card-title font-display text-navy">{v.title}</h3>
                    </div>

                    <p className="text-body-base font-body text-n-600 max-w-xl">
                      {v.description}
                    </p>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
