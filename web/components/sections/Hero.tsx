import Image from 'next/image';
import { hero } from '@/lib/constants';
import { withHighlight } from '@/lib/highlight';
import { LinkButton } from '../ui/Button';

export default function Hero() {
  return (
    <section className="bg-light-blue pt-[72px]">
      <div className="section-container-lg grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="hero-stagger space-y-6">
          <h1 className="text-display-md lg:text-display-lg font-display text-navy">
            {hero.heading}
          </h1>

          <p className="text-body-base font-body text-n-600 max-w-[26rem]">
            {withHighlight(hero.subtitle, 'reservas diretas')}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <LinkButton href={hero.cta1.href} variant="primary">
              {hero.cta1.label}
            </LinkButton>
            <LinkButton href={hero.cta2.href} variant="secondary">
              {hero.cta2.label}
            </LinkButton>
          </div>
        </div>

        <div className="hero-stagger relative w-full lg:max-w-md lg:mx-auto aspect-[4/3] md:aspect-[3/2] lg:aspect-square rounded-card-lg overflow-hidden bg-n-300 shadow-card-hover">
          <Image
            src="/hero/hero-bedroom.webp"
            alt={hero.mockupNote}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 480px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
