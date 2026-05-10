import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import AboutHero from '@/components/sections/AboutHero';
import AboutTeamValues from '@/components/sections/AboutTeamValues';
import ContactCTA from '@/components/sections/ContactCTA';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Quem Somos — Reserva Direta',
  description:
    'Conhece a equipa por trás da Reserva Direta. Ajudamos pequenos alojamentos em Portugal a ganhar independência das OTAs.',
};

export default function QuemSomosPage() {
  return (
    <main id="main" tabIndex={-1} className="w-full focus:outline-none">
      <Breadcrumbs items={[{ name: 'Quem Somos', url: '/quem-somos' }]} />
      <Navbar />
      <AboutHero />
      <AboutTeamValues />
      <ContactCTA />
      <Footer />
    </main>
  );
}
