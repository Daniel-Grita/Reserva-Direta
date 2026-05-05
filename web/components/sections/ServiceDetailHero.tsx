'use client';

import { LinkButton } from '../ui/Button';
import { useInView } from '@/lib/useInView';

type Props = {
  detail: {
    eyebrow: string;
    heading: string;
    intro: string;
  };
  image?: { src: string; alt: string };
};

export default function ServiceDetailHero({ detail, image }: Props) {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section ref={ref} data-reveal={inView} className="bg-light-blue pt-[112px] pb-section-y">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="reveal-up space-y-5">
            <p className="text-label font-body uppercase tracking-label text-orange-text">
              {detail.eyebrow}
            </p>
            <h1 className="text-display-md lg:text-display-lg font-display text-navy text-balance">
              {detail.heading}
            </h1>
            <p className="text-body-base font-body text-n-600">{detail.intro}</p>
            <div className="pt-2">
              <LinkButton href="#contacto" variant="primary">
                Falar connosco
              </LinkButton>
            </div>
          </div>

          {image && (
            <div className="reveal-up rounded-card-lg overflow-hidden shadow-card aspect-[4/3] bg-n-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
