import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import ContactCTA from '@/components/sections/ContactCTA';
import Footer from '@/components/Footer';
import ServiceDetailHero from '@/components/sections/ServiceDetailHero';
import ServiceIncluded from '@/components/sections/ServiceIncluded';
import ServiceProcess from '@/components/sections/ServiceProcess';
import FAQ from '@/components/sections/FAQ';
import { serviceDetails, servicesPage, type ServiceSlug } from '@/lib/constants';

const slugs = Object.keys(serviceDetails) as ServiceSlug[];

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const detail = serviceDetails[slug as ServiceSlug];
  if (!detail) return { title: 'Serviço — Reserva Direta' };
  return {
    title: `${detail.heading} — Reserva Direta`,
    description: detail.intro,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = serviceDetails[slug as ServiceSlug];
  if (!detail) notFound();

  const card = servicesPage.cards.find((c) => c.slug === slug);

  return (
    <main id="main" tabIndex={-1} className="w-full focus:outline-none">
      <Navbar />
      <ServiceDetailHero detail={detail} image={card?.image} />
      <ServiceIncluded included={detail.included} />
      <ServiceProcess process={detail.process} />
      <FAQ
        items={detail.faq}
        label="PERGUNTAS FREQUENTES"
        heading="Perguntas frequentes"
        intro={undefined}
        showToggleAll={false}
        idPrefix={`service-faq-${slug}`}
      />
      <ContactCTA />
      <Footer />
    </main>
  );
}
