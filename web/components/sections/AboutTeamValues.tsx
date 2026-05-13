'use client';

import { aboutPage } from '@/lib/constants';
import { useInView } from '@/lib/useInView';
import SectionHeader from '../ui/SectionHeader';
import ServiceIcon, { type IconName } from '../ui/ServiceIcon';

export default function AboutTeamValues() {
  const [ref, inView] = useInView<HTMLElement>();
  const { team, values } = aboutPage;

  return (
    <section ref={ref} data-reveal={inView} className="bg-cream py-section-y-lg">
      <div className="section-container">
        <SectionHeader
          label={team.label}
          heading={team.heading}
          intro="Dois fundadores, três princípios. É isto que nos guia em cada projeto."
          align="center"
        />

        <div className="reveal-stagger grid grid-cols-2 gap-8 max-w-[860px] mx-auto mt-12">
          {team.members.map((m) => (
            <figure key={m.name} className="group">
              <div className="relative aspect-[5/4] rounded-card-lg bg-white p-2 shadow-card transition-[transform,box-shadow] duration-slow group-hover:-translate-y-1 group-hover:shadow-card-hover">
                <div className="relative w-full h-full rounded-card overflow-hidden bg-n-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={m.photo.src}
                    alt={m.photo.alt}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-slow group-hover:scale-[1.03]"
                  />
                </div>
              </div>
              <figcaption className="mt-4 text-center">
                <div className="text-display-xs font-display text-navy">{m.name}</div>
                <div className="text-label font-body uppercase tracking-label text-orange-text mt-1">
                  {m.role}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {values.items.map((v) => (
            <div
              key={v.title}
              className="bg-white rounded-card p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-[transform,box-shadow] duration-slow flex flex-col gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-card bg-navy/5 text-orange-text shrink-0">
                  <ServiceIcon name={v.icon as IconName} className="w-6 h-6" />
                </div>
                <h3 className="text-card-title font-display text-navy">{v.title}</h3>
              </div>
              <p className="text-body-base font-body text-n-600">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
