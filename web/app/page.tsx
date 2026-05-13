import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import BookingSystem from '@/components/sections/BookingSystem';
import Services from '@/components/sections/Services';
import HowItWorks from '@/components/sections/HowItWorks';
import CaseStudies from '@/components/sections/CaseStudies';
import FAQ from '@/components/sections/FAQ';
import BlogPreview from '@/components/sections/BlogPreview';
import ContactCTA from '@/components/sections/ContactCTA';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Reserva Direta — Tecnologia para Alojamentos',
  description:
    'Branding, website, marketing digital, tecnologia para reservas e consultoria. Tudo o que o seu alojamento precisa para crescer online e ganhar independência das OTAs.',
};

export default function Home() {
  return (
    <main id="main" tabIndex={-1} className="w-full focus:outline-none">
      <Breadcrumbs items={[{ name: 'Home', url: '/' }]} />
      <Navbar />
      <Hero />
      <Problem />
      <BookingSystem />
      <Services />
      <HowItWorks />
      <CaseStudies />
      <FAQ />
      <BlogPreview />
      <ContactCTA />
      <Footer />
    </main>
  );
}