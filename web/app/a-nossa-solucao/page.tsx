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
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'A Nossa Solução — Reserva Direta',
  description:
    'O motor de reservas CultBooking integrado no seu website. Apenas 5% por reserva, sem mensalidade.',
};

export default function ANossaSolucaoPage() {
  return (
    <main id="main" tabIndex={-1} className="w-full focus:outline-none">
      <Breadcrumbs items={[{ name: 'A Nossa Solução', url: '/a-nossa-solucao' }]} />
      <ScrollProgress />
      <Navbar />
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
