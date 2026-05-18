'use client';

import { aboutPage } from '@/lib/constants';
import { useInView } from '@/lib/useInView';
import SectionHeader from '../ui/SectionHeader';
import ServiceIcon, { type IconName } from '../ui/ServiceIcon';
import FounderCard from '../ui/FounderCard';

export default function AboutTeamValues() {
  const [ref, inView] = useInView<HTMLElement>();
  const { team, values } = aboutPage;

  return (
    <section ref={ref} data-reveal={inView} className="bg-cream py-section-y-lg">
      <div className="section-container">
        {/* Desktop only: section header + founder photos */}
        <div className="hidden sm:block">
          <SectionHeader
            label={team.label}
            heading={team.heading}
            intro="Dois fundadores, três princípios. É isto que nos guia em cada projeto."
            align="center"
          />
          <div className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[860px] mx-auto mt-12">
            {team.members.map((m) => (
              <FounderCard key={m.name} member={m} captionCenter />
            ))}
          </div>
        </div>

        {/* Values — always shown */}
        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-6 sm:mt-16">
          {values.items.map((v) => (
            <div
              key={v.title}
              className="bg-white rounded-card p-8 shadow-card sm:hover:shadow-card-hover sm:hover:-translate-y-1 sm:hover:scale-[1.02] transition-[transform,box-shadow] duration-slow ease-in-out flex flex-col gap-4"
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
