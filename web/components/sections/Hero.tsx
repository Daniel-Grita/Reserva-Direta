import Image from 'next/image';
import { hero } from '@/lib/constants';
import { withHighlight } from '@/lib/highlight';
import { LinkButton } from '../ui/Button';

const floatingImages = [
  {
    src: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=700&q=80',
    alt: 'Suite de hotel boutique com luz natural',
    classes: 'left-[7%] top-[24%] w-[295px] h-[385px] z-10',
  },
  {
    src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=700&q=80',
    alt: 'Quarto de alojamento local minimalista',
    classes: 'left-[11%] top-[62%] w-[335px] h-[265px] z-20',
  },
  {
    src: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=700&q=80',
    alt: 'Sala de estar moderna num alojamento turístico',
    classes: 'right-[7%] top-[20%] w-[355px] h-[275px] z-10',
  },
  {
    src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=700&q=80',
    alt: 'Quarto rústico com decoração contemporânea',
    classes: 'right-[15%] top-[44%] w-[275px] h-[355px] z-20',
  },
];

export default function Hero() {
  return (
    <section className="relative sm:min-h-[max(640px,88vh)] min-[1440px]:overflow-hidden bg-light-blue sm:flex sm:flex-col sm:pt-[72px] min-[1440px]:justify-center">
      <span
        aria-hidden
        className="hero-blob-a pointer-events-none absolute -top-32 -left-24 w-[36rem] h-[36rem] rounded-full bg-orange/8 blur-3xl"
      />
      <span
        aria-hidden
        className="hero-blob-b pointer-events-none absolute bottom-0 -right-24 w-[36rem] h-[36rem] rounded-full bg-navy/8 blur-3xl"
      />

      <div className="hero-floats hidden min-[1440px]:block absolute inset-0 pointer-events-none">
        {floatingImages.map((img, idx) => (
          <div
            key={img.src}
            className={`group absolute pointer-events-auto ${img.classes}`}
          >
            <FloatCard src={img.src} alt={img.alt} sizes="320px" priority={idx < 2} />
          </div>
        ))}
      </div>

      <div className="relative flex flex-col items-center gap-8 sm:gap-10 px-6 sm:px-8 md:px-16 lg:px-section-x pt-[80px] pb-10 sm:pt-10 sm:pb-16 min-[1440px]:pt-0 min-[1440px]:pb-0">
        <div className="hero-stagger max-w-3xl text-left sm:text-center space-y-6">
          <h1 className="text-display-md lg:text-display-lg font-display text-navy">
            <span className="block whitespace-pre-line">{hero.heading}</span>
            <span className="block mt-1 lg:mt-2">{hero.headingSecondary}</span>
          </h1>

          <p className="text-body-base font-body text-n-600 max-w-lg mx-auto">
            {withHighlight(hero.subtitle, 'reservas diretas')}
          </p>

          <div className="flex flex-row gap-3 pt-2 sm:justify-center">
            <LinkButton href={hero.cta1.href} variant="primary" className="flex-1 sm:flex-none">
              {hero.cta1.label}
            </LinkButton>
            <LinkButton href={hero.cta2.href} variant="secondary" className="flex-1 sm:flex-none">
              <span className="sm:hidden">{hero.cta2.labelMobile}</span>
              <span className="hidden sm:inline">{hero.cta2.label}</span>
            </LinkButton>
          </div>
        </div>

        <div className="hero-stack relative min-[1440px]:hidden w-full max-w-[760px] aspect-[2/1]">
          <div className="group absolute left-0 top-0 w-[58%] aspect-video z-10">
            <FloatCard src={floatingImages[0].src} alt={floatingImages[0].alt} sizes="(max-width: 768px) 340px, 460px" priority />
          </div>
          <div className="group absolute right-0 bottom-[24%] w-[58%] aspect-video z-20">
            <FloatCard src={floatingImages[2].src} alt={floatingImages[2].alt} sizes="(max-width: 768px) 340px, 460px" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatCard({ src, alt, sizes, priority }: { src: string; alt: string; sizes: string; priority?: boolean }) {
  return (
    <div className="w-full h-full rounded-card-lg bg-white p-2 shadow-card transition-[transform,box-shadow] duration-slow ease-in-out sm:group-hover:shadow-card-hover sm:group-hover:-translate-y-2 sm:group-hover:scale-[1.02]">
      <div className="relative w-full h-full rounded-card overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-slow sm:group-hover:scale-[1.04]"
        />
      </div>
    </div>
  );
}
