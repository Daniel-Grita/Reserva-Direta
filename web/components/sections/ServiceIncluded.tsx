'use client';

import { useInView } from '@/lib/useInView';
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
        <h2 className="reveal-up text-display-md lg:text-display-lg font-display text-navy mb-10">
          {included.heading}
        </h2>

        <ul className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
          {included.items.map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span aria-hidden className="flex-shrink-0 text-orange-text mt-0.5">
                <ServiceIcon name="check" className="w-5 h-5" />
              </span>
              <span className="text-body-base font-body text-n-900">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
