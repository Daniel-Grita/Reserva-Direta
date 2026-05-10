import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import UseCasesGoogle from '@/components/sections/UseCasesGoogle';
import UseCasesBooking from '@/components/sections/UseCasesBooking';
import ContactCTA from '@/components/sections/ContactCTA';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Casos Reais — Reserva Direta',
  description:
    'Propriedades reais com motor de reservas próprio e presença no Google configurados pela Reserva Direta. Veja exemplos reais de resultados.',
};

export default function CasosDeUsoPage() {
  return (
    <main id="main" tabIndex={-1} className="w-full focus:outline-none">
      <Breadcrumbs items={[{ name: 'Casos Reais', url: '/casos-de-uso' }]} />
      <Navbar />
      <UseCasesGoogle />
      <UseCasesBooking />
      <ContactCTA />
      <Footer />
    </main>
  );
}
