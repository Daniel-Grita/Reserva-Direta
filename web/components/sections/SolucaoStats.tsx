'use client';

import { bookingSystem } from '@/lib/constants';
import { useInView } from '@/lib/useInView';
import StatTile from '../ui/StatTile';

export default function SolucaoStats() {
  const [ref, inView] = useInView<HTMLElement>();
  return (
    <section ref={ref} data-reveal={inView} className="bg-white py-section-y">
      <div className="section-container">
        <div className="reveal-stagger grid grid-cols-2 lg:grid-cols-4 gap-8">
          {bookingSystem.trustBadges.map((badge, i) => (
            <StatTile key={i} stat={badge} run={inView} index={i} startDelayBase={500} />
          ))}
        </div>
      </div>
    </section>
  );
}
