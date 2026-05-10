import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import SolucaoHero from '@/components/sections/SolucaoHero';
import SolucaoStats from '@/components/sections/SolucaoStats';
import SolucaoSteps from '@/components/sections/SolucaoSteps';
import SolucaoFeatures from '@/components/sections/SolucaoFeatures';
import SolucaoTrust from '@/components/sections/SolucaoTrust';
import ContactCTA from '@/components/sections/ContactCTA';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ui/ScrollProgress';
import PageTOC, { type TOCItem } from '@/components/ui/PageTOC';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'A Nossa Solução — Reserva Direta',
  description:
    'O motor de reservas CultBooking integrado no seu website. Apenas 5% por reserva, sem mensalidade.',
};

const tocItems: readonly TOCItem[] = [
  { id: 'hero', label: 'Visão geral' },
  { id: 'resultados', label: 'Resultados' },
  { id: 'como-funciona', label: 'Como funciona' },
  { id: 'funcionalidades', label: 'Funcionalidades' },
  { id: 'confianca', label: 'Tecnologia' },
  { id: 'contacto', label: 'Falar connosco' },
];

export default function ANossaSolucaoPage() {
  return (
    <main id="main" tabIndex={-1} className="w-full focus:outline-none">
      <Breadcrumbs items={[{ name: 'A Nossa Solução', url: '/a-nossa-solucao' }]} />
      <ScrollProgress />
      <Navbar />
      <PageTOC items={tocItems} />
      <SolucaoHero />
      <SolucaoStats />
      <SolucaoSteps />
      <SolucaoFeatures />
      <SolucaoTrust />
      <ContactCTA />
      <Footer />
    </main>
  );
}
