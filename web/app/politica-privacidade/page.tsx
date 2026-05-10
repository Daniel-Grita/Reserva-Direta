import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { privacyPolicy } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Política de Privacidade — Reserva Direta',
  description:
    'Como a Reserva Direta recolhe, utiliza e protege os seus dados pessoais ao abrigo do RGPD.',
};

export default function PoliticaPrivacidadePage() {
  return (
    <main id="main" tabIndex={-1} className="w-full focus:outline-none">
      <Breadcrumbs items={[{ name: 'Política de Privacidade', url: '/politica-privacidade' }]} />
      <Navbar />
      <section className="bg-white pt-[112px] pb-section-y">
        <div className="section-container max-w-3xl">
          <p className="text-label font-body uppercase tracking-label text-orange-text mb-4">
            Privacidade
          </p>
          <h1 className="text-display-md lg:text-display-lg font-display text-navy mb-6">
            Política de Privacidade
          </h1>
          <p className="text-body-sm font-body text-n-600 mb-12">
            Última atualização: {privacyPolicy.lastUpdated}
          </p>

          <div className="space-y-10">
            {privacyPolicy.sections.map((section) => (
              <article key={section.heading}>
                <h2 className="text-display-xs font-display text-navy mb-3">
                  {section.heading}
                </h2>
                <div className="space-y-3">
                  {section.paragraphs.map((p, i) => (
                    <p key={i} className="text-body-base font-body text-n-600">
                      {p}
                    </p>
                  ))}
                  {section.list && (
                    <ul className="list-disc pl-5 space-y-2 text-body-base font-body text-n-600">
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
