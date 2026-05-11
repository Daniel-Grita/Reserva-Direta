import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import ServicesPageHero from '@/components/sections/ServicesPageHero';
import ServicesPageSections from '@/components/sections/ServicesPageSections';
import ContactCTA from '@/components/sections/ContactCTA';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Serviços — Reserva Direta',
  description:
    'Branding, website, marketing digital, tecnologia para reservas e consultoria. Tudo o que o seu alojamento precisa para crescer online.',
};

export default function ServicosPage() {
  return (
    <main id="main" tabIndex={-1} className="w-full focus:outline-none">
      <Breadcrumbs items={[{ name: 'Serviços', url: '/servicos' }]} />
      <Navbar />
      <ServicesPageHero />
      <ServicesPageSections />
      <ContactCTA />
      <Footer />
    </main>
  );
}
