import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import ContactCTA from '@/components/sections/ContactCTA';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { client } from '@/sanity/lib/client';
import { POSTS_QUERY, PostSummary, BLOG_FALLBACK_IMAGE, formatPublishedDate } from '@/sanity/lib/queries';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog — Reserva Direta',
  description:
    'Aprenda estratégias, guias práticos e insights do mercado de hotelaria para aumentar reservas diretas.',
};

export default async function BlogPage() {
  let posts: PostSummary[] = [];
  let error: string | null = null;

  try {
    posts = await client.fetch(POSTS_QUERY);
  } catch (err) {
    error = err instanceof Error ? err.message : 'Failed to fetch posts';
    console.error('Error fetching blog posts:', err);
  }

  return (
    <main id="main" tabIndex={-1} className="w-full focus:outline-none">
      <Breadcrumbs items={[{ name: 'Blog', url: '/blog' }]} />
      <Navbar />

      {/* Hero strip */}
      <section className="bg-navy pt-page-top pb-14">
        <div className="mx-auto max-w-[1200px] px-6 md:px-16 lg:px-[120px]">
          <span className="text-label tracking-label text-orange uppercase">Blog & Recursos</span>
          <h1 className="text-display-lg font-display text-white mt-3 mb-4 max-w-2xl leading-tight">
            Estratégias para quem<br />
            <span className="text-orange">quer ser direto</span>
          </h1>
          <p className="text-body-lg text-n-300 max-w-xl">
            Guias práticos e insights do mercado hoteleiro português.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="bg-cream">
        <div className="section-container">
          {error && (
            <div className="bg-white border border-n-200 rounded-card p-4 mb-8">
              <p className="text-body-sm text-n-600">
                Não foi possível carregar os artigos. Tente novamente mais tarde.
              </p>
            </div>
          )}

          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-display-xs font-display text-navy mb-3">Em breve</p>
              <p className="text-body text-n-600 max-w-sm mx-auto">
                Estamos a preparar artigos e guias práticos. Volte em breve.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link key={post._id} href={`/blog/${post.slug.current}`} className="group">
                  <article className="h-full bg-white rounded-card overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-[transform,box-shadow] duration-slow flex flex-col">
                    <div className="w-full aspect-[16/9] bg-n-300 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.imageUrl ?? BLOG_FALLBACK_IMAGE}
                        alt={post.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-slow"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      {post.publishedAt && (
                        <p className="text-label tracking-label text-orange-text uppercase mb-3">
                          {formatPublishedDate(post.publishedAt)}
                        </p>
                      )}
                      <h2 className="text-display-xs font-display text-navy mb-4 leading-snug flex-1 group-hover:text-n-600 transition-colors">
                        {post.title}
                      </h2>
                      <span className="text-button font-bold text-navy group-hover:text-orange-text transition-colors">
                        Ler artigo →
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
}
