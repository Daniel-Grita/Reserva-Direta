import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LinkButton } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Página não encontrada — Reserva Direta',
  description: 'A página que procura não existe ou foi movida.',
};

export default function NotFound() {
  return (
    <main id="main" tabIndex={-1} className="w-full focus:outline-none">
      <Navbar />
      <section className="bg-light-blue pt-24 sm:pt-[112px] pb-section-y">
        <div className="section-container max-w-2xl text-center space-y-6">
          <p className="text-label font-body uppercase tracking-label text-orange-text">
            Erro 404
          </p>
          <h1 className="text-display-md lg:text-display-lg font-display text-navy text-balance">
            Esta página fugiu para uma OTA.
          </h1>
          <p className="text-body-base font-body text-n-600 max-w-md mx-auto">
            Não conseguimos encontrar o que procura. Provavelmente foi movida ou nunca existiu.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center">
            <LinkButton href="/" variant="primary">Voltar ao início</LinkButton>
            <LinkButton href="/#contacto" variant="secondary">Falar connosco</LinkButton>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
