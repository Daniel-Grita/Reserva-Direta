'use client';

import { useInView } from '@/lib/useInView';
import SectionHeader from '../ui/SectionHeader';
import ServiceIcon from '../ui/ServiceIcon';

type Props = {
  included: {
    heading: string;
    items: readonly string[];
  };
};

export default function ServiceIncluded({ included }: Props) {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section ref={ref} data-reveal={inView} className="bg-white py-section-y">
      <div className="section-container">
        <div className="reveal-up">
          <SectionHeader label="INCLUI" heading={included.heading} />
        </div>

        <ul className="reveal-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {included.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-4 bg-light-blue rounded-card-lg p-5 lg:p-6 transition-all duration-slow hover:-translate-y-1 hover:shadow-card-hover"
            >
              <span
                aria-hidden
                className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-card bg-white text-orange-text"
              >
                <ServiceIcon name="check" className="w-5 h-5" />
              </span>
              <span className="text-body-base font-body text-navy leading-snug">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
