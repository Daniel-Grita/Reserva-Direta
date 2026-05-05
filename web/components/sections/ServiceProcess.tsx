'use client';

import { useInView } from '@/lib/useInView';

type Props = {
  process: {
    heading: string;
    steps: readonly { number: string; title: string; description: string }[];
  };
};

export default function ServiceProcess({ process }: Props) {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section ref={ref} data-reveal={inView} className="bg-cream py-section-y">
      <div className="section-container">
        <h2 className="reveal-up text-display-md lg:text-display-lg font-display text-navy mb-12">
          {process.heading}
        </h2>

        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.steps.map((step) => (
            <div key={step.number} className="space-y-3">
              <div className="w-11 h-11 rounded-full bg-navy text-white flex items-center justify-center text-button font-body font-bold">
                {step.number}
              </div>
              <h3 className="text-display-xs font-display text-navy">{step.title}</h3>
              <p className="text-body-sm font-body text-n-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
